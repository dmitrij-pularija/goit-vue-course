import { createStore } from "vuex";
import authModule from "./modules/auth";
import createPersistedState from "vuex-plugin-persistedstate";

const dataState = createPersistedState({
  paths: ["auth"],
});

const store = createStore({
  modules: {
    auth: authModule,
  },
  plugins: [dataState],
});

export default store;