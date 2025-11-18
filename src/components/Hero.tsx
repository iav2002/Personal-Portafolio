import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-primary via-secondary to-accent">
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-primary-foreground">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
              Hi, I'm <span className="text-white">Ignacio Alarcon</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium opacity-95 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
              Backend Engineer & Data Scientist
            </p>
            <p className="text-lg opacity-90 leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
              Bolivian developer based in Dublin, Ireland. Passionate about building scalable backend systems 
              and leveraging machine learning to solve real-world problems. Currently pursuing MSc in Data Science at TUD.
            </p>
            <div className="flex flex-wrap gap-4 pt-4 animate-in fade-in slide-in-from-bottom-7 duration-700 delay-300">
              <Button 
                variant="secondary" 
                size="lg" 
                asChild
                className="bg-white text-primary hover:bg-white/90 shadow-lg"
              >
                <a href="#projects">View My Work</a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild
                className="border-white text-white hover:bg-white/10 backdrop-blur-sm"
              >
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
            <div className="flex gap-4 pt-2 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
              <a
                href="https://github.com/iav2002"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/ignacioalarcon/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:ignacioalarcon2002@gmail.com"
                className="text-white hover:text-white/80 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="relative animate-in fade-in zoom-in duration-700 delay-500">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-3xl blur-2xl"></div>
              <img
                src={profilePhoto}
                alt="Ignacio Alarcon"
                className="relative rounded-3xl shadow-2xl w-full h-auto border-4 border-white/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
