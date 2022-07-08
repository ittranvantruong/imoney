import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/index.vue'
import { auth } from '@/configs/firebase.js'

const requireAuth = (to , from, next) => {
    const user = auth.currentUser
    if(!user) next({ name: 'login', params: {} });
    else next();
} 

const routes = [
    { 
        path: '/',
        meta: {
            text: 'Trường',
            leading: true,
            isShowFooter: true,
            action: 'notification'
        },
        name: 'home',
        component: Home,
    },
    { 
        path: '/register',
        meta: {
            layout: 'auth'
        },
        name: 'register',
        component: () => import(/* webpackChunkName: "register" */ "@/views/register.vue")
    },
    { 
        path: '/login',
        meta: {
            layout: 'auth'
        },
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ "@/views/login.vue")
    },
    { 
        path: '/profile',
        meta: {
            text: 'My Profile',
            leading: false,
            isShowFooter: true,
            action: 'setting'
        },
        name: 'profile',
        
        component: () => import(/* webpackChunkName: "profile" */ "@/views/profile.vue"),
        beforeEnter: requireAuth,
    },
    { 
        path: '/logout',
        name: 'logout',
        component: () => import(/* webpackChunkName: "logout" */ "@/views/logout.vue")
    },
    { 
        path: '/report',
        meta: {
            text: 'Report',
            leading: false,
            isShowFooter: true,
            action: 'report'
        },
        name: 'report',
        component: () => import(/* webpackChunkName: "report" */ "@/views/report.vue")
    },
    { 
        path: '/report/:id',
        meta: {
            text: 'Report Detail',
            leading: false,
            isShowFooter: true,
            action: 'reportDetail'
        },
        name: 'report.detail',
        component: () => import(/* webpackChunkName: "report" */ "@/views/report-detail.vue")
    },
    { 
        path: '/budget',
        meta: {
            text: 'Budget',
            leading: false,
            isShowFooter: true,
            action: 'budget'
        },
        name: 'budget',
        component: () => import(/* webpackChunkName: "budget" */ "@/views/budget.vue")
    },
    { 
        path: '/new-transaction',
        meta: {
            text: 'New Transaction',
            leading: false,
            isShowFooter: true,
            action: 'addTransaction'
        },
        name: 'new.transaction',
        component: () => import(/* webpackChunkName: "transaction" */ "@/views/new-transaction.vue")
    },
    { 
        path: '/wallet',
        meta: {
            text: 'My Wallet',
            leading: false,
            isShowFooter: true,
            action: 'wallet'
        },
        name: 'wallet',
        component: () => import(/* webpackChunkName: "wallet" */ "@/views/wallet.vue")
    },
    { 
        path: '/new-wallet',
        meta: {
            text: 'New wallet',
            leading: false,
            isShowFooter: true,
            action: 'newWallet'
        },
        name: 'new.wallet',
        component: () => import(/* webpackChunkName: "wallet" */ "@/views/new-wallet.vue")
    },
    { 
        path: '/edit-wallet/:id',
        meta: {
            text: 'Edit wallet',
            leading: false,
            isShowFooter: true,
            action: 'editWallet'
        },
        name: 'edit.wallet',
        component: () => import(/* webpackChunkName: "wallet" */ "@/views/edit-wallet.vue")
    }
    
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;