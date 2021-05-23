require('./bootstrap');

window.Vue = require('vue').default;
import { Popper } from 'popper.js'

import VueRouter from 'vue-router'
import router from './router';

Vue.use(VueRouter)

const app = new Vue({
    el: '#app',
    router
});
