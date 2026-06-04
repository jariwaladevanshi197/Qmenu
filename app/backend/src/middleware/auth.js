import jwt from 'jsonwebtoken';

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
    if (req.user.role !== 'superadmin') return res.status(403).json({ error: 'Forbidden' });
    next();
  });
};

export const requireRestroAdmin = (req, res, next) => {
  requireAuth(req, res, () => {
    if (req.user.role !== 'restro' && req.user.role !== 'superadmin') {
      return res.status(403).json({ error: 'Forbidden' });
    }
    next();
  });
};
