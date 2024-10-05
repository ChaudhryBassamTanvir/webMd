"use client";
import React, { useState } from "react";
import Banner from "@/app/components/linked-sub-components/Banner";
import Navbar from "@/app/components/Navbar";
import BlogsOfSubpages from "@/app/components/linked-sub-components/BlogsOfSubpages";
import SponsoredSearchesComponent from "@/app/components/linked-sub-components/SponsoredSearchesComponent";
import NextSection from "@/app/components/linked-sub-components/NextSection";
import { useParams } from "next/navigation";
import { SubComponentData } from "@/constants/linked-sub-data";
import Article2 from "@/app/components/linked-sub-components/Article2";
import NewsComponent from "@/app/components/linked-sub-components/NewsComponent";
import Footer from "@/app/components/Footer";
const SubDetail = () => {
  const { slug } = useParams();
  const [condition, setCondition] = useState<any>(null);

  const data = SubComponentData.find((condition) => {
    return condition.slug === slug;
  });
  console.log("sub component data", data);
  console.log("slug", slug);

  return (
    <>
      <div className="bg-[#F8F8F8] min-h-screen">
        <Navbar />
        <Banner condition={data} />

        <BlogsOfSubpages condition={data} />
        <NextSection
          condition={data}
          title="Nutrition Questions for Your Doctor"
        />
        <Article2 condition={data} />
        <NewsComponent condition={data} />
        <br />

        <SponsoredSearchesComponent condition={data} />
        <Footer />
      </div>
    </>
  );
};

export default SubDetail;
