// import React from 'react'

// const Banner = () => {
//   return (
//     <section className="pt-16 bg-third ">
//       <div className="container flex items-center">
//         <div className="w-3/5">
//           <h1 className="font-roboto font-medium text-6xl text-primary">
//             Mike Reaves
//           </h1>
//           <p className="font-roboto font-normal text-base	text-secondary">
//             Product designer
//           </p>
//         </div>
//         <div className="w-2/5">
//           <img src="/mike-pic.png" alt="" />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Banner
import React from 'react';

const Banner = () => {
  return (
    <section className="pt-10 sm:pt-12 lg:pt-16 bg-third overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-4">
        {/* Banner Text */}
        <div className="w-full sm:w-3/5 text-center sm:text-left">
          <h1 className="font-roboto font-medium text-4xl sm:text-5xl lg:text-6xl text-primary leading-tight">
            Mike Reaves
          </h1>

          <p className="font-roboto font-normal text-sm sm:text-base text-secondary mt-2">
            Product designer
          </p>
        </div>

        {/* Banner Image */}
        <div className="w-full sm:w-2/5 flex justify-center sm:justify-end">
          <img
            src="/mike-pic.png"
            alt="Mike Reaves"
            className="w-full max-w-[280px] sm:max-w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;