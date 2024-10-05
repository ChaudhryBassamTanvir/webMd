"use client";
import React from "react";

export default function ExpertBlogBanner() {
  return (
    <div className="bg-[#fff9f5]">
      <div
        style={{
          backgroundImage: `url('https://img.lb.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/magazine/dashboard/2022/hero-desktop-2.jpg?resize=*:*')`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          transition: "background-color 0.3s ease",
          paddingLeft: "50px",
          paddingRight: "70px",
          paddingBottom: "50px",
          paddingTop: "50px",
          flexWrap: "wrap-reverse",
          height: "500px",
        }}
      >
        <div className="bg-white rounded-md z-10 relative p-10 lg:w-[45%] shadow-sm w-[100%] h-auto flex-col flex justify-center items-start">
          <div className="text-start pl-7">
            <h1 className="text-[2.5rem] text-[#00157c] font-bold">
              Expert Contributor Directory
            </h1>
            <div className="mt-2">
              <p className="text-[#676767] text-[20px]">
                Meet our team of leading health care professionals
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
