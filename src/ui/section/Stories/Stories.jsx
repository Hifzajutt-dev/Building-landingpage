import React, { useState } from "react";
import woman from "../../../assets/women.jpg";
import sliderimg1 from "../../../assets/sliderimg1.jpg";
import sliderimg2 from "../../../assets/sliderimg2.jpg";
import sliderimg3 from "../../../assets/sliderimg3.jpg";
import overlayImg from "../../../assets/window.jpg";
import rightArrow from "../../../assets/rightarrow.png";

const slides = [
  { image: woman, quote: "Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo.", name:  "Marie Poirot", company: "Bigapp" },
  { image: sliderimg1, name: "Marie Poirot",
    company: "Bigapp",
    quote:
      "Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia.", },
  { image: sliderimg2,   name: "Marie Poirot",
    company: "Bigapp",
    quote:
      "Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo.", },
  { image: sliderimg3,  name: "Marie Poirot",
    company: "Bigap",
    quote:
      "Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst. Ornare faucibus quis velit fringilla aliquam ultricies. Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Sed ut vestibulum eget purus ornare. Risus elit et fringilla habitant ut facilisi.", },
];

const Stories = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const slide = slides[index];

  return (
<div className="bg-gray-100 py-10 px-4 sm:px-6 md:px-10 overflow-x-hidden">
  <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto relative">
    
  
    <div className="relative w-full max-w-[528px] sm:w-[400px] md:w-[460px] lg:w-[528px] flex justify-center flex-shrink-0">
      <img
        src={slide.image}
        alt="slide"
        className="rounded-lg w-full object-cover"
      />
      <div className="absolute top-10 right-[-2%] w-20 h-14 sm:w-28 sm:h-20 md:w-[189px] md:h-[113px] border-2 border-dashed border-red-400 bg-white shadow-md rounded">
        <img
          src={overlayImg}
          alt="overlay"
          className="w-full h-full object-cover rounded"
        />
      </div>
    </div>

    
    <div className="w-full max-w-[528px] text-center md:text-left">
      <p className="uppercase font-semibold text-gray-500">Success Stories</p>
      <p className="mt-2 text-sm text-gray-600">“{slide.quote}”</p>
      <p className="mt-3 text-sm text-gray-600">
        {slide.name}, <br />
        <span className="text-sm text-gray-600">{slide.company}</span>
      </p>

      <div className="mt-4 flex justify-center md:justify-start space-x-2">
        {slides.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              i === index ? "w-6 h-2 bg-blue-600" : "w-2 h-2 bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>


    <div className="hidden lg:flex justify-end absolute right-0 top-1/2 transform -translate-y-1/2">
      <img
        src={rightArrow}
        alt="next"
        onClick={handleNext}
        className="w-4 h-5 cursor-pointer"
      />
    </div>
  </div>
</div>

  );
};

export default Stories;

