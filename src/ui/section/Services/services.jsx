import React from "react";
import phone from "../../../assets/serviceclone.png";
import { services } from "../../../constants/index";
import Button from "../../common/Button/Button";

function ServicesSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-20 py-16 sm:py-16 bg-gray-50 gap-10">
      <div className="w-full md:w-1/2 max-w-xl text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
          Start now and get the best services
        </h1>

        <div className="text-gray-600 mb-6 space-y-3">
          {services.map((item, index) => (
            <p key={index} >
              {item.text}
            </p>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-8">
          <Button />
        </div>
      </div>

      <div className="w-full sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] max-w-full">
        <img
          src={phone}
          alt=""
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
}

export default ServicesSection;
