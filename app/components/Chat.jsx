"use client";
import { FaLongArrowAltRight } from "react-icons/fa";
import Image from "next/image";

export default function Chat() {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-10 px-4 sm:px-10 py-16 sm:py-32">
        {/* TEXT */}
        <div className="order-2 sm:order-1 w-full sm:w-1/2">
          <h1 className="font-playfair text-2xl lg:text-3xl font-semibold">Hi, I’m Lilac.</h1>

          <p className="font-inter text-base font-semibold sm:text-lg mt-6">
         I help individuals navigate stress, anxiety, and life transitions through thoughtful
         conversation and evidence-based guidance. My goal is to support you in building
         self-awareness, resilience, and confidence in everyday life.
          </p>

          <button className="mx-auto mt-10 font-semibold border w-fit px-6 py-3 flex items-center gap-2 hover:bg-[#223614] hover:text-white transition-all">
            LET'S CHAT <FaLongArrowAltRight className="text-sm" />
          </button>
        </div>

        <div className="order-1 sm:order-2 relative w-full sm:w-1/2 flex justify-center">
          <Image
            src="/images/image8.jpg"
            width={350}
            height={350}
            alt=""
            className="rounded-t-full w-50 sm:w-100"
          />

          <div
            className="absolute bottom-0 right-12 sm:right-0 sm:translate-x-6 sm:translate-y-6 w-40 h-40 sm:w-50 sm:h-50 lg:w-70 lg:h-70 rounded-full overflow-hidden"
          >
            <Image
              src="/images/image9.png"
              alt="decorative circle"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
