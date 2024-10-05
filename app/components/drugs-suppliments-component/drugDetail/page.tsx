import React from "react";
import DrugDetailHeader from "./drugDetailHeader";
import Navbar from "../../Navbar";
import Add from "../../add";
import DetailSection from "./detailSection";
import DrugInfo from "../drugInfo";
import { moreOnDrugs, recommendedForYou } from "../drugSupplementData";
import YouMightAlsoLike from "./MightLike";

const items = [
  "Lifestyle Changes To Help Bipolar Depression",
  "How Different Antidepressants Work",
  "Depression Patient Blogs",
  "Navigating Life With Migraine",
];

const page = () => {
  return (
    <div>
      <Navbar />
      <Add />
      <DrugDetailHeader />
      <div className="flex flex-wrap lg:flex-nowrap px-4 py-8 justify-center lg:justify-start">
        <div className="w-full lg:w-2/3 max-w-4xl mx-auto lg:ml-16 lg:mr-0">
          <DetailSection />
          <YouMightAlsoLike items={items}/>
        </div>
        <DrugInfo
          moreOnDrugs={moreOnDrugs}
          recommendedForYou={recommendedForYou}
          moreOnDrugsHeading="MORE ON DRUGS & MEDICATIONS"
          recommendedForYouHeading="Recommended for You"
        />
      </div>
    </div>
  );
};

export default page;
