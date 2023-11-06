/**
 * event router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::event.event", {
  config: {
    find: {
      middlewares: ["api::event.get-own-events"],
    },
    findOne: {
      middlewares: ["api::event.get-own-events"],
    },
  },
});
