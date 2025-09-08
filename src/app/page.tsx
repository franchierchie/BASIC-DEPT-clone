import Image from "next/image";
import Link from "next/link";

import { AwardCard, BrandCardWithImage, FeaturedEngagementsCard } from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <section className="relative w-full h-screen bg-foreground overflow-hidden">
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

        <section className="py-15">
          <div className="flex flex-wrap justify-between items-center gap-10 px-7 sm:px-10 lg:px-14 xl:px-20">
            <div>
              <p
                className="text-xl/5.5 xl:text-4xl/10 max-w-sm sm:max-w-lg xl:max-w-4xl text-balance"
              >BASIC/DEPT® is a global branding and digital design agency building products, services, and eCommerce experiences that turn cultural values into company value.</p>

              <Link
                href="/"
                className="mt-10 block uppercase text-xs font-bold border-1 border-foreground rounded-full w-fit px-7 py-2"
              >
                See the work
              </Link>
            </div>

            <div className="relative w-60 sm:w-80 md:w-100 lg:w-130 xl:w-180 aspect-[21/9] ml-auto mb-3">
              <Image
                src="/logos/basic-dept-small-logo.svg"
                alt="BASIC/DEPT logo"
                fill
                className="object-contain"
                loading="lazy"
              />
            </div>
          </div>

          <div className="xl:mt-30 pl-7 sm:pl-10 lg:pl-14 py-1 flex gap-5 overflow-x-scroll xl:overflow-auto">
            <BrandCardWithImage
              title="Patagonia"
              description="An eCommerce experience driven by Patagonia’s brand mission"
            >
              <Image
                src="/works/mountain.webp"
                alt="An image/video showing a work done for the brand Patagonia"
                fill
                className="object-contain scale-115"
                loading="lazy"
              />
            </BrandCardWithImage>

            <BrandCardWithImage
              title="Wilson"
              description="A century-old sports brand finding its place in culture"
            >
              <Image
                src="/works/tennis.webp"
                alt="An image/video showing a work done for the brand Wilson"
                fill
                className="object-contain scale-115"
                loading="lazy"
              />
            </BrandCardWithImage>

            <BrandCardWithImage
              title="Google Store"
              description="An eCommerce experience helping Google bring its hardware to people across the globe"
            >
              <video
                src="/works/google.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-contain scale-115"
              />
            </BrandCardWithImage>
          </div>

          <div className="px-7 sm:px-10 lg:px-14 xl:px-20 mt-20 lg:mt-35">
            {/* <div className="h-[1px] max-w-screen bg-foreground" /> */}
            <div className="h-[1px] w-full bg-foreground" />

            <div className="flex justify-between items-center pt-5">
              <p className="text-[.70rem]/3.5">00<br />/05</p>

              <p>●</p>
            </div>
          </div>
        </section>

        <section className="pl-7 sm:px-10 lg:px-14 xl:px-20 mb-15">
          <div className="w-min pb-15">
            <h2 className="text-2xl/6.5 uppercase font-bold font-stretch-ultra-condensed">Featured Engagements</h2>
          </div>

          <div className="flex items-center gap-5 overflow-x-scroll p-1 pr-7">
            <FeaturedEngagementsCard
              logo="/logos/google-logo.webp"
              companyName="Google"
              description="Our embedded partnership with Google is as deep as it gets. We’re the lead creative agency for Google Store and provide strategy, design, and prototyping to other divisions. Learn more about our partnership"
            />

            <FeaturedEngagementsCard
              logo="/logos/kfc-logo.webp"
              companyName="KFC"
              description="An award-winning global, digital transformation engagement spanning eCommerce, mobile app, and new drive thru experiences. Bringing KFC’s brand story to life while making it easier for customers to buy chicken. Learn more about our partnership"
            />

            <FeaturedEngagementsCard
              logo="/logos/wilson-logo.webp"
              companyName="Wilson"
              description="A reimagining of Wilson’s brand visual identity, and brand campaign, to support a new product drop and the launch of the first brick and mortar retail location in the brand’s 108-year history. Read our full case study"
            />

            <FeaturedEngagementsCard
              logo="/logos/at&t-logo.webp"
              companyName="AT&T"
              description="Redesigning the digital flagship for the largest telecommunications company in the world. Creating frictionless paths to purchase for a wide range of consumers across a vast portfolio of products and services"
            />

            <FeaturedEngagementsCard
              logo="/logos/patagonia-logo.webp"
              companyName="Patagonia"
              description="Ongoing partnership providing strategy, branding, experience design, and development focused on bringing their mission and offerings to consumers through brand-led programs and platforms. Read our full case study"
            />
          </div>
        </section>
      </main>

      <footer>
      </footer>
    </div>
  );
}
