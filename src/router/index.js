import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import TestView1 from '../views/TestView1.vue'
import BasicView from '@/views/BasicView.vue'
import ExamView from '@/views/ExamView.vue'
import TestView2 from '@/views/TestView2.vue'
import TestView3 from '@/views/TestView3.vue'
import TestView4 from '@/views/TestView4.vue'
import TestView5 from '@/views/TestView5.vue'
import TestView6 from '@/views/TestView6.vue'
import App1 from'@/views/firstweek/App.vue'

const routes = [
  {
    path: '/App',
    name: 'App',
    component: App1
  },
  {
    path: '/test6',
    name: 'TestView6',
    component: TestView6
  },
  {
    path: '/test5',
    name: 'TestView5',
    component: TestView5
  },
  {
    path: '/test4',
    name: 'TestView4',
    component: TestView4
  },
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
    path: '/App/test1',
    name: 'test1',
    component: TestView1
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
