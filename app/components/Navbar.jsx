"use client";
import Link from "next/link";
import { HiMiniBars2 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="w-full flex justify-between items-center px-4 md:px-8 py-4">
        
        {/* Mobile: LEFT | Desktop: RIGHT */}
        <button
          className="xl:hidden order-1"
          onClick={() => setOpen(!open)}
        >
          {open ? <RxCross2 size={30} /> : <HiMiniBars2 size={30} />}
        </button>

        {/* Logo */}
        <div className="text-[#223614] text-[33.28px] order-2 xl:order-1">
          <Link href="/">Lilac Template</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden text-[#223614] xl:block space-x-8 text-[19.456px] ml-auto order-2">
          <Link href="/">Blog</Link>
          <Link href="/">Contact</Link>
        </div>

      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="xl:hidden px-8 pb-4 flex flex-col gap-4 text-xl text-center mt-32 font-semibold transition-all duration-300 ease-in-out">
          <Link href="/">Blog</Link>
          <Link href="/">Contact</Link>
        </div>
      )}
    </header>
  );
}
