export default {
  type: 'content-api',
  routes: [
    {
      method: 'GET',
      path: '/showcase',
      handler: 'api::showcase.showcase.find',
      config: {
        auth: false,
      },
    },
  ],
};
