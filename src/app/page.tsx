import Image from "next/image";

import { AwardCard } from "@/components";

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

        <section className="px-5 sm:px-10">
          <div className="grid grid-cols-3 auto-rows-min justify-items-center gap-1 pt-12 pb-24 sm:pt-15 sm:pb-28">
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

        <section className="max-w-4xl mx-auto py-50">
        </section>
      </main>

      <footer>
      </footer>
    </div>
  );
}
