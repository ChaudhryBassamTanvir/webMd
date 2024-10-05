"use client";
import { useParams } from "next/navigation";
import { supportGroupData } from "@/constants/support-group-data";
import Hero from "@/app/components/healthy-beauty-components/Hero";
import SupportGroupArticle from "@/app/components/support-group-component/SupportGroupArticle";
import { useState } from "react";
const supportgroup = () => {
  const { slug } = useParams();
  const [condition, setCondition] = useState<any>(null);

  const data = supportGroupData.find((condition) => {
    return condition.slug === slug;
  });

  // console.log("data", data);

  return (
    <>
      <div className="bg-[#F8F8F8]">
        <Hero condition={data} />
        <SupportGroupArticle condition={data} />
      </div>
    </>
  );
};

export default supportgroup;
