import { createWebHistory, createRouter } from 'vue-router';

import GuestLayout from '../layouts/GuestLayout.vue';
import AuthLayout from '../layouts/AuthLayout.vue';
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';
import Dashboard from '../pages/Dashboard.vue';

const isAuthenticated = () => {
    // Remplacez ceci par votre logique d'authentification
    return localStorage.getItem('auth') === 'true';
};

const routes = [
    {
        path: '/',
        component: GuestLayout,
        children: [
            {
                path: '',
                name: 'Login',
                component: Login
            },
            {
                path: '/register',
                name: 'Register',
                component: Register
            },
        ],
        beforeEnter: (to, from, next) => {
            if (isAuthenticated()) {
                next({ name: 'Dashboard' });
            } else {
                next();
            }
        }
    },
    {
        path: '/dashboard',
        component: AuthLayout,
        children: [
            {
                path: '',
                name: 'Dashboard',
                component: Dashboard
            }
        ],
        beforeEnter: (to, from, next) => {
            if (!isAuthenticated()) {
                next({ name: 'Login' });
            } else {
                next();
            }
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

