// import React from 'react';

// const Portfolio = () => {
//   return (
//     <section>
//       <div className="container m-auto">
//         <ul className="py-9	flex gap-3.5 justify-center">
//           <li>
//             <a href="#" className="font-normal text-base">
//               All /
//             </a>
//           </li>
//           <li>
//             <a href="#" className="font-normal text-base">
//               Branding /
//             </a>
//           </li>
//           <li>
//             <a href="#" className="font-normal text-base">
//               Illustration /
//             </a>
//           </li>
//           <li>
//             <a href="#" className="font-normal text-base">
//               Logo
//             </a>
//           </li>
//         </ul>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pb-20">
//           <img src="/pic-1.png" alt="pic-1" className="w-full" />
//           <img src="/pic-2.png" alt="pic-1" className="w-full" />
//           <img src="/pic-3.png" alt="pic-1" className="w-full" />
//           <img src="/pic-4.png" alt="pic-1" className="w-full" />
//           <img src="/pic-5.png" alt="pic-1" className="w-full" />
//           <img src="/pic-6.png" alt="pic-1" className="w-full" />
//           <img src="/pic-7.png" alt="pic-1" className="w-full" />
//           <img src="/pic-8.png" alt="pic-1" className="w-full" />
//           <img src="/pic-9.png" alt="pic-1" className="w-full" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Portfolio;

import React, { useState } from 'react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Branding', 'Illustration', 'Logo'];

  // Portfolio images with categories
  const portfolioData = [
    { id: 1, image: '/pic-1.png', category: 'Branding' },
    { id: 2, image: '/pic-2.png', category: 'Illustration' },
    { id: 3, image: '/pic-3.png', category: 'Logo' },
    { id: 4, image: '/pic-4.png', category: 'Branding' },
    { id: 5, image: '/pic-5.png', category: 'Illustration' },
    { id: 6, image: '/pic-6.png', category: 'Logo' },
    { id: 7, image: '/pic-7.png', category: 'Branding' },
    { id: 8, image: '/pic-8.png', category: 'Illustration' },
    { id: 9, image: '/pic-9.png', category: 'Logo' },
  ];

  const filteredPortfolio =
    activeCategory === 'All'
      ? portfolioData
      : portfolioData.filter(item => item.category === activeCategory);

  return (
    <section>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Categories */}
        <ul className="py-9 flex flex-wrap gap-x-4 gap-y-3 justify-center">
          {categories.map((category, index) => (
            <li key={category}>
              <button
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`font-normal text-sm sm:text-base transition-colors duration-300 cursor-pointer ${
                  activeCategory === category
                    ? 'text-black font-medium'
                    : 'text-gray-400 hover:text-black'
                }`}
              >
                {category}
                {index !== categories.length - 1 && ' /'}
              </button>
            </li>
          ))}
        </ul>

        {/* Portfolio Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 pb-20">
          {filteredPortfolio.map(item => (
            <div key={item.id} className="overflow-hidden group">
              <img
                src={item.image}
                alt={`${item.category} project ${item.id}`}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-130"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;