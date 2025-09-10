import { FeaturedEngagementsCard } from "@/components";

export const FeaturedEngagementsSection = () => {
  return (
    <section className="pl-7 sm:pl-10 lg:pl-14 xl:pl-20 mb-15">
      <div className="w-min pb-15">
        <h2 className="text-2xl/6.5 uppercase font-bold font-stretch-ultra-condensed">Featured Engagements</h2>
      </div>

      <div className="flex items-stretch gap-5 xl:gap-40 overflow-x-scroll p-1 pr-7 sm:pr-10 lg:pr-14 xl:pr-20 custom-scroll">
        <FeaturedEngagementsCard
          logo="/logos/google-logo.webp"
          companyName="Google"
          description="Our embedded partnership with Google is as deep as it gets. We’re the lead creative agency for Google Store and provide strategy, design, and prototyping to other divisions. Learn more about our partnership"
          link="/"
        />

        <FeaturedEngagementsCard
          logo="/logos/kfc-logo.webp"
          companyName="KFC"
          description="An award-winning global, digital transformation engagement spanning eCommerce, mobile app, and new drive thru experiences. Bringing KFC’s brand story to life while making it easier for customers to buy chicken. Learn more about our partnership"
          link="/"
        />

        <FeaturedEngagementsCard
          logo="/logos/wilson-logo.webp"
          companyName="Wilson"
          description="A reimagining of Wilson’s brand visual identity, and brand campaign, to support a new product drop and the launch of the first brick and mortar retail location in the brand’s 108-year history. Read our full case study"
          link="/"
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
          link="/"
        />
      </div>
    </section>
  )
}
