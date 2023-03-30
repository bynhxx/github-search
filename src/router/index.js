import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FavoriteRepos from '../views/FavoriteRepos.vue'
import UsersView from '../views/UsersView.vue'
import TheUserView from '../views/TheUserView.vue'
import NotFound from '../views/NotFound.vue'
import ReposView from '../views/ReposView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/favorite',
    name: 'favorite',
    component: FavoriteRepos
  },
  {
    path: '/users/:name',
    name: 'users',
    component: UsersView, 
  },
  {
    path: '/user/:user',
    name: 'user',
    component: TheUserView, 
  },

  {
    path: '/repos/:reponame',
    name: 'repos',
    component: ReposView, 
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound, 
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
