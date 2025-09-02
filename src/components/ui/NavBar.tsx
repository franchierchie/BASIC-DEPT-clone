'use client';

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs"

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // When the scroll passes 100px, set scrolled to true
      setScrolled(window.scrollY > window.innerHeight - 80);
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
    
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-background text-foreground noise-texture-bg-navbar' : 'bg-transparent text-background'
      }`}
    >
      <div className="flex items-center justify-between px-7 py-6 md:px-10 md:py-8 lg:px-14 lg:py-7 xl:px-22 xl:py-12">
        <div className="relative w-33 h-6 lg:w-42 lg:h-12 xl:w-45"> {/* LOGO */}
          <Image
            src="/logos/basic-dept-logo.svg"
            alt="BASIC/DEPT logo"
            fill
            // className="object-contain invert scheme-light-dark"
            className={`object-contain invert scheme-light-dark ${
              scrolled ? 'invert-0' : 'invert'
            }`}
            unoptimized
          />
        </div>

        <nav className="lg:w-4xl transition-all"> {/* NAVIGATION */}
          <ul className="hidden 2xl:flex items-center lg:gap-18 uppercase font-bold">
            <li><Link href="/">Work</Link></li>
            <li><Link href="/">About</Link></li>
            <li><Link href="/">News</Link></li>
            <li><Link href="/">Thinking</Link></li>
            <li><Link href="/">Careers</Link></li>
            <li><Link href="/">Contact</Link></li>
          </ul>
        </nav>

        <button> {/* MENU */}
          <div className="hidden 2xl:block">
            <BsThreeDots size={ 30 } />
          </div>
          <div className="block 2xl:hidden">
            <p className="uppercase font-bold text-base lg:text-lg">Menu</p>
          </div>
        </button>
      </div>
    </nav>
  )
}
