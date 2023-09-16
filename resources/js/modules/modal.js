import { ref } from "vue";

export const useModalModule = () => {

    const modalState = ref(false);
    const modalTitle = ref(null);

    const openModal = (title) => {
        document.body.classList.add("modal-open");
        modalState.value = true;
        modalTitle.value = title || 'Title Here';
    };

    const closeModal = () => {
        document.body.classList.remove("modal-open");
        modalState.value = false;
    };

    const currState = () => {
        return modalState.value;
    };

    const currTitle = () => {
        return modalTitle.value;
    };

    return {
        currState,
        currTitle,
        openModal,
        closeModal,
    };
}
