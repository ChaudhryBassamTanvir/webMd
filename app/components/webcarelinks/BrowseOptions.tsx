// import React from 'react';

// const BrowseOptions: React.FC = () => {
//   return (
//     <div className="bg-gray-100 flex items-center justify-center">
//       <div className="bg-white flex items-center gap-10 p-6 rounded-lg shadow-md max-w-4xl w-full">
//         <div className="text-center mb-4">
//           <h2 className="text-lg font-semibold">Browse:</h2>
//         </div>
//         <div className="flex justify-center space-x-4">
//           <div className="border border-gray-300 rounded-lg p-4">
//             <div className="flex items-center space-x-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 className="w-6 h-6 text-pink-500"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M5 13l4 4L19 7"
//                 />
//               </svg>
//               <span className="font-semibold">All Conditions</span>
//             </div>
//           </div>
//           <div className="border border-gray-300 rounded-lg p-4">
//             <div className="flex items-center space-x-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 className="w-6 h-6 text-pink-500"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M5 13l4 4L19 7"
//                 />
//               </svg>
//               <span className="font-semibold">All Procedures</span>
//             </div>
//           </div>
//           <div className="border border-gray-300 rounded-lg p-4">
//             <div className="flex items-center space-x-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 className="w-6 h-6 text-pink-500"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M5 13l4 4L19 7"
//                 />
//               </svg>
//               <span className="font-semibold">All Locations</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BrowseOptions;


import React from 'react';

const BrowseOptions: React.FC = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center py-8">
      <div className="bg-white flex flex-col md:flex-row items-center gap-10 p-6 rounded-lg shadow-md max-w-4xl w-full">
        <div className="text-center mb-4 md:mb-0">
          <h2 className="text-lg font-semibold">Browse:</h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="border border-gray-300 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-pink-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="font-semibold">All Conditions</span>
            </div>
          </div>
          <div className="border border-gray-300 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-pink-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="font-semibold">All Procedures</span>
            </div>
          </div>
          <div className="border border-gray-300 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-pink-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="font-semibold">All Locations</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseOptions;
