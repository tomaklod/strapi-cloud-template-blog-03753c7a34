export default {
  type: 'content-api',
  routes: [
    { method: 'GET', path: '/feature', handler: 'feature.find' },
    { method: 'PUT', path: '/feature', handler: 'feature.update' },
    { method: 'DELETE', path: '/feature', handler: 'feature.delete' },
  ],
};
