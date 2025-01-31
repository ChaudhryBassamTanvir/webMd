import React from 'react';

interface YouMightAlsoLikeProps {
  items: string[];
}

const YouMightAlsoLike = ({ items }: YouMightAlsoLikeProps) => {
  return (
    <div className="bg-white p-6">
      <h2 className="text-3xl font-bold mb-4">You Might Also Like</h2>
      <hr className="my-2 border-gray-300" />
      <ul className="">
        {items.map((item, index) => (
          <li key={index} className="mb-2 text-[#676767] text-xl font-semibold">
            <a className='m-2' href="">{item}</a>
            {index !== items.length - 1 && <hr className="my-2 border-gray-300" />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YouMightAlsoLike;
