import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.jpg";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Profile Avatar */}
        <div className="relative animate-float">
          <Avatar className="w-32 h-32 mx-auto border-4 border-primary/20 shadow-xl">
            <AvatarImage src={profileAvatar} alt="Profile" />
            <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-primary to-accent text-primary-foreground">
              TL
            </AvatarFallback>
          </Avatar>
          <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-glow-pulse -z-10"></div>
        </div>

        {/* Hero Text */}
        <div className="space-y-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold gradient-text">
            Project Link Hub
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover amazing projects, tools, and resources all in one beautiful place
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 animate-slide-up">
          <Button variant="ghost" size="lg" className="social-link glass glass-hover">
            <Github className="w-6 h-6" />
          </Button>
          <Button variant="ghost" size="lg" className="social-link glass glass-hover">
            <Linkedin className="w-6 h-6" />
          </Button>
          <Button variant="ghost" size="lg" className="social-link glass glass-hover">
            <Mail className="w-6 h-6" />
          </Button>
        </div>

        {/* CTA Button */}
        <div className="animate-slide-up">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-accent hover:from-primary-glow hover:to-accent-glow text-lg px-8 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Explore Projects
            <ExternalLink className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};