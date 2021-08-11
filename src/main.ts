import Vue from "vue";
import Vuetify from "vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "reflect-metadata";
import { Container } from "typedi"
// import from "garden-server"

Vue.config.productionTip = false;
Vue.use(Vuetify);


Container.set("gardenApi", new )
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
