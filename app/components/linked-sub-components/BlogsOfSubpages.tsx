"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";

const BlogsOfSubpages = ({ condition }: any) => {
  const [showAllTags, setShowAllTags] = useState<{ [key: number]: boolean }>(
    {}
  );

  const toggleShowAllTags = (index: number) => {
    setShowAllTags((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const highlightTryThis = (text: string) => {
    return text.split("\n").map((line, index) =>
      line.includes("Try this:") ? (
        <React.Fragment key={index}>
          {line.split("Try this:").map((part, i) =>
            i === 1 ? (
              <React.Fragment key={i}>
                <strong>Try this:</strong>

                {part}
              </React.Fragment>
            ) : (
              part
            )
          )}
        </React.Fragment>
      ) : (
        <p key={index}>
          <br />
          {line}
        </p>
      )
    );
  };

  return (
    <div className="mx-auto flex justify-center items-center px-2 md:px-10 lg:px-0">
      <div className="w-[95%] md:w-[85%] lg:w-[70%]">
        <div className="mt-10 w-full md:w-[95%] lg:w-full">
          <div className="md:border-r pr-4 border-gray-300 md:mr-56 mb-20">
            {condition?.faqsec?.map((section: any, sectionIndex: any) => {
              const tags = section?.tags2 || [];
              const initialTags = tags.slice(0, 4);
              const remainingTags = tags.slice(4);

              return (
                <div key={sectionIndex} className="mb-8 mt-7">
                  <h1 className="text-xl md:text-3xl lg:text-4xl font-bold w-full md:w-[95%] lg:w-full">
                    {section.title}
                  </h1>
                  <div className="text-base md:text-lg lg:text-xl w-full md:w-[95%] lg:w-full leading-relaxed mb-9 font-sans">
                    {highlightTryThis(section.short_description)}
                  </div>
                  <div className="flex flex-wrap items-center gap-2 w-full md:w-[95%] lg:w-full pb-9">
                    {initialTags.map((tag: any, index: any) => (
                      <div
                        key={index}
                        className="px-4 py-2 bg-white text-sm font-medium text-gray-700 rounded-lg shadow"
                      >
                        {tag.label}
                      </div>
                    ))}
                    {remainingTags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {showAllTags[sectionIndex] &&
                          remainingTags.map((tag: any, index: any) => (
                            <div
                              key={index}
                              className="px-4 py-2 bg-white text-sm font-medium text-gray-700 rounded-lg shadow"
                            >
                              {tag.label}
                            </div>
                          ))}
                        <button
                          onClick={() => toggleShowAllTags(sectionIndex)}
                          className="flex items-center px-4 py-2 bg-white text-sm font-medium text-blue-600 rounded-lg shadow hover:bg-gray-200"
                        >
                          <FaChevronDown
                            className={`transform transition-transform ${
                              showAllTags[sectionIndex] ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="text-gray-400 text-sm pb-1">
                    {section?.time_show}
                  </div>
                  <div className="text-base md:text-lg lg:text-xl w-full md:w-[95%] lg:w-full leading-relaxed font-sans">
                    {highlightTryThis(section.long_discription)}
                  </div>

                  <ul className="list-disc list-inside text-blue-400 pl-5">
                    {section?.list?.map((item: any, index: any) => (
                      <li
                        key={index}
                        className="hover:underline text-base md:text-lg lg:text-xl"
                      >
                        <Link href="">{item?.label}</Link>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-3 text-lg font-bold text-blue-900">
                    {section.related_head}
                    <a
                      href="#"
                      className="text-thin text-blue-500 hover:underline"
                    >
                      {section.relatedDes}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsOfSubpages;
