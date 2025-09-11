'use client';

import { RefObject } from "react";
import Link from "next/link";

interface Props {
  sectionRef: RefObject<HTMLElement | null>;
}

export const AboutUsSection = ({ sectionRef }: Props) => {

  return (
    <section
      ref={ sectionRef }
      className="min-h-[80dvh] px-7 sm:px-10 lg:px-14 xl:px-20 pb-15 bg-background text-foreground"
    >
      <div className="py-5">
        <div className="h-[1px] w-full bg-foreground mb-15" />
      </div>

      <div className="flex flex-col items-start md:flex-row gap-12">
        <div className="relative w-full aspect-[4/5] overflow-hidden order-last">
          <video
            src="/brands.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-contain scale-120"
          />
        </div>

        <div className="flex flex-col gap-5 basis-[45%] lg:basis-[95%] order-last md:order-first"> {/* Info - open */}
          <q
            className="text-5xl/11 lg:text-6xl xl:text-9xl font-extrabold no-quotes uppercase"
          >BASIC/DEPT® helps brands ● connect w/ culture</q>

          <div className="flex flex-col gap-5 xl:gap-15 uppercase">
            <p>Adweek <strong>Agency Spotlight</strong></p>

            <Link
              href="/"
              className="text-xs font-extrabold border-1 border-foreground rounded-full w-fit px-7 py-1.5"
            >
              About us
            </Link>
          </div>
        </div> {/* Info - close */}
      </div>
    </section>
  )
}
