import { useEventStore } from '@/stores/event';
import { storeToRefs } from 'pinia';
const store = useEventStore();
const { event } = storeToRefs(store);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
if (__VLS_ctx.event) {
    // @ts-ignore
    [event,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
    __VLS_asFunctionalElement(__VLS_elements.h1, __VLS_elements.h1)({});
    (__VLS_ctx.event.title);
    // @ts-ignore
    [event,];
    __VLS_asFunctionalElement(__VLS_elements.nav, __VLS_elements.nav)({});
    const __VLS_0 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
    // @ts-ignore
    RouterLink;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        ...{ class: "font-bold text-gray-700" },
        exactActiveClass: "text-green-500",
        to: ({ name: 'event-detail' }),
    }));
    const __VLS_2 = __VLS_1({
        ...{ class: "font-bold text-gray-700" },
        exactActiveClass: "text-green-500",
        to: ({ name: 'event-detail' }),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const { default: __VLS_4 } = __VLS_3.slots;
    var __VLS_3;
    const __VLS_5 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
    // @ts-ignore
    RouterLink;
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
        ...{ class: "font-bold text-gray-700" },
        exactActiveClass: "text-green-500",
        to: ({ name: 'event-register' }),
    }));
    const __VLS_7 = __VLS_6({
        ...{ class: "font-bold text-gray-700" },
        exactActiveClass: "text-green-500",
        to: ({ name: 'event-register' }),
    }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    const { default: __VLS_9 } = __VLS_8.slots;
    var __VLS_8;
    const __VLS_10 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
    // @ts-ignore
    RouterLink;
    // @ts-ignore
    const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({
        ...{ class: "font-bold text-gray-700" },
        exactActiveClass: "text-green-500",
        to: ({ name: 'event-edit' }),
    }));
    const __VLS_12 = __VLS_11({
        ...{ class: "font-bold text-gray-700" },
        exactActiveClass: "text-green-500",
        to: ({ name: 'event-edit' }),
    }, ...__VLS_functionalComponentArgsRest(__VLS_11));
    const { default: __VLS_14 } = __VLS_13.slots;
    var __VLS_13;
    const __VLS_15 = {}.RouterView;
    /** @type {[typeof __VLS_components.RouterView, ]} */ ;
    // @ts-ignore
    RouterView;
    // @ts-ignore
    const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({
        event: (__VLS_ctx.event),
    }));
    const __VLS_17 = __VLS_16({
        event: (__VLS_ctx.event),
    }, ...__VLS_functionalComponentArgsRest(__VLS_16));
    // @ts-ignore
    [event,];
}
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-700']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            event: event,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=LayoutView.vue.js.map