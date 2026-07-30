import bcrypt from 'bcryptjs';
import { serverError } from '../utils/http.js';
import jwt from 'jsonwebtoken';
import { prisma } from '../lib/prisma.js';
import { resolvePermissions } from '../utils/permissions.js';

const signToken = (payload) =>
  jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '7d' });

const ADMIN_SELECT = { id: true, fullname: true, username: true, email: true, role: true, isRoot: true, isActive: true, permissions: true };

export const superAdminLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ error: 'Username and password required' });

    const admin = await prisma.admin.findUnique({ where: { username }, select: { ...ADMIN_SELECT, password: true } });
    if (!admin) return res.status(401).json({ error: 'Invalid credentials' });
    if (!admin.isActive) return res.status(403).json({ error: 'Account is deactivated. Contact the root admin.' });

    const valid = await bcrypt.compare(password, admin.password);
    if (!valid) return res.status(401).json({ error: 'Invalid credentials' });

    const perms = resolvePermissions(admin);
    const token = signToken({ id: admin.id, role: admin.role, username: admin.username, isRoot: admin.isRoot, permissions: perms });
    res.json({ token, user: { id: admin.id, fullname: admin.fullname, username: admin.username, email: admin.email, role: admin.role, isRoot: admin.isRoot, permissions: perms } });
  } catch (e) {
    serverError(res, e);
  }
};

export const restroLogin = async (req, res) => {
  try {
    const { mobileno, password } = req.body;
    if (!mobileno || !password) return res.status(400).json({ error: 'Mobile number and password required' });

    // Find restaurant by mobile number
    const restro = await prisma.restaurant.findFirst({ where: { mobileno: String(mobileno) } });
    if (!restro) return res.status(401).json({ error: 'Invalid mobile number or password' });
    if (!restro.status) return res.status(403).json({ error: 'Account inactive. Contact admin.' });

    const valid = await bcrypt.compare(password, restro.password);
    if (!valid) return res.status(401).json({ error: 'Invalid mobile number or password' });

    const token = signToken({ id: restro.id, role: 'restro', slug: restro.slug, subtype: restro.subtype });
    res.json({
      token,
      user: { id: restro.id, restroname: restro.restroname, slug: restro.slug, subtype: restro.subtype, role: 'restro' },
    });
  } catch (e) {
    serverError(res, e);
  }
};

export const getMe = async (req, res) => {
  try {
    const adminRoles = ['super_admin', 'manager', 'viewer', 'superadmin'];
    if (adminRoles.includes(req.user.role)) {
      const admin = await prisma.admin.findUnique({ where: { id: req.user.id }, select: ADMIN_SELECT });
      if (!admin) return res.status(404).json({ error: 'Not found' });
      const perms = resolvePermissions(admin);
      return res.json({ id: admin.id, fullname: admin.fullname, username: admin.username, email: admin.email, role: admin.role, isRoot: admin.isRoot, permissions: perms });
    }
    const restro = await prisma.restaurant.findUnique({
      where: { id: req.user.id },
      select: { id: true, restroname: true, slug: true, subtype: true, logo: true, status: true },
    });
    res.json({ ...restro, role: 'restro' });
  } catch (e) {
    serverError(res, e);
  }
};
