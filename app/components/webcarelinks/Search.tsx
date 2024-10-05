// "use client";
// import { useState } from 'react';
// import { FaMapMarkerAlt, FaSearch, FaStethoscope } from 'react-icons/fa';

// function Search() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [location, setLocation] = useState("");

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Searching for:", searchTerm, "in", location);
//   };

//   return (
//     <div className="flex justify-center items-center">
//       <form
//         onSubmit={handleSearch}
//         className="flex flex-col md:flex-row justify-center items-center mb-4 max-w-6xl w-full"
//       >
//         <div className="relative w-full flex-1 mb-4 md:mb-0">
//           <input
//             type="text"
//             placeholder="Search doctors, conditions, or procedures"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="p-3 w-full pl-12 rounded-l-lg border border-gray-300"
//           />
//           <FaStethoscope
//             className="absolute left-3 top-3 text-blue-700"
//             size={30}
//           />
//         </div>
//         <div className="relative w-full flex-1 mb-4 md:mb-0">
//           <input
//             type="text"
//             placeholder="Faisalabad, PB 38000"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//             className="p-3 w-full pl-14 pr-20 rounded-r-lg border border-gray-300"
//           />
//           <FaMapMarkerAlt
//             className="absolute left-3 top-3 text-blue-700"
//             size={30}
//           />
//           <button
//             type="submit"
//             className="absolute right-0 top-0 bottom-0 bg-blue-600 text-white p-3 rounded-r-lg flex items-center justify-center"
//           >
//             Search <FaSearch className="ml-2" size={20} />
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Search;



"use client";
import { useState } from 'react';
import { FaMapMarkerAlt, FaSearch, FaStethoscope } from 'react-icons/fa';

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm, "in", location);
  };

  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleSearch}
        className="flex flex-col md:flex-row justify-center items-center mb-4 max-w-6xl w-full"
      >
        <div className="relative w-full flex-1 mb-4 md:mb-0">
          <input
            type="text"
            placeholder="Search doctors, conditions, or procedures"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="py-2 px-3 w-full pl-10 rounded-l-sm border border-gray-300 text-sm"
          />
          <FaStethoscope
            className="absolute left-3 top-2.5 text-blue-700"
            size={20}
          />
        </div>
        <div className="relative w-full flex-1 mb-4 md:mb-0">
          <input
            type="text"
            placeholder="Faisalabad, PB 38000"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="py-2 px-3 w-full pl-10 pr-20 rounded-r-sm border border-gray-300 text-sm"
          />
          <FaMapMarkerAlt
            className="absolute left-3 top-2.5 text-blue-700"
            size={20}
          />
          <button
            type="submit"
            className="absolute right-0 top-0 bottom-0 bg-blue-600 text-white py-2 px-4 rounded-r-sm flex items-center justify-center text-sm"
          >
            Search <FaSearch className="ml-2" size={16} />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;

