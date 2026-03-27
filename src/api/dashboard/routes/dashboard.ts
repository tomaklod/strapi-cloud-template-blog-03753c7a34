export default {
  routes: [
    {
      method: 'GET',
      path: '/dashboard',
      handler: 'dashboard.find',
      config: {
        auth: false,
      },
    },
  ],
};
