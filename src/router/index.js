import {createRouter,createWebHashHistory} from "vue-router";

const constantRoutes = [
    {
        path:'/',
        name: 'login',
        component: () => import('@/views/login'),
    }
];


const router=createRouter({
    history: createWebHashHistory(),
    routes:constantRoutes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})


export default router;
