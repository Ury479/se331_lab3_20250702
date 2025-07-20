import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutView.vue'
import EventListView from '@/views/EventListView.vue'
import LayoutView from '@/views/event/LayoutView.vue'
import DetailView from '@/views/event/DetailView.vue'
import EditView from '@/views/event/EditView.vue'
import RegisterView from '@/views/event/RegisterView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import NotFoundResourceView from '@/views/404ResourceView.vue'
import NetworkErrorView from '@/views/NetworkErrorView.vue'
import PassengerListView from '@/views/PassengerListView.vue'
import PassengerLayoutView from '@/views/passenger/LayoutView.vue'
import PassengerDetailView from '@/views/passenger/DetailView.vue'
import PassengerAirlinesView from '@/views/passenger/AirlinesView.vue'
import AirlineDetailView from '@/views/AirlineDetailView.vue'

const routes = [
  {
    path: '/',
    name: 'event-list',
    component: EventListView,
    props: (route: any) => ({ page: parseInt(route.query.page as string) || 1 })
  },
  {
    path: '/passengers',
    name: 'passenger-list',
    component: PassengerListView,
    props: (route: any) => ({ page: parseInt(route.query.page as string) || 0 })
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
  },
  {
    path: '/passenger/:id',
    name: 'passenger-layout',
    component: PassengerLayoutView,
    props: true,
    children: [
      {
        path: '',
        name: 'passenger-detail',
        component: PassengerDetailView
      },
      {
        path: 'airlines',
        name: 'passenger-airlines',
        component: PassengerAirlinesView
      }
    ]
  },
  {
    path: '/airline/:airlineId',
    name: 'airline-detail',
    component: AirlineDetailView,
    props: true
  },
  {
    path: '/network-error',
    name: 'network-error-view',
    component: NetworkErrorView
  },
  {
    path: '/404/:resource',
    name: '404-resource-view',
    component: NotFoundView,
    props: true
  },
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
