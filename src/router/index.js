import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Users from '../views/Users.vue'

import contentPage from '../views/layouts/contentPage'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/users',
        name: 'Users',
        component: contentPage,
        children: [
            {
                path: '',
                name: 'usersList',
                component: Users
            }
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router