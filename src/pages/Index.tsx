import { Sidebar } from "@/components/Sidebar";
import { Navigation } from "@/components/Navigation";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex">
      {!isMobile && <Sidebar />}
      <div className={`flex-1 ${!isMobile ? "ml-80" : "ml-0"}`}>
        <Navigation />
        <main className={`${isMobile ? "pt-16" : "pt-20"}`}>
          <About />
          <Projects />
          <Skills />
          <Education />
          <Experience />
          <Contact />
          <footer className="bg-background border-t border-white/10 py-8">
            <div className="container max-w-6xl mx-auto px-8 text-center text-gray-400">
              <p className="text-sm">© 2025 Ignacio Alarcon Varela</p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Index;
