import React from 'react';

const PortfolioGrid_items = (img) => {
  return (
    <div className="book w-fit ">
      <div className="cover ">
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default PortfolioGrid_items;
