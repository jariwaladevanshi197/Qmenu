import bcrypt from 'bcryptjs';
import { serverError } from '../utils/http.js';
import jwt from 'jsonwebtoken';
import { prisma } from '../lib/prisma.js';
import { STAFF_ROLES, STAFF_PAGE_KEYS, ROLE_PAGE_DEFAULTS, effectiveStaffPermissions } from '../utils/permissions.js';

const signToken = (payload) =>
  jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '7d' });

// â”€â”€ Super admin: manage staff for any restaurant â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export const getStaffByRestro = async (req, res) => {
  try {
    const staff = await prisma.staff.findMany({
      where: { restroid: parseInt(req.params.restroid) },
      select: { id: true, fullname: true, username: true, role: true, status: true, createdAt: true },
      orderBy: { createdAt: 'desc' },
    });
    res.json(staff);
  } catch (e) { serverError(res, e); }
};

export const createStaff = async (req, res) => {
  try {
    const { restroid, fullname, username, password, role } = req.body;
    if (!fullname || !username || !password) return res.status(400).json({ error: 'All fields required' });

    // Check license limit
    const restro = await prisma.restaurant.findUnique({ where: { id: parseInt(restroid) }, select: { maxStaff: true } });
    const currentCount = await prisma.staff.count({ where: { restroid: parseInt(restroid) } });
    if (currentCount >= (restro?.maxStaff || 5)) {
      return res.status(403).json({ error: `Staff limit reached. Maximum ${restro?.maxStaff || 5} users allowed for this restaurant.` });
    }

    const exists = await prisma.staff.findUnique({ where: { username } });
    if (exists) return res.status(400).json({ error: 'Username already taken' });
    const hashed = await bcrypt.hash(password, 10);
    const staff = await prisma.staff.create({
      data: { restroid: parseInt(restroid), fullname, username, password: hashed, role: role || 'staff' },
    });
    res.status(201).json({ id: staff.id, fullname: staff.fullname, username: staff.username, role: staff.role });
  } catch (e) { serverError(res, e); }
};

export const updateStaff = async (req, res) => {
  try {
    const { fullname, role, status, password } = req.body;
    const data = { fullname, role, status: parseInt(status) };
    if (password) data.password = await bcrypt.hash(password, 10);
    const staff = await prisma.staff.update({
      where: { id: parseInt(req.params.id) },
      data,
      select: { id: true, fullname: true, username: true, role: true, status: true },
    });
    res.json(staff);
  } catch (e) { serverError(res, e); }
};

export const deleteStaff = async (req, res) => {
  try {
    await prisma.staff.delete({ where: { id: parseInt(req.params.id) } });
    res.json({ success: true });
  } catch (e) { serverError(res, e); }
};

// ── Restaurant admin: manage own staff ───────────────────────────────────────

// Validate role/permissions from the request. Returns an error message or null.
function validateStaffInput({ role, permissions }) {
  if (role !== undefined && !STAFF_ROLES.includes(role)) return 'Invalid role';
  if (permissions !== undefined && permissions !== null) {
    if (!Array.isArray(permissions)) return 'Permissions must be a list of pages';
    const unknown = permissions.find((p) => !STAFF_PAGE_KEYS.includes(p));
    if (unknown) return `Unknown page permission: ${unknown}`;
  }
  return null;
}

// Owners may grant anything. A staff member (with the 'staff' page) may only
// hand out pages they themselves have, so they can't escalate via a new account.
function canGrant(user, staffLike) {
  if (!user.staffId) return true;
  const own = user.staffPermissions || [];
  // The kitchen screen only confirms/completes orders, which 'orders' already allows.
  const has = (p) => own.includes(p) || (p === 'kitchen' && own.includes('orders'));
  return effectiveStaffPermissions(staffLike).every(has);
}

// Load a staff member of the caller's restaurant that the caller may manage.
// Returns { staff } or { status, error }.
async function findManageableStaff(req, id) {
  const staff = await prisma.staff.findUnique({ where: { id }, select: { id: true, restroid: true, role: true, permissions: true } });
  if (!staff || staff.restroid !== req.user.id) return { status: 404, error: 'Staff not found' };
  if (req.user.staffId === staff.id) return { status: 403, error: 'You cannot modify your own account' };
  if (!canGrant(req.user, staff)) return { status: 403, error: 'You cannot manage a staff member with more access than you' };
  return { staff };
}

