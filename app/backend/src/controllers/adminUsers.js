import bcrypt from 'bcryptjs';
import { prisma } from '../lib/prisma.js';
import { ALL_PERMISSIONS, resolvePermissions } from '../utils/permissions.js';

const VALID_ROLES = ['super_admin', 'manager', 'viewer'];

const formatAdmin = (admin) => ({
  id: admin.id,
  fullname: admin.fullname,
  username: admin.username,
  email: admin.email,
  role: admin.role,
  isRoot: admin.isRoot,
  isActive: admin.isActive,
  permissions: admin.permissions,
  resolvedPermissions: resolvePermissions(admin),
  createdAt: admin.createdAt,
});

export const getAdmins = async (req, res) => {
  try {
    const admins = await prisma.admin.findMany({
      select: { id: true, fullname: true, username: true, email: true, role: true, isRoot: true, isActive: true, permissions: true, createdAt: true },
      orderBy: [{ isRoot: 'desc' }, { createdAt: 'asc' }],
    });
    res.json(admins.map(formatAdmin));
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const createAdmin = async (req, res) => {
  try {
    const { fullname, username, email, password, role } = req.body;
    if (!fullname || !username || !email || !password || !role) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    if (!VALID_ROLES.includes(role)) {
      return res.status(400).json({ error: 'Invalid role' });
    }
    const existing = await prisma.admin.findUnique({ where: { username } });
    if (existing) return res.status(409).json({ error: 'Username already taken' });

    const hashed = await bcrypt.hash(password, 12);
    const admin = await prisma.admin.create({
      data: { fullname, username, email, password: hashed, role, isRoot: false, isActive: true, permissions: null },
    });
    res.status(201).json(formatAdmin(admin));
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const updateAdmin = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const target = await prisma.admin.findUnique({ where: { id } });
    if (!target) return res.status(404).json({ error: 'Admin not found' });
    if (target.isRoot) return res.status(403).json({ error: 'Root admin cannot be modified' });
    if (id === req.user.id) return res.status(403).json({ error: 'Cannot modify your own account' });

    const { fullname, email, role, isActive, permissions } = req.body;

    if (role !== undefined && !VALID_ROLES.includes(role)) {
      return res.status(400).json({ error: 'Invalid role' });
    }

    // Validate permissions delta structure if provided
    if (permissions !== null && permissions !== undefined) {
      for (const section of Object.keys(permissions)) {
        if (!ALL_PERMISSIONS[section]) return res.status(400).json({ error: `Unknown permission section: ${section}` });
        for (const action of Object.keys(permissions[section])) {
          if (!ALL_PERMISSIONS[section].includes(action)) {
            return res.status(400).json({ error: `Unknown action: ${section}.${action}` });
          }
          if (typeof permissions[section][action] !== 'boolean') {
            return res.status(400).json({ error: `Permission value must be boolean: ${section}.${action}` });
          }
        }
      }
    }

    const updated = await prisma.admin.update({
      where: { id },
      data: {
        ...(fullname !== undefined && { fullname }),
        ...(email !== undefined && { email }),
        ...(role !== undefined && { role }),
        ...(isActive !== undefined && { isActive }),
        ...(permissions !== undefined && { permissions: permissions === null ? null : permissions }),
      },
    });
    res.json(formatAdmin(updated));
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const deleteAdmin = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const target = await prisma.admin.findUnique({ where: { id } });
    if (!target) return res.status(404).json({ error: 'Admin not found' });
    if (target.isRoot) return res.status(403).json({ error: 'Root admin cannot be deleted' });
    if (id === req.user.id) return res.status(403).json({ error: 'Cannot delete your own account' });

    await prisma.admin.delete({ where: { id } });
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
