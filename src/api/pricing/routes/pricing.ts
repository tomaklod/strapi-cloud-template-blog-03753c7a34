export default {
  type: 'content-api',
  routes: [
    {
      method: 'GET',
      path: '/pricing',
      handler: 'api::pricing.pricing.find',
      config: {
        auth: false,
      },
    },
  ],
};
