"use client"
import Image from "next/image"

export default function Specialties() {
  return (
    <section className="mt-24 max-w-6xl mx-auto px-4">
      <h1 className="font-semibold text-[#223614] text-3xl md:text-4xl text-center">
        My Specialties
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">

        {/* CARD */}
        <div className="h-120 sm:h-130 w-full py-6 border bg-[#E5E0DA] text-[#223614] flex flex-col justify-between mx-auto">
          <div className="">
            <h2 className="px-6 text-lg md:text-[19.456px] font-semibold">
              Anxiety & Panic Therapy
            </h2>
            <p className="px-6 mt-4 text-sm md:text-[14.272px] font-semibold">
             Support for adults who feel overwhelmed by constant worry, overthinking, or physical tension. Therapy focuses on understanding anxiety patterns and developing practical tools to feel more grounded, calm, and in control in daily life.
            </p>
          </div>

          <div className="w-64 h-64 sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto rounded-full overflow-hidden">
            <Image
              src="/images/image3.avif"
              width={300}
              height={300}
              alt="Self-Esteem"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* CARD */}
        <div className="h-120 sm:h-130 w-full py-6 border bg-[#E5E0DA] text-[#223614] flex flex-col justify-between mx-auto">
          <div className="">
            <h2 className="px-6 text-lg md:text-[19.456px] font-semibold">
            Trauma-Informed Therapy
            </h2>
            <p className="px-6 mt-4 text-sm md:text-[14.272px] font-semibold">
            A gentle, paced approach for adults impacted by past experiences, whether from a single event or long-standing patterns. Sessions prioritize safety, stabilization, and helping you feel more regulated—both emotionally and physically.
            </p>
          </div>

          <div className="w-64 h-64 sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto rounded-full overflow-hidden">
            <Image
              src="/images/image4.avif"
              width={300}
              height={300}
              alt="Self-Esteem"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

 {/* CARD */}
        <div className="h-120 sm:h-130 w-full py-6 border bg-[#E5E0DA] text-[#223614] flex flex-col justify-between mx-auto">
          <div className="">
            <h2 className="px-6 text-lg md:text-[19.456px] font-semibold">
             Burnout & High-Achiever Support
            </h2>
            <p className="px-6 mt-4 text-sm md:text-[14.272px] font-semibold">
             For professionals and creatives experiencing exhaustion, perfectionism, or constant internal pressure. Therapy offers a space to slow down, reconnect with yourself, and build more sustainable ways of working and living.
            </p>
          </div>

          <div className="w-64 h-64 sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto rounded-full overflow-hidden">
            <Image
              src="/images/image5.avif"
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
