import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '../views/HomePage/HomePage.vue'
import ProjectsPage from '../views/ProjectsPage/ProjectsPage.vue'
import ProjectsForm from '../views/ProjectsPage/ProjectsForm/ProjectsForm.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
      path: '/projects',
      name: 'Projects',
      component: ProjectsPage,
    },
    {
      path: '/projects/new',
      name: 'New Project',
      component: ProjectsForm,
    },
    {
      path: '/projects/:id',
      name: 'Edit Project',
      component: ProjectsForm,
      props: true
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router