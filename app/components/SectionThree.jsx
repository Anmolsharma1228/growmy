"use client"
import Image from "next/image"
import { FaLongArrowAltRight } from "react-icons/fa"

export default function SectionThree() {
  return (
    <section className="lg:min-h-screen mt-20">
      <div className="flex flex-col sm:flex-row">

        {/* LEFT IMAGE */}
        <div className="w-full sm:w-1/2">
          <Image
            src="/images/li6.webp"
            alt="Support"
            width={675}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full sm:w-1/2 bg-[#bbb] text-[#203614] flex flex-col justify-between pt-20">

          {/* TEXT */}
          <div className="p-8 lg:p-14">
            <h1 className="text-4xl lg:text-[50.56px] font-semibold py-6">
              You don’t have to do this all alone.
            </h1>

            <p className="mb-4 text-[19.456px] font-semibold">
              If you are facing any of these, there’s hope:
            </p>

            <ul className="sm:mx-4 mx-0 lg:mx-0 list-disc pl-5 mb-4 space-y-2 text-[19.456px] font-semibold">
              <li>Persistent feelings of sadness or hopelessness</li>
              <li>Trouble focusing or making decisions</li>
              <li>Difficulty maintaining relationships</li>
              <li>Feeling constantly exhausted or unmotivated</li>
              <li>A pervasive sense of being overwhelmed</li>
            </ul>

            <p className="text-[19.456px] font-semibold">
              With empathy and guidance, we'll work together to navigate the challenges life throws your way.
            </p>
          </div>

          {/* BUTTON (BOTTOM) */}
          <div className="border-t hover:bg-[#223614] hover:text-white transition-all duration-300">
            <button className="w-full font-semibold p-4 flex items-center justify-center gap-2">
              WORK WITH ME
              <FaLongArrowAltRight className="text-sm" />
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
