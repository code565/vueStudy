import { createRouter , createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: () => import('../components/login/Index.vue'),
    },
    {
        path: '/home',
        component: () => import('../components/project/home.vue'),
    }
]

const routers = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default routers