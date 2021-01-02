import { BASE_GET_METHOD } from "@/store/actions.type";
import { BASE_SET_METHOD } from "@/store/mutations.type";

const state = {
    data=[],
};

const actions = {
  [BASE_GET_METHOD](context) {
    context.commit(BASE_SET_METHOD , response.data);
  },
};

const mutations = {
  [BASE_SET_METHOD](state, payload) {
      state.data = payload;
  },
};

const getters = {};

export default {
  state,
  actions,
  mutations,
  getters,
};
