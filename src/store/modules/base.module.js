import apiService from "@/common/api.service";
import {
  BASE_GET_METHOD,
  BASE_POST_METHOD,
  BASE_PUT_METHOD,
  BASE_DELETE_METHOD,
} from "@/store/actions.type";
import { BASE_SET_METHOD } from "@/store/mutations.type";

const state = {
  data: [],
};
const getters = {
  getData: (state) => {
    return state.data;
  },
};
const actions = {
  [BASE_GET_METHOD](context) {
    return new Promise((resolve, reject) => {
      apiService
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          context.commit(BASE_SET_METHOD, response);
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  [BASE_POST_METHOD](context, payload) {
    return new Promise((resolve, reject) => {
      apiService
        .post("https://jsonplaceholder.typicode.com/posts", payload)
        .then((payload) => {
          resolve(payload);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  [BASE_PUT_METHOD](context, payload) {
    return new Promise((resolve, reject) => {
      apiService
        .put(
          `https://jsonplaceholder.typicode.com/posts/${payload.id}`,
          payload
        )
        .then((payload) => {
          resolve(payload);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  [BASE_DELETE_METHOD](context, payload) {
    return new Promise((resolve, reject) => {
      apiService
        .delete(
          `https://jsonplaceholder.typicode.com/posts/${payload.id}`,
          payload
        )
        .then((payload) => {
          resolve(payload);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

const mutations = {
  [BASE_SET_METHOD](state, payload) {
    state.data = payload.data;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
