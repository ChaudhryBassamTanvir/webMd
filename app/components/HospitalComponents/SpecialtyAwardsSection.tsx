import React from 'react';

function SpecialtyAwardsSection() {
  return (
    <div className="max-w-7xl mx-auto py-12 flex flex-col md:flex-row items-start">
      <div className="w-full md:w-1/3">
        <img src="/images/best-hospital/award.png" alt="Doctor and patient" className="w-full h-auto" />
      </div>
      
      <div className="w-full md:w-2/3 md:pl-8 mt-8 md:mt-0">
        <h2 className="text-4xl font-semibold text-gray-800">Specialty Awards</h2>
        <p className="text-gray-600 mt-4">
          The WebMD Choice Awards recognize hospital systems that provide superior patient care in six key specialties. Click the links below to view hospital rankings based on votes from both patients and health care providers.
        </p>
        <div className="mt-6 text-[#187AAB] grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="#" className=" font-semibold text-lg">Cardiology</a>
          <a href="#" className=" font-semibold text-lg">Oncology</a>
          <a href="#" className="font-semibold text-lg">Gastroenterology</a>
          <a href="#" className=" font-semibold text-lg">Orthopedics</a>
          <a href="#" className=" font-semibold text-lg">Neurology</a>
        </div>
      </div>
    </div>
  );
}

export default SpecialtyAwardsSection;



