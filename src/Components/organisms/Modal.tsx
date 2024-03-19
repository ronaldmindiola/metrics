// Modal.tsx
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-stone-950 opacity-95"></div>
      <div className=" dark:text-stone-800 p-8 rounded-lg z-50 relative">
        <button className="absolute top-0 right-0 p-2" onClick={onClose}>
          Cerrar
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
