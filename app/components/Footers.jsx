"use client"
import Link from 'next/link'
import React from 'react'

export default function Footers() {
  return (
   <footer className="bg-[#fef2f2]">
  <div className="max-w-7xl mx-auto px-4 md:px-14 pt-8 pb-16 text-[#223614] font-semibold">
    <div className="flex flex-col md:flex-row justify-between gap-10 text-center sm:text-left">

      {/* LEFT */}
      <div>
        <h1 className="font-playfair text-xl lg:text-2xl">Lilac Template</h1>
        <div className="font-inter text-sm py-4">
          <p>123 Example Road</p>
          <p>Minneapolis, MN</p>
        </div>

        <div className="font-inter underline text-sm py-4 flex flex-col">
          <Link href="/">email@example.com</Link>
          <Link href="/">(555) 555-5555</Link>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-24">
        <div>
          <h1 className="font-playfair text-xl lg:text-2xl">Hours</h1>
          <div className="font-inter py-4 text-sm">
            <p>Monday – Friday</p>
            <p>10am – 6pm</p>
          </div>
        </div>

        <div>
          <h1 className="font-playfair text-xl lg:text-2xl">Find</h1>
          <div className="font-inter sm:text-right flex flex-col underline text-sm pt-4">
            <Link href="/">Home</Link>
            <Link href="/">Contact</Link>
            <Link href="/">Blog</Link>
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="font-inter px-4">
    <div className="pt-10 text-sm text-center">
      <div className="flex flex-wrap justify-center gap-2 underline">
        <Link href="/">Privacy & Cookies Policy</Link>
        <Link href="/">Good Faith Estimate</Link>
        <Link href="/">Website Terms & Conditions</Link>
        <Link href="/">Disclaimer</Link>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        <p>Website Template Credits:</p>
        <Link href="/" className="underline">GoBloom Creative</Link>
      </div>

      <div className="mt-6 pb-4">
        <p>All Rights Reserved © 2024 Your Business Name Here, LLC.</p>
      </div>
    </div>
  </div>
</footer>

  )
}
