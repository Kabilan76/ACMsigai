import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import WhyJoinSection from "@/components/WhyJoinSection";
import RegistrationSection from "@/components/RegistrationSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div id ="Index" className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <WhyJoinSection />
      <RegistrationSection />
      <ContactSection />
    </div>
  );
};

export default Index;
