export default {
  type: 'content-api',
  routes: [
    { method: 'GET', path: '/navigation', handler: 'navigation.find' },
    { method: 'PUT', path: '/navigation', handler: 'navigation.update' },
    { method: 'DELETE', path: '/navigation', handler: 'navigation.delete' },
  ],
};
