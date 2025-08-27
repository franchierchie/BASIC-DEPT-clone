import Image from "next/image"
import Link from "next/link"
import { BsThreeDots } from "react-icons/bs"

export const NavBar = () => {
  return (
    <nav className="flex items-center justify-between py-14 px-22">
      <div className="min-w-fit"> {/* LOGO */}
        <Image
          src="/logos/basic-dept-logo.svg"
          alt="BASIC/DEPT logo"
          width={ 500 }
          height={ 500 }
          className="w-45 h-auto object-contain"
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
          <p className="uppercase font-bold text-lg">Menu</p>
        </div>
      </button>
    </nav>
  )
}
