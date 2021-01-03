import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);
const BASE_API = process.env.VUE_APP_BASE_API
const apiService = {
  get(resource) {
    return new Promise((resolve, reject) => {
      Vue.axios
        .get(`${BASE_API}${resource}`)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  post(resource, params) {
    return new Promise((resolve, reject) => {
      Vue.axios
        .post(`${BASE_API}${resource}`, params)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  put(resource, params) {
    return new Promise((resolve, reject) => {
      Vue.axios
        .put(`${BASE_API}${resource}`, params)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  delete(resource, params) {
    return new Promise((resolve, reject) => {
      Vue.axios
        .delete(`${BASE_API}${resource}`, params)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

export default apiService;
