import { createRouter, createWebHistory } from "vue-router"
import { useAuthStore } from '../stores/auth'
import routes from "./routes"

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

router.beforeEach( async (to, from, next) => {

    document.title = to.meta.title || 'Laravel';

    const authStore = useAuthStore();
    await authStore.checkAuth();

    const isAuthenticated = authStore.user ? true : false;
    const requiresAuth = to.meta.requiresAuth;

    console.log('isAuthenticated', authStore.user);

    if (requiresAuth && !isAuthenticated) {
        next({ name: "login" });
    } else if (!requiresAuth && isAuthenticated) {
        next({ name: "home" });
    } else {
        next();
    }
});

export default router;
