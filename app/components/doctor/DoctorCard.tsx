import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function DoctorCard() {
  return (
    <>
      <div className="bg-[#CAF6F9] min-h-fit mb-10 p-6 md:px-[50px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-[300] text-[42px] font-sans ml-5 text-[#05284a]">
              Choose the healthcare that is right for you
            </h1>
            <div className="flex flex-wrap flex-col gap-4 mt-8">
              <div className="flex flex-wrap items-center gap-2 text-[16px]">
                <span className="border-[#5ac6cd] px-2 border-b-[5px]  "></span>
                Profiles for{" "}
                <span className="font-bold"> 3 million+ physicians</span>
              </div>
              <div className="flex flex-wra  items-center gap-2 text-[16px]">
                <span className="border-[#5ac6cd] px-2 border-b-[5px]"></span>
                <div className="flex-wrap">
                  <span className="font-bold justify-self-start">
                    Book appointments online
                  </span>{" "}
                  including Video Visit and Chat Now options
                </div>
              </div>
              <div className="flex flex-wrap  items-center gap-2 text-[16px]">
                <span className="border-[#5ac6cd] px-2 border-b-[5px]"></span>
                Find <span className="font-bold">award winning hospitals</span>
                by specialty
              </div>
            </div>
          </div>
          <div className="mt-2">
            <img src="/images/doctor/doctor.png" alt="doctor" />
          </div>
        </div>
      </div>
      <div className="mx-auto px-4 lg:px-0 lg:ml-[200px] lg:mr-[200px] flex flex-col justify-center">
        <h1 className="font-[300] text-[24px] lg:text-[39px] font-sans mb-6 lg:mb-10 text-[#05284a] text-center lg:text-left">
          Popular specialties
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 items-center justify-center">
          <div className="flex flex-col items-center">
            <img
              src="https://img.webmd.com/vim/live/webmd/consumer_assets/site_images/physician_directory/images/Primary-Care.svg"
              alt="Primary Care"
              className="mb-2 lg:mb-4 w-[60px] lg:w-auto"
            />
            <Link
              href="/"
              className="text-[#05284a] font-semibold hover:underline hover:text-blue-600 text-center"
            >
              PRIMARY CARE
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://img.webmd.com/vim/live/webmd/consumer_assets/site_images/physician_directory/images/homepage-dentist.svg"
              alt="Dentist"
              className="mb-2 lg:mb-4 w-[60px] lg:w-auto"
            />
            <Link
              href="/"
              className="text-[#05284a] font-semibold hover:underline hover:text-blue-600 text-center"
            >
              DENTIST
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://img.webmd.com/vim/live/webmd/consumer_assets/site_images/physician_directory/images/homepage-OB-Gyn.svg"
              alt="OB-GYN"
              className="mb-2 lg:mb-4 w-[60px] lg:w-auto"
            />
            <Link
              href="/"
              className="text-[#05284a] font-semibold hover:underline hover:text-blue-600 text-center"
            >
              OB-GYN
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://img.webmd.com/vim/live/webmd/consumer_assets/site_images/physician_directory/images/homepage-Dermatologist.svg"
              alt="Dermatologist"
              className="mb-2 lg:mb-4 w-[60px] lg:w-auto"
            />
            <Link
              href="/"
              className="text-[#05284a] font-semibold hover:underline hover:text-blue-600 text-center"
            >
              DERMATOLOGIST
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://img.webmd.com/vim/live/webmd/consumer_assets/site_images/physician_directory/images/homepage-Psychiatrist.svg"
              alt="Psychiatrist"
              className="mb-2 lg:mb-4 w-[60px] lg:w-auto"
            />
            <Link
              href="/"
              className="text-[#05284a] font-semibold hover:underline hover:text-blue-600 text-center"
            >
              PSYCHIATRIST
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://img.webmd.com/vim/live/webmd/consumer_assets/site_images/physician_directory/images/homepage-Eye-Doctor.svg"
              alt="Eye Doctor"
              className="mb-2 lg:mb-4 w-[60px] lg:w-auto"
            />
            <Link
              href="/"
              className="text-[#05284a] font-semibold hover:underline hover:text-blue-600 text-center"
            >
              EYE DOCTOR
            </Link>
          </div>
        </div>
      </div>

      <div className="border-b-[.5px] border-gray-300 my-16"></div>
      <div className="mt-2 mx-auto px-4 lg:px-0 text-center lg:text-left lg:ml-[200px]">
        <h1 className="text-xl lg:text-2xl text-[#05284A] font-bold mb-2 lg:mb-4">
          Top Doctors Near
        </h1>
        <h3 className="text-[#0078BF] text-xl lg:text-2xl mb-4 lg:mb-6">
          Faisalabad, PB
        </h3>
        <div className="flex justify-center lg:justify-start">
          <button className="my-8 lg:my-14 px-6 lg:px-8 py-2 rounded-full text-[#0078BF] hover:text-white hover:bg-[#0078BF] transition duration-150 border border-[#0078BF]">
            FIND YOUR DOCTOR
          </button>
        </div>
        <div className="mb-12 lg:mb-20">
          <h1 className="text-lg lg:text-xl text-black flex justify-center lg:justify-start items-center">
            Physicians:
            <Link
              href={"/"}
              className="text-[#0078BF] text-lg flex items-center pl-2 hover:underline"
            >
              Claim Your Profile
              <IoIosArrowForward />
            </Link>
          </h1>
        </div>
      </div>
    </>
  );
}
