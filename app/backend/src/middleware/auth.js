import jwt from 'jsonwebtoken';
import { prisma } from '../lib/prisma.js';
import { effectiveStaffPermissions } from '../utils/permissions.js';

const ADMIN_ROLES = ['super_admin', 'manager', 'viewer', 'superadmin'];

export const requireAuth = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
};

export const requireSuperAdmin = (req, res, next) => {
  requireAuth(req, res, () => {
    if (!ADMIN_ROLES.includes(req.user.role)) return res.status(403).json({ error: 'Forbidden' });
    next();
  });
};

// Restaurant owner or one of its staff. Admin tokens are NOT accepted here:
// these handlers use req.user.id as the restaurant id, so an admin id would
// silently read/write whichever restaurant happens to share that number.
export const requireRestroAdmin = (req, res, next) => {
  requireAuth(req, res, async () => {
    if (req.user.role !== 'restro') return res.status(403).json({ error: 'Forbidden' });
    if (!req.user.staffId) return next();

    // Staff: reload from the DB so deactivation and permission changes take
    // effect immediately instead of when the 7-day token expires.
    try {
      const staff = await prisma.staff.findUnique({
        where: { id: req.user.staffId },
        select: { restroid: true, status: true, role: true, permissions: true },
      });
      if (!staff || !staff.status || staff.restroid !== req.user.id) {
        return res.status(401).json({ error: 'Staff account is inactive' });
      }
      req.user.staffRole = staff.role;
      req.user.staffPermissions = effectiveStaffPermissions(staff);
      next();
    } catch (e) {
      next(e);
    }
  });
};

export const isRestroOwner = (user) => user?.role === 'restro' && !user.staffId;

// Owner-only actions (restaurant settings, payment details, printer keys).
// Must run after requireRestroAdmin.
export const requireOwner = (req, res, next) => {
  if (isRestroOwner(req.user)) return next();
  return res.status(403).json({ error: 'Only the restaurant owner can do this' });
};

// Owner always passes; staff pass if they have any of the given page keys.
// Must run after requireRestroAdmin.
export const requireStaffPage = (...pages) => (req, res, next) => {
  if (isRestroOwner(req.user)) return next();
  if (pages.some((p) => req.user.staffPermissions?.includes(p))) return next();
  return res.status(403).json({ error: 'You do not have access to this section' });
};

export const requirePermission = (section, action) => (req, res, next) => {
  if (req.user.isRoot) return next();
  // Legacy superadmin tokens (pre-RBAC) get full access
  if (req.user.role === 'superadmin') return next();
  if (req.user.permissions?.[section]?.[action]) return next();
  return res.status(403).json({ error: 'Permission denied' });
};
