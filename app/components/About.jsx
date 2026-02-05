"use client"
import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
  <section className="max-w-full mt-10 sm:mt-3 mx-auto">
    <div className="flex flex-col sm:flex-row lg:min-h-120 bg-[#d0d0d0]">
  
     {/* LEFT */}
      <div className="order-2 sm:order-1 w-full sm:w-1/2 flex flex-col justify-between pt-8">
        <div className="px-2 sm:px-4 flex flex-col justify-center flex-1">
          <h1 className="font-semibold text-xl lg:text-2xl">
           Meet Dr. Maya Reynolds, PsyD
          </h1>
  
          <p className="text-xl sm:text-[19.456px] my-2">
            Dr. Maya Reynolds is a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, and the lingering effects of past experiences.
          </p>
  
          <p className="text-xl sm:text-[19.456px] mb-4">
           Her work often focuses on anxiety, panic, trauma, and burnout, supporting clients who may appear functional on the outside while quietly struggling internally.
          </p>

          
          <p className="text-xl sm:text-[19.456px] mb-14">
             She takes a warm, collaborative, and grounded approach, integrating evidence-based methods such as CBT, EMDR, mindfulness, and body-oriented techniques.
          </p>
        </div>
      </div>
      
   {/* RIGHT */}
      <div className="order-1 sm:order-2 w-full sm:w-1/2">
        <div className="relative w-full h-140 md:h-155">
          <Image
            src="/images/dr.png"
            alt="hero"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
  
    </div>
  </section>
  )
}
