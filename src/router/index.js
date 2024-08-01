import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import TestView from '../views/TestView.vue'
import BasicView from '@/views/BasicView.vue'
import ExamView from '@/views/ExamView.vue'
import TestView2 from '@/views/TestView2.vue'
import TestView3 from '@/views/TestView3.vue'

const routes = [
  {
    path: '/test3',
    name: 'TestView3',
    component: TestView3
  },
  {
    path: '/test2',
    name: 'TestView2',
    component: TestView2
  },
  {
    path: '/exam',
    name: 'ExamView',
    component: ExamView
  },
  {
    path: '/basic',
    name: 'basic',
    component: BasicView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/test',
    name: 'test',
    component: TestView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
