import React from "react";
import Button from "../../common/Button/Button";
import phone from "../../../assets/phoneclone.png";
import pause from "../../../assets/pause.png";
import { building } from "../../../constants/index";

function BuildingSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-2 bg-white">
      <div className="max-w-xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold  text-gray-900 mb-6">
          Building apps just got easier
        </h1>

        <div className="text-gray-600 mb-6 space-y-2">
          {building.map((item, index) => (
            <p key={index}>{item.text}</p>
          ))}
        </div>

        <div className="flex items-center gap-10">
          <Button />
          <a href="#" className="text-blue-600 font-medium flex items-center">
            <span className="mr-2">
              <img src={pause} className="w-3.5" alt="" />
            </span>{" "}
            Watch Video
          </a>
        </div>
      </div>

      <div className="mt-0 md:mt-0 flex justify-center">
        <img src={phone} alt=""
          className="w-[460px] h-[370px] sm:w-[390px] sm:h-[430px] md:w-[530px] md:h-[550px] lg:w-[650px] lg:h-[660px]"/>
      </div>
    </section>
  );
}

export default BuildingSection;
