"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes, FaAngleDown, FaSearch } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { menuItems } from "./menuItems";
import SubscribeForm from "./SubscribeComponent/Subscribe";
import SearchBar from "./SearchComponent/search";

type Menu = "conditions" | "drugs" | "wellBeing" | "more";

const Navbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState<Menu | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isSubscribeFormVisible, setSubscribeFormVisible] = useState(false);
  const [isSearchBarVisible, setSearchBarVisible] = useState(false);

  const toggleSubscribeForm = () => {
    setSubscribeFormVisible(!isSubscribeFormVisible);
  };

  const handleMouseEnter = (menu: Menu) => {
    setDropdownOpen(menu);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(null);
  };

  const handleSearchClick = () => {
    setSearchBarVisible(true);
  };

  const handleCloseSearchBar = () => {
    setSearchBarVisible(false);
  };
  const toggleDropdown = (menu: Menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  return (
    <>
      <nav className="bg-[#00157c] whitespace-nowrap w-full text-white p-4 flex items-center justify-start font-sans 2xl:px-[6%]">
        <Link
          href="/"
          className="font-bold  text-2xl ml-2 mr-4 lg:text-3xl cursor-pointer "
        >
          <i className="font-serif"> Web</i>MD
        </Link>
        <button
          className="0.5xl:hidden text-2xl"
          onClick={() => setSidebarOpen(true)}
        >
          <FaBars />
        </button>
        <div className="hidden 0.5xl:flex items-center space-x-2 ">
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("conditions")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="focus:outline-none hover:bg-white hover:text-[#00157c] py-1 rounded-md flex items-center text-sm lg:text-lg"
              onClick={() => toggleDropdown("conditions")}
            >
              Conditions
              <FaAngleDown
                className={`ml-1 transform transition-transform duration-200 ${
                  dropdownOpen === "conditions" ? "rotate-180" : ""
                }`}
              />
            </button>
            {dropdownOpen === "conditions" && (
              <div className="absolute bg-white text-black rounded-md shadow-lg z-10 grid grid-cols-4 w-[37vw] whitespace-nowrap pt-7 pb-2">
                {menuItems.conditions.map((item: any, index: any) => (
                  <Link
                    key={index}
                    href={item.slug}
                    className="block px-4 py-2 hover:text-blue-700"
                  >
                    {item.name}
                    <hr />
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("drugs")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => toggleDropdown("drugs")}
              className="focus:outline-none hover:bg-white hover:text-[#00157c] px-2 py-1 rounded-md flex items-center text-sm lg:text-lg"
            >
              Drugs
              <FaAngleDown
                className={`ml-1 transform transition-transform duration-200 ${
                  dropdownOpen === "drugs" ? "rotate-180" : ""
                }`}
              />
            </button>
            {dropdownOpen === "drugs" && (
              <div className="absolute bg-white text-black rounded-md shadow-lg z-50 p-4 grid grid-cols-1 w-[14vw] whitespace-nowrap">
                {menuItems.drugs.map((item: any, index: any) => (
                  <Link
                    key={index}
                    href={item.slug}
                    className="block px-4 py-2 hover:text-blue-700"
                  >
                    {item.name}
                    <hr />
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("wellBeing")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="focus:outline-none hover:bg-white hover:text-[#00157c] px-2 py-1 rounded-md flex items-center text-sm lg:text-lg"
              onClick={() => toggleDropdown("wellBeing")}
            >
              Well Being
              <FaAngleDown
                className={`ml-1 transform transition-transform duration-200 ${
                  dropdownOpen === "wellBeing" ? "rotate-180" : ""
                }`}
              />
            </button>
            {dropdownOpen === "wellBeing" && (
              <div className="absolute bg-white text-black rounded-md shadow-lg z-50 p-4 grid grid-cols-2 w-[25vw] whitespace-nowrap">
                {menuItems.wellBeing.map((item: any, index: any) => (
                  <Link
                    key={index}
                    href={item.slug}
                    className="block px-4 py-2 hover:text-blue-700"
                  >
                    {item.name}
                    <hr />
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            href="/symptom-checker"
            className="hover:bg-white hover:text-[#00157c] px-2 py-1 rounded-md text-sm lg:text-lg"
          >
            Symptom Checker
          </Link>
          <Link
            href="/find-doctor"
            className="hover:bg-white hover:text-[#00157c] px-2 py-1 rounded-md text-sm lg:text-lg"
          >
            Find a Doctor
          </Link>
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("more")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => toggleDropdown("more")}
              className="focus:outline-none hover:bg-white hover:text-[#00157c] px-2  rounded-md flex items-center text-sm lg:text-lg "
            >
              More
              <FaAngleDown
                className={`ml-1 transform transition-transform duration-200 ${
                  dropdownOpen === "more" ? "rotate-180" : ""
                }`}
              />
            </button>

            {dropdownOpen === "more" && (
              <div className="absolute bg-white text-black rounded-md shadow-lg z-50 p-4 grid grid-cols-1 w-[15vw] whitespace-nowrap">
                {menuItems.more.map((item: any, index: any) => (
                  <Link
                    key={index}
                    href={item.slug}
                    className="block px-4 py-2 hover:text-blue-700"
                  >
                    {item.name}
                    <hr />
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div
            className="border-white border-l-2 "
            style={{ minHeight: "40px", marginRight: "7px" }}
          ></div>
          <button
            onClick={toggleSubscribeForm}
            className="flex items-center border  border-white hover:bg-white hover:text-[#00157c] px-2 py-1 rounded-md text-sm lg:text-lg"
          >
            <FiMail className="mr-1" />
            Subscribe
          </button>
          <Link
            href="/Login"
            className="font-sans hover:bg-white hover:text-[#00157c] px-2 lg:px-3 py-1 rounded-md text-xs md:text-sm lg:text-lg whitespace-nowrap"
          >
            Log In
          </Link>{" "}
          <FaSearch
            size={20}
            className="text-white cursor-pointer"
            onClick={handleSearchClick} // Show the SearchBar when clicked
          />
        </div>
      </nav>

      {isSearchBarVisible && <SearchBar onClose={handleCloseSearchBar} />}
      {isSubscribeFormVisible && (
        <SubscribeForm onClose={toggleSubscribeForm} />
      )}

      {sidebarOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 whitespace-nowrap">
          <div className="fixed left-0 top-0 h-full w-full bg-white text-black p-4 shadow-lg z-50 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <Link href="/">
                <div className="font-bold text-2xl cursor-pointer ">
                  <i className="font-serif">Web</i>MD
                </div>
              </Link>

              <button onClick={() => setSidebarOpen(false)}>
                <FaTimes className="text-xl" />
              </button>
            </div>
            <div className="space-y-6">
              {Object.keys(menuItems).map((menu) => (
                <div key={menu}>
                  <button
                    className="font-sans focus:outline-none hover:bg-gray-200 px-3 py-1 rounded-md text-base md:text-lg w-full text-left flex items-center justify-between "
                    onClick={() =>
                      setDropdownOpen(
                        dropdownOpen === menu ? null : (menu as Menu)
                      )
                    }
                  >
                    {menu.charAt(0).toUpperCase() +
                      menu.slice(1).replace("-", " ")}
                  </button>
                  {dropdownOpen === menu && (
                    <div className="mt-2 pl-4 ">
                      {menuItems[menu as Menu].map((item: any, index: any) => (
                        <Link
                          key={index}
                          href={item.slug}
                          className="font-sans block px-4 py-2 hover:bg-gray-100 rounded-md"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/symptom-checker"
                className="font-sans block px-3 py-2 hover:bg-gray-100 rounded-md text-base md:text-lg "
              >
                Symptom Checker
              </Link>
              <Link
                href="/find-doctor"
                className="font-sans block px-3 py-2 hover:bg-gray-100 rounded-md text-base md:text-lg "
              >
                Find a Doctor
              </Link>
              <div>
                <button
                  onClick={toggleSubscribeForm}
                  className="font-sans flex items-center hover:bg-gray-100 px-3 py-2 rounded-md border border-gray-300 text-base md:text-lg "
                >
                  <FiMail className="mr-2" />
                  Subscribe
                </button>
              </div>
              <Link
                href="/Login"
                className="font-sans block px-3 py-2 hover:bg-gray-100 rounded-md text-base md:text-lg "
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      )}
      {isSubscribeFormVisible && (
        <SubscribeForm onClose={toggleSubscribeForm} />
      )}
    </>
  );
};

export default Navbar;
