import { Button } from "@/components/ui/button";
import { Instagram, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-electric-blue/5 blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-deep-purple/5 blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="hero-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about InnoTech 2025? We're here to help you join the AI-powered revolution.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-card border border-primary/10 rounded-lg hover:border-primary/30 transition-smooth">
                  <div className="bg-electric-blue/10 border border-electric-blue/20 rounded-lg p-3">
                    <Mail className="w-6 h-6 text-electric-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">acmcintel@gmail.com </p>
                    <p className="text-sm text-muted-foreground">For general inquiries and support</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-card border border-accent/10 rounded-lg hover:border-accent/30 transition-smooth">
                  <div className="bg-deep-purple/10 border border-deep-purple/20 rounded-lg p-3">
                    <Phone className="w-6 h-6 text-deep-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-muted-foreground">+91 9810672587</p>
                    <p className="text-sm text-muted-foreground">For general inquiries and support</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-card border border-primary/10 rounded-lg hover:border-primary/30 transition-smooth">
                  <div className="bg-electric-blue/10 border border-electric-blue/20 rounded-lg p-3">
                    <MapPin className="w-6 h-6 text-electric-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Venue</h4>
                    <p className="text-muted-foreground">Minihall TP, SRMIST</p>
                    <p className="text-sm text-muted-foreground">SRM Institute of Science and Technology</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
              
              <div className="bg-card border border-accent/10 rounded-xl p-6 glow-purple">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-3">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Instagram</h4>
                    <p className="text-muted-foreground">acmcintel@gmail.com </p>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">
                  Stay updated with the latest announcements, behind-the-scenes content, and event highlights.
                </p>
                
                <Button variant="register" size="sm">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  <a href="https://www.instagram.com/srmsigai?igsh=MWtlbWZmYWx6bG1mYw==" target="_blank" rel="noopener noreferrer">
                  Follow on Instagram
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Organizers */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Organized By</h3>
              
              <div className="space-y-6">
                <div className="bg-card border border-primary/10 rounded-xl p-6 glow-blue">
                  <h4 className="text-xl font-bold text-electric-blue mb-3">
                    Department of Computational Intelligence
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    Leading research and education in AI, machine learning, and computational intelligence at SRMIST.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-electric-blue/10 text-electric-blue px-3 py-1 rounded-full text-sm">AI Research</span>
                    <span className="bg-electric-blue/10 text-electric-blue px-3 py-1 rounded-full text-sm">Machine Learning</span>
                    <span className="bg-electric-blue/10 text-electric-blue px-3 py-1 rounded-full text-sm">Innovation</span>
                  </div>
                </div>
                
                <div className="bg-card border border-accent/10 rounded-xl p-6 glow-purple">
                  <h4 className="text-xl font-bold text-deep-purple mb-3">
                    SRMIST ACM SIGAI
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    Student chapter promoting artificial intelligence education, research, and innovation among students.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-deep-purple/10 text-deep-purple px-3 py-1 rounded-full text-sm">Student Community</span>
                    <span className="bg-deep-purple/10 text-deep-purple px-3 py-1 rounded-full text-sm">AI Education</span>
                    <span className="bg-deep-purple/10 text-deep-purple px-3 py-1 rounded-full text-sm">Workshops</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-muted/5 border border-border rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" size="sm" className="justify-start">
                  Event Guidelines
                </Button>
                <Button variant="outline" size="sm" className="justify-start">
                  Problem Statements
                </Button>
                <Button variant="outline" size="sm" className="justify-start">
                  Judging Criteria
                </Button>
                <Button variant="outline" size="sm" className="justify-start">
                  Resources
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
      </div>
    </section>
  );
};

export default ContactSection;