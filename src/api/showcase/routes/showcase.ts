export default {
  routes: [
    {
      method: 'GET',
      path: '/showcase',
      handler: 'showcase.find',
      config: {
        auth: false,
      },
    },
  ],
};
