import Image from "next/image";
import { ReactElement } from "react";

interface Props {
  children: ReactElement<HTMLVideoElement> | ReactElement<typeof Image>;
  title: string;
  description: string;
}

export const BrandCardWithImage = ({ children , title = 'Card Title', description = 'Description of the card' }: Props) => {
  return (
    <div className="min-w-120 last-of-type:mr-9">
      <div className="relative w-full h-full overflow-hidden">
        { children }
      </div>

      <div>
        <p className="font-bold uppercase tracking-wide text-lg my-2">{ title }</p>

        <p className="text-xs/3.5 uppercase max-w-3/8">{ description }</p>
      </div>
    </div>
  )
}
