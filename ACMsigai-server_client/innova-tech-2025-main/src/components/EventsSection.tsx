import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { 
  Cpu, 
  Code, 
  Lightbulb, 
  Users, 
  Calendar, 
  MapPin, 
  Trophy, 
  Rocket, 
  Target, 
  Zap, 
  Globe, 
  Instagram,
  ExternalLink,
  Clock,
  IndianRupee,
  Award
} from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import aboutImage from "@/assets/about-tech.jpg";

const Index = () => {
  const navigate = useNavigate();
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-radial">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-md z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Cpu className="w-8 h-8 text-primary" />
              <span className="font-heading font-bold text-xl text-foreground">InnoTech 2025</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('home')} className="text-muted-foreground hover:text-primary transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-muted-foreground hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection('events')} className="text-muted-foreground hover:text-primary transition-colors">Events</button>
              <button onClick={() => scrollToSection('why-join')} className="text-muted-foreground hover:text-primary transition-colors">Why-InnoTech</button>
              <button onClick={() => scrollToSection('RegistrationSection')} className="text-muted-foreground hover:text-primary transition-colors">Register</button>
              <Button variant="hero" size="sm">Download</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}

      {/* Flagship Events */}
      <section id="events" className="py-20 bg-background">
         <div className="absolute top-20 left-10 animate-bounce">
          <Code className="w-8 h-8 text-primary opacity-60" />
        </div>
        <div className="absolute top-32 right-16 animate-bounce delay-1000">
          <Cpu className="w-10 h-10 text-secondary opacity-60" />
        </div>
        <div className="absolute bottom-32 left-20 animate-bounce delay-500">
          <Lightbulb className="w-6 h-6 text-accent opacity-60" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <Target className="w-4 h-4 mr-2" />
              Flagship Events
            </Badge>
            <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
              Two Powerful Platforms for Innovation
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* SDG Solve-a-thon */}
            <Card className="shadow-card hover:shadow-glow transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl font-heading">
                  <Code className="w-8 h-8 text-primary" />
                  InnoTech 2025
                </CardTitle>
                <p className="text-muted-foreground font-body">24-Hours
                  Hackathon And Ideathon </p>
              </CardHeader>
              <CardContent id="track"className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <p  className="font-semibold">Tracks(For Hackathon and Ideathon):</p>
                      <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                        <li>• Track 1: Smart city & Environment </li>
                        <li>• Track 2: Agriculture </li>
                        <li>• Track 3: Transportation</li>
                        <li>• Track 5: IoT & Automation Hardware</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold">Venue:</p>
                      <p className="text-sm text-muted-foreground">SRMIST KTR</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Trophy className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold">Prize Pool:</p>
                      <p className="text-sm text-primary font-bold">₹40,000+</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold">Team Size:</p>
                      <p className="text-sm text-muted-foreground">Max 3 members</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <IndianRupee className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold">Registration Fee:</p>
                      <p className="text-sm text-primary font-bold">₹199/participant</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-center text-primary">
                    "Build impactful tech, code for change, win big!"
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* VentureVerse '25 */}
            <Card className="shadow-card hover:shadow-glow transition-all duration-300 border-l-4 border-l-secondary">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl font-heading">
                  <Rocket className="w-8 h-8 text-secondary" />
                  VentureVerse '25
                </CardTitle>
                <p className="text-muted-foreground font-body">Ideathon</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-secondary" />
                    <div>
                      <p className="font-semibold">Dates:</p>
                      <p className="text-sm text-muted-foreground">20–21 Aug 2025</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-secondary" />
                    <div>
                      <p className="font-semibold">Format:</p>
                      <p className="text-sm text-muted-foreground"> <li>Round 1 (Online)</li>
                      <li>PPT Presentation with or without demo(Offline)</li></p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-secondary" />
                    <div>
                      <p className="font-semibold">Venue:</p>
                      <p className="text-sm text-muted-foreground">SRMIST KTR</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-secondary" />
                    <div>
                      <p className="font-semibold">For:</p>
                      <p className="text-sm text-muted-foreground">Startups,  Student Innovators</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Trophy className="w-5 h-5 text-secondary" />
                    <div>
                      <p className="font-semibold">Recognition:</p>
                      <p className="text-sm text-muted-foreground">Top 3 pitches + Cash Price,Participation Certificate</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-secondary/10 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-center text-secondary">
                    "Pitch your dream, meet investors, scale your vision."
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Third Event - Workshop Series */}
            <Card className="shadow-card hover:shadow-glow transition-all duration-300 border-l-4 border-l-accent">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl font-heading">
                  <Award className="w-8 h-8 text-accent" />
                  SDG Solve-a-thon
                </CardTitle>
                <p className="text-muted-foreground font-body">3-Round Hackathon</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-accent" />
                    <div>
                      <p className="font-semibold">Dates:</p>
                      <p className="text-sm text-muted-foreground">21–22 Aug 2025</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-accent" />
                    <div>
                      <p className="font-semibold">Duration:</p>
                      <p className="text-sm text-muted-foreground">24-Hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-accent" />
                    <div>
                      <p className="font-semibold">Mode:</p>
                      <p className="text-sm text-muted-foreground">Offline</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-accent" />
                    <div>
                      <p className="font-semibold">Topics:</p>
                      <p className="text-sm text-muted-foreground"
                        onClick={() => {
    const trackSection = document.getElementById("track");
    if (trackSection) {
      trackSection.scrollIntoView({ behavior: "smooth" });
    }
  }}>Tracks</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Trophy className="w-5 h-5 text-accent" />
                    <div>
                      <p className="font-semibold">Benefits:</p>
                      <p className="text-sm text-muted-foreground">Certificates & Cash Price</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-accent/10 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-center text-accent">
                    "Learn, network, and prepare for the main events!"
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      

      {/* Contact & Socials */}
      
    </div>
  );
};

export default Index;
