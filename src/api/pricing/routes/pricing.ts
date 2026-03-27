export default {
  type: 'content-api',
  routes: [
    { method: 'GET', path: '/pricing', handler: 'pricing.find' },
    { method: 'PUT', path: '/pricing', handler: 'pricing.update' },
    { method: 'DELETE', path: '/pricing', handler: 'pricing.delete' },
  ],
};
