import React from 'react';
import { Link } from 'react-router-dom';

const BlogItem = ({data}) => {
  return (
    <div className="flex pb-14">
      <div className="w-1/3">
        <img src={data.images[0]} alt="donut-img " />
     
      </div>
      <div className="Items_txt ml-12">
        <h2 className="text-primary font-roboto font-medium text-3xl">
          {data.title}
        </h2>
        <h3 className="text-primary font-roboto font-medium text-sm pt-2 pb-5">
          By Caliberthemes / In Inspirational /
          {new Date(data.creationAt).toDateString()}
        </h3>
        <p className="text-secondary pb-7 max-w-sm">
          {data.description.substring(0, 175)}
          ...
        </p>
        <Link
          // to={`/blog/${data.id}`}
          className="border-solid border-2 border-black box-border px-4 py-2"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
