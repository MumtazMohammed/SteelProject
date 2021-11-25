import Vue from "vue";
import App from "./App.vue";
import router from "./router";
//---------normalize import---------//
import "@csstools/normalize.css";
//---------fontawesome import---------//
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(fas);
Vue.component("fa", FontAwesomeIcon);

//---------Animate.css import---------//
import "animate.css";

import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
