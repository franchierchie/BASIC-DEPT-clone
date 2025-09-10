import Image from "next/image";
import Link from "next/link";

import { BrandCardWithImage } from "@/components";

export const WorksSection = () => {
  return (
    <section className="py-15">
      <div className="flex flex-wrap justify-between items-center gap-10 px-7 sm:px-10 lg:px-14 xl:px-20">
        <div>
          <p
            className="text-xl/5.5 xl:text-4xl/10 max-w-sm sm:max-w-lg xl:max-w-4xl text-balance"
          >BASIC/DEPT® is a global branding and digital design agency building products, services, and eCommerce experiences that turn cultural values into company value.</p>

          <Link
            href="/"
            className="mt-10 block uppercase text-xs font-bold border-1 border-foreground rounded-full w-fit px-7 py-2"
          >
            See the work
          </Link>
        </div>

        <div className="relative w-60 sm:w-80 md:w-100 lg:w-130 xl:w-180 aspect-[21/9] ml-auto mb-3">
          <Image
            src="/logos/basic-dept-small-logo.svg"
            alt="BASIC/DEPT logo"
            fill
            className="object-contain"
            loading="lazy"
          />
        </div>
      </div>

      <div className="xl:mt-30 pl-7 sm:pl-10 lg:pl-14 py-1 flex gap-5 overflow-x-scroll xl:overflow-auto">
        <BrandCardWithImage
          title="Patagonia"
          description="An eCommerce experience driven by Patagonia’s brand mission"
        >
          <Image
            src="/works/mountain.webp"
            alt="An image/video showing a work done for the brand Patagonia"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain scale-115"
            loading="lazy"
          />
        </BrandCardWithImage>

        <BrandCardWithImage
          title="Wilson"
          description="A century-old sports brand finding its place in culture"
        >
          <Image
            src="/works/tennis.webp"
            alt="An image/video showing a work done for the brand Wilson"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain scale-115"
            loading="lazy"
          />
        </BrandCardWithImage>

        <BrandCardWithImage
          title="Google Store"
          description="An eCommerce experience helping Google bring its hardware to people across the globe"
        >
          <video
            src="/works/google.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-contain scale-115"
          />
        </BrandCardWithImage>
      </div>

      <div className="px-7 sm:px-10 lg:px-14 xl:px-20 mt-20 lg:mt-35">
        {/* <div className="h-[1px] max-w-screen bg-foreground" /> */}
        <div className="h-[1px] w-full bg-foreground" />

        <div className="flex justify-between items-center pt-5">
          <p className="text-[.70rem]/3.5">00<br />/05</p>

          <p>●</p>
        </div>
      </div>
    </section>
  )
}
