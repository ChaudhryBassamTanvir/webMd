
import Image from 'next/image';
import React from 'react';

function HospitalHeroSection() {

  return (
    <><div className="relative bg-blue-900 text-white py-10 px-32">
      <div className="container mx-auto px-8 lg:px-16 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
          <h1 className="text-4xl font-bold mb-4">Best Hospitals According to Patients & Health Care Providers</h1>
          <p className="text-lg mb-4">Introducing the WebMD Patient Choice & Medscape Provider Choice Awards</p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:pl-8">
          <Image src="/images/best-hospital/ImageDesktop.webp" alt="Banner" width={600} height={400} className="rounded" />
        </div>
      </div>
    </div><div className="relative bg-blue-900 text-white py-10 px-32">
        <div className="container mx-auto px-8 lg:px-16 flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <h1 className="text-4xl font-bold mb-4">Best Hospitals According to Patients & Health Care Providers</h1>
            <p className="text-lg mb-4">Introducing the WebMD Patient Choice & Medscape Provider Choice Awards</p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:pl-8">
            <Image src="/images/best-hospital/ImageDesktop.webp" alt="Banner" width={600} height={400} className="rounded" />
          </div>
        </div>
      </div></>
  );
}

export default HospitalHeroSection;




