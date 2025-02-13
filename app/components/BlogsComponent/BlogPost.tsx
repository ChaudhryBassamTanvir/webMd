"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const blogPosts = [
  {
    id: 1,
    image: "/blogPost1.webp", // Path relative to the public directory
    title: "Examples of Workplace Accommodations for Psoriatic Arthritis",
    summary:
      "Psoriatic arthritis is a multifaceted condition that can affect individuals differently, and symptoms can fluctuate, with periods of remission and flare-ups. Consequently, this can make everyday ...",
    author: "Marissa Smith",
    date: "July 11, 2024",
    link: "#", // Add the link to the full article
  },
  {
    id: 2,
    image: "/blogPost2.webp", // Path relative to the public directory
    title: "How Cranberries Saved My Life",
    summary:
      "My very first symptom of multiple sclerosis (MS) was urinating frequently. This was 1979, but nobody suggested I might have MS until I had a big relapse in 1989. My legs got too weak to stand ...",
    author: "David Spero, RN",
    date: "July 11, 2024",
    link: "#", // Add the link to the full article
  },
  {
    id: 3,
    image: "/blogPost3.webp", // Path relative to the public directory
    title: "Sunny Days Ahead: Psoriasis-friendly Tips for a Safe Summer",
    summary:
      "My very first symptom of multiple sclerosis (MS) was urinating frequently. This was 1979, but nobody suggested I might have MS until I had a big relapse in 1989. My legs got too weak to stand ...",
    author: "Melissa Leeolou",
    date: "July 11, 2024",
    link: "#", // Add the link to the full article
  },
  // Add more blog posts as needed
];

const BlogPostSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(3);
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set the initial value based on the current window size
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="mx-[2%] py-10 px-5 lg:px-10">
      <div className="relative mb-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-[#00157c] font-sans">
            LATEST PATIENT BLOG POSTS
          </h2>
          <div className="relative">
            <a href="#" className="text-blue-600 hover:text-blue-700 relative">
              View All
              <span className="block h-0.5 bg-blue-600 absolute bottom-[-12px] left-0 right-0"></span>
            </a>
          </div>
        </div>
        <div className="border-[1px] border-gray-200 mt-2"></div>
      </div>
      <div className="relative overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-transform duration-500">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg group cursor-pointer overflow-hidden relative shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={500}
                    height={380} // Increased height here
                    className="w-full h-65 object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.summary}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-gray-500 text-sm mt-auto">
                  <span className="mr-1">By</span>
                  <a href={post.link} className="text-blue-600 mr-2">
                    {post.author}
                  </a>
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPostSection;
