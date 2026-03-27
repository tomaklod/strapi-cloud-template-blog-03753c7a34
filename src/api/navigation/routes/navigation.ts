export default {
  type: 'content-api',
  routes: [
    {
      method: 'GET',
      path: '/navigation',
      handler: 'api::navigation.navigation.find',
      config: {
        auth: false,
      },
    },
  ],
};
