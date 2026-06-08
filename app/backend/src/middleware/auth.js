import jwt from 'jsonwebtoken';

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

export const requireRestroAdmin = (req, res, next) => {
  requireAuth(req, res, () => {
    if (req.user.role !== 'restro' && !ADMIN_ROLES.includes(req.user.role)) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    next();
  });
};

export const requirePermission = (section, action) => (req, res, next) => {
  if (req.user.isRoot) return next();
  // Legacy superadmin tokens (pre-RBAC) get full access
  if (req.user.role === 'superadmin') return next();
  if (req.user.permissions?.[section]?.[action]) return next();
  return res.status(403).json({ error: 'Permission denied' });
};
