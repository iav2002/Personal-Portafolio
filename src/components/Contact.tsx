import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Get In Touch</h2>
          <p className="text-muted-foreground text-lg">
            Interested in working together? Let's connect!
          </p>
        </div>
        <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:ignacioalarcon2002@gmail.com"
                    className="text-foreground hover:text-primary font-medium transition-colors"
                  >
                    ignacioalarcon2002@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a
                    href="tel:+353830265390"
                    className="text-foreground hover:text-primary font-medium transition-colors"
                  >
                    +353 83 026 5390
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground font-medium">Dublin, Ireland</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Github className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <a
                    href="https://github.com/iav2002"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary font-medium transition-colors"
                  >
                    @iav2002
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-4 pt-6 border-t border-border">
              <Button variant="default" size="lg" asChild className="shadow-lg">
                <a href="mailto:ignacioalarcon2002@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://www.linkedin.com/in/ignacioalarcon/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
