import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 导入api接口
import api from "./axios/index";
// 引入全局过滤器
import * as filters from "./filters";

Vue.prototype.$api = api;

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
