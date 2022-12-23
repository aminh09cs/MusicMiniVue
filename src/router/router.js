import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'loading', component: () => import('../views/Loading.vue') },
    { path: '/started', name: 'started', component: () => import('../views/Started.vue') },
    { path: '/authentication', name: 'login', component: () => import('../components/Authentication.vue') },
    { path: '/authentication/signin', name: 'sign-in', component: () => import('../components/SignIn.vue') },
    { path: '/authentication/register', name: 'register', component: () => import('../components/Register.vue') },
    { path: '/support', name: 'support', component: () => import('../views/Support.vue') },
    {
      path: '/home', 
      name: 'home', 
      component: () => import('../components/Home/Home.vue'),
      children: [
        {
          path: 'news',
          name: 'home-news',
          component: () => import('../components/Home/HomeNews.vue')
        },
        {
          path: 'podcast',
          name: 'home-podcast',
          component: () => import('../components/Home/HomePodcast.vue')
        },
        {
          path: 'video',
          name: 'home-video',
          component: () => import('../components/Home/HomeVideo.vue')
        },
        {
          path: 'news',
          name: 'home-artists',
          component: () => import('../components/Home/HomeArtists.vue')
        }
      ]
    },
    { path: '/home/news/:id', name: 'music', component: () => import('../components/Music/Music.vue')},

  ]
})

export default router
