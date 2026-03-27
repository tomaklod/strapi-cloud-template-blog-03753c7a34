export default {
  type: 'content-api',
  routes: [
    {
      method: 'GET',
      path: '/feature',
      handler: 'api::feature.feature.find',
      config: {
        auth: false,
      },
    },
  ],
};
