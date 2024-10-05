import Link from "next/link";
import React from "react";

export default function  FindTopDentists  ({ condition }:any)  {

  return (
    <div className="bg-gray-100 mt-3 min-h-screen">
      <div className="bg-white p-10 rounded-sm max-w-4xl w-full mx-auto">
        <div className="text-center mb-8">
          
            <h1 className="text-2xl font-semibold">{condition.title}</h1>
          
          
          <span className="text-pink-500 inline-block my-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
          {condition.states.map((state: any, index: number) => (
                        <Link key={index} href={state.slug}>
                        {state.name}
                      </Link>
          ))}
        </div>
      </div>
    </div>
  );
};



