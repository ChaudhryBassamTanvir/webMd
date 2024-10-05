"use client";
import React from "react";

const expertTopics = [
  "Childhood ADHD",
  "Diet & Nutrition",
  "Digestive Health",
  "Eye Health",
  "Heart Health",
  "Mental Health",
  "Pain Management",
  "Pet Health",
  "Skin Care",
];

const ExpertTopicBlogSection: React.FC = () => {
  return (
    <div className="mx-[2%] py-10 px-5 lg:px-10 bg-gray-100">
      <div className="relative mb-6">
        <h2 className="text-lg font-bold mb-4 text-[#00157c] font-sans">
          EXPLORE EXPERT BLOG POSTS BY TOPIC
        </h2>
        <div className="border-[1px] border-gray-200 mt-2 mb-4"></div>
      </div>
      <div className="flex flex-wrap gap-2 sm:gap-4">
        {expertTopics.map((topic, index) => (
          <a
            key={index}
            href="#"
            className="bg-white text-blue-600 hover:text-blue-700 hover:underline py-1 px-3 sm:py-2 sm:px-4 rounded-full border border-gray-300 text-sm sm:text-base"
          >
            {topic}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ExpertTopicBlogSection;
