import VueRouter from 'vue-router';
import Home from './pages/Home.vue';
import About from './pages/About.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/about',
        name: 'about',
        component: About,
    }
]

const router = new VueRouter({
    mode: 'history',
    routes: routes,
});

export default router;