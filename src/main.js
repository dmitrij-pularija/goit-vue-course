import { createApp } from "vue";
import App from "./App.vue";
import "./assets/scss/index.scss";
import Notifications from "@kyvg/vue3-notification";
import router from "./components/router.js";
import store from "./components/vuex/store.js";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(Notifications);
app.mount("#app");