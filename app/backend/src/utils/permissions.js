export const ALL_PERMISSIONS = {
  dashboard:   ['view'],
  restaurants: ['view', 'create', 'edit', 'toggleStatus', 'resetPassword', 'managePlan', 'manageWebsite'],
  payments:    ['view'],
  themes:      ['view', 'create', 'edit', 'delete'],
  admins:      ['view', 'create', 'edit', 'delete'],
};

export const ROLE_DEFAULTS = {
  super_admin: {
    dashboard:   { view: true },
    restaurants: { view: true, create: true, edit: true, toggleStatus: true, resetPassword: true, managePlan: true, manageWebsite: true },
    payments:    { view: true },
    themes:      { view: true, create: true, edit: true, delete: true },
    admins:      { view: true, create: true, edit: true, delete: true },
  },
  manager: {
    dashboard:   { view: true },
    restaurants: { view: true, create: true, edit: true, toggleStatus: false, resetPassword: false, managePlan: true, manageWebsite: false },
    payments:    { view: true },
    themes:      { view: true, create: false, edit: true, delete: false },
    admins:      { view: false, create: false, edit: false, delete: false },
  },
  viewer: {
    dashboard:   { view: true },
    restaurants: { view: true, create: false, edit: false, toggleStatus: false, resetPassword: false, managePlan: false, manageWebsite: false },
    payments:    { view: true },
    themes:      { view: true, create: false, edit: false, delete: false },
    admins:      { view: false, create: false, edit: false, delete: false },
  },
};

export function can(admin, section, action) {
  if (admin.isRoot) return true;
  const overrides = admin.permissions ?? {};
  if (overrides[section]?.[action] !== undefined) return overrides[section][action];
  return ROLE_DEFAULTS[admin.role]?.[section]?.[action] ?? false;
}

export function resolvePermissions(admin) {
  const resolved = {};
  for (const [section, actions] of Object.entries(ALL_PERMISSIONS)) {
    resolved[section] = {};
    for (const action of actions) {
      resolved[section][action] = can(admin, section, action);
    }
  }
  return resolved;
}
