import { useRouter } from 'vue-router';
import { useMessageStore } from '@/stores/message';
import { toRefs } from 'vue';
const props = defineProps();
const { event } = toRefs(props);
const router = useRouter();
const store = useMessageStore();
const register = () => {
    // If the registration API call successful
    // Push back to the event details view
    store.updateMessage('You are successfully registered for ' + props.event.title);
    setTimeout(() => {
        store.resetMessage();
    }, 3000);
    router.push({ name: 'event-detail', params: { id: props.event.id } });
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
__VLS_asFunctionalElement(__VLS_elements.h1, __VLS_elements.h1)({});
(__VLS_ctx.event.title);
// @ts-ignore
[event,];
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
    ...{ onClick: (__VLS_ctx.register) },
});
// @ts-ignore
[register,];
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            event: event,
            register: register,
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
//# sourceMappingURL=RegisterView.vue.js.map