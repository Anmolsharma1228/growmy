import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function SecondHero() {
  return (
    <section className="max-w-full mt-24 sm:mt-16 mx-auto">
      <div className="flex flex-col sm:flex-row lg:min-h-150">
        {/* LEFT */}
        <div className="order-1 w-full sm:w-1/2">
          <div className="relative w-full aspect-4/3 sm:aspect-auto sm:h-full">
            <Image
              src="/images/image1.jpg"
              alt="hero"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="font-playfair order-2 w-full sm:w-1/2 flex flex-col justify-between pt-24 sm:pt-12">
          <div className="px-4 sm:px-10 flex flex-col justify-center flex-1">
            <h1 className="font-semibold text-3xl lg:text-4xl">
              You don’t have to navigate life alone.
            </h1>

            <p className="font-inter text-lg my-4">
              Life can feel overwhelming when responsibilities, expectations,
              and emotions start pulling you in different directions. It’s not
              always easy to slow down and understand what you’re truly feeling.
            </p>

            <p className="font-inter text-lg mb-14">
              This is a safe space to pause, reflect, and reconnect with
              yourself. Together, we’ll work through challenges with clarity,
              compassion, and practical guidance—so you can move forward with
              confidence.
            </p>
          </div>

          <div className="border-t hover:bg-[#223614] hover:text-white transition-all duration-300">
            <button className="w-full font-semibold p-2 sm:p-4 flex items-center justify-center gap-2">
              GET IN TOUCH
              <FaLongArrowAltRight className="text-sm" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
