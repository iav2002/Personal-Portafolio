import { Github, Linkedin, Mail, MapPin, Download, Copy, Check } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

export const Sidebar = () => {
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
    <aside className="fixed left-0 top-20 h-[calc(100vh-5rem)] w-80 bg-background border-r border-white/10 p-6 flex flex-col items-center overflow-y-auto z-40">
      <div className="flex flex-col items-center space-y-6 mt-4">
        <Dialog>
          <DialogTrigger asChild>
            <div className="relative w-52 h-52 cursor-pointer hover:opacity-90 transition-opacity">
              <img
                src={profilePhoto}
                alt="Ignacio Alarcon"
                className="rounded-lg w-full h-full object-cover border border-border"
              />
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <img
              src={profilePhoto}
              alt="Ignacio Alarcon"
              className="rounded-lg w-full h-auto object-cover"
            />
          </DialogContent>
        </Dialog>
        
        <div className="text-center">
          <h1 className="text-xl font-bold text-foreground mb-1">
            Ignacio Alarcon
          </h1>
          <p className="text-muted-foreground text-xs">Backend Engineer & Data Scientist</p>
        </div>

        <div className="w-full border-t border-border"></div>

        <div className="space-y-3 w-full">
          <div className="flex items-center gap-3 text-xs">
            <div className="w-8 h-8 rounded-md bg-muted flex items-center justify-center flex-shrink-0">
              <Mail className="h-4 w-4 text-primary" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Email</p>
              <button 
                onClick={handleCopyEmail}
                className="text-foreground hover:text-primary transition-colors text-sm break-all flex items-center gap-1"
              >
                {email}
                {copied ? <Check className="h-3 w-3 text-green-500" /> : <Copy className="h-3 w-3" />}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <div className="w-8 h-8 rounded-md bg-muted flex items-center justify-center flex-shrink-0">
              <MapPin className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Location</p>
              <p className="text-foreground text-sm">Dublin, Ireland</p>
            </div>
          </div>
        </div>

        <Button
          asChild
          variant="outline"
          className="w-full"
          size="sm"
        >
          <a href="/CV_IgnacioAlarcon.pdf" download="Ignacio_Alarcon_CV.pdf" className="flex items-center justify-center gap-2">
            <Download className="h-3.5 w-3.5" />
            Download CV
          </a>
        </Button>

        <div className="flex gap-2 pt-2">
          <a
            href="https://github.com/iav2002"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-md bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/ignacioalarcon/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-md bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </aside>
  );
};
