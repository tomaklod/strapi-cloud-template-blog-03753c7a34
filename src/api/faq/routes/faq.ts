export default {
  type: 'content-api',
  routes: [
    { method: 'GET', path: '/faq', handler: 'faq.find' },
    { method: 'PUT', path: '/faq', handler: 'faq.update' },
    { method: 'DELETE', path: '/faq', handler: 'faq.delete' },
  ],
};
