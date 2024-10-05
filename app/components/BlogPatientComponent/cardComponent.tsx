import React from "react";
import Image from "next/image";

const cardData = [
  {
    category: "ADHD",
    name: "Janet Geddis",
    details: "Diagnosed since 1991",
    imageUrl: "/patient1.webp",
  },
  {
    category: "ADHD in Children",
    name: "Stephanie Steinmetz",
    details: "Diagnosed since 2009",
    imageUrl: "/patient2.webp",
  },
  {
    category: "Alzheimer's",
    name: "Kris McCabe",
    details: "Caregiver since 2016",
    imageUrl: "/patient3.webp",
  },
  {
    category: "Alzheimer's",
    name: "Ty Lewis",
    details: "Caregiver since 2020",
    imageUrl: "/patient4.webp",
  },
  {
    category: "ADHD",
    name: "John Doe",
    details: "Diagnosed since 2005",
    imageUrl: "/patient5.webp",
  },
  {
    category: "Anxiety",
    name: "Jane Smith",
    details: "Diagnosed since 2010",
    imageUrl: "/patient6.webp",
  },
  {
    category: "Depression",
    name: "Alex Johnson",
    details: "Diagnosed since 2012",
    imageUrl: "/patient7.webp",
  },
  {
    category: "Bipolar Disorder",
    name: "Chris Lee",
    details: "Diagnosed since 2015",
    imageUrl: "/patient8.webp",
  },

  {
    category: "ADHD",
    name: "Janet Geddis",
    details: "Diagnosed since 1991",
    imageUrl: "/patient9.webp",
  },
  {
    category: "ADHD in Children",
    name: "Stephanie Steinmetz",
    details: "Diagnosed since 2009",
    imageUrl: "/patient10.webp",
  },
  {
    category: "Alzheimer's",
    name: "Kris McCabe",
    details: "Caregiver since 2016",
    imageUrl: "/patient11.webp",
  },
  {
    category: "Alzheimer's",
    name: "Ty Lewis",
    details: "Caregiver since 2020",
    imageUrl: "/patient12.webp",
  },
  {
    category: "ADHD",
    name: "John Doe",
    details: "Diagnosed since 2005",
    imageUrl: "/patient13.webp",
  },
  {
    category: "Anxiety",
    name: "Jane Smith",
    details: "Diagnosed since 2010",
    imageUrl: "/patient14.webp",
  },
  {
    category: "Depression",
    name: "Alex Johnson",
    details: "Diagnosed since 2012",
    imageUrl: "/patient15.webp",
  },
  {
    category: "Bipolar Disorder",
    name: "Chris Lee",
    details: "Diagnosed since 2015",
    imageUrl: "/patient16.webp",
  },
];

interface CardProps {
  category: string;
  name: string;
  details: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ category, name, details, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-72">
      <div className="relative group">
        <div className="w-full h-60 overflow-hidden">
          <Image
            src={imageUrl}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <span className="absolute top-2 left-2 bg-white text-black text-xs px-2 py-1 rounded-md shadow-md">
          {category}
        </span>
      </div>
      <div className="pt-4 pb-4 px-4 text-center">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-gray-700">{details}</p>
        <div className="flex justify-center mt-2">
          <a href="#" className="text-blue-600">
            &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

const CardsPage: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-8 bg-gray-100">
      {cardData.map((card, index) => (
        <Card
          key={index}
          category={card.category}
          name={card.name}
          details={card.details}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
};

export default CardsPage;
