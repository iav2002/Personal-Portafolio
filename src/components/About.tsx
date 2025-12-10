import { Card } from "@/components/ui/card";
import { Server, Brain, Container } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-12 px-8 bg-background">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-6xl font-bold mb-8 text-foreground leading-tight">Hello, I'm Ignacio</h2>
        
        <Card className="p-8 card-glass mb-12">
          <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
            <p>
              A Bolivian developer based in Dublin. I studied Computer Science at CCT College Dublin 
              and I am now doing an MSc in Data Science at TU Dublin. I like building backend systems, working with data 
              and using machine learning on projects that feel useful in the real world. I try to keep a simple rule in 
              mind in every project: <span className="font-semibold text-foreground">fail fast, learn faster</span>.
            </p>
            <p>
              Recently I worked on a deep learning project for detecting synthetic images that placed third at the HECA 
              Student Research Awards. When I am not coding you will probably find me playing chess, watching football 
              or tinkering with new side ideas.
            </p>
          </div>
        </Card>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 card-glass">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-foreground">Backend Engineering</h3>
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Server className="h-5 w-5 text-primary" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building robust microservices and scalable APIs using Java, Spring Boot, and PostgreSQL. Focused on clean, maintainable code
            </p>
          </Card>
          <Card className="p-6 card-glass">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-foreground">Data Science & ML</h3>
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Brain className="h-5 w-5 text-primary" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Developing deep learning solutions for real problems, such as my award winning project for detecting synthetic images
            </p>
          </Card>
          <Card className="p-6 card-glass">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-foreground">Cloud & DevOps</h3>
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Container className="h-5 w-5 text-primary" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AWS Certified. Familiar in containerizing applications with Docker and automating deployments
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
