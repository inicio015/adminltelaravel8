import VueRouter from 'vue-router'

import Home from '../components/HomeComponent.vue';
import Pruebas from '../components/PruebasComponent.vue';


let routes = [
	{
		path: '/home',
        component: Home,
        meta: {
            requiresAuth: true,
        }
	},
	{
		path: '/pruebas',
        component: Pruebas,
        meta: {
            requiresAuth: true,
        }
	}
];
 
 
export default new VueRouter({
    base:base_path_vue_router,
    routes,
    linkActiveClass: "active",
    mode: "history"
});