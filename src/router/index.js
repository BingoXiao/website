import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index
    },
    // 路由重定向:除了路由配置的地址，全部到/login页面
    {
      path: '*',
      redirect: {path: '/'}
    }
  ]
});
