import React, { useState } from 'react';

export default function ProjectGallery({ galleryData, onImageClick }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const { carousel, mugs } = galleryData;

  return (
    <div className="space-y-8">
      {/* Top Carousel Container */}
      <div className="relative bg-[#e6e6e6] aspect-[16/10] sm:aspect-[16/9] rounded-lg overflow-hidden flex items-center justify-center p-6 md:p-12 shadow-inner">
        <div
          className="w-full h-full flex items-center justify-center cursor-pointer transition-transform duration-500"
          onClick={() => onImageClick(carousel[activeSlide].title)}
        >
          {/* Mockup Display */}
          <div
            className={`w-4/5 h-4/5 bg-gradient-to-br ${carousel[activeSlide].bgClass} rounded-sm shadow-2xl p-6 text-white flex flex-col justify-between transform -rotate-3 hover:rotate-0 transition-all duration-500`}
          >
            <div className="text-xs tracking-widest opacity-80 uppercase font-mono">
              ✦ Mockups-Design
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold tracking-wide">
                {carousel[activeSlide].title}
              </h3>
              <p className="text-xs opacity-90 font-light">
                {carousel[activeSlide].subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-2">
          {carousel.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                activeSlide === index
                  ? 'bg-black w-6'
                  : 'bg-neutral-400 hover:bg-neutral-600'
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Grid Images (Mugs) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mugs.map(mug => (
          <div
            key={mug.id}
            onClick={() => onImageClick(mug.name)}
            className="bg-[#e6e6e6] aspect-square rounded-lg p-8 flex items-center justify-center cursor-pointer group hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            {/* 3D Mug Visual representation */}
            <div className="relative w-36 h-36 rounded-full bg-neutral-900 border-8 border-red-600 flex items-center justify-center text-white shadow-xl transform group-hover:scale-105 transition-transform duration-300">
              <div className="text-center p-2">
                <span className="text-red-500 font-serif italic text-lg block">
                  free
                </span>
                <span className="text-xs font-bold tracking-widest block uppercase">
                  Mug Mockup
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
