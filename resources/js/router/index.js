import VueRouter from 'vue-router'
//component: () => import( "@/pages/Pruebas.vue"), IMPORT LAZY LOADING FAST

let routes = [
	{
		path: '/home',
        component: require('@/pages/Home.vue').default,
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