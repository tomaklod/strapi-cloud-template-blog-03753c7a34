export default {
  routes: [
    {
      method: 'GET',
      path: '/feature',
      handler: 'feature.find',
      config: {
        auth: false,
      },
    },
  ],
};
