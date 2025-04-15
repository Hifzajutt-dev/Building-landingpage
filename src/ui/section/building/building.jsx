import React from "react";
import Button from "../../common/Button/Button";
import phone from "../../../assets/phoneclone.png";
import pause from "../../../assets/pause.png";
import { building } from "../../../constants/index";

function BuildingSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20 py-8 bg-white  ">
      
      
      <div className=" md:w-1/2 max-w-xl text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
          Building apps just got easier
        </h1>

        <div className="text-gray-600 mb-6 space-y-2">
          {building.map((item, index) => (
            <p key={index}>{item.text}</p>
          ))}
        </div>

        <div className="flex  sm:flex-row sm:items-center justify-center md:justify-start gap-8 sm:gap-10">
          <Button />
          <a href="#" className="text-blue-600 font-medium flex items-center justify-center">
            <img src={pause} className="w-4 mr-2" alt="" />
            Watch Video
          </a>
        </div>
      </div>

      
      <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src={phone}
          alt="Phone"
          className="w-[280px] sm:w-[360px] md:w-[480px] lg:w-[560px] xl:w-[650px] h-auto"
        />
      </div>
    </section>
  );
}

export default BuildingSection;

