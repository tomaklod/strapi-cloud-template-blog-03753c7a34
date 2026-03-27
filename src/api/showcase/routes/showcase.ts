export default {
  type: 'content-api',
  routes: [
    { method: 'GET', path: '/showcase', handler: 'showcase.find' },
    { method: 'PUT', path: '/showcase', handler: 'showcase.update' },
    { method: 'DELETE', path: '/showcase', handler: 'showcase.delete' },
  ],
};
