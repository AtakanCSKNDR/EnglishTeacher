import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import base from "@/store/modules/base.module";
import questions from "@/store/modules/questions.module";
import verbs from "@/store/modules/verbs.module";
export default new Vuex.Store({
  modules: {
    base,
    questions,
    verbs,
  },
});
