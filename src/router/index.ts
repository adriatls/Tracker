import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from '../views/HomePage/HomePage.vue'
import ProjectsPage from '../views/ProjectsPage/ProjectsPage.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
      path: '/projects',
      name: 'Projects',
      component: ProjectsPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router