import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutView.vue'
import EventListView from '@/views/EventListView.vue'
import LayoutView from '@/views/event/LayoutView.vue'
import DetailView from '@/views/event/DetailView.vue'
import EditView from '@/views/event/EditView.vue'
import RegisterView from '@/views/event/RegisterView.vue'

const routes = [
  {
    path: '/',
    name: 'event-list',
    component: EventListView,
    props: (route: any) => ({ page: parseInt(route.query.page as string) || 1 })
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/event/:id',
    name: 'event-layout',
    component: LayoutView,
    children: [
      {
        path: '',
        name: 'event-detail',
        component: DetailView
      },
      {
        path: 'edit',
        name: 'event-edit',
        component: EditView
      },
      {
        path: 'register',
        name: 'event-register',
        component: RegisterView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
