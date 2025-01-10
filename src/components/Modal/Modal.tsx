import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

import IconButton from "../IconButton/IconButton";

interface ModalProps {
  children: ReactNode;
  position: "center" | "right";
  onClose: () => void;
}

const Modal = ({ onClose, children, position = "center" }: ModalProps) => {
  // Disable scrolling when a modal window is open
  useEffect(() => {
    const handleScroll = (event: Event) => {
      event.preventDefault();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return createPortal(
    <div
      className={`fixed top-0 z-10 flex h-full w-full items-center bg-secondary/50 backdrop-blur-sm transition-all duration-300 ${position === "center" ? "justify-center" : "justify-end"}`}
    >
      <div
        className={`animate__animated relative overflow-y-auto bg-primary p-4 pb-2 shadow-lg md:p-8 md:pb-3 ${
          position === "center"
            ? "animate__zoomIn max-h-[90vh] w-[90vw] max-w-[1180px] rounded-lg md:w-[80vw] lg:w-[60vw] xl:w-[50vw]"
            : "animate__slideInRight h-[98vh] max-w-[700px] rounded-l-lg md:w-[50vw] lg:w-[40vw] xl:w-[30vw]"
        }`}
      >
        <div className="absolute right-3 top-2">
          <IconButton onClick={onClose}>
            <img src="/cross-close.svg" alt="close icon" />
          </IconButton>
        </div>

        {children}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
