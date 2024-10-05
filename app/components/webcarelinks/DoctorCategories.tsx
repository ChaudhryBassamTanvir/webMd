// components/DoctorCategories.tsx
import React from 'react';

const categories = [
  {
    title: 'Find Providers by Specialty',
    items: [
      'Internal Medicine',
      'Cardiovascular Disease',
      'Family Medicine',
      'Neurology',
      'Gastroenterology',
    ],
  },
  {
    title: 'Find Providers by Procedure',
    items: [
      'TMS Transcranial Magnetic Stimulation',
      'Ketamine Infusion Therapy',
      'Colonoscopy',
      'ADHD Testing',
      'Hernia Repair',
    ],
  },
  {
    title: 'Find Providers by Condition',
    items: [
      'HIV Infection',
      'Chronic Fatigue Syndrome',
      'Osteoporosis',
      'Autism',
      'Lymphedema',
    ],
  },
  {
    title: 'Find All Providers',
    items: [
      'New York City doctors',
      'Los Angeles doctors',
      'Chicago doctors',
      'By Location',
      'Newly Added Providers',
    ],
  },
  {
    title: 'List Your Practice',
    items: [],
  },
];

const DoctorCategories: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="text-blue-600 hover:text-blue-800 cursor-pointer mb-4">
        Find Doctors &gt;
      </div>
      <hr />
      <div className="bg-white p-6 rounded-lg shadow-md mt-4">
        <div className="grid grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <div key={index}>
              <h3 className="font-bold text-blue-600 mb-2">{category.title}</h3>
              <ul>
                {category.items.map((item, idx) => (
                  <li key={idx} className="mb-1 text-gray-700">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorCategories;
