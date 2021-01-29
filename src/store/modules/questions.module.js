import apiService from "@/common/api.service";
import { GET_RANDOM_RECORDS } from "@/store/actions.type";
import { SET_RANDOM_RECORDS } from "@/store/mutations.type";

const state = {
  randomWords: [],
};
const getters = {
  getRandomWords: (state) => {
    return state.randomWords;
  },
};
const actions = {
  [GET_RANDOM_RECORDS](context , payload) {
    return new Promise((resolve, reject) => {
      apiService
        .get(`/words/randomrecords/${payload}`)
        .then((response) => {
          context.commit(SET_RANDOM_RECORDS, response.data);
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

const mutations = {
  [SET_RANDOM_RECORDS](state, payload) {
    state.randomWords = payload;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
