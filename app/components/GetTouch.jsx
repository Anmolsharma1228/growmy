"use client"
import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";


export default function GetTouch() {
  return (
    <section className='bg-[#7e7b46] py-24 sm:py-42 lg:py-32'>
    <div className='text-[#FBF6F1] max-w-2xl mx-auto text-center'>
      <h1 className='text-3xl lg:text-[41.92px] font-semibold'>Get started today.</h1>
      <p className='text-[19.456px] mt-4 mb-4 px-12 sm:px-24'>Ready to take the first step towards a happier, healthier you? 
Contact me to book your first session. I look forward to starting this therapeutic journey with you.</p>
 <button className='mt-16 font-semibold text-center border w-44 mx-auto px-4 py-3 cursor-pointer flex items-center justify-center gap-2 hover:transition-all duration-1000 hover:bg-[#FBF6F1] hover:text-[#7e7b46]'>GET IN TOUCH<FaLongArrowAltRight className='text-sm'/></button>
    </div>
    </section>
  )
}
