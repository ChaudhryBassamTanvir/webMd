// components/DoctorSearchComponent.tsx
"use client";
import { useState } from "react";
import { FaSearch, FaMapMarkerAlt, FaStethoscope } from "react-icons/fa";

const DoctorSearchComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm, "in", location);
  };

  return (
    <div>
      <div className="container mx-auto px-4 md:px-10 pb-5">
        <div className="bg-[#EDF0FF] p-6 rounded-lg text-center flex flex-col justify-center">
          <h3 className="text-md text-gray-600">
            8 million+ Physician Ratings & Reviews
          </h3>
          <h2 className="text-3xl font-bold mb-4">
            Find Doctors and Dentists Near You
          </h2>
          <form
            onSubmit={handleSearch}
            className="flex flex-col md:flex-row justify-center items-center gap-4"
          >
            <div className="relative w-full flex-1 mb-4 md:mb-0">
              <input
                type="text"
                placeholder="Primary Care Physician"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="p-3 w-full pl-12 rounded-lg border border-gray-300"
              />
              <FaStethoscope
                className="absolute left-3 top-3 text-blue-700"
                size={30}
              />
            </div>
            <div className="relative w-full flex-1 flex flex-col sm:flex-row sm:gap-1">
              <input
                type="text"
                placeholder="Faisalabad, PB 38000"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="p-3 w-full pl-14 pr-20 rounded-t-lg sm:rounded-t-none sm:rounded-l-lg border border-gray-300"
              />
              <FaMapMarkerAlt
                className="absolute left-3 top-3 text-blue-700"
                size={30}
              />
              <button
                type="submit"
                className="w-full sm:w-auto sm:mt-1 bg-blue-600 text-white p-3 rounded-b-lg sm:rounded-b-none sm:rounded-r-lg flex items-center justify-center"
              >
                Search <FaSearch className="ml-2" size={20} />
              </button>
            </div>
          </form>

          <p className="text-lg text-gray-600 mt-4">
            You can also search by physician, practice, or hospital name
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorSearchComponent;
