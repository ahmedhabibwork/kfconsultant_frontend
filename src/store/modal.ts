import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ModalState {
  isOpen: boolean;
  view: React.ReactNode;
  title?: string;
  customSize?: string;
  origin?: { x: number; y: number } | null;
  openModal: (args: {
    view: React.ReactNode;
    customSize?: string;
    title?: string;
    origin?: { x: number; y: number } | null;
  }) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>()(
  devtools(
    (set) => ({
      isOpen: false,
      view: null,
      title: "",
      customSize: "500px",
      origin: null,
      openModal: ({ view, customSize, title, origin }) =>
        set({ isOpen: true, view, customSize, title, origin: origin ?? null }),
      closeModal: () => set({ isOpen: false, view: null, origin: null }),
    }),
    { name: "Modal-store" }
  )
);