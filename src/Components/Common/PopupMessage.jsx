import { useEffect, useState } from "react";

function PopupMessage({ message, onClose }) {
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    if (!message) return;

    setIsLeaving(false);

    const timer = setTimeout(() => {
      handleClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [message]);

  const handleClose = () => {
    setIsLeaving(true);
    setTimeout(() => {
      setIsLeaving(false);
      onClose();
    }, 300);
  };

  if (!message) return null;

  return (
    <div
      className={`fixed bottom-8 right-8 z-100 flex items-center gap-3 bg-brand-dark text-white px-5 py-4 rounded-sm shadow-2xl border border-brand-gray font-inter overflow-hidden transition-all duration-300 ease-out transform ${
        isLeaving
          ? "translate-y-8 opacity-0 scale-95"
          : "translate-y-0 opacity-100 scale-100 animate-toast-in"
      }`}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c69b7b] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c69b7b]"></span>
      </span>

      <span className="text-sm font-medium tracking-wide">
        {message}
      </span>

      <button
        onClick={handleClose}
        className="ml-4 text-gray-400 hover:text-white font-light text-base cursor-pointer transition-colors"
        aria-label="Close"
      >
        ✕
      </button>
      
      <div className="absolute bottom-0 left-0 h-0.5 bg-[#c69b7b] w-full animate-toast-progress" /> 
    </div>
  );
}

export default PopupMessage;