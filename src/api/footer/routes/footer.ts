export default {
  type: 'content-api',
  routes: [
    {
      method: 'GET',
      path: '/footer',
      handler: 'api::footer.footer.find',
      config: {
        auth: false,
      },
    },
  ],
};
