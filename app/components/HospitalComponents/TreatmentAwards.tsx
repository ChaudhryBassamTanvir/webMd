
import React from 'react';

const TreatmentAwards: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto py-12 flex flex-col md:flex-row items-start">
            <div className="w-full md:w-2/3">
                <h1 className="text-4xl font-semibold text-gray-800 mb-4">Treatment Awards</h1>
                <p className="mb-6">
                    In addition to specialty awards, the WebMD Choice Awards also recognize excellence in 25 key treatment areas.
                    Click the links below to view hospitals that were voted top performers in each treatment category.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <ul className="space-y-1 text-[#187AAB] font-semibold text-lg">
                        <li>Angioplasty</li>
                        <li>Arthroscopy</li>
                        <li>Back Pain Relief Surgery</li>
                        <li>Blood Cancer Treatment</li>
                        <li>Brain Surgery</li>
                        <li>Breast Cancer Treatment</li>
                        <li>Colorectal Cancer Treatment</li>
                        <li>Colorectal Surgery</li>
                        <li>Coronary Bypass</li>
                        <li>GERD Surgery Treatment</li>
                        <li>Heart Valve Replacement</li>
                        <li>Hernia Repair</li>
                        <li>Hip Replacement</li>
                    </ul>
                    <ul className="space-y-1 text-[#187AAB] font-semibold text-lg">
                        <li>Knee Replacement</li>
                        <li>Lung Cancer Treatment</li>
                        <li>Pacemaker or Defibrillator Placement</li>        
                        <li>Prostate Cancer Treatment</li>
                        <li>Rotator Cuff Repair</li>
                        <li>Skin Cancer Treatment</li>
                        <li>Sleep Disorder</li>
                        <li>Spinal Surgery</li>
                        <li>Spine Surgery</li>
                        <li>Stent Placement</li>
                        <li>Stomach Cancer Treatment</li>
                    </ul>
                </div>
            </div>
            <div className="w-full md:w-1/3 md:pl-8 mt-8 md:mt-0">
                <img src="/images/best-hospital/Orthopedics.png" alt="Doctor and Patient" className="w-full h-auto" />
            </div>
        </div>
    );
};

export default TreatmentAwards;
