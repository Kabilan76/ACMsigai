import { useState } from "react";
import "@fontsource/orbitron"; 
import { Button } from "@/components/ui/button";
import techImage1 from "@/assets/acm1.jpg";
import techImage2 from "@/assets/acm2.jpg";
import techImage3 from "@/assets/acm3.jpg";
import techImage4 from "@/assets/acm4.jpg";
import techImage5 from "@/assets/acm5.jpg";
import { ChevronRight, Cpu } from "lucide-react"; // Add your second image

const AboutSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [techImage1, techImage2, techImage3, techImage4, techImage5];

  return (
    <section id='about' className="py-20 bg-background relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {/*<span className="heros-text"> ACM SIGAI </span> &*/}<span className="hero-text"> About Us</span>
                </h2>
                <h6 className="text-xl font-bold">
                   <span className="hero-text"> ACM SIGAI</span>
                </h6>
              {/*style={{ fontFamily: '}}*/}
                <p
                  className="text-xl text-muted-foreground leading-relaxed">
                    National Level Hackathon driving change through AI, entrepreneurship, and smart coding. InnoTech 2025 features two flagship events – SDG Solve-a-thon and VentureVerse '25.
</p>

            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card border border-primary/10 rounded-lg p-6 hover:border-primary/30 transition-smooth">
              
                <img src="/srm.jpg" alt="AI Innovation" className="w-10 h-10 mb-4" />
               
                <h3 className="font-semibold mb-2">SRM</h3>
                <p className="text-sm text-muted-foreground">We are an AI Innovation Club from SRM, dedicated to exploring cutting-edge AI solutions for real-world problems.</p>
              </div>

              <div className="bg-card border border-primary/10 rounded-lg p-6 hover:border-primary/30 transition-smooth">
                <img src="/cintel.jpg" alt="SDG Focus" className="w-10 h-10 mb-4" />
                <h3 className="font-semibold mb-2">CINTEL</h3>
                <p className="text-sm text-muted-foreground">AI Innovation Club from CINTEL Department. We have conducted several hackathons, workshops, and tech events.</p>
              </div>

              <div className="bg-card border border-accent/10 rounded-lg p-6 hover:border-accent/30 transition-smooth">
              <a href="https://www.instagram.com/srmsigai?igsh=MWtlbWZmYWx6bG1mYw==" target="_blank" rel="noopener noreferrer">
                <img src="/acm.jpg" alt="Startups" className="w-10 h-10 mb-4" />
                </a>
                <h3 className="font-semibold mb-2">ACM SIGAI</h3>
                <p className="text-sm text-muted-foreground">Our club is dedicated to advancing AI through innovation, research, and real-world applications.</p>
              </div>

              <div className="bg-card border border-primary/10 rounded-lg p-6 hover:border-primary/30 transition-smooth">
                <Cpu className="w-10 h-10 mb-4" />
                <h3 className="font-semibold mb-2">PAST EVENTS</h3>
                <p className="text-sm text-muted-foreground">Placement Talk, Codespring, CogniHack1.0, DataQuest, DataSprint,Hackgrid</p>
              </div>
            </div>
          </div>

          {/* Right Image with Switch */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl glow-blue h-[500px] md:h-[600px]">
              <img
                src={images[currentImage]}
                alt="Tech Innovation"
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
            </div>
          </div>
          {/* Arrow Icon for Next Image */}
          <div
            onClick={() => setCurrentImage((prev) => (prev + 1) % images.length)}
            className="absolute bottom-4 right-4 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 text-black" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
