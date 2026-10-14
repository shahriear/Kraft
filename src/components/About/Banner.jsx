import React from 'react'

const Banner = () => {
  return (
    <section className="pt-16 bg-third ">
      <div className="container flex items-center">
        <div className="w-3/5">
          <h1 className="font-roboto font-medium text-6xl text-primary">
            Mike Reaves
          </h1>
          <p className="font-roboto font-normal text-base	text-secondary">
            Product designer
          </p>
        </div>
        <div className="w-2/5">
          <img src="/mike-pic.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Banner