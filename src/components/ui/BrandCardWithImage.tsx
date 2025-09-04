import Image from "next/image";
import { ReactElement } from "react";

interface Props {
  children: ReactElement<HTMLVideoElement> | ReactElement<typeof Image>;
  title: string;
  description: string;
}

export const BrandCardWithImage = ({ children , title = 'Card Title', description = 'Description of the card' }: Props) => {
  return (
    <div className="min-w-120 w-full aspect-[4/5] last-of-type:mr-7 sm:last-of-type:mr-10 lg:last-of-type:mr-14">
      <div className="relative w-full aspect-[4/5] overflow-hidden">
        { children }
      </div>

      <div>
        <p className="font-bold uppercase tracking-wide text-lg my-2">{ title }</p>

        <p className="text-xs/3.5 uppercase max-w-3/8 md:max-w-6/8 lg:max-w-8/10">{ description }</p>
      </div>
    </div>
  )
}
