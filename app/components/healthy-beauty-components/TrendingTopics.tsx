import React from "react";

const TrendingTopics = ({ condition }: any) => {
  return (
    <div className="container mx-auto px-4 pt-9 mb-14 mt-14">
      <h2 className="text-2xl font-bold mb-4 text-[#00157c] font-sans">
        TRENDING TOPICS
      </h2>
      <hr className="border-gray-300 mb-4" />
      <div className="flex flex-wrap gap-4">
        {condition?.keywords?.map((topic: any, index: any) => (
          <div
            key={index}
            className="bg-slate-100 text-blue-500 rounded-full px-6 py-3 cursor-pointer transition-colors duration-200 hover:bg-blue-100 m-2"
          >
            {topic.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingTopics;
