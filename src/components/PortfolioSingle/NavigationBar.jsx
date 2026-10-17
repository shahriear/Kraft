import React from 'react';
import { ChevronLeft, ChevronRight, Grid } from 'lucide-react';

export default function NavigationBar({ onPrev, onNext, onGridClick }) {
  return (
    <div className="my-16 py-6 border-y border-neutral-200 flex items-center justify-between px-4 sm:px-8 bg-neutral-50/50">
      <button
        onClick={onPrev}
        className="flex items-center text-xs sm:text-sm font-bold uppercase tracking-widest text-neutral-700 hover:text-black transition-colors group"
      >
        <ChevronLeft className="w-4 h-4 mr-1 transform group-hover:-translate-x-1 transition-transform" />
        Prev
      </button>

      <button
        onClick={onGridClick}
        className="p-2 hover:bg-neutral-200 rounded-md transition-colors text-neutral-700"
        aria-label="All projects grid"
      >
        <Grid className="w-5 h-5" />
      </button>

      <button
        onClick={onNext}
        className="flex items-center text-xs sm:text-sm font-bold uppercase tracking-widest text-neutral-700 hover:text-black transition-colors group"
      >
        Next
        <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}
