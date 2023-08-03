import { useEffect } from "react";
import { createPortal } from "react-dom";

import css from "./Modal.module.css";
const modalRoot = document.querySelector("#root-modal");

export default function Modal({ children, toggleModal }) {
  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      toggleModal();
    }
  };

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return createPortal(
    <div className={css.overlay} onClick={handleBackdropClick}>
      <div className={css.content}>
        <button
          className={css.button}
          type="button"
          onClick={toggleModal}
          aria-label="close Modal Window"
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>close</title>
            <path d="M10 8.586l-7.071-7.071-1.414 1.414 7.071 7.071-7.071 7.071 1.414 1.414 7.071-7.071 7.071 7.071 1.414-1.414-7.071-7.071 7.071-7.071-1.414-1.414-7.071 7.071z"></path>
          </svg>
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
}
