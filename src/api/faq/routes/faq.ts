export default {
  routes: [
    {
      method: 'GET',
      path: '/faq',
      handler: 'faq.find',
      config: {
        auth: false,
      },
    },
  ],
};
