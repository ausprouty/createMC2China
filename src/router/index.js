import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MC2Page from "../views/multiply1/MultiplySession101.vue";
// see    https://stackoverflow.com/questions/46590760/vue-js-2-multiple-routing-files
import routesMultiply1 from "./routesMultiply1.js";
import routesEngMultiply1 from "./routesEngMultiply1.js";
import routesEngTc from "./routesEngTc.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...routesMultiply1,
    ...routesEngMultiply1,
     ...routesEngTc,
    {
      path: "/M2/eng/multiply1/index",
        name: "eng-multiply1-index",
        component: function () {
          return import(
            /* webpackChunkName: "prototype" */ "../views/M2/eng/multiply1/EngMultiply1Index.vue"
          );
        },
    },
     {
      path: "/",
        name: "home",
        component: function () {
          return import(
            /* webpackChunkName: "prototype" */ "../views/M2/eng/multiply1/EngMultiply1Index.vue"
          );
        },
    },

    {
      path: "/about",
      name: "about",

      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
