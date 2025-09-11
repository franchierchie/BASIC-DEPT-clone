'use client';

import { AboutUsSection, AwardsSection, FeaturedEngagementsSection, HeroBannerSection, WorksSection } from "@/components";
import { useInView } from "@/hooks";

export default function Home() {
  // threshold: 0.1 means that the callback will fire when 10% of the section is visible
  const [sectionRef, inView] = useInView({ threshold: 0.1 });


  return (
    <div
      className={`min-h-screen bg-background text-foreground transition-colors 
        ${(inView) ? 'dark-theme' : 'light-theme'}`}
    >
      <main>
        <HeroBannerSection />

        <AwardsSection />

        <WorksSection />

        <FeaturedEngagementsSection />

        <AboutUsSection sectionRef={ sectionRef } />
      </main>

      <footer>
      </footer>
    </div>
  );
}
