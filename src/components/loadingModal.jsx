import { Dialog } from '@headlessui/react';
import { MoonLoader } from 'react-spinners';
import 'tailwindcss/tailwind.css';

export default function LoadingModal({ isOpen, isLoading, onClose }) {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="fixed z-10 inset-0 overflow-y-auto"
    >
      <Dialog.Overlay className="fixed inset-0 bg-gray-500 opacity-30" />
      <div className="flex items-center justify-center min-h-screen">
        {isLoading ? (
          <MoonLoader size={50} color={'#123abc'} />
        ) : (
          <Dialog.Content className="bg-white rounded-lg shadow-lg p-4">
            <Dialog.Title className="text-lg font-bold text-center">
              Modal Title
            </Dialog.Title>
            <Dialog.Description className="text-md">
              Modal content goes here.
            </Dialog.Description>
            <div className="flex justify-end mt-4">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </Dialog.Content>
        )}
      </div>
    </Dialog>
  );
}
