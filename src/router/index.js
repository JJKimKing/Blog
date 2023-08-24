import {createRouter,createWebHashHistory} from "vue-router";

const constantRoutes = [
    {
        path: '/login',
        component: () => import('@/views/Login'),
        meta: {title: '登录'}
    },
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
