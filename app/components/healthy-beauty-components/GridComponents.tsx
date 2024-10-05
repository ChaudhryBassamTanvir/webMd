import React from "react";
import Image from "next/image";
import Link from "next/link";

interface GridItem {
  question: string;
  answer: string;
  slug: string; // Ensure each GridItem has a slug property
}

interface GridComponentProps {
  sectionTitle: string;
  sectionSubtitle: string;
  imageSrc: string;
  items: GridItem[];
  imageLeft?: boolean; // New prop to determine image position
}

const GridComponent: React.FC<GridComponentProps> = ({
  sectionTitle,
  sectionSubtitle,
  imageSrc,
  items,
  imageLeft = true,
}) => {
  return (
    <div className="container mx-auto pt-20">
      <div className="relative flex justify-between items-center flex-wrap px-4 md:px-0">
        <h2 className="text-xl font-bold mb-4 text-[#00157c] font-sans w-full md:w-auto">
          <span className="font-thin">{sectionTitle} /</span>
          {sectionSubtitle}
        </h2>
        <Link
          href="#"
          className="text-[#3557ff] font-sans text-right md:absolute md:top-4 md:right-4 w-full md:w-auto mt-2 md:mt-0"
          style={{
            fontSize: "1.125rem",
            fontWeight: 600,
          }}
        >
          View All
        </Link>
        <div className="w-full border-t border-gray-300 relative mt-4 md:mt-0">
          <div className="absolute right-0 top-0 w-[70px] md:w-[80px] border-t-2 border-[#3557ff]"></div>
        </div>
      </div>

      <div
        className={`max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-32 items-center`}
      >
        {imageLeft ? (
          <>
            <div className="w-full md:order-1 md:col-start-1 md:col-end-2 flex items-center">
              <Image
                src={imageSrc}
                alt="Dynamic Image"
                className="rounded-lg"
                width={500}
                height={350}
                layout="responsive"
              />
            </div>
            <div className="w-full md:order-2 md:col-start-2 md:col-end-3 mt-8 md:mt-0">
              <div className="space-y-14">
                {items.map((item, index) => (
                  <div key={index}>
                    <Link href={item.slug}>
                      <h2 className="text-xl font-bold hover:text-blue-700">
                        {item.question}
                      </h2>
                    </Link>
                    <p className="text-gray-600">{item.answer}</p>
                    {index < items.length - 1 && (
                      <hr className="my-1 border-gray-300" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="w-full md:order-2 md:col-start-2 md:col-end-3 flex items-center">
              <Image
                src={imageSrc}
                alt="Dynamic Image"
                className="rounded-lg"
                width={500}
                height={350}
                layout="responsive"
              />
            </div>
            <div className="w-full md:order-1 md:col-start-1 md:col-end-2 mt-8 md:mt-0">
              <div className="space-y-14">
                {items.map((item, index) => (
                  <div key={index}>
                    <Link href={item.slug}>
                      <h2 className="text-xl font-bold hover:text-blue-700">
                        {item.question}
                      </h2>
                    </Link>
                    <p className="text-gray-600">{item.answer}</p>
                    {index < items.length - 1 && (
                      <hr className="my-1 border-gray-300" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default GridComponent;
