import React from "react";

const SupportGroupArticle = ({ condition }: any) => {
  return (
    <>
      <br />
      <br />
      <div className="w-full md:w-1/2 space-y-9 pl-6 md:pl-32 ">
        {condition.supportData?.map((group: any) => (
          <div
            key={group?.id}
            className="flex flex-col sm:flex-row md:flex-row lg:flex-row items-center bg-white rounded-lg overflow-hidden sm:justify-center lg:justify-center sm:mr-2 md:mr-2"
          >
            <img
              src={group?.image}
              className="w-full h-40 sm:h-40 sm:w-40 md:h-40 md:w-40 lg:h-60 lg:w-60 object-cover rounded-md"
              style={{
                objectPosition: "center",
                maxHeight: "100%",
                maxWidth: "100%",
              }}
            />
            <div className="p-6 w-full sm:w-auto md:w-auto lg:w-auto bg-white">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-black bg-[#FEEADC] rounded-sm mb-2">
                {group?.tag}
              </span>
              <h3 className="text-xl font-bold mb-2">{group?.title}</h3>
              <p className="text-gray-700">{group?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SupportGroupArticle;
