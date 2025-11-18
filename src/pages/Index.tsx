import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <footer className="bg-card border-t border-border py-8">
        <div className="container text-center text-muted-foreground">
          <p>© 2025 Ignacio Alarcon Varela. All rights reserved.</p>
          <p className="text-sm mt-2">Built with React & TypeScript</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
