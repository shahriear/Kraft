// import React from 'react'

// const BlogTag = ({ tag }) => {
//   return (
//     <div>
//       <a
//         href="#"
//         className="text-secondary border-2 border-gray-300 p-1 flex gap-x-10"
//       >
//         {tag}
//       </a>
//     </div>
//   );
// };

// export default BlogTag
import React from 'react';

const BlogTag = ({ tag }) => {
  return (
    <div>
      <a
        href="#"
        className="text-secondary border-2 border-gray-300 px-3 py-2 flex items-center justify-center text-xs sm:text-sm whitespace-nowrap hover:bg-black hover:text-white transition duration-300"
      >
        {tag}
      </a>
    </div>
  );
};

export default BlogTag;