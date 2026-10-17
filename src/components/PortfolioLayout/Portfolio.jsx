import React, { useState } from 'react';

const portfolioItems = [
  { id: 1, img: '/pic-7.png', category: 'Branding', size: 'large' },
  { id: 2, img: '/pic-5.png', category: 'Illustration', size: 'tall' },
  { id: 3, img: '/pic-6.png', category: 'Logo', size: 'small' },
  { id: 4, img: '/pic-4.png', category: 'Branding', size: 'small' },
  { id: 5, img: '/pic-8.png', category: 'Illustration', size: 'small' },

  
  
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Branding', 'Illustration', 'Logo'];

  const filteredItems =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section className="container mx-auto px-5 py-8">
      <h1 className="text-4xl font-medium mb-14">Mosaic</h1>

      {/* Category Filter */}
      <ul className="flex flex-wrap items-center gap-4 mb-7 text-sm">
        {categories.map((category, index) => (
          <React.Fragment key={category}>
            <li>
              <button
                onClick={() => setActiveCategory(category)}
                className={`transition-colors ${
                  activeCategory === category
                    ? 'text-gray-400'
                    : 'text-black hover:text-gray-400'
                }`}
              >
                {category}
              </button>
            </li>

            {index !== categories.length - 1 && (
              <li className="text-gray-500">/</li>
            )}
          </React.Fragment>
        ))}
      </ul>

      {/* Mosaic Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-start">
        {filteredItems.map(item => (
          <div
            key={item.id}
            className={`overflow-hidden ${
              item.size === 'large' ? 'lg:col-span-2' : 'col-span-1'
            }`}
          >
            <img
              src={item.img}
              alt={`Portfolio ${item.id}`}
              className="w-full h-auto block"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
