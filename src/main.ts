import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";

import router from "./route/index";
import store from "./store/index";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
  router
}).$mount("#app");
