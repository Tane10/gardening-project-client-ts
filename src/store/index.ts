import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    api: "http://localhost:8000/api/v1",
  },
  mutations: {},
  actions: {},
  modules: {},
});
