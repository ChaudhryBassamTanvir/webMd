"use client";
import React, { useState } from "react";
import Banner from "./Banner";
import Navbar from "../Navbar";
import BlogsOfSubpages from "./BlogsOfSubpages";
import SponsoredSearchesComponent from "./SponsoredSearchesComponent";
import NextSection from "./NextSection";
import { useParams } from "next/navigation";
import { SubComponentData } from "../../../constants/linked-sub-data";
import Article2 from "./Article2";
import NewsComponent from "./NewsComponent";
const page = () => {
  const sectionTitle = "MORE ON HEALTHY AGING";
  const imageUrl =
    "https://img.lb.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/article_thumbnails/hpt_toc_redesign/more_on/MoreOn_Ovarian.jpg?resize=300px:*&output-quality=75";

  const articles = [
    { title: "What Your Body Needs as You Age" },
    { title: "What Can Go Wrong With Your Feet As You Age" },
    { title: "Helpful Tips to Care for Aging Parents" },
  ];
  const { slug } = useParams();
  const [condition, setCondition] = useState<any>(null);

  const data = SubComponentData.find((condition) => {
    return condition.slug === slug;
  });
  console.log(data);

  return (
    <>
      <div className="bg-white  p-4 w-80">
        <h2 className="text-blue-600 flex justify-center items-center font-bold mb-2">
          {sectionTitle}
        </h2>
        <img
          src={imageUrl}
          alt="Healthy Aging"
          className="rounded-t-lg w-full h-40 object-cover mb-4"
        />
        <div>
          {articles.map((article, index) => (
            <div key={index} className="mb-4 bg-transparent">
              <div className="flex items-center">
                <span className="text-lg font-bold mr-2 mb-1"></span>
                <p className="text-gray-800 font-bold">
                  {index + 1}: {article.title}
                </p>
              </div>
              <hr className="border-gray-300 my-2" />
            </div>
          ))}
        </div>
      </div>
      {/* <div className="bg-[#F8F8F8] min-h-screen">
        <Navbar />
        <Banner />

        <BlogsOfSubpages />
        <NextSection title="Nutrition Questions for Your Doctor" />
        <Article2 />
        <NewsComponent />
        <br />

        <SponsoredSearchesComponent />
      </div> */}
      {/* <TestNav /> */}
    </>
  );
};

export default page;
// import React from "react";

// const page = () => {
//   return <div>handleClickOutside</div>;
// };

// export default page;
