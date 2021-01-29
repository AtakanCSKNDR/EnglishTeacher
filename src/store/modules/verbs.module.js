import apiService from "@/common/api.service";
import { GET_VERB_LIST, GET_RANDOM_VERB } from "@/store/actions.type";
import { SET_VERB_LIST, SET_RANDOM_VERB } from "@/store/mutations.type";

const state = {
  verbList: [],
  randomVerb: {},
};
const getters = {
  getVerbList: (state) => {
    return state.verbList;
  },
  getRandomVerb: (state) => {
    return state.randomVerb;
  },
};
const actions = {
  [GET_VERB_LIST](context) {
    return new Promise((resolve, reject) => {
      apiService
        .get("/verbs/allverbs")
        .then((response) => {
          context.commit(SET_VERB_LIST, response.data);
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  [GET_RANDOM_VERB](context) {
    return new Promise((resolve, reject) => {
      apiService
        .get("/verbs/randomverbs")
        .then((response) => {
          context.commit(SET_RANDOM_VERB, response.data);
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },


};

const mutations = {
  [SET_VERB_LIST](state, payload) {
    state.verbList = payload;
  },
  [SET_RANDOM_VERB](state, payload) {
    state.randomVerb = payload;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
