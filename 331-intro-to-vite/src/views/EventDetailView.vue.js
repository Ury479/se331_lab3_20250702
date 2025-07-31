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
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
if (__VLS_ctx.event) {
    // @ts-ignore
    [event,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
    __VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)({});
    (__VLS_ctx.event.title);
    // @ts-ignore
    [event,];
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
    (__VLS_ctx.event.description);
    // @ts-ignore
    [event,];
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
    (__VLS_ctx.event.organizer);
    // @ts-ignore
    [event,];
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
    (__VLS_ctx.event.date);
    (__VLS_ctx.event.time);
    // @ts-ignore
    [event, event,];
}
else {
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
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