"use client";

import { useState, useEffect, useRef } from "react";
import { Trash2, X } from "lucide-react";

const ConfirmationModal = ({ textColor }: { textColor?: boolean}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOpen = (): void => setIsOpen(true);
  const handleClose = (): void => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={handleOpen}
        className="p-1 rounded-full   transition-colors duration-200"
      >
        <Trash2
          size={20}
          className={`${
            textColor ? "text-black" : "text-gray-500"
          } cursor-pointer hover:text-gray-600`}
        />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
          <div
            ref={modalRef}
            className="bg-white rounded-xl shadow-2xl w-full max-w-md mx-auto transform transition-all duration-300 scale-100"
          >
            <div className="flex justify-between items-center p-5 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">
                Confirm Deletion
              </h2>
              <button
                onClick={handleClose}
                className="p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                <X
                  size={20}
                  className="text-gray-500 cursor-pointer hover:text-gray-700 transition-colors"
                />
              </button>
            </div>

            <div className="p-5">
              <p className="text-gray-600 leading-relaxed">
                Are you sure you want to delete this item? This action is
                permanent and cannot be undone.
              </p>
            </div>

            <div className="flex justify-end space-x-3 p-5 border-t border-gray-200 bg-gray-50 rounded-b-xl">
              <button
                onClick={handleClose}
                className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  handleClose();
                }}
                className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-300"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConfirmationModal;
