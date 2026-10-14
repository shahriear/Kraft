import React from 'react'
import { FaFacebookF, FaBasketballBall, FaPinterestP } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';
const Footer = () => {
  return (
    <footer className="mt-20 pb-9 bg bg-slate-950">
      <div className="container m-auto pb-12">
        <ul className="py-9	flex gap-9 justify-center ">
          <li>
            <a href="#" className="text-white  font-medium	text-xs">
              HOME
            </a>
          </li>
          <li>
            <a href="#" className="text-white  font-medium	text-xs">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#" className="text-white  font-medium	text-xs">
              PORTFOLIO
            </a>
          </li>
          <li>
            <a href="#" className="text-white  font-medium	text-xs">
              BLOG
            </a>
          </li>
          <li>
            <a href="#" className="text-white  font-medium	text-xs">
              CONTACT
            </a>
          </li>
        </ul>
        <div className="text-black">
          <ul className="flex gap-4 justify-center">
            <li className="rounded-full w-8 h-8 bg-white flex justify-center items-center">
              <a href="#">
                <FaFacebookF />
              </a>
            </li>
            <li className="rounded-full w-8 h-8 bg-white flex justify-center items-center">
              <a href="#">
                <FaTwitter />
              </a>
            </li>
            <li className="rounded-full w-8 h-8 bg-white flex justify-center items-center">
              <a href="#">
                <FaBasketballBall />
              </a>
            </li>
            <li className="rounded-full w-8 h-8 bg-white flex justify-center items-center">
              <a href="#">
                <FaPinterestP />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-white text-center border-t	pt-9	border-gray-800	">
        © 2020 CaliberThemes
      </p>
    </footer>
  );
}

export default Footer