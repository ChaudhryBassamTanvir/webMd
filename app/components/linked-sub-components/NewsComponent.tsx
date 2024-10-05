import React from "react";
import Link from "next/link";

const NewsSection = ({ condition }: any) => {
  return (
    <div className="mx-auto pt-20 pb-20 px-4 md:px-0 w-full md:w-[80%] text-left">
      <div className="relative mb-6">
        <h2 className="text-2xl font-bold mb-4 text-[#00157c] font-sans">
          {condition?.newssection?.title_head}
        </h2>
        <hr className="border-[#3557ff] w-full pb-7" />
        {/* <div className="border-t border-gray-300 absolute right-0 top-0 w-20 md:w-70 border-t-2 border-[#3557ff] md:border-t-0 md:border-r-2"></div> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {condition?.newssection?.news?.map((article: any, index: any) => (
          <div
            key={index}
            className="p-6 md:p-9 rounded-lg bg-white flex flex-col justify-between"
          >
            <div>
              <Link href="">
                {" "}
                <h2
                  className={`text-xl md:text-2xl font-bold hover:text-blue-700 ${
                    article.title ? "text-black" : "text-black"
                  }`}
                >
                  {article.title}
                </h2>
              </Link>
              <p className="text-gray-600 text-lg md:text-xl mt-2">
                {article.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
