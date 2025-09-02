import Image from "next/image";

import { AwardCard, BrandCardWithImage } from "@/components";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <section
          className="relative w-full h-screen bg-foreground overflow-hidden"
        >
          {/* Background video */}
          <video
            src="/main.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="relative flex flex-col gap-2 items-center justify-center h-full text-center font-bold pointer-events-none z-10">
            <p
              className="flex items-center justify-center uppercase leading-5 w-fit h-auto p-10 bg-background text-foreground rounded-full shadow-2xl"
              style={{ aspectRatio: 1/1 }}
            >
              Watch <br /> Reel
            </p>
            <div className="text-background">
              <p>BASIC/DEPT®</p>
              <p>2010-∞</p>
            </div>
          </div>
        </section>

        <section className="px-9 sm:px-10">
          <div className="grid grid-cols-3 auto-rows-min justify-items-center gap-1 pt-12 pb-24 sm:pt-15 sm:pb-28 md:py-25 lg:py-35 xl:py-65">
            <AwardCard
              awardText="Design and Branding Agency of the Year"
              brandLogo="/logos/adage-logo.svg"
            />

            <AwardCard
              awardText="Agency of the Year"
              brandLogo="/logos/the-webby-awards-logo.svg"
            />

            <AwardCard
              awardText="Digital Innovation Agency of the Year Finalist"
              brandLogo="/logos/us-campaign-logo.svg"
            />
          </div>

          <div className="h-[1px] w-full bg-foreground" />
        </section>

        <section className="max-w-4xl py-15">
          <div className="px-9 sm:px-10">
            <div>
              <p
                className="font-semibold text-xl/6 max-w-md text-balance"
              >BASIC/DEPT® is a global branding and digital design agency building products, services, and eCommerce experiences that turn cultural values into company value.</p>

              <Link
                href="/"
                className="mt-10 block uppercase text-xs font-bold border-1 border-foreground rounded-full w-fit px-7 py-2"
              >
                See the work
              </Link>
            </div>

            <div className="flex justify-end items-center">
              <div className="relative mt-15 w-90 h-30">
                <Image
                  src="/logos/basic-dept-small-logo.svg"
                  alt="BASIC/DEPT logo"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="mt-7 pl-9 py-1 flex gap-5 overflow-x-scroll">
            <BrandCardWithImage
              title="Patagonia"
              description="An eCommerce experience driven by Patagonia’s brand mission"
            >
              <Image
                src="/works/mountain.webp"
                alt="An image/video showing a work done for the brand Patagonia"
                fill
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
                className="object-contain scale-115"
                loading="lazy"
              />
                  </BrandCardWithImage>

            <BrandCardWithImage
              title="Google Store"
              description="An eCommerce experience helping Google bring its hardware to people across the globe"
            >
              <div className="relative w-full aspect-[4/5]">
                <video
                  src="/works/google.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-13 inset-x-0 w-full object-contain scale-115"
                />
              </div>
            </BrandCardWithImage>
          </div>
        </section>
      </main>

      <footer>
      </footer>
    </div>
  );
}
