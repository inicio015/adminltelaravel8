require('./bootstrap');
window.Vue = require('vue').default;

import VueRouter from 'vue-router'
import router from './router';
import Vuex from 'vuex'

Vue.use(VueRouter)
Vue.use(Vuex)

const app = new Vue({
    el: '#app',
    router
});
