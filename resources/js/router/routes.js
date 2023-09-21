
import AuthLayout from "../components/layouts/AuthLayout.vue"
import HomeLayout from "../components/layouts/HomeLayout.vue"

import Login from "../pages/auth/Login.vue"
import Register from "../pages/auth/Register.vue"
import Home from "../pages/Home.vue"

const routes = [
    {
        path: "/auth",
        redirect: "/auth/login",
        component: AuthLayout,
        children: [
            {
                name: "login",
                path: "login",
                component: Login,
                meta: {
                    title: `Login`,
                },
            },
            {
                name: "register",
                path: "register",
                component: Register,
                meta: {
                    title: `Register`,
                },
            },
        ],
    },
    {
        path: "/",
        redirect: "/home",
        component: HomeLayout,
        meta: {
            requiresAuth: true,
        },
        children: [
            {
                name: "home",
                path: "home",
                component: Home,
                meta: {
                    title: `Home`,
                },
            },
        ],
    },
];

export default routes;
