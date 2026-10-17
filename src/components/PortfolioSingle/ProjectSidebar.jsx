import React from 'react';
import {
  Globe,
  Share2,
  ArrowUpRight,
  Link2,
  MessageCircle,
} from 'lucide-react';

export default function ProjectSidebar({ projectInfo }) {
  const { title, subtitle, description, client, categories, link } =
    projectInfo;

  return (
    <div className="flex flex-col space-y-8 pr-0 lg:pr-8">
      {/* Title & Description */}
      <div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
          {title}
        </h1>
        <p className="text-xl text-neutral-500 font-normal mt-1 mb-6">
          {subtitle}
        </p>
        <p className="text-neutral-600 leading-relaxed text-sm md:text-base">
          {description}
        </p>
      </div>

      {/* Meta Info */}
      <div className="space-y-6 pt-4 border-t border-neutral-200">
        <div>
          <span className="block text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1">
            Client
          </span>
          <p className="text-neutral-800 font-medium">{client}</p>
        </div>

        <div className="border-t border-neutral-100 pt-4">
          <span className="block text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1">
            Categories
          </span>
          <p className="text-neutral-800 font-medium">
            {categories.join(', ')}
          </p>
        </div>

        {/* Social Share */}
        <div className="border-t border-neutral-100 pt-4">
          <span className="block text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2">
            Share
          </span>
          <div className="flex items-center space-x-3 text-neutral-600">
            <button
              className="hover:text-black transition-colors p-1"
              aria-label="Website"
            >
              <Globe className="w-4 h-4" />
            </button>
            <button
              className="hover:text-black transition-colors p-1"
              aria-label="Chat"
            >
              <MessageCircle className="w-4 h-4" />
            </button>
            <button
              className="hover:text-black transition-colors p-1"
              aria-label="Copy Link"
            >
              <Link2 className="w-4 h-4" />
            </button>
            <button
              className="hover:text-black transition-colors p-1"
              aria-label="Share"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="pt-2">
        <a
          href={link}
          className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-black text-xs font-bold uppercase tracking-widest text-black hover:bg-black hover:text-white transition-all duration-300 group"
        >
          View Project
          <ArrowUpRight className="w-4 h-4 ml-2 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
}
// import React from 'react';
// import {
//   Facebook,
//   Twitter,
//   Instagram,
//   Share2,
//   ArrowUpRight,
// } from 'lucide-react';

// export default function ProjectSidebar({ projectInfo }) {
//   const { title, subtitle, description, client, categories, link } =
//     projectInfo;

//   return (
//     <div className="flex flex-col space-y-8 pr-0 lg:pr-8">
//       {/* Title & Description */}
//       <div>
//         <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
//           {title}
//         </h1>
//         <p className="text-xl text-neutral-500 font-normal mt-1 mb-6">
//           {subtitle}
//         </p>
//         <p className="text-neutral-600 leading-relaxed text-sm md:text-base">
//           {description}
//         </p>
//       </div>

//       {/* Meta Info */}
//       <div className="space-y-6 pt-4 border-t border-neutral-200">
//         <div>
//           <span className="block text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1">
//             Client
//           </span>
//           <p className="text-neutral-800 font-medium">{client}</p>
//         </div>

//         <div className="border-t border-neutral-100 pt-4">
//           <span className="block text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1">
//             Categories
//           </span>
//           <p className="text-neutral-800 font-medium">
//             {categories.join(', ')}
//           </p>
//         </div>

//         {/* Social Share */}
//         <div className="border-t border-neutral-100 pt-4">
//           <span className="block text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2">
//             Share
//           </span>
//           <div className="flex items-center space-x-3 text-neutral-600">
//             <button
//               className="hover:text-black transition-colors p-1"
//               aria-label="Facebook"
//             >
//               {/* <Facebook className="w-4 h-4" /> */}
//             </button>
//             <button
//               className="hover:text-black transition-colors p-1"
//               aria-label="Twitter"
//             >
//               <Twitter className="w-4 h-4" />
//             </button>
//             <button
//               className="hover:text-black transition-colors p-1"
//               aria-label="Instagram"
//             >
//               <Instagram className="w-4 h-4" />
//             </button>
//             <button
//               className="hover:text-black transition-colors p-1"
//               aria-label="Share"
//             >
//               <Share2 className="w-4 h-4" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* CTA Button */}
//       <div className="pt-2">
//         <a
//           href={link}
//           className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-black text-xs font-bold uppercase tracking-widest text-black hover:bg-black hover:text-white transition-all duration-300 group"
//         >
//           View Project
//           <ArrowUpRight className="w-4 h-4 ml-2 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
//         </a>
//       </div>
//     </div>
//   );
// }
