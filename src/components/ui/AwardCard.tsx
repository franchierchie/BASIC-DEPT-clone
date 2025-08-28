import Image from "next/image";
import { JSX } from "react";

interface Props {
  awardText: string | JSX.Element;
  brandLogo: string;
}

export const AwardCard = ({ awardText = 'Award Text', brandLogo = '' }: Props) => {
  return (
    <div className="group flex flex-col justify-center items-center gap-10">
      <div className="w-100 h-auto flex justify-center items-center">
        <Image
          src={ brandLogo }
          alt="AdAge logo"
          width={ 250 }
          height={ 100 }
          // fill
          style={{ objectFit: 'contain' }}
          className="group-hover:scale-105 transition-all duration-300"
        />
      </div>

      <p
        className="uppercase text-md tracking-tighter font-bold text-center text-foreground/75 selection:bg-foreground/75 selection:text-background group-hover:underline"
      >{ awardText }</p>
    </div>
  )
}
