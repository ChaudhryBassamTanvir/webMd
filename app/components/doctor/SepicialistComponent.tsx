import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Specialtylist = [
  {
    title: "Dentist",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Dermatologist",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Endocrinologist",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Gastroenterologist",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Neurologist",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Obstetrician",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Ophthalmologist",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Pediatrician",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Primary Care Physician",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Psychiatrist",
    slug: "/webcarelinks/top-dentist",
  },
];

const Procedure = [
  {
    title: "Acupuncture",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "ADD/ADHD Testing",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Colonoscopy",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Hernia Repair",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Hysterectomy",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Ketamine Infusion Therapy",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Medical Marijuana Consult",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Natural and Homeopathic",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Treatments",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Stem Cell Therapy",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Vasectomy",
    slug: "/webcarelinks/top-dentist",
  },
];

const Condition = [
  {
    title: "Alzheimer's Disease",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Attention Deficit Disorder (ADD)",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Dementia",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Erectile Dysfunction (ED)",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Hair Loss",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "High Risk Pregnancy",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Lyme Disease",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Multiple Sclerosis (MS)",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Rheumatoid Arthritis",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Varicose Veins",
    slug: "/webcarelinks/top-dentist",
  },
];

const Locations = [
  {
    title: "Atlanta",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Austin",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Baltimore",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Birmingham",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Boston",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Buffalo",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Charlotte",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Chicago",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Cincinnati",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Cleveland",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Columbus",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Dallas",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Denver",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Detroit",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Hartford",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Houston",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Indianapolis",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Jacksonville",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Kansas City",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Las Vegas",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Los Angeles",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Louisville",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Memphis",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Miami",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Milwaukee",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Minneapolis",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Nashville",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "New Orleans",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "New York",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Oklahoma City",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Orlando",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Philadelphia",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Phoenix",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Pittsburgh",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Portland",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Portland",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Providence",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Raleigh",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Richmond",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Sacramento",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Saint Louis",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Salt Lake City",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "San Antonio",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "San Bernardino",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "San Diego",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "San Francisco",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "San Jose",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Seattle",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Tampa",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Tampa",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Virginia Beach",
    slug: "/webcarelinks/top-dentist",
  },
  {
    title: "Washington DC",
    slug: "/webcarelinks/top-dentist",
  },
];

export default function SpecialistComponent() {
  return (
    <div className="pt-16 bg-[#F1F6FA] overflow-hidden">
      <h1 className="font-light text-3xl sm:text-[42px] text-center font-sans">
        Healthcare specialists for everyone everywhere
      </h1>
      <div className="mt-10 px-4 sm:px-10 lg:px-48 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-[20px]">
        <div>
          <h2 className="font-bold text-lg sm:text-[18px] text-darkblue">
            BY SPECIALTY
          </h2>
          <div className="w-[40px] border-b-[3px] border-[#73CFD5]"></div>
          <div className="mt-5 grid grid-cols-2 gap-2">
            {Specialtylist.slice(0, 10).map((specialty, index) => (
              <div key={index} className="mt-1">
                <Link href={specialty.slug}>
                  <span className="text-sm sm:text-[12px] hover:text-blue-500 text-textcolor">
                    {specialty.title}
                  </span>
                </Link>
              </div>
            ))}
          </div>
          <Link
            href="/"
            className="text-secondary flex items-center text-sm sm:text-[13px] hover:underline mt-1"
          >
            View all specialists <IoIosArrowForward />
          </Link>
        </div>

        <div className="mt-6 lg:mt-0">
          <div className="lg:border-l-[1px] border-gray-300 lg:px-6 border-dashed">
            <h2 className="font-bold text-lg sm:text-[18px] text-darkblue">
              BY PROCEDURE
            </h2>
            <div className="w-[40px] border-b-[3px] border-[#73CFD5]"></div>
            <div className="mt-5 grid grid-cols-2 gap-2">
              {Procedure.slice(0, 10).map((specialty, index) => (
                <div key={index} className="mt-1">
                  <Link href={specialty.slug}>
                    <span className="text-sm sm:text-[12px] hover:text-blue-500 text-textcolor">
                      {specialty.title}
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <Link
            href="/"
            className="text-secondary flex items-center text-sm sm:text-[13px] hover:underline mt-1"
          >
            View all procedures <IoIosArrowForward />
          </Link>
        </div>

        <div className="mt-6 lg:mt-0">
          <div className="lg:border-l-[1px] border-gray-300 lg:px-5 border-dashed">
            <h2 className="font-bold text-lg sm:text-[18px] text-darkblue">
              BY CONDITION
            </h2>
            <div className="w-[40px] border-b-[3px] border-[#73CFD5]"></div>
            <div className="mt-5 grid grid-cols-2 gap-2">
              {Condition.slice(0, 10).map((specialty, index) => (
                <div key={index} className="mt-1">
                  <Link href={specialty.slug}>
                    <span className="text-sm sm:text-[12px] hover:text-blue-500 text-textcolor">
                      {specialty.title}
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <Link
            href="/"
            className="text-secondary flex items-center text-sm sm:text-[13px] hover:underline mt-1"
          >
            View all conditions <IoIosArrowForward />
          </Link>
        </div>
      </div>

      <div className="flex justify-center w-full px-4 sm:px-6 lg:w-[80%]">
        <div className="w-full max-w-screen-lg mx-auto mt-7 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          <div className="lg:col-span-2">
            <div className="mt-3 border-t-[1px] pt-3 border-gray-300 px-5 border-dashed">
              <h2 className="font-bold text-lg lg:text-xl text-darkblue">
                BY LOCATION
              </h2>
              <div className="w-[40px] border-b-[3px] border-[#73CFD5]"></div>
              <div className="mt-5 flex flex-wrap gap-4 lg:gap-10">
                <div className="flex-1">
                  {Locations.slice(0, 13).map((specialty, index) => (
                    <div key={index} className="mt-1">
                      <Link href={specialty.slug}>
                        <span className="text-sm hover:text-blue-500 text-textcolor">
                          {specialty.title}
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="flex-1">
                  {Locations?.slice(13, 26).map((specialty, index) => (
                    <div key={index} className="mt-1">
                      <Link href={specialty.slug}>
                        <span className="text-sm hover:text-blue-500 text-textcolor">
                          {specialty.title}
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="flex-1">
                  {Locations?.slice(26, 39).map((specialty, index) => (
                    <div key={index} className="mt-1">
                      <Link href={specialty.slug}>
                        <span className="text-sm hover:text-blue-500 text-textcolor">
                          {specialty.title}
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="flex-1">
                  {Locations?.slice(39).map((specialty, index) => (
                    <div key={index} className="mt-1">
                      <Link href={specialty.slug}>
                        <span className="text-sm hover:text-blue-500 text-textcolor">
                          {specialty.title}
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Link
              href={"/"}
              className="text-blue-600 text-sm ml-2 lg:ml-6 flex flex-wrap mb-2 hover:underline mt-1"
            >
              View all Locations
              <IoIosArrowForward className="mt-1" />
            </Link>
          </div>
          <div className="mt-5 lg:mt-16 lg:col-span-1 flex justify-center">
            <img
              src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/physician_directory/images/SeolinkImg.png"
              alt="Location Image"
              className="object-contain mt-24 w-full h-auto  md:w-80 md:h-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
