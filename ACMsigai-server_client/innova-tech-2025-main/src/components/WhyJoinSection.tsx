import { Button } from "@/components/ui/button";
import { Zap, Target, Network, Award, Code, Lightbulb } from "lucide-react";

const WhyJoinSection = () => {
  const benefits = [
    {
      icon: Network,
      title: "Meet Investors",
      description: "Connect with VCs, mentors, and industry leaders in the startup ecosystem",
      color: "text-deep-purple",
      bg: "bg-deep-purple/10",
      border: "border-deep-purple/20"
    },   
    {
      icon: Award,
      title: "Win Big Prizes",
      description: "Compete for ₹40,000+ in prizes and recognition at national level and Certification",
      color: "text-electric-blue",
      bg: "bg-electric-blue/10",
      border: "border-electric-blue/20"
    },
      {
      icon: Lightbulb,
      title: "Pitch Your Dream",
      description: "Present your startup idea to industry experts and potential investors",
      color: "text-deep-purple",
      bg: "bg-deep-purple/10",
      border: "border-deep-purple/20"
    },    {
      icon: Target,
      title: "Internship Oppertunities",
      description: "Get Internship oppertunities in Startup Companies",
      color: "text-neon-cyan",
      bg: "bg-neon-cyan/10",
      border: "border-neon-cyan/20"
    },
    {
      icon: Code,
      title: "Build Impactful Tech",
      description: "Create solutions that address real-world challenges and make a difference",
      color: "text-electric-blue",
      bg: "bg-electric-blue/10",
      border: "border-electric-blue/20"
    },
    {
      icon: Zap,
      title: "Career Opportunities",
      description: "Get the support and resources needed to take your startup to the next level ,Helps to improve marks in placement matrics",
      color: "text-neon-cyan",
      bg: "bg-neon-cyan/10",
      border: "border-neon-cyan/20"
    }
  ];

  return (
    <section id="why-join" className="py-20 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-electric-blue/5 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-deep-purple/5 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Join <span className="hero-text">InnoTech 2025</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're a developer, entrepreneur, or innovator, InnoTech 2025 offers unique opportunities to grow, learn, and make an impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className={`bg-card border ${benefit.border} rounded-xl p-8 hover:border-opacity-50 transition-smooth group hover:scale-105`}
              >
                <div className={`${benefit.bg} ${benefit.border} border rounded-lg w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth`}>
                  <Icon className={`w-8 h-8 ${benefit.color}`} />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-smooth">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}

      </div>
    </section>
  );
};

export default WhyJoinSection;