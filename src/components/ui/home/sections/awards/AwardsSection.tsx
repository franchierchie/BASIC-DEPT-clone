import { AwardCard } from "@/components";

export const AwardsSection = () => {
  return (
    <section className="px-7 sm:px-10 lg:px-14 xl:px-20">
      <div className="grid grid-cols-3 auto-rows-min justify-items-center gap-1 mb-5 py-12 sm:py-15 md:py-25 lg:py-35 xl:py-65">
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
  )
}
