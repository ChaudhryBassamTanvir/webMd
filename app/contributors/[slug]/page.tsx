"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { ContributorsData } from "@/constants/contributor-blog";
import BlogContributor from "@/app/components/BlogContributors/blogContributor";
import ExpertTopicsSection from "@/app/components/BlogContributors/topicBlogs";
import Footer from "@/app/components/Footer";

export default function Page() {
  const { slug } = useParams();
  const [condition, setCondition] = useState(null);
  console.log("condition", condition);

  const fetchCondition = ContributorsData.find((item) => item.slug === slug);

  return (
    <div>
      <BlogContributor condition={fetchCondition} />
      <ExpertTopicsSection />
      <Footer/>
    </div>
  );
}
