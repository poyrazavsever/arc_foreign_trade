import CardSection from "@/components/Home/CardSection";
import HeroSection from "@/components/Home/HeroSection";
import LastSection from "@/components/Home/LastSection";
import Logos from "@/components/Home/Logos";
import Services from "@/components/Home/Services";


export default function Home() {
  return (
    <div>

      <HeroSection/>
      
      <Logos />

      <CardSection />

      <Services />

      <LastSection />

    </div>
  );
}
