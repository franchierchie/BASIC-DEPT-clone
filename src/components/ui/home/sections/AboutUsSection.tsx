import Link from "next/link"

export const AboutUsSection = () => {
  return (
    <div className="h-[80dvh] px-7 sm:px-10 lg:px-14 xl:px-20 mb-15">
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

        <div className="flex flex-col gap-5 basis-[45%]"> {/* Info - open */}
          <q
            className="text-5xl/11 font-extrabold no-quotes uppercase"
          >BASIC/DEPT® helps brands ● connect w/ culture</q>

          <div className="flex flex-col gap-5 uppercase">
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
    </div>
  )
}
