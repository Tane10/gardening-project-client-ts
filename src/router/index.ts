import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

import LoginContainer from "../components/auth/login/login-container.vue";
import SignupContainer from "../components/auth/signup/signup-container.vue";
import HomeContainer from "../components/main/main-container.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/login",
    name: "Login",
    component: LoginContainer,
  },
  {
    path: "/signup",
    name: "Signup",
    component: SignupContainer,
  },
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
