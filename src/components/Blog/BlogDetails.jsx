import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogTag from './BlogDetailsitem/BlogTag';
import Blo_in_items from './BlogDetailsitem/Blo_in_items';
import { FaFacebookF, FaPinterestP, FaTwitter } from 'react-icons/fa';
import Loading from '../../pages/Loading';

const BlogDetails = () => {
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const [blogdata, setBlogData] = useState({});

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products/${params.id}`)
      .then(res => {
        setBlogData(res.data);
        setLoading(false);
      });
  });
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="container pb-14 flex ">
      <div className="w-1/3">
        <div className=" pb-7">
          <img src={blogdata?.images} alt="donut-img " />
        </div>
        <div className="Items_txt">
          <h2 className="text-primary font-roboto font-medium text-3xl">
            {blogdata?.title}
          </h2>
          <h3 className="text-primary font-roboto font-medium text-sm pt-2 pb-5">
            By Caliberthemes / In Inspirational /
            {new Date(blogdata?.creationAt).toDateString()}
          </h3>
          <p className="text-secondary pb-7 max-w-sm">
            {blogdata?.description}
          </p>
        </div>
        <div>
          <h2 className="text-primary font-roboto font-medium text-3xl">
            The most important factor
          </h2>
          <p className="text-secondary pb-3 text-center w-80">
            Aenean sodales sem sed erat auctor semper Cras dictum iaculis
            fringilla. Proin malesuada Etiam sodales quam ac maximus sodales
            {/* <span className="text-secondary pt-6 text-start">
              <h4>The most important factor</h4>
            </span> */}
          </p>
          <h4 className="text-secondary pb-4 text-start">
            The most important factor
          </h4>
          <div className="flex gap-3">
            <BlogTag tag="Agency" />
            <BlogTag tag="Creative" />
            <BlogTag tag="Minimal" />
          </div>
          <div className=" flex justify-between mt-24 bg-stone-100 p-3">
            <h2 className="text-primary font-roboto font-medium text-1xl">
              Share
            </h2>
            <div className="flex gap-4">
              <Blo_in_items icon={<FaFacebookF />} />
              <Blo_in_items icon={<FaTwitter />} />
              <Blo_in_items icon={<FaPinterestP />} />
            </div>
          </div>
        </div>
      </div>
      <h1></h1>
      <div className="ml-48">
        <nav className="navbar bg-body-tertiary ">
          <form
            className="d-flex border-solid border-2 border-slate-300 p-2 mt-3"
            role="search"
          >
            <input
              className="form-control me-2 "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </nav>
        <h3 className="text-primary font-roboto font-medium text-2xl pt-12 pb-4">
          Recent Posts
        </h3>
        <Blo_in_items text="Balance is important in design" />
        <Blo_in_items text="Tips for organizing things" />
        <Blo_in_items text="The shades of grey" />
        <Blo_in_items text="Inspiration from nature" />

        <h3 className="text-primary font-roboto font-medium text-2xl pt-12 pb-4">
          Categories
        </h3>
        <Blo_in_items text="Artificial" />
        <Blo_in_items text="Inspirational" />
        <Blo_in_items text="Intelligence" />
        <Blo_in_items text="Motivational" />
        <h3 className="text-primary font-roboto font-medium text-2xl mb-8 border-b-2 border-gray-200 pt-8 pb-2">
          Tags
        </h3>
        <div className="grid grid-cols-3 gap-4">
          <BlogTag tag="Agency" />
          <BlogTag tag="Creative" />
          <BlogTag tag="Digital" />
          <BlogTag tag="Exceptional" />
          <BlogTag tag="Media" />
          <BlogTag tag="hgMinimal" />
          <BlogTag tag="Photography" />
          <BlogTag tag="SEO" />
          <BlogTag tag="Tips" />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
