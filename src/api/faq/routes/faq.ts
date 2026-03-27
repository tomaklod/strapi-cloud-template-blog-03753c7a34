export default {
  type: 'content-api',
  routes: [
    {
      method: 'GET',
      path: '/faq',
      handler: 'api::faq.faq.find',
      config: {
        auth: false,
      },
    },
  ],
};
