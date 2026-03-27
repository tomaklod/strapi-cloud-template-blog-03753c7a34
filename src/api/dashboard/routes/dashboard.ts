export default {
  type: 'content-api',
  routes: [
    { method: 'GET', path: '/dashboard', handler: 'dashboard.find' },
    { method: 'PUT', path: '/dashboard', handler: 'dashboard.update' },
    { method: 'DELETE', path: '/dashboard', handler: 'dashboard.delete' },
  ],
};
