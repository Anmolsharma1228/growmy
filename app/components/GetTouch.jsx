"use client"
import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";


export default function GetTouch() {
  return (
    <section className='bg-[#7e7b46] py-24 sm:py-42 lg:py-32'>
    <div className='text-[#FBF6F1] max-w-2xl mx-auto text-center'>
      <h1 className='text-2xl sm:text-3xl font-semibold'>Get started today.</h1>
      <p className='text-lg mt-4 mb-4 px-12 sm:px-24'>
        Taking the first step can feel uncertain, and that’s completely okay. If you’re ready to begin exploring what support could look like for you, I’m here. Reach out to book your first session, and we’ll take things one step at a time—together.
      </p>
 <button className='mt-16 font-semibold text-center border w-44 mx-auto px-4 py-3 cursor-pointer flex items-center justify-center gap-2 hover:transition-all duration-1000 hover:bg-[#FBF6F1] hover:text-[#7e7b46]'>GET IN TOUCH<FaLongArrowAltRight className='text-sm'/></button>
    </div>
    </section>
  )
}
