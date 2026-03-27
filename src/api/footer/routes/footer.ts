export default {
  type: 'content-api',
  routes: [
    { method: 'GET', path: '/footer', handler: 'footer.find' },
    { method: 'PUT', path: '/footer', handler: 'footer.update' },
    { method: 'DELETE', path: '/footer', handler: 'footer.delete' },
  ],
};
