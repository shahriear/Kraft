import React from 'react';

const Education_item = ({ year, children, border }) => {
  return (
    <div className={`${border ? border : ''}`}>
      <h3 className="font-medium font-roboto text-primary text-sm	">{year}</h3>
      <p className="font-normal font-roboto text-sm text-secondary mt-1">
        {children}
      </p>
    </div>
  );
};

export default Education_item;
