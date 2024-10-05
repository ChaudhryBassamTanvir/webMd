import React from "react";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="min-h-screen h-auto sm:h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full h-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 order-2 lg:order-1 bg-blue-100 p-4 lg:p-8 flex flex-col justify-center items-center text-center sm:flex-col ">
          <h2 className="text-2xl font-bold mb-4">
            Get access to everything WebMD offers
          </h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center mr-4">
                <img src="/logo1.svg" alt="icon1" className="w-6 h-6" />
              </div>
              <span>Personalized tools for managing your health</span>
            </li>
            <li className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center mr-4">
                <img src="/logo2.svg" alt="icon2" className="w-6 h-6" />
              </div>
              <span>Health and wellness updates delivered to your inbox</span>
            </li>
            <li className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center mr-4">
                <img src="/logo3.svg" alt="icon3" className="w-6 h-6" />
              </div>
              <span>Saved articles, condition and medications</span>
            </li>
            <li className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center mr-4">
                <img src="/logo4.svg" alt="icon4" className="w-6 h-6" />
              </div>
              <span>Expert insight and patient stories</span>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/2 order-1 lg:order-2 bg-white p-8 flex flex-col justify-center flex-grow">
          <h2 className="text-2xl font-bold mb-4 text-center">Log In</h2>
          <form className="flex flex-col items-center">
            <div className="mb-4 w-full flex justify-center">
              <input
                type="email"
                placeholder="Email"
                className="w-full sm:w-2/3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4 w-full flex justify-center">
              <input
                type="password"
                placeholder="Password"
                className="w-full sm:w-2/3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex items-center justify-between mb-4 w-full sm:w-1/3 whitespace-nowrap">
              <a href="#" className="text-blue-600 hover:underline lg:mr-auto">
                Forgot Password?
              </a>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Remember me</span>
              </div>
            </div>
            <button
              type="submit"
              className="w-full sm:w-2/3 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
              Log In
            </button>
          </form>
          <div className="mt-4 text-center">
            <span>Don’t have an account? </span>
            <a href="#" className="text-blue-600 hover:underline">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
