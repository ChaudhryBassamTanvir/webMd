
"use client"
import React, { useState } from 'react';
import { dropdownMenus } from './Items';

const HospitalTags: React.FC = () => {
    const [dropdownOpen, setDropdownOpen] = useState<{ [key: string]: boolean }>({});

    const toggleDropdown = (label: string) => {
        setDropdownOpen(prevState => ({
            ...Object.fromEntries(Object.keys(prevState).map(key => [key, key === label ? !prevState[key] : false])),
            [label]: !prevState[label]
        }));
    };

    const getDropdownIconStyle = (label: string) => {
        return {
            transform: dropdownOpen[label] ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease-in-out"
        };
    };

    return (
        <div className="bg-white shadow p-4 relative">
            <ul className="flex flex-wrap justify-center gap-4 sm:gap-24">
                <li className="mb-2 sm:mb-0"><a href="#" className="text-[#0E355A]">Hospital Award Winners</a></li>
                {dropdownMenus.map(menu => (
                    <li key={menu.label} className="relative">
                        <button
                            onClick={() => toggleDropdown(menu.label)}
                            className="text-[#0E355A] focus:outline-none flex items-center"
                        >
                            <span>{menu.label}</span>
                            <span className="ml-1" style={getDropdownIconStyle(menu.label)}>&#9662;</span>
                        </button>
                        {dropdownOpen[menu.label] && (
                            <div className={`absolute left-0 mt-2 sm:ml-0 sm:left-auto sm:right-0 ${menu.label === "Treatment Awards" ? "w-72 max-h-60" : "w-48"} bg-white border border-gray-200 rounded shadow-lg ${menu.label === "Treatment Awards" ? "overflow-y-auto" : ""}`} style={{ scrollbarWidth: "thin", scrollbarColor: "#D1D5DB #F3F4F6", overflowY: "auto" }}>
                                <ul className="py-1" style={{ maxHeight: "200px", paddingRight: "8px" }}>
                                    {menu.items.map((item, index) => (
                                        <li key={index}><a href="#" className="text-sm block px-4 py-2 text-[#0E355A] hover:text-blue-400">{item}</a></li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </li>
                ))}
                <li className="mb-2 sm:mb-0"><a href="#" className="text-[#0E355A]">Methodology</a></li>
            </ul>
        </div>
    );
};

export default HospitalTags;



