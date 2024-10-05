import React from "react";

interface Item {
  name: string;
}

interface TopMedicationsProps {
  title: string;
  items: Item[];
  bgColor?: string;
}

const TopMedications: React.FC<TopMedicationsProps> = ({
  title,
  items,
  bgColor = "#EDF0FF",
}) => {
  return (
    <div
      className="w-90% max-w-4xl mx-auto  mb-24 p-8 mt-6 lg:mx-4"
      style={{ backgroundColor: bgColor }}
    >
      <h2 className="text-center text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <div key={index} className="text-left items-center">
            <a
              href="drugDetailHeader"
              className="font-source-sans font-semibold text-base leading-5 text-gray-900 no-underline"
            >
              {item.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopMedications;