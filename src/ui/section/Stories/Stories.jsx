import React, { useState } from "react";
import woman from "../../../assets/women.jpg";
import { slides } from "../../../constants";
import overlayImg from "../../../assets/window.jpg";
import rightArrow from "../../../assets/rightarrow.png";

const Stories = () => {
  const [index, setIndex] = useState(0);
  const handleNext = () => {
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  const slide = slides[index];

  return (
    <div className="bg-gray-100 max-w-full py-10 px-6 md:px-10 mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 relative">
        <div className="relative w-full sm:w-[528px] flex-shrink-0 flex justify-center">
          <img
            src={woman}
            alt="profile"
            className="rounded-lg w-full max-w-[528px]"
          />
          <div className="absolute top-10 right-[-5%] w-28 sm:w-70 lg:w-[189px] h-20 sm:h-24 lg:h-[113px] border-2 border-dashed border-red-400 bg-white shadow-md rounded">
            <img
              src={overlayImg}
              alt=""
              className="  w-full h-full object-cover rounded"
            />
          </div>
        </div>

        <div className="w-full sm:w-[528px] flex-shrink-0 text-center sm:text-left mx-auto">
          <p className="text-s uppercase font-semibold text-gray-500">
            Success Stories
          </p>
          <p className="mt-2 text-sm text-gray-600">“{slide.quote}”</p>
          <p className="mt-3 text-sm text-gray-600">
            {slide.name}, <br />
            <span className="text-sm text-gray-600">{slide.company}</span>
          </p>

          <div className="mt-4 flex justify-center sm:justify-start space-x-2">
            {slides.map((_, i) => (
              <span
                key={i}
                onClick={() => setIndex(i)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  i === index
                    ? "w-6 h-2 bg-blue-600"
                    : "w-1.5 h-1.5 bg-gray-400"
                }`}
              ></span>
            ))}
          </div>
        </div>

        <img
          src={rightArrow}
          alt=""
          onClick={handleNext}
          className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-6 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Stories;
