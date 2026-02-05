"use client"
import Image from "next/image"

export default function Specialties() {
  return (
    <section className="mt-24 max-w-6xl mx-auto px-4">
      <h1 className="font-semibold text-[#223614] text-3xl md:text-[50.56px] text-center">
        My Specialties
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 lg:h-120">

        {/* CARD */}
        <div className="h-110 w-full lg:w-90 py-6 border bg-[#E5E0DA] text-[#223614] flex flex-col justify-between mx-auto">
          <div className="">
            <h2 className="px-6 text-lg md:text-[19.456px] font-semibold">
              Self-Esteem
            </h2>
            <p className="px-6 mt-6 text-sm md:text-[14.272px] font-semibold">
              Building a strong sense of self-worth is key to living a fulfilled life.
              Let's work together to bolster your self-esteem.
            </p>
          </div>

          <div className="w-64 h-64 sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto rounded-full overflow-hidden">
            <Image
              src="/images/li3.webp"
              width={300}
              height={300}
              alt="Self-Esteem"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* CARD */}
        <div className="h-110 w-full lg:w-90 py-6 border bg-[#E5E0DA] text-[#223614] flex flex-col justify-between mx-auto">
          <div className="">
            <h2 className="px-6 text-lg md:text-[19.456px] font-semibold">
            Relationships
            </h2>
            <p className="px-6 mt-6 text-sm md:text-[14.272px] font-semibold">
             Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.
            </p>
          </div>

          <div className="w-64 h-64 sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto rounded-full overflow-hidden">
            <Image
              src="/images/li4.webp"
              width={300}
              height={300}
              alt="Self-Esteem"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

 {/* CARD */}
        <div className="h-110 w-full lg:w-90 py-6 border bg-[#E5E0DA] text-[#223614] flex flex-col justify-between mx-auto">
          <div className="">
            <h2 className="px-6 text-lg md:text-[19.456px] font-semibold">
              Burnout
            </h2>
            <p className="px-6 mt-6 text-sm md:text-[14.272px] font-semibold">
              Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.
            </p>
          </div>

          <div className="w-64 h-64 sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto rounded-full overflow-hidden">
            <Image
              src="/images/li5.webp"
              width={300}
              height={300}
              alt="Self-Esteem"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
