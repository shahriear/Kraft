import React from 'react'

const About_items = ({ titel, icon }) => {
  return (
    <div className="bg-third py-16 flex flex-col gap-8 items-center hover:bg-secondary group transition-all cursor-pointer">
      <span className="text-5xl	group-hover:text-white font-roboto CiFileOn transition-all">
        {icon}
      </span>
      <h2 className="font-medium text-lg group-hover:text-white font-roboto transition-all">
        {titel}
      </h2>
    </div>
  );
};


export default About_items