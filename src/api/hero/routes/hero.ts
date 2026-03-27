export default {
  type: 'content-api',
  routes: [
    {
      method: 'GET',
      path: '/hero',
      handler: 'api::hero.hero.find',
      config: {
        auth: false,
      },
    },
  ],
};
