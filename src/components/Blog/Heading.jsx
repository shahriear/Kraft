// import React from 'react'

// const Heading = () => {
//   return (
//     <section>
//       <div className="container">
//         <h1 className="text-primary font-roboto font-medium text-6xl pt-4 pb-2">
//           Blog
//         </h1>
//         <p className="text-secondary font-roboto font-normal text-lg pb-10">
//           Thoughts and Upcomings are shared here.
//         </p>
//       </div>
//     </section>
//   );
// }

// export default Heading

import React from 'react';

const Heading = () => {
  return (
    <section>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-primary font-roboto font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl pt-4 pb-2">
          Blog
        </h1>

        <p className="text-secondary font-roboto font-normal text-sm sm:text-base lg:text-lg pb-8 sm:pb-10 leading-relaxed">
          Thoughts and Upcomings are shared here.
        </p>
      </div>
    </section>
  );
};

export default Heading;