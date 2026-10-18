// import React from 'react'
// import { BsBoxSeam, BsPencil } from 'react-icons/bs';
// import { CiFileOn } from 'react-icons/ci';
// import { IoIosCloudOutline } from 'react-icons/io';
// import About_items from './About_items';

// const AboutMe = () => {
//   return (
//     <section>
//       <div className="container">
//         <div>
//           <h1 className="font-medium text-4xl	pt-20	">About Me</h1>
//           <p className="font-normal text-secondary pt-6	">
//             I’m a Product designer currently working as freelancer. I’m from
//             Iceland but my work is essentially in Sydney. Specialized in
//             graphic, webdesign and interface design. I’ve been working as a
//             designer for six years. I’ve Completed my education from most
//             popular universities. Learning is the essential part of my life. I
//             take on freelance projects that pique my interest. Outside of my
//             work, I enjoy good food and the outdoors games with friends and
//             relatives. I also spend my spare time in libraries.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-14">
//           <About_items titel="Branding" icon={<BsBoxSeam />} />
//           <About_items titel="Caligraphy" icon={<BsPencil />} />
//           <About_items titel="Graphics" icon={<CiFileOn />} />
//           <About_items titel="Social Media" icon={<IoIosCloudOutline />} />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default AboutMe
import React from 'react';
import { BsBoxSeam, BsPencil } from 'react-icons/bs';
import { CiFileOn } from 'react-icons/ci';
import { IoIosCloudOutline } from 'react-icons/io';
import About_items from './About_items';

const AboutMe = () => {
  return (
    <section>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h1 className="font-medium text-3xl sm:text-4xl pt-12 sm:pt-16 lg:pt-20">
            About Me
          </h1>

          <p className="font-normal text-secondary text-sm sm:text-base leading-7 pt-5 sm:pt-6">
            I’m a Product designer currently working as freelancer. I’m from
            Iceland but my work is essentially in Sydney. Specialized in
            graphic, webdesign and interface design. I’ve been working as a
            designer for six years. I’ve Completed my education from most
            popular universities. Learning is the essential part of my life. I
            take on freelance projects that pique my interest. Outside of my
            work, I enjoy good food and the outdoors games with friends and
            relatives. I also spend my spare time in libraries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8 py-10 sm:py-12 lg:py-14">
          <About_items titel="Branding" icon={<BsBoxSeam />} />
          <About_items titel="Caligraphy" icon={<BsPencil />} />
          <About_items titel="Graphics" icon={<CiFileOn />} />
          <About_items titel="Social Media" icon={<IoIosCloudOutline />} />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;