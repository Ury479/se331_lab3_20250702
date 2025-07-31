import { ref, onMounted, defineProps } from 'vue';
import EventService from '@/services/EventService';
const event = ref(null);
const props = defineProps({
    id: {
        type: String,
        required: true
    }
});
onMounted(() => {
    EventService.getEvent(parseInt(props.id)).then((response) => {
        event.value = response.data;
    });
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
if (__VLS_ctx.event) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    (__VLS_ctx.event.title);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.event.description);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.event.organizer);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.event.date);
    (__VLS_ctx.event.time);
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
}
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            event: event,
        };
    },
    props: {
        id: {
            type: String,
            required: true
        }
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        id: {
            type: String,
            required: true
        }
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=EventDetailView.vue.js.map