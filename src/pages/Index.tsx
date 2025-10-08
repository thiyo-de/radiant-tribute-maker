import Navigation from "@/components/Navigation";
import BackToTop from "@/components/BackToTop";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import JourneySection from "@/components/JourneySection";
import AwardsSection from "@/components/AwardsSection";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <JourneySection />
      <AwardsSection />
      <BackToTop />
    </div>
  );
};

export default Index;
