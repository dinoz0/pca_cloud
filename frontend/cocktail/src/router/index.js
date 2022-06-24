import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'

import * as Public from '@/views/public'
import * as Admin from '@/views/admin'

import Login from '@/views/auth/Login'

import { AuthGuard } from '@/_helpers/auth-guard'

const routes = [
  {
    path: '/', name: 'public', component: Public.PublicLayout, children: [
      { path: '/', name: 'home', component: Public.Home },
      { path: '/cocktail', name: 'cocktail', component: Public.Cocktail },
      { path: '/contact', name: 'contact', component: Public.Contact }
    ]
  },
  {
    path: '/admin', name: 'admin', component: Admin.AdminLayout, children:[
      { path: 'dashboard', name: 'dashboard', component: Admin.Dashboard},
      

      { path: 'cocktails/index', name: 'cList', component: Admin.CocktailIndex},
      { path: 'cocktails/edit/:id(\\d+)', name: 'cEdit', component: Admin.CocktailEdit, props: true},
      { path: 'cocktails/add', name: 'cAdd', component: Admin.CocktailCreate},

      { path: 'users/index', name: 'uList', component: Admin.UserIndex},
      { path: 'users/edit/:id(\\d+)', name: 'uEdit', component: Admin.UserEdit, props: true},

      { path: '/:pathMatch(.*)*', redirect: '/admin/dashboard'}
    ]
  },
  {
    path: '/login', name: 'login', component: Login 
  },
  {
    path: '/:pathMatch(.*)*', redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach( (to, from, next) => {
  if(to.matched[0].name == 'admin'){
    AuthGuard()
  }
  next()
})

export default router
