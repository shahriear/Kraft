// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useLocation, useParams } from 'react-router-dom';
// import BlogTag from './BlogDetailsitem/BlogTag';
// import Blo_in_items from './BlogDetailsitem/Blo_in_items';
// import { FaFacebookF, FaPinterestP, FaTwitter } from 'react-icons/fa';
// import Loading from '../../pages/Loading';

// const BlogDetails = () => {
//   const [loading, setLoading] = useState(true);
//   const params = useParams();
//   const [blogdata, setBlogData] = useState({});

//   useEffect(() => {
//     axios
//       .get(`https://api.escuelajs.co/api/v1/products/${params.id}`)
//       .then(res => {
//         setBlogData(res.data);
//         setLoading(false);
//       });
//   });
//   if (loading) {
//     return <Loading />;
//   }

//   return (
//     <div className="container pb-14 flex ">
//       <div className="w-1/3">
//         <div className=" pb-7">
//           <img src={blogdata?.images} alt="donut-img " />
//         </div>
//         <div className="Items_txt">
//           <h2 className="text-primary font-roboto font-medium text-3xl">
//             {blogdata?.title}
//           </h2>
//           <h3 className="text-primary font-roboto font-medium text-sm pt-2 pb-5">
//             By Caliberthemes / In Inspirational /
//             {new Date(blogdata?.creationAt).toDateString()}
//           </h3>
//           <p className="text-secondary pb-7 max-w-sm">
//             {blogdata?.description}
//           </p>
//         </div>
//         <div>
//           <h2 className="text-primary font-roboto font-medium text-3xl">
//             The most important factor
//           </h2>
//           <p className="text-secondary pb-3 text-center w-80">
//             Aenean sodales sem sed erat auctor semper Cras dictum iaculis
//             fringilla. Proin malesuada Etiam sodales quam ac maximus sodales

//           </p>
//           <h4 className="text-secondary pb-4 text-start">
//             The most important factor
//           </h4>
//           <div className="flex gap-3">
//             <BlogTag tag="Agency" />
//             <BlogTag tag="Creative" />
//             <BlogTag tag="Minimal" />
//           </div>
//           <div className=" flex justify-between mt-24 bg-stone-100 p-3">
//             <h2 className="text-primary font-roboto font-medium text-1xl">
//               Share
//             </h2>
//             <div className="flex gap-4">
//               <Blo_in_items icon={<FaFacebookF />} />
//               <Blo_in_items icon={<FaTwitter />} />
//               <Blo_in_items icon={<FaPinterestP />} />
//             </div>
//           </div>
//         </div>
//       </div>
//       <h1></h1>
//       <div className="ml-48">
//         <nav className="navbar bg-body-tertiary ">
//           <form
//             className="d-flex border-solid border-2 border-slate-300 p-2 mt-3"
//             role="search"
//           >
//             <input
//               className="form-control me-2 "
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//             <button className="btn btn-outline-success" type="submit">
//               Search
//             </button>
//           </form>
//         </nav>
//         <h3 className="text-primary font-roboto font-medium text-2xl pt-12 pb-4">
//           Recent Posts
//         </h3>
//         <Blo_in_items text="Balance is important in design" />
//         <Blo_in_items text="Tips for organizing things" />
//         <Blo_in_items text="The shades of grey" />
//         <Blo_in_items text="Inspiration from nature" />

//         <h3 className="text-primary font-roboto font-medium text-2xl pt-12 pb-4">
//           Categories
//         </h3>
//         <Blo_in_items text="Artificial" />
//         <Blo_in_items text="Inspirational" />
//         <Blo_in_items text="Intelligence" />
//         <Blo_in_items text="Motivational" />
//         <h3 className="text-primary font-roboto font-medium text-2xl mb-8 border-b-2 border-gray-200 pt-8 pb-2">
//           Tags
//         </h3>
//         <div className="grid grid-cols-3 gap-4">
//           <BlogTag tag="Agency" />
//           <BlogTag tag="Creative" />
//           <BlogTag tag="Digital" />
//           <BlogTag tag="Exceptional" />
//           <BlogTag tag="Media" />
//           <BlogTag tag="hgMinimal" />
//           <BlogTag tag="Photography" />
//           <BlogTag tag="SEO" />
//           <BlogTag tag="Tips" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogDetails;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-14 flex flex-col lg:flex-row gap-8 lg:gap-12">
      <div className="w-full lg:w-2/3 min-w-0">
        <div className="pb-7">
          <img
            src={blogdata?.images}
            alt="donut-img"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="Items_txt">
          <h2 className="text-primary font-roboto font-medium text-2xl sm:text-3xl break-words">
            {blogdata?.title}
          </h2>

          <h3 className="text-primary font-roboto font-medium text-xs sm:text-sm pt-2 pb-5 leading-relaxed">
            By Caliberthemes / In Inspirational /
            {new Date(blogdata?.creationAt).toDateString()}
          </h3>

          <p className="text-secondary pb-7 max-w-full leading-7 break-words">
            {blogdata?.description}
          </p>
        </div>

        <div>
          <h2 className="text-primary font-roboto font-medium text-2xl sm:text-3xl">
            The most important factor
          </h2>

          <p className="text-secondary pb-3 text-center w-full sm:w-80">
            Aenean sodales sem sed erat auctor semper Cras dictum iaculis
            fringilla. Proin malesuada Etiam sodales quam ac maximus sodales
          </p>

          <h4 className="text-secondary pb-4 text-start">
            The most important factor
          </h4>

          <div className="flex flex-wrap gap-3">
            <BlogTag tag="Agency" />
            <BlogTag tag="Creative" />
            <BlogTag tag="Minimal" />
          </div>

          <div className="flex justify-between items-center gap-4 mt-12 sm:mt-24 bg-stone-100 p-3 sm:p-4">
            <h2 className="text-primary font-roboto font-medium text-base sm:text-xl">
              Share
            </h2>

            <div className="flex gap-3 sm:gap-4">
              <Blo_in_items icon={<FaFacebookF />} />
              <Blo_in_items icon={<FaTwitter />} />
              <Blo_in_items icon={<FaPinterestP />} />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/3 min-w-0">
        <nav className="navbar bg-body-tertiary">
          <form
            className="flex w-full border-2 border-slate-300 p-2 mt-3"
            role="search"
          >
            <input
              className="min-w-0 flex-1 px-2 outline-none"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />

            <button
              className="shrink-0 border border-slate-300 px-3 sm:px-4 py-2 text-sm hover:bg-gray-100"
              type="submit"
            >
              Search
            </button>
          </form>
        </nav>

        <h3 className="text-primary font-roboto font-medium text-xl sm:text-2xl pt-8 lg:pt-12 pb-4">
          Recent Posts
        </h3>

        <Blo_in_items text="Balance is important in design" />
        <Blo_in_items text="Tips for organizing things" />
        <Blo_in_items text="The shades of grey" />
        <Blo_in_items text="Inspiration from nature" />

        <h3 className="text-primary font-roboto font-medium text-xl sm:text-2xl pt-8 lg:pt-12 pb-4">
          Categories
        </h3>

        <Blo_in_items text="Artificial" />
        <Blo_in_items text="Inspirational" />
        <Blo_in_items text="Intelligence" />
        <Blo_in_items text="Motivational" />

        <h3 className="text-primary font-roboto font-medium text-xl sm:text-2xl mb-6 sm:mb-8 border-b-2 border-gray-200 pt-8 pb-2">
          Tags
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
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