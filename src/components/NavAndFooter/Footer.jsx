// import React from 'react'
// import { FaFacebookF, FaBasketballBall, FaPinterestP } from 'react-icons/fa';
// import { FaTwitter } from 'react-icons/fa6';
// const Footer = () => {
//   return (
//     <footer className="mt-20 pb-9 bg bg-slate-950">
//       <div className="container m-auto pb-12">
//         <ul className="py-9	flex gap-9 justify-center ">
//           <li>
//             <a href="#" className="text-white  font-medium	text-xs">
//               HOME
//             </a>
//           </li>
//           <li>
//             <a href="#" className="text-white  font-medium	text-xs">
//               ABOUT
//             </a>
//           </li>
//           <li>
//             <a href="#" className="text-white  font-medium	text-xs">
//               PORTFOLIO
//             </a>
//           </li>
//           <li>
//             <a href="#" className="text-white  font-medium	text-xs">
//               BLOG
//             </a>
//           </li>
//           <li>
//             <a href="#" className="text-white  font-medium	text-xs">
//               CONTACT
//             </a>
//           </li>
//         </ul>
//         <div className="text-black">
//           <ul className="flex gap-4 justify-center">
//             <li className="rounded-full w-8 h-8 bg-white flex justify-center items-center">
//               <a href="#">
//                 <FaFacebookF />
//               </a>
//             </li>
//             <li className="rounded-full w-8 h-8 bg-white flex justify-center items-center">
//               <a href="#">
//                 <FaTwitter />
//               </a>
//             </li>
//             <li className="rounded-full w-8 h-8 bg-white flex justify-center items-center">
//               <a href="#">
//                 <FaBasketballBall />
//               </a>
//             </li>
//             <li className="rounded-full w-8 h-8 bg-white flex justify-center items-center">
//               <a href="#">
//                 <FaPinterestP />
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <p className="text-white text-center border-t	pt-9	border-gray-800	">
//         © 2026 CaliberThemes || powerd by <span className="text-cyan-400">Shahriear Shuvo</span>
//       </p>
//     </footer>
//   );
// }

// export default Footer
import React from 'react';
import { FaFacebookF, FaBasketballBall, FaPinterestP } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-12 sm:mt-16 lg:mt-20 pb-7 sm:pb-9 bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
        {/* Navigation Menu */}
        <ul className="py-7 sm:py-9 flex flex-wrap gap-x-5 gap-y-4 sm:gap-x-9 justify-center">
          <li>
            <Link
              to="/"
              className="text-white font-medium text-xs hover:text-cyan-400 transition"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white font-medium text-xs hover:text-cyan-400 transition"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="text-white font-medium text-xs hover:text-cyan-400 transition"
            >
              PORTFOLIO
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="text-white font-medium text-xs hover:text-cyan-400 transition"
            >
              BLOG
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="text-white font-medium text-xs hover:text-cyan-400 transition"
            >
              CONTACT
            </a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="text-black">
          <ul className="flex flex-wrap gap-3 sm:gap-4 justify-center">
            <li className="rounded-full w-8 h-8 bg-white flex justify-center items-center hover:bg-cyan-400 transition">
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
            </li>

            <li className="rounded-full w-8 h-8 bg-white flex justify-center items-center hover:bg-cyan-400 transition">
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
            </li>

            <li className="rounded-full w-8 h-8 bg-white flex justify-center items-center hover:bg-cyan-400 transition">
              <a href="#" aria-label="Dribbble">
                <FaBasketballBall />
              </a>
            </li>

            <li className="rounded-full w-8 h-8 bg-white flex justify-center items-center hover:bg-cyan-400 transition">
              <a href="#" aria-label="Pinterest">
                <FaPinterestP />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-white text-center text-xs sm:text-sm border-t border-gray-800 pt-6 sm:pt-9 px-4 leading-6">
        © 2026 CaliberThemes || Powered by{' '}
        <span className="text-cyan-400">Shahriear Shuvo</span>
      </p>
    </footer>
  );
};

export default Footer;
