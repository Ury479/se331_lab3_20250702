import { ref, computed, watchEffect } from 'vue';
import EventCard from '@/components/EventCard.vue';
import EventService from '@/services/EventService';
const props = defineProps({
    page: {
        type: Number,
        required: true
    }
});
const perPage = 3;
const page = computed(() => props.page);
const events = ref(null);
const totalEvents = ref(0);
const hasNextPage = computed(() => {
    const totalPages = Math.ceil(totalEvents.value / perPage);
    return page.value < totalPages;
});
watchEffect(() => {
    EventService.getEvents(perPage, page.value)
        .then((response) => {
        events.value = response.data;
        const total = response.headers['x-total-count'];
        totalEvents.value = total ? parseInt(total) : 0;
    })
        .catch((error) => {
        console.error('There was an error!', error);
    });
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)({});
__VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)({});
(__VLS_ctx.page);
// @ts-ignore
[page,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "flex flex-col items-center" },
});
for (const [event] of __VLS_getVForSourceType((__VLS_ctx.events))) {
    // @ts-ignore
    [events,];
    /** @type {[typeof EventCard, ]} */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(EventCard, new EventCard({
        key: (event.id),
        event: (event),
    }));
    const __VLS_1 = __VLS_0({
        key: (event.id),
        event: (event),
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
}
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "flex w-72 justify-between mt-4" },
});
if (__VLS_ctx.page !== 1) {
    // @ts-ignore
    [page,];
    const __VLS_4 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
    // @ts-ignore
    RouterLink;
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
        id: "page-prev",
        to: ({ name: 'event-list', query: { page: __VLS_ctx.page - 1 } }),
        rel: "prev",
    }));
    const __VLS_6 = __VLS_5({
        id: "page-prev",
        to: ({ name: 'event-list', query: { page: __VLS_ctx.page - 1 } }),
        rel: "prev",
    }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    const { default: __VLS_8 } = __VLS_7.slots;
    // @ts-ignore
    [page,];
    var __VLS_7;
}
if (__VLS_ctx.hasNextPage) {
    // @ts-ignore
    [hasNextPage,];
    const __VLS_9 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
    // @ts-ignore
    RouterLink;
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({
        id: "page-next",
        to: ({ name: 'event-list', query: { page: __VLS_ctx.page + 1 } }),
        rel: "next",
    }));
    const __VLS_11 = __VLS_10({
        id: "page-next",
        to: ({ name: 'event-list', query: { page: __VLS_ctx.page + 1 } }),
        rel: "next",
    }, ...__VLS_functionalComponentArgsRest(__VLS_10));
    const { default: __VLS_13 } = __VLS_12.slots;
    // @ts-ignore
    [page,];
    var __VLS_12;
}
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['w-72']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            EventCard: EventCard,
            page: page,
            events: events,
            hasNextPage: hasNextPage,
        };
    },
    props: {
        page: {
            type: Number,
            required: true
        }
    },
});
export default (await import('vue')).defineComponent({
    setup() {
    },
    props: {
        page: {
            type: Number,
            required: true
        }
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=EventListView.vue.js.map