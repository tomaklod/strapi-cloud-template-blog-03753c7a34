import { factories } from '@strapi/strapi';
export default factories.createCoreRouter('api::showcase.showcase', {
  config: {
    find: { auth: false },
  },
});
