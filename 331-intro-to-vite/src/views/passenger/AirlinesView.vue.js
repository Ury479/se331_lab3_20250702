import { usePassengerStore } from '@/stores/passenger';
import { storeToRefs } from 'pinia';
const store = usePassengerStore();
const { passenger } = storeToRefs(store);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['airline-card']} */ ;
// CSS variable injection 
// CSS variable injection end 
if (__VLS_ctx.passenger) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    for (const [airline] of __VLS_getVForSourceType((__VLS_ctx.passenger.airline))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: (airline.id),
            ...{ class: "airline-card" },
        });
        const __VLS_0 = {}.RouterLink;
        /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
            to: ({ name: 'airline-detail', params: { airlineId: airline.id } }),
            ...{ class: "airline-link" },
        }));
        const __VLS_2 = __VLS_1({
            to: ({ name: 'airline-detail', params: { airlineId: airline.id } }),
            ...{ class: "airline-link" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        __VLS_3.slots.default;
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "airline-info" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
            src: (airline.logo),
            alt: (airline.name),
            ...{ class: "airline-logo" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
        (airline.name);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (airline.country);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (airline.slogan);
        var __VLS_3;
    }
}
/** @type {__VLS_StyleScopedClasses['airline-card']} */ ;
/** @type {__VLS_StyleScopedClasses['airline-link']} */ ;
/** @type {__VLS_StyleScopedClasses['airline-info']} */ ;
/** @type {__VLS_StyleScopedClasses['airline-logo']} */ ;
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
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=AirlinesView.vue.js.map