export default {
  routes: [
    {
      method: 'GET',
      path: '/pricing',
      handler: 'pricing.find',
      config: {
        auth: false,
      },
    },
  ],
};
