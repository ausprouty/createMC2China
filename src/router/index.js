import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// see    https://stackoverflow.com/questions/46590760/vue-js-2-multiple-routing-files
import routesEngMultiply1 from "./routesEngMultiply1.js";
import routesEngMultiply2 from "./routesEngMultiply2.js";
import routesEngMultiply3 from "./routesEngMultiply3.js";
import routesEngTc from "./routesEngTc.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [

    ...routesEngMultiply1,
    ...routesEngMultiply2,
    ...routesEngMultiply3,
     ...routesEngTc,

     {
      path: "/",
        name: "home",
        component: function () {
          return import(
            /* webpackChunkName: "prototype" */ "../views/M2/eng/multiply1/EngMultiply1Index.vue"
          );
        },
    },


  ],
});

export default router;
