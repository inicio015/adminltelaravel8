import VueRouter from 'vue-router'

import Home from '../components/HomeComponent.vue';


let routes = [
	{
		path: '/home',
        component: Home,
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