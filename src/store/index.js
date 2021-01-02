import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import base from "@/store/modules/base.module";
export default new Vuex.Store({
  modules: {
    base,
  },
});
