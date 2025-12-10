import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Phone, Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "ignacioalarcon2002@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      toast.success("Email copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy email");
    }
  };

  return (
    <section id="contact" className="py-6 px-8 bg-background">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-foreground">Contact</h2>
        
        <Card className="p-8 card-glass">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Email</p>
              <button
                onClick={handleCopyEmail}
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5"
              >
                {email}
                {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
              </button>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Phone</p>
              <a
                href="tel:+353830265390"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                +353 83 026 5390
              </a>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Location</p>
              <p className="text-sm text-muted-foreground">Dublin, Ireland</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">GitHub</p>
              <a
                href="https://github.com/iav2002"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                @iav2002
              </a>
            </div>
          </div>
          
          <div className="flex gap-3 pt-8 mt-8 border-t border-white/10">
            <Button size="default" onClick={handleCopyEmail} className="bg-primary hover:bg-primary/90 text-primary-foreground">
              {copied ? <Check className="mr-2 h-4 w-4" /> : <Mail className="mr-2 h-4 w-4" />}
              {copied ? "Copied!" : "Copy Email"}
            </Button>
            <Button variant="outline" size="default" asChild>
              <a
                href="https://www.linkedin.com/in/ignacioalarcon/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};
