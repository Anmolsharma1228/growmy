import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function SecondHero() {
  return (
    <section className="bg-[#d0d0d0] mt-24 sm:mt-3">
      <div className="flex flex-col sm:flex-row lg:h-150">

        {/* LEFT */}
        <div className="order-2 sm:order-1 w-full sm:w-1/2 flex flex-col justify-between pt-24">
          <div className="px-4 sm:px-10 flex flex-col justify-center flex-1">
            <h1 className="font-semibold text-3xl lg:text-[50.56px]">
              Live a fulfilling life.
            </h1>

            <p className="text-xl sm:text-[19.456px] my-4">
              Life can be challenging—especially when you're trying to balance
              your personal and professional life.
            </p>

            <p className="text-xl sm:text-[19.456px] mb-14">
              It's easy to feel like you're alone in facing these challenges,
              but I want you to know that I'm here to help.
            </p>
          </div>

          <div className="border-t hover:bg-[#223614] hover:text-white transition-all duration-300">
            <button className="cursor-pointer w-full font-semibold p-2 sm:p-4 flex items-center justify-center gap-2">
              GET IN TOUCH
              <FaLongArrowAltRight className="text-sm" />
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="order-1 sm:order-2 w-full sm:w-1/2">
          <div className="relative w-full aspect-4/3 sm:aspect-auto sm:h-full">
            <Image
              src="/images/li2.webp"
              alt="hero"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
