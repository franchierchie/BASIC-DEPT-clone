import { AboutUsSection, AwardsSection, FeaturedEngagementsSection, HeroBannerSection, WorksSection } from "@/components";

export default function Home() {

  return (
    <div className="min-h-screen">
      <main>
        <HeroBannerSection />

        <AwardsSection />

        <WorksSection />

        <FeaturedEngagementsSection />

        <AboutUsSection />
      </main>

      <footer>
      </footer>
    </div>
  );
}
