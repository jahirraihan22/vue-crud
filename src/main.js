import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

import VueRouter from 'vue-router'


import Category from './components/Category'
import News from './components/News'
Vue.use(VueRouter)

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

const routes = [
  { path: '/categories', component: Category },
  { path: '/news', component: News }
];

const router = new VueRouter({
    routes,
    hashbang: false,
    mode: "history"
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
