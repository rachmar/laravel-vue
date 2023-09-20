import Login from "../pages/auth/Login.vue";
import Register from "../pages/auth/Register.vue";
import Home from "../pages/Home.vue";

const routes = [
    {
        name: "login",
        path: "/login",
        component: Login,
        meta: {
            title: `Login`,
        },
    },
    {
        name: "register",
        path: "/register",
        component: Register,
        meta: {
            title: `Register`,
        },
    },
    {
        path: "/",
        redirect: "/home",
        meta: {
            requiresAuth: true,
            title: `Home`,
        },
        children: [
            {
                name: "home",
                path: "/home",
                component: Home,
                meta: {
                    title: `Home`,
                },
            },
        ],
    }
];

export default routes;
