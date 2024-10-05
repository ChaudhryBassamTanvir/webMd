import React from "react";
import PatientBlogBanner from "./../components/BlogPatientComponent/PatientBlogBanner";
import Navbar from "../components/Navbar";
import CardsPage from "../components/BlogPatientComponent/cardComponent";
import ExpertTopics from "../components/BlogPatientComponent/expertTopicBlog";
import Footer from "../components/Footer";

const PatientBlog: React.FC = () => {
  return (
    <div>
      <Navbar />
      <PatientBlogBanner />
      <CardsPage />
      <ExpertTopics />
      <Footer />
    </div>
  );
};

export default PatientBlog;
