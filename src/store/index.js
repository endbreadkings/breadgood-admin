import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import { loginUser } from "@/api/auth.js";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    accessToken: "",
    refreshToken: ""
  },
  getters: {
    isLogin(state) {
      return state.accessToken !== "" && state.refreshToken !== "";
    },
    getAccessToken(state) {
      return state.accessToken;
    },
    getRefreshToken(state) {
      return state.refreshToken;
    }
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.accessToken = `${token.tokenType} ${token.accessToken}`;
      state.refreshToken = `${token.tokenType} ${token.refreshToken}`;
    },
    LOGOUT(state) {
      state.accessToken = "";
      state.refreshToken = "";
    }
  },
  actions: {
    async LOGIN({ commit }, userData) {
      const { data } = await loginUser(userData);
      console.log("LOGIN", data);
      commit("SET_TOKEN", data);
      return data;
    }
  }
});
