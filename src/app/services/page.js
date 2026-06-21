import ServicesHero from "@/components/ServicesHero";
import ServicesGrid from "@/components/ServicesGrid";
import MEPSection from "@/components/MEPSection";
import CTASection from "@/components/CTASection";
import IndustriesSlider from "@/components/Industries";
export default function Home() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <MEPSection />
      <IndustriesSlider />
      <CTASection />
    </>
  );
}
