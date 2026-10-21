import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50
        flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center
        rounded-full bg-emerald-400 text-white shadow-lg
        hover:bg-gray-700 hover:-translate-y-1
        transition-all duration-300
        ${
          visible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-5 pointer-events-none'
        }`}
    >
      <ArrowUp size={22} />
    </button>
  );
};

export default BackToTop;
