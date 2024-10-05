import React from "react";
import ExpertBlogBanner from "../components/BlogExpertComponent/expertBlogBanner";
import Navbar from "../components/Navbar";
import CardsPage from "../components/BlogExpertComponent/cardComponent";
import ExpertTopicBlogSection from "../components/BlogsComponent/ExpertTopicBlogPost";
import Footer from "../components/Footer";

const PatientBlog: React.FC = () => {
  return (
    <div>
      <Navbar />
      <ExpertBlogBanner />
      <CardsPage />
      <ExpertTopicBlogSection />
      <Footer />
    </div>
  );
};

export default PatientBlog;
