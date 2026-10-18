// import React from 'react';

// const Education_item = ({ year, children, border }) => {
//   return (
//     <div className={`${border ? border : ''}`}>
//       <h3 className="font-medium font-roboto text-primary text-sm	">{year}</h3>
//       <p className="font-normal font-roboto text-sm text-secondary mt-1">
//         {children}
//       </p>
//     </div>
//   );
// };

// export default Education_item;

import React from 'react';

const Education_item = ({ year, children, border }) => {
  return (
    <div className={`${border ? border : ''} min-w-0`}>
      <h3 className="font-medium font-roboto text-primary text-xs sm:text-sm leading-relaxed break-words">
        {year}
      </h3>

      <p className="font-normal font-roboto text-xs sm:text-sm text-secondary mt-1 leading-6 break-words">
        {children}
      </p>
    </div>
  );
};

export default Education_item;