"use client";
import React from "react";

const topics = [
  "ADHD",
  "ADHD in Children",
  "Alzheimer’s",
  "Ankylosing Spondylitis",
  "Asthma",
  "Atopic Dermatitis",
  "Atrial Fibrillation",
  "Breast Cancer",
  "Cholesterol Management",
  "COPD",
  "Crohn’s Disease",
  "Deep Vein Thrombosis",
  "Depression",
  "Diabetes, Type 2",
  "Fibromyalgia",
  "Food Allergies",
  "HIV",
  "Lung Cancer",
  "Lupus",
  "Migraine",
  "Multiple Myeloma",
  "Multiple Sclerosis",
  "Myasthenia Gravis",
  "Ovarian Cancer",
  "Prostate Cancer",
  "Psoriasis",
  "Psoriatic Arthritis",
  "Rheumatoid Arthritis",
  "Schizophrenia",
  "Sickle Cell Disease",
  "Sleep Disorders",
  "Substance Abuse",
  "Ulcerative Colitis",
];

const ExpertTopicsSection: React.FC = () => {
  return (
    <div className="mx-[2%] py-10 px-5 lg:px-10 bg-gray-100 w-full mx-auto">
      <div className="relative mb-6">
        <h2 className="text-lg font-bold mb-4 text-[#00157c] font-sans">
          EXPLORE PATIENT BLOG POSTS BY TOPIC
        </h2>
        <div className="border-[1px] border-gray-200 mt-2 mb-4"></div>
      </div>
      <div className="flex flex-wrap gap-2 sm:gap-4">
        {topics.map((topic, index) => (
          <a
            key={index}
            href="#"
            className="bg-white text-blue-600 hover:text-blue-700 hover:underline py-1 px-3 sm:py-2 sm:px-4 rounded-full border border-gray-300 text-sm sm:text-base"
          >
            {topic}
          </a>
        ))}
      </div>
      {/* <div className="mt-6 text-center">
        <p className="text-gray-500">ADVERTISEMENT</p>
        <div className="w-2/3 h-32 border border-gray-300 mt-2 mx-auto"></div>
      </div> */}
    </div>
  );
};

export default ExpertTopicsSection;
