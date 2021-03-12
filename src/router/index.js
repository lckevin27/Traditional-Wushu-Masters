import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Timeline from '../views/Timeline.vue'
import HomeEN from '../views/en/HomeEN.vue'
import TimelineEN from '../views/en/TimelineEN.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/timeline/:name',
    name: 'Timeline',
    component: Timeline
  },
  {
    path: '/en',
    name: 'HomeEN',
    component: HomeEN
  },
  {
    path: '/en/timeline/:name',
    name: 'TimelineEN',
    component: TimelineEN
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
