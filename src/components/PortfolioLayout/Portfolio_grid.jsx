// import React from 'react';
// import PortfolioGrid_items from './PortfolioGrid_items';

// const Portfolio_grid = () => {
//   return (
//     <section className="container">
//       <h1 className="font-roboto font-medium text-6xl text-primary py-14 ">
//         Grid Two Column
//       </h1>
//       <ul className="py-9	flex gap-3.5 ">
//         <li>
//           <a href="#" className="font-normal text-base">
//             All /
//           </a>
//         </li>
//         <li>
//           <a href="#" className="font-normal text-base">
//             Branding /
//           </a>
//         </li>
//         <li>
//           <a href="#" className="font-normal text-base">
//             Illustration /
//           </a>
//         </li>
//         <li>
//           <a href="#" className="font-normal text-base">
//             Logo
//           </a>
//         </li>
//       </ul>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-20">
//         <img src="/pic-4.png" alt="Project 4" className="w-full h-auto" />
//         <img src="/pic-5.png" alt="Project 5" className="w-full h-auto" />
//         <img src="/pic-6.png" alt="Project 6" className="w-full h-auto" />
//         <img src="/pic-7.png" alt="Project 7" className="w-full h-auto" />
//         <img src="/pic-8.png" alt="Project 8" className="w-full h-auto" />
//         <img src="/pic-9.png" alt="Project 9" className="w-full h-auto" />
//       </div>
//     </section>
//   );
// };

// export default Portfolio_grid;

import React from 'react';
import PortfolioGrid_items from './PortfolioGrid_items';

const Portfolio_grid = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="font-roboto font-medium text-3xl sm:text-4xl lg:text-6xl text-primary py-8 sm:py-10 lg:py-14">
        Grid Two Column
      </h1>

      <ul className="py-6 sm:py-9 flex flex-wrap gap-x-3 gap-y-3 sm:gap-x-4">
        <li>
          <a
            href="#"
            className="font-normal text-sm sm:text-base hover:text-secondary transition"
          >
            All /
          </a>
        </li>

        <li>
          <a
            href="#"
            className="font-normal text-sm sm:text-base hover:text-secondary transition"
          >
            Branding /
          </a>
        </li>

        <li>
          <a
            href="#"
            className="font-normal text-sm sm:text-base hover:text-secondary transition"
          >
            Illustration /
          </a>
        </li>

        <li>
          <a
            href="#"
            className="font-normal text-sm sm:text-base hover:text-secondary transition"
          >
            Logo
          </a>
        </li>
      </ul>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 pb-12 sm:pb-16 lg:pb-20">
        <img
          src="/pic-4.png"
          alt="Project 4"
          className="w-full h-auto object-cover"
        />

        <img
          src="/pic-5.png"
          alt="Project 5"
          className="w-full h-auto object-cover"
        />

        <img
          src="/pic-6.png"
          alt="Project 6"
          className="w-full h-auto object-cover"
        />

        <img
          src="/pic-7.png"
          alt="Project 7"
          className="w-full h-auto object-cover"
        />

        <img
          src="/pic-8.png"
          alt="Project 8"
          className="w-full h-auto object-cover"
        />

        <img
          src="/pic-9.png"
          alt="Project 9"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default Portfolio_grid;