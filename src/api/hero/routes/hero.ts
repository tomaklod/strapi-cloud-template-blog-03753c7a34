export default {
  type: 'content-api',
  routes: [
    { method: 'GET', path: '/hero', handler: 'hero.find' },
    { method: 'PUT', path: '/hero', handler: 'hero.update' },
    { method: 'DELETE', path: '/hero', handler: 'hero.delete' },
  ],
};
