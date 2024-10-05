"use client";

import React from "react";
import { FaTimes } from "react-icons/fa";

const SearchBar = ({ onClose }: any) => {
  return (
    <div className="fixed inset-0 bg-opacity-90 flex items-start justify-end z-50 p-4">
      <div
        className="flex items-center bg-white p-2 rounded-md shadow-lg max-w-lg w-full sm:max-w-md"
        style={{ marginTop: "-10px" }}
      >
        <input
          type="text"
          placeholder="Search WebMD"
          className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none sm:px-2 sm:py-2"
        />
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md ml-1">
          Search
        </button>
        <button
          onClick={onClose}
          className="text-gray-600 hover:text-gray-900 text-2xl ml-4 sm:text-xl sm:ml-2"
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
