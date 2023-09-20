import { createRouter, createWebHistory } from "vue-router";

import routes from "./routes";

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;

    const isAuthenticated = true;
    const requiresAuth = to.meta.requiresAuth;

    if (requiresAuth && !isAuthenticated) {
        next({ name: "login" });
    } else if (!requiresAuth && isAuthenticated) {
        next({ name: "home" });
    } else {
        next();
    }
});

export default router;
