import React, { useState } from "react";
import phoneImage from "../../../assets/toolsclone.png";
import { items, tools } from "../../../constants";

const tool = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="bg-white px-4 md:px-10 py-12 lg:py-20">
      <div className="text-center max-w-4xl mx-auto mb-12">
        {tools.map((tool, idx) => (
          <div key={idx} className="mb-6">
            <h1 className="lg:text-4xl  font-bold text-gray-900">
              {tool.title}
            </h1>
            <p className="text-gray-700 text-base sm:text-lg pt-3">
              {tool.description}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="w-full sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] max-w-full">
          <img
            src={phoneImage}
            alt="Phone Mockup"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="w-full max-w-xl flex flex-col gap-8 sm:gap-10">
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer border-l-4 pl-4 transition-all duration-300
                ${
                  activeIndex === index ? "border-blue-500" : "border-gray-200 "
                }`}
            >
              <h3 className="font-semibold text-gray-800 text-lg sm:text-xl">
                {item.title}
              </h3>
              {index === 0 && (
                <p className="text-gray-600 text-sm sm:text-base mt-2">
                  {item.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default tool;
