
// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faPinterestP } from '@fortawesome/free-brands-svg-icons';
// import Logo from '@/public/logos/logo';

// const WebCareFooter: React.FC = () => {
//   return (
//     <footer className="bg-[#113551] text-white py-8 mt-12">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex justify-between items-center border-b border-gray-700 pb-4 mb-4">
//           <div className="space-x-6">
//             <a href="#" className="hover:underline">Policies</a>
//             <a href="#" className="hover:underline">About</a>
//             <a href="#" className="hover:underline">Our Apps</a>
//             <a href="#" className="hover:underline">For Advertisers</a>
//           </div>
//           <div className="space-x-4">
//             <a href="#" className="text-white">
//               <FontAwesomeIcon icon={faFacebookF} />
//             </a>
//             <a href="#" className="text-white">
//               <FontAwesomeIcon icon={faPinterestP} />
//             </a>
//           </div>
//         </div>
//         <div className="flex justify-between items-center pb-4">
//           <div className="space-x-4">
//             <a href="#" className="hover:underline">Privacy Policy</a>
//             <a href="#" className="hover:underline">Cookie Policy</a>
//             <a href="#" className="hover:underline">Editorial Policy</a>
//             <a href="#" className="hover:underline">Advertising Policy</a>
//             <a href="#" className="hover:underline">Correction Policy</a>
//             <a href="#" className="hover:underline">Terms of Use</a>
//           </div>
//           <div className="space-x-4">
//             <img src="/seal.svg" alt="TRUSTe Certified Privacy" className="inline-block" />
//             <img src="/tag-registered.png" alt="Tag" className="inline-block" />
//             <img src="/ad-choice.png" alt="AdChoices" className="inline-block" />
//           </div>
//         </div>
//         <div className="text-sm border-t border-gray-700 pt-4 flex justify-between items-center">
//           <p>© 2005-2024 WebMD LLC, an Internet Brands company. All rights reserved. WebMD does not provide medical advice, diagnosis or treatment.</p>
//           <div className='flex items-center'>
//             <Logo />
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default WebCareFooter;


import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import Logo from '@/public/logos/logo';

const WebCareFooter: React.FC = () => {
  return (
    <footer className="bg-[#113551] text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-4 mb-4">
          <div className="space-x-6 mb-4 md:mb-0">
            <a href="#" className="hover:underline">Policies</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Our Apps</a>
            <a href="#" className="hover:underline">For Advertisers</a>
          </div>
          <div className="space-x-4">
            <a href="#" className="text-white">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="text-white">
              <FontAwesomeIcon icon={faPinterestP} />
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pb-4">
          <div className="space-x-4 mb-4 md:mb-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Cookie Policy</a>
            <a href="#" className="hover:underline">Editorial Policy</a>
            <a href="#" className="hover:underline">Advertising Policy</a>
            <a href="#" className="hover:underline">Correction Policy</a>
            <a href="#" className="hover:underline">Terms of Use</a>
          </div>
          <div className="space-x-4 flex flex-wrap justify-center md:justify-end">
            <img src="/seal.svg" alt="TRUSTe Certified Privacy" className="inline-block" />
            <img src="/tag-registered.png" alt="Tag" className="inline-block" />
            <img src="/ad-choice.png" alt="AdChoices" className="inline-block" />
          </div>
        </div>
        <div className="text-sm border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">© 2005-2024 WebMD LLC, an Internet Brands company. All rights reserved. WebMD does not provide medical advice, diagnosis or treatment.</p>
          <div className='flex items-center'>
            <Logo />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default WebCareFooter;
