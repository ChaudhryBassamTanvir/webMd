import React from "react";
import Navbar from "../components/Navbar";
import BLogBanner from "../components/BlogsComponent/BlogBanner";
import ContributerSection from "../components/BlogsComponent/ContributerSection";
import BlogPostSection from "../components/BlogsComponent/BlogPost";
import TopicsSection from "../components/BlogsComponent/TopicBlogPost";
import ExpertBlogPostSection from "../components/BlogsComponent/ExpertBlogPost";
import ExpertTopicBlogSection from "../components/BlogsComponent/ExpertTopicBlogPost";
import Footer from "../components/Footer";
export default function Blog() {
  return (
    <div className="bg-bodyColor">
      <Navbar />
      <BLogBanner />
      <ContributerSection />
      <BlogPostSection />
      <TopicsSection />
      <ExpertBlogPostSection />
      <ExpertTopicBlogSection />
      <Footer />
    </div>
  );
}
