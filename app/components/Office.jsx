"use client"
import { HiOutlineLocationMarker } from "react-icons/hi";
import Image from "next/image"

export default function Office() {
  return (
    <section className="max-w-7xl mx-auto py-16 sm:py-24">
      <div className="py-10">

               {/* RIGHT - CONTENT */}
        <div className="w-full px-4 lg:px-10 py-2">
          <h2 className="font-playfair text-2xl lg:text-3xl font-semibold mb-4">
            A Calm, Welcoming Office
          </h2>

          <p className="font-inter text-lg mb-4">
            My office is designed to feel warm, quiet, and grounding—so you can
            feel comfortable from the moment you walk in.
          </p>

          <div className="flex items-center mb-2">
             <HiOutlineLocationMarker  className="text-lg"/>
                <p className="font-inter text-lg">
           : 123th Street 45 W, Santa Monica, CA 90401
          </p>
          </div>     
       

          <p className="font-inter text-lg">
            Both in-person and virtual sessions are available.
          </p>
        </div>

        {/* LEFT - IMAGE */}
        <div className="flex justify-between gap-10 w-full px-4 lg:px-10 pt-4">
          <div className="relative w-100 h-50 lg:w-120 lg:h-80 rounded-xl overflow-hidden">
            <Image
              src="/images/office1.jpeg"
              alt="Therapy Office"
              fill
              className="object-cover"
            />
          </div>
            <div className="relative w-100 h-50 lg:w-120 lg:h-80 rounded-xl overflow-hidden">
            <Image
              src="/images/office2.jpeg"
              alt="Therapy Office"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
