import { usePassengerStore } from '@/stores/passenger';
import { storeToRefs } from 'pinia';
const store = usePassengerStore();
const { passenger } = storeToRefs(store);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
if (__VLS_ctx.passenger) {
    // @ts-ignore
    [passenger,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
    __VLS_asFunctionalElement(__VLS_elements.h1, __VLS_elements.h1)({});
    (__VLS_ctx.passenger.name);
    // @ts-ignore
    [passenger,];
    __VLS_asFunctionalElement(__VLS_elements.nav, __VLS_elements.nav)({});
    const __VLS_0 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
    // @ts-ignore
    RouterLink;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        ...{ class: "font-bold text-gray-700" },
        exactActiveClass: "text-green-500",
        to: ({ name: 'passenger-detail' }),
    }));
    const __VLS_2 = __VLS_1({
        ...{ class: "font-bold text-gray-700" },
        exactActiveClass: "text-green-500",
        to: ({ name: 'passenger-detail' }),
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
        to: ({ name: 'passenger-airlines' }),
    }));
    const __VLS_7 = __VLS_6({
        ...{ class: "font-bold text-gray-700" },
        exactActiveClass: "text-green-500",
        to: ({ name: 'passenger-airlines' }),
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
        to: ({ name: 'passenger-edit' }),
    }));
    const __VLS_12 = __VLS_11({
        ...{ class: "font-bold text-gray-700" },
        exactActiveClass: "text-green-500",
        to: ({ name: 'passenger-edit' }),
    }, ...__VLS_functionalComponentArgsRest(__VLS_11));
    const { default: __VLS_14 } = __VLS_13.slots;
    var __VLS_13;
    const __VLS_15 = {}.RouterView;
    /** @type {[typeof __VLS_components.RouterView, ]} */ ;
    // @ts-ignore
    RouterView;
    // @ts-ignore
    const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({
        passenger: (__VLS_ctx.passenger),
    }));
    const __VLS_17 = __VLS_16({
        passenger: (__VLS_ctx.passenger),
    }, ...__VLS_functionalComponentArgsRest(__VLS_16));
    // @ts-ignore
    [passenger,];
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
            passenger: passenger,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=LayoutView.vue.js.map