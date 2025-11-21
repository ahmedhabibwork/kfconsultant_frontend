import { useModalStore } from "../store/modal";

export const useModal = () => {
    const { openModal, closeModal } = useModalStore();
    return { openModal, closeModal };
};