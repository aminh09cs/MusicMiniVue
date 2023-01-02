import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'loading', component: () => import('../views/Loading.vue') },
    { path: '/started', name: 'started', component: () => import('../views/Started.vue') },
    { path: '/authentication', name: 'login', component: () => import('../components/Authentication/Authentication.vue') },
    { path: '/authentication/signin', name: 'sign-in', component: () => import('../components/Authentication/SignIn.vue') },
    { path: '/authentication/register', name: 'register', component: () => import('../components/Authentication/Register.vue') },
    { path: '/support', name: 'support', component: () => import('../views/Support.vue') },
    { 
      path: '/home', 
      name: 'home', 
      component: () => import('../components/Home/Home.vue'),
      meta:{
        requiresAuth: true,
      }
    },
    { path: '/music-song/:id', name: 'music', component: () => import('../components/Music/Music.vue')},

  ]
})
router.beforeEach((to, from) =>{
  if(to.meta.requiresAuth && !window.user){
    return {name: 'sign-in'}
  }
})
export default router
