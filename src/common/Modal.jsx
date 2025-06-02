import { useEffect } from "react";
import { FaCircleXmark } from "react-icons/fa6";
import cn from "../utils/cn";

const Modal = ({
  isOpen,
  onClose,
  className,
  title,
  children,
  isOutsideClick = true,
}) => {
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        isOpen &&
        e.target.classList.contains("modal-overlay") &&
        isOutsideClick
      ) {
        onClose();
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen, onClose, isOutsideClick]);

  return (
    <div
      className={`fixed  top-0 left-0 z-50 bg-[#2222227c] overflow-x-hidden overflow-y-auto inset-0 h-[calc(100%)] max-h-full flex flex-col justify-center items-center modal-overlay zoom-in-element ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div
        className={cn(
          "bg-white rounded-lg p-5 shadow-lg  overflow-y-auto",
          className
        )}
      >
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <span className="font-bold">{title}</span>
            <FaCircleXmark
              onClick={() => onClose()}
              className="text-2xl text-primary duration-300 cursor-pointer"
            />
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};
export default Modal;