import { useRouter } from 'vue-router';
import { useMessageStore } from '@/stores/message';
import { usePassengerStore } from '@/stores/passenger';
import { storeToRefs } from 'pinia';
const router = useRouter();
const messageStore = useMessageStore();
const passengerStore = usePassengerStore();
const { passenger } = storeToRefs(passengerStore);
const updatePassenger = () => {
    // If the update API call successful
    messageStore.updateMessage('Update is in progress');
    setTimeout(() => {
        messageStore.resetMessage();
        router.push({ name: 'passenger-list' });
    }, 5000);
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
if (__VLS_ctx.passenger) {
    // @ts-ignore
    [passenger,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
    __VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)({});
    (__VLS_ctx.passenger.name);
    // @ts-ignore
    [passenger,];
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
    __VLS_asFunctionalElement(__VLS_elements.strong, __VLS_elements.strong)({});
    (__VLS_ctx.passenger.name);
    // @ts-ignore
    [passenger,];
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
    __VLS_asFunctionalElement(__VLS_elements.strong, __VLS_elements.strong)({});
    (__VLS_ctx.passenger.trips);
    // @ts-ignore
    [passenger,];
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
    __VLS_asFunctionalElement(__VLS_elements.strong, __VLS_elements.strong)({});
    (__VLS_ctx.passenger.airline.length);
    // @ts-ignore
    [passenger,];
    __VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
        ...{ onClick: (__VLS_ctx.updatePassenger) },
        ...{ class: "py-2 px-5 bg-green-500 text-white border-none rounded cursor-pointer mt-2 hover:bg-green-600" },
    });
    // @ts-ignore
    [updatePassenger,];
}
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['px-5']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-green-500']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['border-none']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-green-600']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            passenger: passenger,
            updatePassenger: updatePassenger,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=EditView.vue.js.map