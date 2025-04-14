import React from "react";
import { features } from "../../../constants";
import playlist from "../../../assets/playlist.png";

function FeatureSection() {
  return (
    <section className="bg-gray-50 py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
        {features.map((item, index) => {
          const bgColors = ["bg-red-500", "bg-yellow-500", "bg-blue-600"];
          const bgColor = bgColors[index % bgColors.length];

          return (
            <div key={index} className="flex flex-col items-center">
              <div
                className={` w-16 h-16 ${bgColor} rounded-full flex items-center justify-center mb-5`}
              >
                <img src={playlist} alt="" className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-2.5">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FeatureSection;
