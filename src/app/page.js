import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import TechMarquee from "@/components/techsquare";
import TechStandards from "@/components/Techstandards";
import Workflow from "@/components/Workflow";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Industries />
      <Workflow/>
      <TechStandards />
    </>
  );
}
