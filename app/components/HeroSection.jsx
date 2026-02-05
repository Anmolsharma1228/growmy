"use client"
import { FaLongArrowAltRight } from "react-icons/fa";
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className='max-w-7xl mx-auto min-h-screen'>
    <div className='px-8 sm:px-2 pt-38 lg:pt-8 flex flex-col justify-around md:items-center md:flex-row lg:gap-20'>
    <div className="">
      <Image src="/images/li1.webp"
      className='rounded-t-full w-45 sm:w-80 lg:w-120 mx-auto'
      alt='image'
      width={500}
      height={130}
      priority
      />
     </div>
     <div className='mt-4 md:ml-22 font-semibold'>
      <h1 className='text-center text-5xl lg:text-6xl text-[#223614]'>Live your life<br/> in full bloom</h1>
      <p className='py-8 text-center text-xl'>Therapy for Adults in Minneapolis, MN.</p>
      <button className='font-semibold text-center border w-60 mx-auto p-3 cursor-pointer flex items-center justify-center gap-2 hover:transition-all duration-1000 hover:bg-[#223614] hover:text-white'>CONTACT WITH ME <FaLongArrowAltRight className='text-sm'/></button>
     </div>
    </div>
    </section>
  )
}
