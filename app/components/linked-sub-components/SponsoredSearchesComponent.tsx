import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
import { RiErrorWarningLine } from "react-icons/ri";
const SponsoredSearchesComponent = ({ condition }: any) => {
  return (
    <div className="mx-auto pt-20 pb-20 px-4 md:px-0 w-full md:w-[80%]">
      <div className="flex flex-col md:flex-row items-center gap-3 mb-4">
        <div className="text-xl text-[#00157C] pb-7 font-bold md:w-auto">
          SPONSORED SEARCHES FOR
        </div>
        <div className="flex-grow">
          <hr className="border-blue-600 w-full mb-7" />
        </div>
        <div className="flex gap-3">
          <BiLogoPlayStore size={30} className="text-blue-300 mb-7" />
          <RiErrorWarningLine size={30} className="text-blue-300 mb-7" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 justify-items-start mb-12">
        {condition?.sponsoredSearches?.map((search: any, index: number) => (
          <a
            key={index}
            href={search.href}
            className="flex items-center gap-4 text-lg md:text-xl  cursor-pointer"
          >
            <div
              className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold"
              style={{ backgroundColor: "#4169E1" }}
            >
              {index + 1}
            </div>
            <div className="hover:underline text-black">{search.label}</div>
            <FaChevronRight className="text-blue-600" />
          </a>
        ))}
      </div>

      <div className="text-xl text-[#00157C] font-bold mb-2 mt-5">
        RELATED LINKS
      </div>
      <div className="flex items-center mb-6">
        <hr className="border-blue-400 w-full pb-7" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-items-start">
        {condition?.relatedLinks?.map((link: any, index: number) => (
          <a
            key={index}
            href={link.href}
            className="hover:underline hover:text-blue-600 text-sm cursor-pointer"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SponsoredSearchesComponent;
