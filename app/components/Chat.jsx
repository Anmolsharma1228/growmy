"use client";
import { FaLongArrowAltRight } from "react-icons/fa";
import Image from "next/image";

export default function Chat() {
  return (
    <section className="bg-[#e7e7e7]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-10 px-4 sm:px-10 py-16 sm:py-32">
        {/* TEXT */}
        <div className="order-2 sm:order-1 w-full sm:w-1/2 text-[#223614]">
          <h1 className="text-3xl lg:text-[50.56px] font-semibold">Hi, I’m Lilac.</h1>

          <p className="text-base font-semibold sm:text-[19.456px] mt-6">
            I'm committed to providing a safe and supportive environment where
            we can explore your thoughts, feelings, and behaviors. With empathy
            and guidance, we'll work together to navigate the challenges life
            throws your way.
          </p>

          <button className="mx-auto mt-10 font-semibold border w-fit px-6 py-3 flex items-center gap-2 hover:bg-[#223614] hover:text-white transition-all">
            LET'S CHAT <FaLongArrowAltRight className="text-sm" />
          </button>
        </div>

        <div className="order-1 sm:order-2 relative w-full sm:w-1/2 flex justify-center">
          <Image
            src="/images/li7.webp"
            width={350}
            height={350}
            alt=""
            className="rounded-t-full w-50 sm:w-100"
          />

          <div
            className="absolute bottom-0 right-0 sm:translate-x-6 sm:translate-y-6 w-48 h-48 sm:w-40 sm:h-40 lg:w-60 lg:h-60 rounded-full overflow-hidden"
          >
            <Image
              src="/images/circle.webp"
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
