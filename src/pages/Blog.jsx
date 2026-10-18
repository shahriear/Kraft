import React, { useEffect, useState } from 'react';

import Heading from '../components/Blog/Heading';
import BlogItem from '../components/Blog/BlogItem';
import axios from 'axios';
import Loading from './Loading';

const Blog = () => {
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/products').then(res => {
      setBlogData(res.data);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return <Loading />;
  }
  blogData.length = 10;
  return (
    <div>
      <Heading />
      <div className="container">
        {blogData.map(item => (
          <BlogItem key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
