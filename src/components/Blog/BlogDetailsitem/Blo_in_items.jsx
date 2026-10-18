import React from 'react'

const Blo_in_items = ({ text, icon }) => {
  return (
    <div className="text-secondary border-t-2 border-gray-200 pt-2 pb-2">
      <p border="border-b pb-5">{text}</p>
      <span className="text-1xl	text-black font-roboto">{icon}</span>
    </div>
  );
};

export default Blo_in_items