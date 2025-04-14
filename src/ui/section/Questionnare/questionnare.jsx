import React, { useState } from 'react';
import curve from "../../../assets/downarrow.png";
import { faqs } from '../../../constants';

function Questionnaire() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
return (
    <section className="max-w-8xl mx-auto py-8 md:py-16 px-4 sm:px-6 lg:px-20">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 md:mb-10 pb-4 ">
  <span className="block sm:inline">Answers to your</span>{' '}
  <span className="block sm:inline">questions</span>
</h2>
      <div className="divide-y divide-gray-200">
        {faqs.map((question, index) => (
          <div key={index} className={`py-6 md:py-6 ${index < faqs.length - 1 ? 'border-b border-gray-200' : ''}`}>
            <button 
              onClick={() => toggle(index)} 
              className="w-full flex justify-between items-center text-left text-blue-600 font-medium text-sm sm:text-base"
            >
              <span className="mr-4">{question}</span>
              <img src={curve} alt="" 
                className={`w-3 transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`} 
              />
            </button>
            {openIndex === index && (
              <p className="mt-3 md:mt-4 text-xs sm:text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et euismod ligula.
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Questionnaire;