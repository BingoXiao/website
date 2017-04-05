// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import store from './vuex/store';
// import router from './router';

import './assets/css/bootstrap.css';
import './assets/css/animate.css';
import './assets/js/bootstrap';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,
  // router,
  template: '<App/>',
  components: { App }
});
