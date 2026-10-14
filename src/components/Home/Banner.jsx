import React from 'react'

const Banner = () => {
  return (
    <section className="py-20 sm:py-35 lg:py-80	bg-[url('/Background.png')] bg-cover bg-center	bg-no-repeat">
      <div className="container m-auto">
        <h1 className="font-medium text-7xl	text-center">Creative Studio</h1>
        <p className="font-normal	text-xl	text-center pt-5 text-slate-500">
          We turn ideas into reality.
        </p>
      </div>
    </section>
  );
}

export default Banner