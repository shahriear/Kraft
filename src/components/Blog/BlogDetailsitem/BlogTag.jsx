import React from 'react'

const BlogTag = ({ tag }) => {
  return (
    <div>
      <a
        href="#"
        className="text-secondary border-2 border-gray-300 p-1 flex gap-x-10"
      >
        {tag}
      </a>
    </div>
  );
};

export default BlogTag