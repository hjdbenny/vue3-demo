import Vue from "vue";
import Vuex from "vuex";
import api from "./axios/index";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loginSuccess: null,
    token: null,
    changeNetwork: true,
    message: "come from store"
  },
  mutations: {
    loginSuccess(state, msg) {
      state.loginSuccess = msg;
    },
    token(state, msg) {
      state.token = msg;
    },
    changeNetwork(state, msg) {
      state.changeNetwork = msg;
    },
    message(state, msg) {
      state.message = msg;
    }
  },
  actions: {
    getTodayNews(context, msg) {
      return new Promise((resolve, reject) => {
        api.todayNews
          .getTodayNewsList({ category: msg })
          .then(res => {
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      });
    }
  }
});
