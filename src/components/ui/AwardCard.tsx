import Image from "next/image";
import { JSX } from "react";

interface Props {
  awardText: string | JSX.Element;
  brandLogo: string;
}

export const AwardCard = ({ awardText = 'Award Text', brandLogo = '' }: Props) => {
  return (
    <div className="lg:w-3xs group grid auto-rows-min items-center gap-2 sm:gap-0">
      <div className="relative size-25 sm:size-33 lg:size-30 xl:size-55 flex items-center mx-auto">
        <Image
          src={ brandLogo }
          alt="Award logo"
          fill
          className="object-contain group-hover:scale-105 transition-all duration-300"
          loading="lazy"
        />
      </div>

      <div className="text-center self-start justify-stretch">
        <p
          className="w-full uppercase text-[.65rem] lg:text-sm font-bold tracking-tighter md:px-3 lg:px-7 text-foreground/75 selection:bg-foreground/75 selection:text-background group-hover:underline group-hover:decoration-3 group-hover:underline-offset-[1px]"
        >{ awardText }</p>
      </div>
    </div>
  )
}
