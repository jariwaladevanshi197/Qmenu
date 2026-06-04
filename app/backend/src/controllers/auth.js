import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const signToken = (payload) =>
  jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '7d' });

export const superAdminLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ error: 'Username and password required' });

    const admin = await prisma.admin.findUnique({ where: { username } });
    if (!admin) return res.status(401).json({ error: 'Invalid credentials' });

    const valid = await bcrypt.compare(password, admin.password);
    if (!valid) return res.status(401).json({ error: 'Invalid credentials' });

    const token = signToken({ id: admin.id, role: 'superadmin', username: admin.username });
    res.json({ token, user: { id: admin.id, fullname: admin.fullname, username: admin.username, role: 'superadmin' } });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const restroLogin = async (req, res) => {
  try {
    const { slug, password } = req.body;
    if (!slug || !password) return res.status(400).json({ error: 'Slug and password required' });

    const restro = await prisma.restaurant.findUnique({ where: { slug } });
    if (!restro) return res.status(401).json({ error: 'Invalid credentials' });
    if (!restro.status) return res.status(403).json({ error: 'Account inactive' });

    const valid = await bcrypt.compare(password, restro.password);
    if (!valid) return res.status(401).json({ error: 'Invalid credentials' });

    const token = signToken({ id: restro.id, role: 'restro', slug: restro.slug, subtype: restro.subtype });
    res.json({
      token,
      user: { id: restro.id, restroname: restro.restroname, slug: restro.slug, subtype: restro.subtype, role: 'restro' },
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getMe = async (req, res) => {
  try {
    if (req.user.role === 'superadmin') {
      const admin = await prisma.admin.findUnique({ where: { id: req.user.id }, select: { id: true, fullname: true, username: true, email: true } });
      return res.json({ ...admin, role: 'superadmin' });
    }
    const restro = await prisma.restaurant.findUnique({
      where: { id: req.user.id },
      select: { id: true, restroname: true, slug: true, subtype: true, logo: true, status: true },
    });
    res.json({ ...restro, role: 'restro' });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
