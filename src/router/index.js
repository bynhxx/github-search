import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FavoriteRepos from '../views/FavoriteRepos.vue'
import UsersView from '../views/UsersView.vue'
import TheUserView from '../views/TheUserView.vue'

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
    path: '/users',
    name: 'users',
    component: UsersView, 
  },
  {
    path: '/users/theuser',
    name: 'user',
    component: TheUserView, 
  }
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
