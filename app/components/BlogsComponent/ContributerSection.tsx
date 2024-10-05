"use client";
import Image from "next/image";
import Link from "next/link"; // Import Link from next/link
import contributor1 from "/public/contributor1.jpg";
import contributor2 from "/public/contributor2.jpg";
import contributor3 from "/public/contributor3.jpg";
import contributor4 from "/public/contributor4.jpg";
import contributor5 from "/public/contributor5.webp";
import contributor6 from "/public/contributor6.webp";

import contributor8 from "/public/contributor8.webp";

import { MdArrowForward, MdArrowDropDown } from "react-icons/md";
import { IoArrowBackOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useState, useEffect, useRef } from "react";

const contributors = [
  {
    id: 1,
    image: contributor1,
    category: "Brain & Nervous System",
    name: "Misha Grayson Coleman",
    details: "Diagnosed since 2021",
    slug: "misha-grayson-coleman",
    article: "Favorite Apps I Use Living With Myasthenia Gravis",
  },
  {
    id: 2,
    image: contributor2,
    category: "Ankylosing Spondylitis",
    name: "Lovaine Cohen",
    details: "Diagnosed since 2001",
    slug: "lovaine-cohen",
    article: "10 Ways to Manage Your Ankylosing Spondylitis-Related Fatigue",
  },
  // {
  //   id: 3,
  //   image: contributor3,
  //   category: "Skin Problems and Treatments",
  //   name: "J. Onyeka Obioha, MD",
  //   details: "Board-certified dermatologist",
  //   slug: "j-onyeka-obioha-md",
  //   article: "How You Can Protect Your Skin This Summer",
  // },
  {
    id: 4,
    image: contributor8,
    category: "Pain Management",
    name: "Ashley Walker",
    details: "Board-certified anesthesiologist and pain management physician",
    slug: "Ashley-Walker",
    article: "Mind Over Matter",
  },
  {
    id: 5,
    image: contributor5,
    category: "Ankylosing Spondylitis",
    name: "Richard Howard",
    details: "Board-certified anesthesiologist and pain management physician",
    slug: "richard-howard",
    article: "Mind Over Matter",
  },
  {
    id: 6,
    image: contributor6,
    category: "Ankylosing Spondylitis",
    name: "Zainab Alani",
    details: "Board-certified anesthesiologist and pain management physician",
    slug: "zainab-alani",
    article: "Mind Over Matter",
  },
  // Add more contributors as needed
];

const ContributerSection: React.FC = () => {
  const [cardsToShow, setCardsToShow] = useState(4);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(4);
        setIsSmallScreen(false);
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2);
        setIsSmallScreen(false);
      } else {
        setCardsToShow(1);
        setIsSmallScreen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set the initial value based on the current window size
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="mx-[2%] py-10 px-5 lg:px-10">
      <div className="relative mb-6">
        <div className="flex justify-between">
          <h2 className="text-lg font-bold mb-4 text-[#00157c] font-sans">
            FEATURED PATIENT AND EXPERT CONTRIBUTORS
          </h2>
          {!isSmallScreen && (
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="bg-white hover:bg-[#d2d9ff] text-secondary text-xl p-4 rounded-md flex justify-center items-center"
              >
                <IoArrowBackOutline />
              </button>
              <button
                onClick={handleNext}
                className="bg-white hover:bg-[#d2d9ff] text-secondary text-xl p-4 rounded-md flex justify-center items-center"
              >
                <MdArrowForward />
              </button>
            </div>
          )}
        </div>
        <div className="border-[1px] border-gray-200 mt-2"></div>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={cardsToShow}
        navigation={isSmallScreen ? true : false} // Enable navigation only for small screens
        modules={[Navigation]}
        className="swiper-container"
        ref={swiperRef}
      >
        {contributors.map((contributor) => (
          <SwiperSlide key={contributor.id}>
            <div className="min-w-full flex-shrink-0 bg-white rounded-lg group cursor-pointer overflow-hidden relative">
              <Link href={`/contributors/${contributor.slug}`}>
                <div className="relative overflow-hidden">
                  <Image
                    src={contributor.image}
                    alt={contributor.name}
                    className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-125"
                  />
                </div>
              </Link>
              <div className="p-4 h-fit text-center">
                <Link href={`/contributors/${contributor.slug}`}>
                  <h3 className="text-sm font-bold group-hover:text-primary text-gray-900">
                    {contributor.name}
                  </h3>
                </Link>
                <p className="overflow-hidden text-ellipsis whitespace-nowrap text-gray-600 mb-2">
                  {contributor.details}
                </p>
                <div className="flex justify-end">
                  <Link href={`/contributors/${contributor.slug}`}>
                    <MdArrowForward className="text-blue-600 text-md transition-transform duration-500 group-hover:scale group-hover:text-blue-700" />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-6 relative">
        <button
          onClick={toggleDropdown}
          className="text-blue-600 hover:text-blue-700 flex items-center"
        >
          View All{" "}
          <MdArrowDropDown
            className={`ml-1 transform transition-transform ${
              dropdownVisible ? "rotate-180" : ""
            }`}
          />
        </button>
        {dropdownVisible && (
          <div className="absolute mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-4">
            <a
              href="#"
              className="block text-blue-600 hover:text-blue-700 mb-2"
            >
              &rarr; View Patient Contributors
            </a>
            <a href="#" className="block text-blue-600 hover:text-blue-700">
              &rarr; View Expert Contributors
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContributerSection;
