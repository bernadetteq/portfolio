"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {

  function handleClickOutside(e: MouseEvent) {

    if (
      menuRef.current &&
      !menuRef.current.contains(e.target as Node)
    ) {
      setMenuOpen(false);
    }

  }

  document.addEventListener(
    "mousedown",
    handleClickOutside
  );

  return () => {
    document.removeEventListener(
      "mousedown",
      handleClickOutside
    );
  };

}, []);
  
  return (
    <nav className="relative" >
    {/* <nav className="flex items-center justify-between py-6"> */}

      <div className="flex items-center justify-between py-6">
        {/* LOGO */}
        <Link href="/" className="text-lg">
          Bernadette Quitoriano
        </Link>
        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6 text-sm">
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <a
          href="/cv-bernadette-quitoriano-.pdf"
          download
          onClick={() => {
            window.gtag?.("event", "resume_download", {
              event_category: "engagement",
              event_label: "CV PDF",
            });
          }}
        >
          Download CV
        </a>
        </div>
        <div ref={menuRef} className="
                md:hidden
                flex
                items-center
                justify-center
                w-10
                h-10
                border-zinc-300
              ">
          {/* MOBILE HAMBURGER */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="
                md:hidden
                flex
                items-center
                justify-center
                w-10
                h-10
                border-zinc-300
              "
              
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            </button>
            {/* MOBILE DROPDOWN */}
      {menuOpen && (
        <div
          className="
            absolute
            right-0
            top-15
            w-56
            rounded-2xl
            bg-gray-500
            shadow-2xl
            
            p-4
            flex
            flex-col
            gap-4
            md:hidden
            z-50
          "
        >

          <Link href="/projects">
            Projects
          </Link>

          <Link href="/about">
            About
          </Link>

          <a href="/cv-bernadette-quitoriano-.pdf" download
          onClick={() => {
            window.gtag?.("event", "resume_download", {
              event_category: "engagement",
              event_label: "CV PDF",
            });
          }}
          >
            Download CV
          </a>

        </div>
      )}
        </div>
      </div>

      

      
      

    </nav>

  );
}