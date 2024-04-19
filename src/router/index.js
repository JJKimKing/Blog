import {createRouter, createWebHashHistory} from "vue-router";


const constantRoutes = [
    {
        path: "/login",
        component: () => import("@/views/login/index.vue"),
        meta: { hidden: true },
    },
    {
        path: "/",
        name: "/",
        redirect: "/dashboard",
        children: [
            {
                path: "dashboard",
                component: () => import("@/views/dashboard/index.vue"),
                name: "Dashboard",
                meta: {
                    title: "dashboard",
                    icon: "homepage",
                    affix: true,
                    keepAlive: true,
                    alwaysShow: false,
                },
            },
        ],
    }
];


const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {top: 0}
        }
    }
})

export function resetRouter() {
    router.replace({ path: "/login" });
}



export default router;
