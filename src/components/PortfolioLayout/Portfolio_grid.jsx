import React from 'react';
import PortfolioGrid_items from './PortfolioGrid_items';

const Portfolio_grid = () => {
  return (
    <section className="container">
      <h1 className="font-roboto font-medium text-6xl text-primary py-14 ">
        Grid Two Column
      </h1>
      <ul className="py-9	flex gap-3.5 ">
        <li>
          <a href="#" className="font-normal text-base">
            All /
          </a>
        </li>
        <li>
          <a href="#" className="font-normal text-base">
            Branding /
          </a>
        </li>
        <li>
          <a href="#" className="font-normal text-base">
            Illustration /
          </a>
        </li>
        <li>
          <a href="#" className="font-normal text-base">
            Logo
          </a>
        </li>
      </ul>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-20">
        <img src="/pic-4.png" alt="Project 4" className="w-full h-auto" />
        <img src="/pic-5.png" alt="Project 5" className="w-full h-auto" />
        <img src="/pic-6.png" alt="Project 6" className="w-full h-auto" />
        <img src="/pic-7.png" alt="Project 7" className="w-full h-auto" />
        <img src="/pic-8.png" alt="Project 8" className="w-full h-auto" />
        <img src="/pic-9.png" alt="Project 9" className="w-full h-auto" />
      </div>
    </section>
  );
};

export default Portfolio_grid;
