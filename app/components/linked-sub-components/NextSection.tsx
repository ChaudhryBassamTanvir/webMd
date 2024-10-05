import React from "react";
import { FaShareAlt, FaRegBookmark } from "react-icons/fa";

const NextSection = ({ title, condition }: any) => {
  return (
    <div className="mx-auto pt-20 pb-20 px-4 md:px-0 w-full md:w-[80%]">
      <div className="flex flex-col md:flex-row justify-between items-start mb-4">
        <div className="flex flex-wrap space-x-2 mb-4 md:mb-0">
          <button className="text-blue-700 bg-white px-3 py-2 text-sm md:text-base hover:underline mb-2 md:mb-0">
            Sources
          </button>
          <button className="text-blue-700 bg-white px-3 py-2 text-sm md:text-base hover:underline mb-2 md:mb-0">
            Update History
          </button>
        </div>
        <div className="flex flex-wrap space-x-4 text-sm md:text-base">
          <button className="text-blue-600 flex items-center mb-2 md:mb-0">
            <FaShareAlt className="mr-1" />
            Share
          </button>
          <button className="text-blue-600 flex items-center mb-2 md:mb-0">
            <FaRegBookmark className="mr-1" />
            Save
          </button>
        </div>
      </div>

      <div className="border-t border-gray-300 pt-4 text-left">
        <a href="#">
          <p className="text-gray-500 text-xs md:text-sm mb-4 md:mb-8 hover:underline">
            View privacy policy, copyright and trust info
          </p>
        </a>
        <a href="#" className="cursor-pointer">
          <div className="bg-[#EDF0FF] px-2 md:px-4 py-4 md:py-6 rounded-lg flex justify-between items-center">
            <div>
              <p className="text-md md:text-lg pb-1 font-extrabold text-[#00157C]">
                NEXT
              </p>
              <p className="text-lg md:text-xl font-bold hover:text-blue-600">
                {title}
              </p>
            </div>
            <div className="text-blue-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-6 md:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default NextSection;
