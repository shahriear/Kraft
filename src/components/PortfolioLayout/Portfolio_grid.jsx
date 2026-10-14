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
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
        <PortfolioGrid_items img="/pic-2.png" />
        <PortfolioGrid_items img="/pic-1.png" />
        <PortfolioGrid_items img="/pic-3.png" />
        <PortfolioGrid_items img="/pic-4.png" />
        <PortfolioGrid_items img="/pic-9.png" />
        <PortfolioGrid_items img="/pic-5.png" />
      </div>
    </section>
  );
};

export default Portfolio_grid;
