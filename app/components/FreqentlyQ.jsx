"use client";
import Image from "next/image";
import { faqs } from "./Data/Q&A";
import { TfiPlus,TfiMinus } from "react-icons/tfi";
import { useState } from "react";

export default function FrequentlyQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 sm:py-38">
      <div className="max-w-6xl mx-auto flex gap-10 lg:gap-16 flex-col md:flex-row items-start space-x-24 px-4 sm:px-14 lg:px-2">
        {/* IMAGE */}
        <div className="sm:mt-10 lg:mt-0 w-60 mx-auto sm:w-80 lg:w-100 xl:w-125">
          <Image
            src="/images/image10.jpeg"
            width={450}
            height={450}
            alt="FAQ"
            className="rounded-t-full w-full object-cover"
          />
        </div>

        {/* FAQ CONTENT */}
        <div className="w-full md:w-2/3 text-[#223614] mt-14 sm:mt-10">
          <h1 className="text-2xl sm:text-3xl mb-8 font-semibold">FAQs</h1>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-md text-xl lg:text-2xl">
                {/* QUESTION */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="border-t border-[#223614] w-full flex space-x-8 items-center  font-semibold cursor-pointer transition-all duration-300 ease-in-out"
                >
                  {openIndex === index ? (
                    <TfiMinus />
                  ) : (
                    <TfiPlus />
                  )}
                  <span className="text-left">
                    {faq.question}
                  </span>
                </button>

                {/* ANSWER */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out
                  ${openIndex === index ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
                >
                  <div className="text-[20px] px-5 pb-5 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="border-b text-[#223614] mt-3"/>
        </div>
      </div>
    </section>
  );
}
