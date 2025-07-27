import { Button } from "@/components/ui/button";
import { ExternalLink, Users, IndianRupee, Calendar, MapPin } from "lucide-react";

const RegistrationSection = () => {
  return (
    <section id="RegistrationSection" className="py-20 bg-muted/5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="hero-text">Register Now</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Secure your spot in SRM's premier hackathon and startup pitch event. Limited seats available!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* SDG Solve-a-thon Registration */}
          <div className="bg-card border border-primary/10 rounded-2xl overflow-hidden glow-blue">
            <div className="gradient-primary p-6">
              <h3 className="text-2xl font-bold text-white mb-2">SDG Solve-a-thon</h3>
              <p className="text-white/90">24-hour hackathon</p>
            </div>
            
            <div className="p-8">
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                  <IndianRupee className="w-5 h-5 text-electric-blue" />
                  <div>
                    <span className="font-semibold">Registration Fee: </span>
                    <span className="text-2xl font-bold text-electric-blue">₹199</span>
                    <span className="text-muted-foreground"> / participant</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                  <Users className="w-5 h-5 text-electric-blue" />
                  <div>
                    <span className="font-semibold">Team Size: </span>
                    <span>Maximum 3 members per team</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                  <Calendar className="w-5 h-5 text-electric-blue" />
                  <div>
                    <span className="font-semibold">Event Dates: </span>
                    <span>20 August 2025</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                  <MapPin className="w-5 h-5 text-electric-blue" />
                  <div>
                    <span className="font-semibold">Venue: </span>
                    <span>SRMIST KTR</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-electric-blue/10 border border-electric-blue/20 rounded-lg p-6 mb-8">
                <h4 className="font-bold text-electric-blue mb-3">What's Included:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-electric-blue"></div>
                    <span>24-hour hackathon access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-electric-blue"></div>
                    <span>Mentorship from industry experts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-electric-blue"></div>
                    <span>₹40,000+ prize pool participation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-electric-blue"></div>
                    <span>Certificate of participation</span>
                  </li>
                </ul>
              </div>
              
              <Button variant="default" size="lg" className="w-full">
                <ExternalLink className="w-4 h-4 mr-2" />
                <a href='https://docs.google.com/forms/d/e/1FAIpQLScdNB1I7a_GFTi7hdi3ERFfotKT5N3rI_jOMC7oMUqQpXgJBw/viewform'>
                Register for SDG Solve-a-thon
                </a>
              </Button>
            </div>
          </div>

          {/* VentureVerse Registration */}
          <div className="bg-card border border-accent/10 rounded-2xl overflow-hidden glow-purple">
            <div className="gradient-secondary p-6">
              <h3 className="text-2xl font-bold text-background mb-2">VentureVerse '25</h3>
              <p className="text-background/90">Ideathon</p>
            </div>
            
            <div className="p-8">
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 p-3 bg-accent/5 rounded-lg">
                  <IndianRupee className="w-5 h-5 text-deep-purple" />
                  <div>
                    <span className="font-semibold">Registration: </span>
                    <span className="text-2xl font-bold text-deep-purple">199</span>
                    <span className="text-muted-foreground"> Per head</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-accent/5 rounded-lg">
                  <Users className="w-5 h-5 text-deep-purple" />
                  <div>
                    <span className="font-semibold">Team Size: </span>
                    <span>Maximum 3 members per team</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-accent/5 rounded-lg">
                  <Calendar className="w-5 h-5 text-deep-purple" />
                  <div>
                    <span className="font-semibold">Event Dates: </span>
                    <span>20-21 August 2025</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-accent/5 rounded-lg">
                  <MapPin className="w-5 h-5 text-deep-purple" />
                  <div>
                    <span className="font-semibold">Venue: </span>
                    <span>SRMIST KTR</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-deep-purple/10 border border-deep-purple/20 rounded-lg p-6 mb-8">
                <h4 className="font-bold text-deep-purple mb-3">What You Get:</h4>
                <ul className="space-y-2 text-sm">
                 
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-deep-purple"></div>
                    <span>Direct access to VCs and investors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-deep-purple"></div>
                    <span>Networking with industry mentors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-deep-purple"></div>
                    <span>Recognition for top 3 pitches</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-deep-purple"></div>
                    <span>Startup ecosystem connections</span>
                  </li>
                </ul>
              </div>
              
              <Button variant="register" size="lg" className="w-full">
                <ExternalLink className="w-4 h-4 mr-2" />
                 <a href='https://docs.google.com/forms/d/e/1FAIpQLScdNB1I7a_GFTi7hdi3ERFfotKT5N3rI_jOMC7oMUqQpXgJBw/viewform'>
                Register for VentureVerse '25
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* QR Code Section */}
        
      </div>
    </section>
  );
};

export default RegistrationSection;