"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Banner = ({ condition }: any) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const tags = condition?.tags || [];

  return (
    <div className="mt-20 ml-4 sm:ml-6 md:ml-8 lg:ml-10 xl:ml-12">
      <div className="max-w-[96%] sm:w-full   px-1 sm:px-1 md:pr-1 lg:px-16">
        <label htmlFor="healthyAging" className="block text-sm mb-2">
          {condition?.title}
        </label>
        <nav className="w-full p-3 mt-2 rounded-md bg-[#EDF0FF] relative">
          <div className="flex flex-col md:flex-row items-start md:items-center text-sm md:text-base">
            <div className="mb-2 md:mb-0 mr-2">{condition?.short_title}</div>
            <div
              onClick={handleDropdownToggle}
              className="relative md:border-l-2 border-gray-600 text-lg text-blue-600 flex items-center cursor-pointer mt-2 md:mt-0"
            >
              <div className="hover:bg-[#d3d8f3] px-2 py-2 flex items-center">
                {condition?.dropDown_title}
                <button
                  onClick={handleDropdownToggle}
                  className={`ml-2 transform transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                >
                  <FaChevronDown />
                </button>
              </div>
            </div>
          </div>
        </nav>
        {isDropdownOpen && (
          <nav className="w-full p-3 rounded-md bg-white relative mt-2 md:mt-0">
            <div className="flex flex-col md:flex-row items-start md:items-center text-sm">
              <div className="ml-4 text-lg flex flex-wrap gap-4 md:gap-6 lg:gap-8">
                {tags.map((tag: any, index: any) => (
                  <a
                    key={index}
                    href={`/${tag.slug}`}
                    className="text-black hover:bg-[#EDF0FF] px-2 py-2 rounded-md"
                  >
                    {tag.label}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Banner;
