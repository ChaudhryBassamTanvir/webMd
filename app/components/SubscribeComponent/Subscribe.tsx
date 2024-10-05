"use client";

import React from "react";
import Image from "next/image";
import subscribe from "/public/subscribe.webp"; // Ensure the correct path

const SubscribeForm = ({ onClose }: any) => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg max-w-2xl w-full relative">
        <div className="relative overflow-hidden rounded-t-lg ">
          <Image
            src={subscribe}
            alt="Newsletter"
            layout="responsive"
            width={800}
            height={200}
            className="w-full h-60 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl z-30 bg-white rounded-full w-6 h-6 flex items-center justify-center"
          >
            &times;
          </button>
        </div>
        <div className="p-4 sm:p-8 bg-[#EDF0FF]">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            Sign up for our free Good Health Newsletter
          </h2>
          <p className="mb-4 sm:mb-6">
            Get wellness tips to help you live happier and healthier
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-t-md sm:rounded-l-md sm:rounded-t-none focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="bg-gray-400 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-b-md sm:rounded-r-md sm:rounded-b-none hover:bg-gray-500 mt-2 sm:mt-0"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-xs text-gray-500">
            By clicking Subscribe, I agree to the WebMD{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Terms & Conditions
            </a>{" "}
            &{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>{" "}
            and understand that I may opt out of WebMD subscriptions at any
            time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubscribeForm;
