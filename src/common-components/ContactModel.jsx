"use client";
import { useModal } from "./providers/ModalContext";
import QuoteForm from "@/components/get-a-quote/QuoteForm";
import "animate.css";

const ContactModel = () => {
  const { openContactModal, setOpenContactModal } = useModal();

  const handleBackdropClick = (e) => {
    if (e.target.id === "modal-backdrop") {
      setOpenContactModal(false);
    }
  };

  if (!openContactModal) return null;

  return (
    <div
      id="modal-backdrop"
      onClick={handleBackdropClick}
      className="fixed inset-0 z-3000  flex items-center justify-center  bg-black/40 backdrop-blur-sm"
    >
      <div className="bg-white animate__animated animate__fadeInUp w-[90%]  lg:w-[50%]  m-auto rounded-2xl relative ">
        {/* Close button */}
        <button
          onClick={() => setOpenContactModal(false)}
          className="absolute top-[-3%] right-[-2%] w-8 h-8 flex items-center justify-center text-white bg-[#00CFAA] rounded-full shadow-lg hover:bg-[#00b38a] transition-colors"
        >
          &times;
        </button>

        <QuoteForm />
      </div>
    </div>
  );
};

export default ContactModel;