export const getMyStaff = async (req, res) => {
  try {
    const [staff, restro] = await Promise.all([
      prisma.staff.findMany({
        where: { restroid: req.user.id },
        select: { id: true, fullname: true, username: true, role: true, status: true, permissions: true, createdAt: true },
        orderBy: { createdAt: 'desc' },
      }),
      prisma.restaurant.findUnique({ where: { id: req.user.id }, select: { maxStaff: true } }),
    ]);
    res.json({ staff, maxStaff: restro?.maxStaff || 5, used: staff.length });
  } catch (e) { serverError(res, e); }
};

export const createMyStaff = async (req, res) => {
  try {
    const { fullname, username, password, role, permissions } = req.body;
    if (!fullname || !username || !password) return res.status(400).json({ error: 'All fields required' });
    const invalid = validateStaffInput({ role, permissions });
    if (invalid) return res.status(400).json({ error: invalid });

    const staffRole = role || 'staff';
    // Use provided permissions or fall back to role defaults
    const resolvedPermissions = Array.isArray(permissions) ? permissions : ROLE_PAGE_DEFAULTS[staffRole] || [];
    if (!canGrant(req.user, { role: staffRole, permissions: resolvedPermissions })) {
      return res.status(403).json({ error: 'You cannot grant access to pages you do not have' });
    }

    // Check license limit
    const restro = await prisma.restaurant.findUnique({ where: { id: req.user.id }, select: { maxStaff: true } });
    const currentCount = await prisma.staff.count({ where: { restroid: req.user.id } });
    if (currentCount >= (restro?.maxStaff || 5)) {
      return res.status(403).json({ error: `Staff limit reached. Your plan allows maximum ${restro?.maxStaff || 5} staff users. Contact admin to increase your limit.` });
    }

    const exists = await prisma.staff.findUnique({ where: { username } });
    if (exists) return res.status(400).json({ error: 'Username already taken' });
    const hashed = await bcrypt.hash(password, 10);
    const staff = await prisma.staff.create({
      data: { restroid: req.user.id, fullname, username, password: hashed, role: staffRole, permissions: resolvedPermissions },
    });
    res.status(201).json({ id: staff.id, fullname: staff.fullname, username: staff.username, role: staff.role, permissions: staff.permissions });
  } catch (e) { serverError(res, e); }
};

export const updateMyStaff = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const found = await findManageableStaff(req, id);
    if (found.error) return res.status(found.status).json({ error: found.error });

    const { role, status, permissions } = req.body;
    const invalid = validateStaffInput({ role, permissions });
    if (invalid) return res.status(400).json({ error: invalid });

    const nextPermissions = permissions !== undefined ? (Array.isArray(permissions) ? permissions : null) : found.staff.permissions;
    if (!canGrant(req.user, { role: role ?? found.staff.role, permissions: nextPermissions })) {
      return res.status(403).json({ error: 'You cannot grant access to pages you do not have' });
    }

    const staff = await prisma.staff.update({
      where: { id },
      data: {
        ...(role !== undefined && { role }),
        ...(status !== undefined && { status: parseInt(status) }),
        ...(permissions !== undefined && { permissions: nextPermissions }),
      },
      select: { id: true, fullname: true, username: true, role: true, status: true, permissions: true },
    });
    res.json(staff);
  } catch (e) { serverError(res, e); }
};

export const deleteMyStaff = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const found = await findManageableStaff(req, id);
    if (found.error) return res.status(found.status).json({ error: found.error });

    await prisma.staff.delete({ where: { id } });
    res.json({ success: true });
  } catch (e) { serverError(res, e); }
};

// â”€â”€ Staff login â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export const staffLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const staff = await prisma.staff.findUnique({
      where: { username },
      include: { restaurant: { select: { id: true, restroname: true, slug: true, subtype: true, status: true } } },
    });
    if (!staff) return res.status(401).json({ error: 'Invalid credentials' });
    if (!staff.status) return res.status(403).json({ error: 'Account inactive' });
    if (!staff.restaurant.status) return res.status(403).json({ error: 'Restaurant inactive' });
    const valid = await bcrypt.compare(password, staff.password);
    if (!valid) return res.status(401).json({ error: 'Invalid credentials' });

    // Resolve effective page permissions
    const staffPermissions = effectiveStaffPermissions(staff);

    const token = signToken({
      id: staff.restaurant.id, role: 'restro', slug: staff.restaurant.slug,
      subtype: staff.restaurant.subtype, staffId: staff.id, staffRole: staff.role,
      staffPermissions,
    });
    res.json({
      token,
      user: {
        id: staff.restaurant.id, restroname: staff.restaurant.restroname,
        slug: staff.restaurant.slug, subtype: staff.restaurant.subtype, role: 'restro',
        staffName: staff.fullname, staffRole: staff.role, staffPermissions,
      },
    });
  } catch (e) { serverError(res, e); }
};
