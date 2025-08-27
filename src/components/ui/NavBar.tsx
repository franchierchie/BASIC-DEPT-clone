import Image from "next/image"

export const NavBar = () => {
  return (
    <nav className="py-15 px-22">
      <div> {/* LOGO */}
        <Image
          src="/logos/basic-dept-logo.svg"
          alt="BASIC/DEPT logo"
          width={ 500 }
          height={ 500 }
          className="w-45 h-auto object-contain"
          unoptimized
        />
      </div>
    </nav>
  )
}
