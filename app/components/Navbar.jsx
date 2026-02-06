"use client";
import Link from "next/link";
import { HiMiniBars2 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <header className="font-playfair">
      <nav className="w-full flex justify-between items-center px-4 md:px-8 py-4 relative z-50">
        {/* Mobile Button */}
        <button className="xl:hidden order-1" onClick={() => setOpen(!open)}>
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

      <div
        onClick={() => setOpen(false)}
        className={`xl:hidden fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 text-3xl font-semibold transition-all duration-300 ease-in-out ${
          open
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible translate-y-5"
        }`}
      >
        <Link href="/" onClick={() => setOpen(false)}>
          Blog
        </Link>
        <Link href="/" onClick={() => setOpen(false)}>
          Contact
        </Link>
      </div>
    </header>
  );
}
