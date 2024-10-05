import React from "react";
import { SubComponentData } from "../../../constants/linked-sub-data";
import Link from "next/link";

const Article2 = ({ condition }: any) => {
  return (
    <div className="mx-auto pt-20 pb-20 px-4 md:px-0 w-full md:w-[80%]">
      <div className="relative mb-6">
        <h2 className="text-2xl ml-2 font-bold mb-4 text-[#00157c] font-sans">
          {SubComponentData[0]?.suggestionSection?.title}
        </h2>
        <hr className="border-[#3557ff] w-full pb-7" />
        {/* <div className="border-t border-gray-300 absolute right-0 top-0 w-20 md:w-80 border-t-2 border-[#3557ff]"></div> */}
      </div>
      <div className="flex flex-col md:flex-row justify-center">
        <div className="w-full p-1 md:w-[30vw] mb-6 md:mb-0">
          <img
            src={SubComponentData[0]?.suggestionSection?.suggestionImage}
            alt="Healthy Beauty"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full p-2 md:w-[40vw] md:pl-6 md:pr-6 bg-white flex flex-col justify-center space-y-8">
          {SubComponentData[0]?.suggestionSection?.suggestions?.map(
            (article: any, index: any, arr: any) => (
              <div key={index} className="mt-5">
                <Link href="#">
                  <h3 className="text-xl font-bold mb-1 hover:text-blue-600">
                    {article.title}
                  </h3>
                </Link>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {article.description}
                </p>
                {index < arr.length - 1 && (
                  <hr className="my-2 border-gray-300" />
                )}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Article2;
