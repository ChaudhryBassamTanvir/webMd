"use client";
import React, { useState } from "react";
import Image from "next/image";

const ImageArticle = ({ condition }: any) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm, "in", location);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
  };
  return (
    <>
      <div className="container mx-auto md:px-55 pb-5">
        <div className="flex flex-col md:flex-row w-full">
          <div className="md:w-1/2">
            <Image
              src={condition?.imageSection?.sectionImage}
              alt="Healthy Beauty"
              width={800}
              height={400}
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
          <div className="bg-white p-6 rounded-lg text-center md:w-1/2 flex flex-col justify-center">
            <h2 className="text-xl font-bold mb-4">
              {condition?.imageSection?.title}
            </h2>
            <p className="mb-4">
              Get wellness tips to help you live happier and healthier
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col md:flex-row justify-center items-center"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 rounded-lg border border-gray-300 mb-2 md:mb-0 md:rounded-l-lg md:border-r-0 w-full md:w-auto"
              />
              <button
                type="submit"
                className="bg-gray-600 text-white p-2 rounded-lg md:rounded-r-lg  w-full md:w-auto"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm mt-4">
              By clicking Subscribe, I agree to the WebMD{" "}
              <a href="#" className="text-blue-600">
                Terms & Conditions
              </a>{" "}
              &{" "}
              <a href="#" className="text-blue-600">
                Privacy Policy
              </a>{" "}
              and understand that I may opt out of WebMD subscriptions at any
              time.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageArticle;
