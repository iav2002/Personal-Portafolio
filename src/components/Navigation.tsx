import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { id: "about", label: "About Me" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("about");
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 right-0 ${isMobile ? "left-0" : "left-80"} bg-card/95 backdrop-blur-sm border-b border-border z-50`}>
      <div className={`${isMobile ? "px-4 py-3" : "container max-w-6xl mx-auto px-8 py-4"}`}>
        <div className="flex items-center justify-between">
          <div className={`flex ${isMobile ? "flex-wrap gap-1 flex-1 justify-center" : "gap-1"}`}>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  isMobile ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm",
                  "rounded-md font-medium transition-colors",
                  activeSection === item.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {item.label}
              </a>
            ))}
          </div>
          {!isMobile && (
            <div className="ml-4">
              <ThemeToggle />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
