import React from 'react';

const Portfolio = () => {
  return (
    <section>
      <div className="container m-auto">
        <ul className="py-9	flex gap-3.5 justify-center">
          <li>
            <a href="#" className="font-normal text-base">
              All /
            </a>
          </li>
          <li>
            <a href="#" className="font-normal text-base">
              Branding /
            </a>
          </li>
          <li>
            <a href="#" className="font-normal text-base">
              Illustration /
            </a>
          </li>
          <li>
            <a href="#" className="font-normal text-base">
              Logo
            </a>
          </li>
        </ul>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pb-20">
          <img src="/pic-1.png" alt="pic-1" className="w-full" />
          <img src="/pic-2.png" alt="pic-1" className="w-full" />
          <img src="/pic-3.png" alt="pic-1" className="w-full" />
          <img src="/pic-4.png" alt="pic-1" className="w-full" />
          <img src="/pic-5.png" alt="pic-1" className="w-full" />
          <img src="/pic-6.png" alt="pic-1" className="w-full" />
          <img src="/pic-7.png" alt="pic-1" className="w-full" />
          <img src="/pic-8.png" alt="pic-1" className="w-full" />
          <img src="/pic-9.png" alt="pic-1" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
