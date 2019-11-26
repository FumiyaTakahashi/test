import Vue from 'vue';
import Root from './components/Root';
import VueHandsOn from './components/VueHandsOn';
import VueRouter from 'vue-router';
import EventHub from './lib/EventHub';

import './less/common.less';

// test2
Vue.use(VueRouter);
Vue.use(EventHub);

const routes = [{path: '/', component: VueHandsOn}];
const router = new VueRouter({
  routes,
});

new Vue({
  el: '#vue-hands-on',
  router,
  render: (h) => h(Root),
});
