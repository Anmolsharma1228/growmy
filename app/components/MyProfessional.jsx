"use client";
import React from "react";
import { useState } from "react";
import { myprofessionalbackground } from "./Data/Q&A";
import { TfiMinus, TfiPlus } from "react-icons/tfi";

export default function MyProfessional() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#e7e7e7] py-24 lg:py-0">
      <div className="py-16">
        <h1 className="font-semibold text-center text-4xl lg:text-[41.92px] text-[#223614]">
          My Professional Background
        </h1>
        <div className="w-full md:w-2/4 mx-auto text-[#223614] mt-6">
          <div className="space-y-3">
            {myprofessionalbackground.map((faq, index) => (
              <div key={index} className="px-10 pt-6 rounded-md text-[24.64px]">
                {/* QUESTION */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="border-t border-[#223614] w-full flex justify-between space-y-2 items-center font-semibold cursor-pointer transition-all duration-300 ease-in-out"
                >
                  <span className="text-left">{faq.title}</span>
                  {openIndex === index ? <TfiMinus /> : <TfiPlus />}
                </button>

                {/* ANSWER */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out
                  ${openIndex === index ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
                >
                  <div className="text-[20px] px-5 pb-5 leading-relaxed">
                    {faq.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-76 lg:w-150 mx-auto border-b text-[#223614] mt-3 lg:mt-6" />
        </div>
      </div>
    </section>
  );
}
