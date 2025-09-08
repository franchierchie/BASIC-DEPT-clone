import Image from "next/image";

interface Props {
  logo: string;
  companyName: string;
  description: string;
}

export const FeaturedEngagementsCard = ({ logo = '', companyName = 'Name of the company', description = 'Description' }: Props) => {
  return (
    <div className="min-w-4/5 outline-2 outline-amber-400">
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

        <p>{ description }</p>
      </div>
    </div>
  )
}
