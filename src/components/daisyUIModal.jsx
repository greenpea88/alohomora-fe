import { Dialog } from '@headlessui/react';
import { MoonLoader } from 'react-spinners';
import 'tailwindcss/tailwind.css';

export default function DaisyUIModal({ isOpen, isLoading, onClose }) {
  return (
    <div>
    <input type="checkbox" id="my-modal-4" className="modal-toggle" />
    <label htmlFor="my-modal-4" className="modal cursor-pointer">
      <label className="modal-box relative" htmlFor="">
        <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
        <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
      </label>
    </label>

    </div>
  );
}
