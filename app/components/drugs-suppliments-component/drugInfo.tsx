import React from 'react';
import Add from '../add';
import SquareAdd from '../squareAdd';

interface DrugInfoProps {
  moreOnDrugs: { id: number; title: string }[];
  recommendedForYou: { id: number; title: string }[];
  moreOnDrugsHeading: string;
  recommendedForYouHeading?: string;
}

const DrugInfo: React.FC<DrugInfoProps> = ({
  moreOnDrugs,
  recommendedForYou,
  moreOnDrugsHeading,
  recommendedForYouHeading,
}) => {
  return (
    <div className="w-full lg:w-1/3 px-4 py-8 lg:mt-52">
      <section>
        <div className="flex items-center mb-4">
          <h2 className="text-sm font-bold text-blue-900">{moreOnDrugsHeading}</h2>
        </div>
        <ul className="space-y-4">
          {moreOnDrugs.map((item) => (
            <li key={item.id} className="flex flex-col">
              <div className="flex items-center">
                <span className="font-bold text-lg mr-2">{item.id}</span>
                <a href="#" className="text-base  text-gray-800  space-y-3 hover:text-blue-500">{item.title}</a>
              </div>
              <hr className="w-full border-gray-300 mt-2" />
            </li>
          ))}
        </ul>
      </section>
     <SquareAdd/>
      <div className="my-8">
        <div className="flex items-center">
          <h2 className="text-xl font-serif font-bold text-blue-800 mr-2">{recommendedForYouHeading}</h2>
          <hr className="flex-1 border-gray-300" />
        </div>
      </div>
      <ul className="space-y-4">
        {recommendedForYou.map((item) => (
          <li key={item.id} className="flex flex-col">
            <div className="flex items-center">
              <span className="font-extrabold text-2xl mr-2">{item.id}</span>
              <a href="#" className="text-base font-bold font-sans space-y-3 text-gray-800 hover:text-blue-500">{item.title}</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DrugInfo;
