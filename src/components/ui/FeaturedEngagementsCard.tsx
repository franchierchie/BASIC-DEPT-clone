import Image from "next/image";
import Link from "next/link";

interface Props {
  logo: string;
  companyName: string;
  description: string;
  link?: string;
}

export const FeaturedEngagementsCard = ({ logo = '', companyName = 'Name of the company', description = 'Description', link }: Props) => {
  return (
    <div className="min-w-4/5 md:min-w-xs xl:min-w-md flex flex-col xl:gap-18">
      <div className="flex flex-col gap-5 mb-10">
        <div className="relative w-full h-[2.5rem]">
          <Image
            src={ logo }
            alt={`${ logo }'s logo`}
            fill
            className="object-contain object-left"
            />
        </div>

        <div className="h-[2px] bg-foreground w-6 rounded-full" />
      </div>

      <div>
        <h5 className="font-bold uppercase text-lg font-hanken-grotesk">{ companyName }</h5>

        <p className="pt-4 text-xs/5 xl:text-lg text-black font-medium text-pretty">{ description }{
        ( !!link )
          && (<Link href={ link } className="ml-1 underline">here</Link>)
        }.</p>
      </div>
    </div>
  )
}
