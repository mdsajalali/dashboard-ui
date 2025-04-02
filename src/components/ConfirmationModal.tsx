"use client";

import { useState, useEffect, useRef } from "react";
import { Trash2, X } from "lucide-react";

const ConfirmationModal = ({ textColor }: { textColor?: boolean }) => {
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
        className="rounded-full p-1 transition-colors duration-200"
      >
        <Trash2
          size={20}
          className={`${
            textColor ? "text-black" : "text-gray-500"
          } cursor-pointer hover:text-gray-600`}
        />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm transition-opacity duration-300">
          <div
            ref={modalRef}
            className="mx-auto w-full max-w-md scale-100 transform rounded-xl bg-white shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center justify-between border-b border-gray-200 p-5">
              <h2 className="text-xl font-semibold text-gray-900">
                Confirm Deletion
              </h2>
              <button
                onClick={handleClose}
                className="rounded-full p-1 transition-colors duration-200 hover:bg-gray-100"
              >
                <X
                  size={20}
                  className="cursor-pointer text-gray-500 transition-colors hover:text-gray-700"
                />
              </button>
            </div>

            <div className="p-5">
              <p className="leading-relaxed text-gray-600">
                Are you sure you want to delete this item? This action is
                permanent and cannot be undone.
              </p>
            </div>

            <div className="flex justify-end space-x-3 rounded-b-xl border-t border-gray-200 bg-gray-50 p-5">
              <button
                onClick={handleClose}
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  handleClose();
                }}
                className="rounded-lg bg-red-600 px-4 py-2 text-white transition-colors duration-200 hover:bg-red-700 focus:ring-2 focus:ring-red-300 focus:outline-none"
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
