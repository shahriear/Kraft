// import React from 'react';
// import { Link } from 'react-router-dom';

// const BlogItem = ({data}) => {
//   return (
//     <div className="flex pb-14">
//       <div className="w-1/3">
//         <img src={data?.images[0]} alt="donut-img " />

//       </div>
//       <div className="Items_txt ml-12">
//         <h2 className="text-primary font-roboto font-medium text-3xl">
//           {data?.title}
//         </h2>
//         <h3 className="text-primary font-roboto font-medium text-sm pt-2 pb-5">
//           By Caliberthemes / In Inspirational /
//           {new Date(data?.creationAt).toDateString()}
//         </h3>
//         <p className="text-secondary pb-7 max-w-sm">
//           {data?.description.substring(0, 175)}
//           ...
//         </p>
//         <Link
//           to={`/blog/${data?.id}`}
//           className="border-solid border-2 border-black box-border px-4 py-2"
//         >
//           Read More
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default BlogItem;

import React from 'react';
import { Link } from 'react-router-dom';

const BlogItem = ({ data }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 lg:gap-12 pb-10 sm:pb-14">
      {/* Blog Image */}
      <div className="w-full sm:w-1/3 shrink-0">
        <img
          src={data?.images?.[0]}
          alt={data?.title || 'Blog image'}
          className="w-full aspect-[4/3] sm:aspect-square object-cover rounded-sm"
        />
      </div>

      {/* Blog Content */}
      <div className="Items_txt w-full sm:flex-1 min-w-0">
        <h2 className="text-primary font-roboto font-medium text-2xl sm:text-3xl lg:text-4xl leading-snug break-words">
          {data?.title}
        </h2>

        <h3 className="text-primary font-roboto font-medium text-xs sm:text-sm pt-2 pb-4 sm:pb-5 leading-relaxed">
          By Caliberthemes / In Inspirational /
          {data?.creationAt ? new Date(data.creationAt).toDateString() : ''}
        </h3>

        <p className="text-secondary text-sm sm:text-base leading-7 pb-6 max-w-2xl">
          {data?.description?.substring(0, 175) || 'No description available'}
          ...
        </p>

        <Link
          to={`/blog/${data?.id}`}
          className="inline-block border-2 border-black px-4 py-2 text-sm sm:text-base hover:bg-black hover:text-white transition-colors duration-300"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
