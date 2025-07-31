import { useMessageStore } from '@/stores/message';
import { storeToRefs } from 'pinia';
import { toRefs } from 'vue';
const props = defineProps();
const { event } = toRefs(props);
const store = useMessageStore();
const { message } = storeToRefs(store);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
if (__VLS_ctx.message) {
    // @ts-ignore
    [message,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        id: "flashMessage",
        ...{ class: "animate-fade" },
    });
    __VLS_asFunctionalElement(__VLS_elements.h4, __VLS_elements.h4)({});
    (__VLS_ctx.message);
    // @ts-ignore
    [message,];
}
__VLS_asFunctionalElement(__VLS_elements.h1, __VLS_elements.h1)({});
(__VLS_ctx.event.title);
// @ts-ignore
[event,];
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
(__VLS_ctx.event.time);
(__VLS_ctx.event.date);
(__VLS_ctx.event.location);
// @ts-ignore
[event, event, event,];
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
(__VLS_ctx.event.description);
// @ts-ignore
[event,];
/** @type {__VLS_StyleScopedClasses['animate-fade']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            event: event,
            message: message,
        };
    },
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
    },
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=DetailView.vue.js.map