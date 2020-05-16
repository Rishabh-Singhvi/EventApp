import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
import AuthLayout from '@/layout/AuthLayout'
Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: 'dashboard',
      component: DashboardLayout,
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "demo" */ './views/Dashboard.vue')
        },
        {
          path: '/icons',
          name: 'icons',
          component: () => import(/* webpackChunkName: "demo" */ './views/Icons.vue')
        },
        {
          path: '/profile',
          name: 'profile',
          component: () => import(/* webpackChunkName: "demo" */ './views/UserProfile.vue')
        },
        {
          path: '/maps',
          name: 'maps',
          component: () => import(/* webpackChunkName: "demo" */ './views/Maps.vue')
        },
        {
          path: '/tables',
          name: 'tables',
          component: () => import(/* webpackChunkName: "demo" */ './views/Tables.vue')
        },
        {
          path: '/createEvent',
          name: 'Create Event',
          component: () => import(/* webpackChunkName: "demo" */ './views/createEvent.vue')
        },
        {
          path: '/Meetup/:eventID',
          name: 'Meetup',
          component: () => import(/* webpackChunkName: "demo" */ './views/Meetup.vue')
        },
        {
          path: '/allEvent',
          name: 'All Event',
          component: () => import(/* webpackChunkName: "demo" */ './views/allEvent.vue')
        },
        {
          path: '/ListofUsers',
          name: 'ListofUsers',
          component: () => import(/* webpackChunkName: "demo" */ './views/ListofUsers.vue')
        },
        {
          path: '/User_Registrations',
          name: 'Registrations of user',
          component: () => import(/* webpackChunkName: "demo" */ './views/User_Registrations.vue')
        },
        {
          path: '/EachEventDetail/:eventID',
          name: 'Details of events registered by user',
          component: () => import(/* webpackChunkName: "demo" */ './views/EachEventDetail.vue')
},
        {
          path: '/ListofUsers/:eventID',
          name: 'List of All Participants',
          component: () => import(/* webpackChunkName: "demo" */ './views/viewUsers.vue')
        },
        {
          path: '/participant/:eventID/:uid',
          name: 'Participants Data',
          component: () => import(/* webpackChunkName: "demo" */ './views/participant.vue')

        }



      ]
    },
    {
      path: '/',
      redirect: 'login',
      component: AuthLayout,
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import(/* webpackChunkName: "demo" */ './views/Login.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import(/* webpackChunkName: "demo" */ './views/Register.vue')
        }
      ]
    }
  ]
})
