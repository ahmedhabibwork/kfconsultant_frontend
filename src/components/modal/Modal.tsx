"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useModalStore } from "../../store/modal";

function Modal() {
  const { isOpen, closeModal, view, title, customSize, origin } =
    useModalStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Dialog */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
              x: origin ? origin.x - window.innerWidth / 2 : 0,
              y: origin ? origin.y - window.innerHeight / 2 : 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0,
              x: origin ? origin.x - window.innerWidth / 2 : 0,
              y: origin ? origin.y - window.innerHeight / 2 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
            style={{
              width: customSize,
              maxWidth: "90vw",
            }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary rounded-lg shadow-2xl p-6 z-50 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            {view}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export function ModalProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Modal />
    </>
  );
}
