export default {
  type: 'content-api',
  routes: [
    {
      method: 'GET',
      path: '/dashboard',
      handler: 'api::dashboard.dashboard.find',
      config: {
        auth: false,
      },
    },
  ],
};
