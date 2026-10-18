// import React from 'react'

// const About_items = ({ titel, icon }) => {
//   return (
//     <div className="bg-third py-16 flex flex-col gap-8 items-center hover:bg-secondary group transition-all cursor-pointer">
//       <span className="text-5xl	group-hover:text-white font-roboto CiFileOn transition-all">
//         {icon}
//       </span>
//       <h2 className="font-medium text-lg group-hover:text-white font-roboto transition-all">
//         {titel}
//       </h2>
//     </div>
//   );
// };

// export default About_items
import React from 'react';

const About_items = ({ titel, icon }) => {
  return (
    <div className="bg-third py-10 sm:py-12 lg:py-16 px-4 flex flex-col gap-5 sm:gap-6 lg:gap-8 items-center justify-center text-center hover:bg-secondary group transition-all duration-300 cursor-pointer">
      <span className="text-4xl sm:text-5xl group-hover:text-white font-roboto transition-all duration-300">
        {icon}
      </span>

      <h2 className="font-medium text-base sm:text-lg group-hover:text-white font-roboto transition-all duration-300">
        {titel}
      </h2>
    </div>
  );
};

export default About_items;