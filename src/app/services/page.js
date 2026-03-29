import ServicesHero from "@/components/ServicesHero";
import ServicesGrid from "@/components/ServicesGrid";
import MEPSection from "@/components/MEPSection";
import CTASection from "@/components/CTASection";
import ProcessSection  from "@/components/ProcessSection";
export default function Home() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <MEPSection />
            <ProcessSection />

      <CTASection/>
    </>
  );
}
