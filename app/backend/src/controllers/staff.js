import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '../generated/client/index.js';

const prisma = new PrismaClient();

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
  } catch (e) { res.status(500).json({ error: e.message }); }
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
  } catch (e) { res.status(500).json({ error: e.message }); }
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
  } catch (e) { res.status(500).json({ error: e.message }); }
};

export const deleteStaff = async (req, res) => {
  try {
    await prisma.staff.delete({ where: { id: parseInt(req.params.id) } });
    res.json({ success: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
};

// ── Page permission defaults per role ────────────────────────────────────────

const ROLE_PAGE_DEFAULTS = {
  manager: ['dashboard', 'orders', 'notifications', 'menu', 'tables', 'history', 'report', 'feedback', 'staff'],
  cashier:  ['orders', 'notifications', 'history'],
  staff:    ['orders', 'notifications'],
  kitchen:  ['kitchen'],  // dedicated KDS screen only
};

// ── Restaurant admin: manage own staff ───────────────────────────────────────

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
  } catch (e) { res.status(500).json({ error: e.message }); }
};

export const createMyStaff = async (req, res) => {
  try {
    const { fullname, username, password, role, permissions } = req.body;
    if (!fullname || !username || !password) return res.status(400).json({ error: 'All fields required' });

    // Check license limit
    const restro = await prisma.restaurant.findUnique({ where: { id: req.user.id }, select: { maxStaff: true } });
    const currentCount = await prisma.staff.count({ where: { restroid: req.user.id } });
    if (currentCount >= (restro?.maxStaff || 5)) {
      return res.status(403).json({ error: `Staff limit reached. Your plan allows maximum ${restro?.maxStaff || 5} staff users. Contact admin to increase your limit.` });
    }

    const exists = await prisma.staff.findUnique({ where: { username } });
    if (exists) return res.status(400).json({ error: 'Username already taken' });
    const hashed = await bcrypt.hash(password, 10);
    const staffRole = role || 'staff';
    // Use provided permissions or fall back to role defaults
    const resolvedPermissions = Array.isArray(permissions) ? permissions : ROLE_PAGE_DEFAULTS[staffRole] || [];
    const staff = await prisma.staff.create({
      data: { restroid: req.user.id, fullname, username, password: hashed, role: staffRole, permissions: resolvedPermissions },
    });
    res.status(201).json({ id: staff.id, fullname: staff.fullname, username: staff.username, role: staff.role, permissions: staff.permissions });
  } catch (e) { res.status(500).json({ error: e.message }); }
};

export const updateMyStaff = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    // Ensure this staff belongs to the restaurant making the request
    const existing = await prisma.staff.findUnique({ where: { id }, select: { restroid: true } });
    if (!existing) return res.status(404).json({ error: 'Staff not found' });
    if (existing.restroid !== req.user.id) return res.status(403).json({ error: 'Forbidden' });

    const { role, status, permissions } = req.body;
    const staff = await prisma.staff.update({
      where: { id },
      data: {
        ...(role !== undefined && { role }),
        ...(status !== undefined && { status: parseInt(status) }),
        ...(permissions !== undefined && { permissions: Array.isArray(permissions) ? permissions : null }),
      },
      select: { id: true, fullname: true, username: true, role: true, status: true, permissions: true },
    });
    res.json(staff);
  } catch (e) { res.status(500).json({ error: e.message }); }
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
    const staffPermissions = Array.isArray(staff.permissions) && staff.permissions.length > 0
      ? staff.permissions
      : (ROLE_PAGE_DEFAULTS[staff.role] || ['orders', 'notifications']);

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
  } catch (e) { res.status(500).json({ error: e.message }); }
};
