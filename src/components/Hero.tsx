import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 py-20 bg-background relative">
      <div className="container max-w-5xl">
        <div className="grid md:grid-cols-[1fr,300px] gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Ignacio Alarcon
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                Backend Engineer & Data Scientist
              </p>
            </div>
            
            <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
              Building scalable backend systems and applying machine learning to solve real problems. 
              MSc Data Science student at TU Dublin.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button 
                size="lg" 
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a href="#projects">View Projects</a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild
              >
                <a href="/CV_IgnacioAlarcon.pdf" download className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>

            <div className="flex gap-4 pt-2">
              <a
                href="https://github.com/iav2002"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ignacioalarcon/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:ignacioalarcon2002@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full max-w-[300px] mx-auto">
              <img
                src={profilePhoto}
                alt="Ignacio Alarcon"
                className="rounded-lg w-full h-auto border border-border"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
