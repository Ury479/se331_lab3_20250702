import { createRouter, createWebHistory } from 'vue-router';
import AboutView from '@/views/AboutView.vue';
import EventListView from '@/views/EventListView.vue';
import LayoutView from '@/views/event/LayoutView.vue';
import DetailView from '@/views/event/DetailView.vue';
import EditView from '@/views/event/EditView.vue';
import RegisterView from '@/views/event/RegisterView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import NetworkErrorView from '@/views/NetworkErrorView.vue';
import PassengerListView from '@/views/PassengerListView.vue';
import PassengerLayoutView from '@/views/passenger/LayoutView.vue';
import PassengerDetailView from '@/views/passenger/DetailView.vue';
import PassengerAirlinesView from '@/views/passenger/AirlinesView.vue';
import PassengerEditView from '@/views/passenger/EditView.vue';
import AirlineDetailView from '@/views/AirlineDetailView.vue';
import nProgress from 'nprogress';
import EventService from '@/services/EventService';
import PassengerService from '@/services/PassengerService';
import { useEventStore } from '@/stores/event';
import { usePassengerStore } from '@/stores/passenger';
const routes = [
    {
        path: '/',
        name: 'event-list',
        component: EventListView,
        props: (route) => ({ page: parseInt(route.query.page) || 1 })
    },
    {
        path: '/passengers',
        name: 'passenger-list',
        component: PassengerListView,
        props: (route) => ({ page: parseInt(route.query.page) || 0 })
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
        props: true,
        beforeEnter: (to) => {
            const id = parseInt(to.params.id);
            const eventStore = useEventStore();
            return EventService.getEvent(id)
                .then((response) => {
                // need to setup the data for the event
                eventStore.setEvent(response.data);
            }).catch((error) => {
                if (error.response && error.response.status === 404) {
                    return {
                        name: '404-resource-view',
                        params: { resource: 'event' }
                    };
                }
                else {
                    return { name: 'network-error-view' };
                }
            });
        },
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
        beforeEnter: (to) => {
            const id = to.params.id;
            const passengerStore = usePassengerStore();
            return PassengerService.getPassenger(id)
                .then((response) => {
                // need to setup the data for the passenger
                passengerStore.setPassenger(response.data);
            }).catch((error) => {
                if (error.response && error.response.status === 404) {
                    return {
                        name: '404-resource-view',
                        params: { resource: 'passenger' }
                    };
                }
                else {
                    return { name: 'network-error-view' };
                }
            });
        },
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
            },
            {
                path: 'edit',
                name: 'passenger-edit',
                component: PassengerEditView
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
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        else {
            return { top: 0 };
        }
    }
});
router.beforeEach(() => {
    nProgress.start();
});
router.afterEach(() => {
    nProgress.done();
});
export default router;
//# sourceMappingURL=index.js.map