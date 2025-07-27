import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Trophy, Zap } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import { Badge } from "@/components/ui/badge";
import "@fontsource/bebas-neue";

const HeroSection = () => {
    const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section id ="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="InnoTech 2025 Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 z-10">
        <div className="animate-float absolute top-20 left-10 w-20 h-20 rounded-full bg-electric-blue/20 blur-xl"></div>
        <div className="animate-float absolute top-40 right-20 w-16 h-16 rounded-full bg-deep-purple/20 blur-xl" style={{ animationDelay: '2s' }}></div>
        <div className="animate-float absolute bottom-32 left-1/4 w-12 h-12 rounded-full bg-neon-cyan/20 blur-xl" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 text-center">
        <div className="space-y-8">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="hero-text">InnoTech 2025</span>
          </h1>
           <Badge variant="secondary" className="px-8 py-2 text-sm font-medium">
                <Zap className="w-7 h-6 mr-2" />
                National Level Hackathon
              </Badge>
          
          <p className="text-xl md:text-2xl font-mono text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            "Don’t wait for opportunity—create it. Join the hackathon, build what matters, and let your ideas shape the future."
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 mb-12">
            <div className="bg-card/10 backdrop-blur-sm rounded-lg p-4 border border-primary/20">
              <Trophy className="w-8 h-8 mx-auto mb-2 text-electric-blue" />
              <div className="text-2xl font-bold text-foreground">₹40,000+</div>
              <div className="text-sm text-muted-foreground">Prize Pool</div>
            </div>
            <div className="bg-card/10 backdrop-blur-sm rounded-lg p-4 border border-primary/20">
              <Users className="w-8 h-8 mx-auto mb-2 text-electric-blue" />
              <div className="text-2xl font-bold text-foreground">2</div>
              <div className="text-sm text-muted-foreground">Flagship Events</div>
            </div>
            <div className="bg-card/10 backdrop-blur-sm rounded-lg p-4 border border-primary/20">
              <Calendar className="w-8 h-8 mx-auto mb-2 text-electric-blue" />
              <div className="text-2xl font-bold text-foreground">20-22 Aug</div>
              <div className="text-sm text-muted-foreground">Event Dates</div>
            </div>
            <div className="bg-card/10 backdrop-blur-sm rounded-lg p-4 border border-primary/20">
              <MapPin className="w-8 h-8 mx-auto mb-2 text-electric-blue" />
              <div className="text-2xl font-bold text-foreground">SRMIST</div>
              <div className="text-sm text-muted-foreground">Venue</div>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="space-y-4">
            <Button variant="hero" size="xl" className="animate-glow"
                onClick={() => scrollToSection('RegistrationSection')}
              > Register Now</Button>
            
            <p
            style={{ fontFamily: 'Orbitron'}}
             className="text-sm text-muted-foreground">
              Organized by Department of Computational Intelligence & SRMIST ACM SIGAI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;