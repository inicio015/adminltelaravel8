require('./bootstrap');
window.moment = require('moment');
window.swal = require('sweetalert2') // added here
window.Vue = require('vue').default;

import VueRouter from 'vue-router'
import router from './router';
import Vuex from 'vuex'

//Efecto loading para carga 
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
Vue.use(Loading);
//FIN efectos loading para carga


Vue.use(VueRouter)
Vue.use(Vuex)

const app = new Vue({
    el: '#app',
    router
});
