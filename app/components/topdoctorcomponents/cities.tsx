"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function Cities({ condition }: any) {
  const [activeTab, setActiveTab] = useState('Top Cities');

  if (!condition || !condition.cities) {
    return <div>Loading...</div>;
  }

  const filteredCities = activeTab === 'Top Cities'
    ? condition.cities.filter((city: any) => city.isTopCity)
    : condition.cities.filter((city: any) => city.name.startsWith(activeTab));

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
        <div className="flex justify-center mb-8">
          <div className="space-x-2">
            <button
              className={`py-2 px-4 ${activeTab === 'Top Cities' ? 'text-blue-600 font-semibold border-b-2 border-blue-600' : 'text-blue-600'}`}
              onClick={() => setActiveTab('Top Cities')}
            >
              Top Cities
            </button>
            {alphabet.map((letter) => (
              <button
                key={letter}
                className={`py-2 px-4 ${activeTab === letter ? 'text-blue-600 font-semibold border-b-2 border-blue-600' : 'text-blue-600'}`}
                onClick={() => setActiveTab(letter)}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
          {filteredCities.map((city: any, index: number) => (
            <Link key={index} href={`/webcarelinks/${city.slug}`}>
              {city.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

