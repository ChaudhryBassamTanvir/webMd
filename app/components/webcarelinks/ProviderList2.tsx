// import React from 'react';

// const ProviderList2: React.FC = () => {
//   return (
//     <div className="bg-white mt-5 max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
//         <div className="mb-8">
//           <h2 className="text-[#187AAB] text-sm font-semibold mb-2 hover:underline">Find Providers by Specialty</h2>
//           <ul className="space-y-2 text-sm">
//             <li className='hover:underline'>Internal Medicine</li>
//             <li className='hover:underline'>Cardiovascular Disease</li>
//             <li className='hover:underline'>Family Medicine</li>
//             <li className='hover:underline'>Neurology</li>
//             <li className='hover:underline'>Gastroenterology</li>
//           </ul>
//         </div>
//         <div className="mb-8">
//           <h2 className="text-[#187AAB] text-sm font-semibold mb-2 hover:underline">Find Providers by Procedure</h2>
//           <ul className="space-y-2 text-sm">
//             <li className='hover:underline'>TMS Transcranial Magnetic Stimulation</li>
//             <li className='hover:underline'>Ketamine Infusion Therapy</li>
//             <li className='hover:underline'>Colonoscopy</li>
//             <li className='hover:underline'>ADHD Testing</li>
//             <li className='hover:underline'>Hernia Repair</li>
//           </ul>
//         </div>
//         <div className="mb-8">
//           <h2 className="text-[#187AAB] text-sm font-semibold mb-2 hover:underline">Find Providers by Condition</h2>
//           <ul className="space-y-2 text-sm">
//             <li className='hover:underline'>HIV Infection</li>
//             <li className='hover:underline'>Chronic Fatigue Syndrome</li>
//             <li className='hover:underline'>Osteoporosis</li>
//             <li className='hover:underline'>Autism</li>
//             <li className='hover:underline'>Lymphedema</li>
//           </ul>
//         </div>
//         <div className="mb-8">
//           <h2 className="text-[#187AAB] text-sm font-semibold mb-2 hover:underline">Find All Providers</h2>
//           <ul className="space-y-2 text-sm">
//             <li className='hover:underline'>New York City doctors</li>
//             <li className='hover:underline'>Los Angeles doctors</li>
//             <li className='hover:underline'>Chicago doctors</li>
//             <li className='hover:underline'>By Location</li>
//             <li className='hover:underline'>Newly Added Providers</li>
//           </ul>
//         </div>
//         <div className="mb-8">
//           <h2 className="text-[#187AAB] text-sm font-semibold mb-2 hover:underline">List Your Practice</h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProviderList2;


import React from 'react';

const ProviderList2: React.FC = () => {
  return (
    <div className="bg-white mt-5 max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        <div className="mb-8">
          <h2 className="text-[#187AAB] text-sm font-semibold mb-2 hover:underline">Find Providers by Specialty</h2>
          <ul className="space-y-2 text-sm">
            <li className='hover:underline'>Internal Medicine</li>
            <li className='hover:underline'>Cardiovascular Disease</li>
            <li className='hover:underline'>Family Medicine</li>
            <li className='hover:underline'>Neurology</li>
            <li className='hover:underline'>Gastroenterology</li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-[#187AAB] text-sm font-semibold mb-2 hover:underline">Find Providers by Procedure</h2>
          <ul className="space-y-2 text-sm">
            <li className='hover:underline'>TMS Transcranial Magnetic Stimulation</li>
            <li className='hover:underline'>Ketamine Infusion Therapy</li>
            <li className='hover:underline'>Colonoscopy</li>
            <li className='hover:underline'>ADHD Testing</li>
            <li className='hover:underline'>Hernia Repair</li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-[#187AAB] text-sm font-semibold mb-2 hover:underline">Find Providers by Condition</h2>
          <ul className="space-y-2 text-sm">
            <li className='hover:underline'>HIV Infection</li>
            <li className='hover:underline'>Chronic Fatigue Syndrome</li>
            <li className='hover:underline'>Osteoporosis</li>
            <li className='hover:underline'>Autism</li>
            <li className='hover:underline'>Lymphedema</li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-[#187AAB] text-sm font-semibold mb-2 hover:underline">Find All Providers</h2>
          <ul className="space-y-2 text-sm">
            <li className='hover:underline'>New York City doctors</li>
            <li className='hover:underline'>Los Angeles doctors</li>
            <li className='hover:underline'>Chicago doctors</li>
            <li className='hover:underline'>By Location</li>
            <li className='hover:underline'>Newly Added Providers</li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-[#187AAB] text-sm font-semibold mb-2 hover:underline">List Your Practice</h2>
        </div>
      </div>
    </div>
  );
};

export default ProviderList2;