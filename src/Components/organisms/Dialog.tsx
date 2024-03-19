import React from "react";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = ({ children, isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-stone-950 opacity-85 dark:opacity-95"></div>
          <div className="rounded-lg z-50 relative">
            <button className="absolute -top-4 -right-4" onClick={onClose}>
              X
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Dialog;
