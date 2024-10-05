import React from "react";

function AwardsByClassSection() {
  const eliteChoiceImage = "/images/best-hospital/Elite-choice.svg";
  const patientChoiceImage = "/images/best-hospital/Patient-choice.svg";
  const providerChoiceImage = "/images/best-hospital/Provider-choice.svg";

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 flex flex-wrap justify-center items-start">
      <div className="flex flex-col sm:flex-row justify-center sm:space-x-4 mb-8 space-y-4 sm:space-y-0">
        <img
          src={eliteChoiceImage}
          alt="WebMD Elite Choice"
          className="h-24 w-auto mx-auto sm:mx-0"
        />
        <img
          src={patientChoiceImage}
          alt="WebMD Patient Choice"
          className="h-24 w-auto mx-auto sm:mx-0"
        />
        <img
          src={providerChoiceImage}
          alt="Medscape Provider Choice"
          className="h-24 w-auto mx-auto sm:mx-0"
        />
      </div>

      <div className="max-w-2xl mx-4">
        <div>
          <h2 className="text-4xl font-semibold text-gray-800">Awards by Class</h2>
          <p className="text-gray-600 mt-4 mb-8">
            Hospital systems receive one of three distinct awards based on their
            WebMD Choice Awards ranking: WebMD Elite Choice for the top health
            systems that are preferred by patients and physicians two-to-one
            over competitors for a specific specialty in their local market,
            WebMD Patient Choice for hospitals in the top 30% of patient
            preferences, and Medscape Provider Choice for hospitals in the top
            30% of health care provider preferences.
          </p>
        </div>

        <div className="flex justify-between max-w-2xl mx-auto text-[#187AAB] font-semibold text-lg">
          <div className="flex flex-col space-y-4">
            <a href="#">
              WebMD Elite Choice
            </a>
            <a href="#">
              Medscape Provider Choice
            </a>
          </div>
          <a href="#">
            WebMD Patient Choice
          </a>
        </div>
      </div>
    </div>
  );
}

export default AwardsByClassSection;


