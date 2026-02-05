"use client"
import Image from "next/image"
import { FaLongArrowAltRight } from "react-icons/fa"

export default function SectionThree() {
  return (
    <section className="mt-20">
      <div className="flex flex-col md:flex-row min-h-150">

        {/* LEFT IMAGE */}
        <div className="relative w-full lg:w-1/2 h-75 sm:h-100 md:h-auto">
          <Image
            src="/images/image6.png"
            alt="Support"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full lg:w-1/2 bg-[#bbb] text-[#203614] flex flex-col justify-between">

          {/* TEXT */}
          <div className="p-6 sm:p-10 lg:p-14 pt-12 lg:pt-20">
            <h1 className="text-xl sm:text-2xl lg:text-4xl font-semibold py-4">
              You don’t have to carry everything by yourself.
            </h1>

            <p className="mb-4 text-base sm:text-lg lg:text-[19.456px] font-semibold">
              If any of this feels familiar, it doesn’t mean something is wrong
              with you — it means you’ve been carrying a lot for a long time.
            </p>

            <ul className="list-disc pl-5 mb-4 space-y-2 text-base sm:text-lg lg:text-[19.456px] font-semibold">
              <li>Emotional heaviness that doesn’t seem to lift, even on good days</li>
              <li>Difficulty focusing or making decisions, especially under pressure</li>
              <li>Strained or confusing relationships</li>
              <li>Ongoing exhaustion or lack of motivation</li>
              <li>A constant sense of overwhelm</li>
            </ul>

            <p className="text-base sm:text-lg lg:text-[19.456px] font-semibold">
              You don’t need to have everything figured out before reaching out.
              With compassion and practical guidance, we’ll take things one step
              at a time — at a pace that feels safe for you.
            </p>
          </div>

          {/* BUTTON */}
          <div className="border-t hover:bg-[#223614] hover:text-white transition-all duration-300">
            <button className="w-full font-semibold p-4 flex items-center justify-center gap-2">
              Let’s work together
              <FaLongArrowAltRight className="text-sm" />
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
