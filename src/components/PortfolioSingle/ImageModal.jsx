import React from 'react';
import { X } from 'lucide-react';

export default function ImageModal({ selectedImage, onClose }) {
  if (!selectedImage) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl max-w-lg w-full p-8 text-center relative shadow-2xl animate-in fade-in zoom-in duration-200"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-black p-1"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-2xl font-bold text-neutral-800 mb-2">
          {selectedImage}
        </h3>
        <p className="text-neutral-500 text-sm mb-6">
          Detailed view placeholder for this item.
        </p>

        <div className="h-48 bg-neutral-100 rounded-lg flex items-center justify-center text-neutral-400 font-mono text-sm border-2 border-dashed border-neutral-300">
          Preview Content
        </div>
      </div>
    </div>
  );
}
