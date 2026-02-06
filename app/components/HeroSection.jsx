"use client";
import { FaLongArrowAltRight } from "react-icons/fa";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto py-6 sm:min-h-screen">
      <div className="px-8 sm:px-6 pt-24 lg:pt-8 flex flex-col justify-around md:items-center md:flex-row">
        <div className="">
          <Image
            src="/images/image0.avif"
            className="rounded-t-full w-70 sm:w-220 mx-auto"
            alt="image"
            width={800}
            height={130}
            priority
          />
        </div>
        <div className="mt-4 md:ml-22 font-semibold">
          <h1 className="font-playfair text-center text-xl sm:text-2xl lg:text-4xl">
            Compassionate Therapy for Anxiety and Emotional Wellbeing in [City,
            State]
          </h1>
          <p className="font-inter py-8 text-center text-lg lg:text-xl">
            Dr. Maya Reynolds offers a warm, evidence-based approach to help
            individuals and couples navigate life’s challenges, build
            resilience, and feel more grounded.
          </p>
          <button className="font-semibold text-center border w-70 mx-auto p-3 cursor-pointer flex items-center justify-center gap-2 hover:transition-all duration-1000 hover:bg-[#223614] hover:text-white">
            Schedule a Free Consultation
            <FaLongArrowAltRight className="text-sm" />
          </button>
        </div>
      </div>
    </section>
  );
}
