import FeaturedProjects from "@/components/Projectfeatured";
import HeroSection from "@/components/Projecthero"; 
import ProcessSection from "@/components/Ourapproach";
import IndustriesSection from "@/components/IndustriesSection";
import WhyUsSection from "@/components/WhyUsSection";
export default function Home() {
  return (
    <>
      <HeroSection />
          <FeaturedProjects/>
          < ProcessSection />
<WhyUsSection />

      
    </>
  );
}
