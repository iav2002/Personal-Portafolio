import { Card } from "@/components/ui/card";
import { Server, Brain, Container } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-8 px-8 bg-background">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-6xl font-bold mb-8 text-foreground leading-tight">Hello, I'm Ignacio</h2>
        <Card className="p-8 card-glass mb-12">
          <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
            <p>
              An aspiring software and AI engineer from Bolivia, based in Dublin. I studied Computer Science at CCT College Dublin 
              and I am now doing an MSc in Data Science at TU Dublin. Most of my work sits between{" "}
              <span className="font-semibold text-foreground">backend engineering</span> and{" "}
              <span className="font-semibold text-foreground">deep learning</span>. I like building systems and 
              applying AI to problems that actually matter. I also have experience with{" "}
              <span className="font-semibold text-foreground">cloud infrastructure</span>, having worked with AWS and Docker 
              to deploy and manage applications. I try to keep a simple rule in mind in every project:{" "}
              <span className="font-semibold text-foreground">fail fast, learn faster</span>.
            </p>
            <p>
              Recently I worked on a deep learning project for detecting synthetic images that placed third at the HECA 
              Student Research Awards. When I am not coding you will probably find me playing chess or watching football.
            </p>
          </div>
        </Card>
        
      </div>
    </section>
  );
};
