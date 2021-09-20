import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import HomeContainer from "../components/main/main-container.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: HomeContainer,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
