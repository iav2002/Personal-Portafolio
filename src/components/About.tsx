import { Card } from "@/components/ui/card";
import { Code2, Database, Brain } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A passionate developer from Bolivia living in Dublin, combining backend engineering expertise with data science innovation
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 border-border bg-card">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Code2 className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-card-foreground">Backend Engineering</h3>
            <p className="text-muted-foreground">
              Building scalable, secure microservices and APIs with Spring Boot, Flask, and cloud technologies
            </p>
          </Card>
          <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 border-border bg-card">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
              <Brain className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-card-foreground">Data Science & ML</h3>
            <p className="text-muted-foreground">
              Applying machine learning and NLP to solve complex problems, from fake image detection to predictive analytics
            </p>
          </Card>
          <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 border-border bg-card">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
              <Database className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-card-foreground">Cloud & DevOps</h3>
            <p className="text-muted-foreground">
              AWS certified professional experienced in Docker, containerization, and cloud-native deployments
            </p>
          </Card>
        </div>
        <Card className="p-8 bg-gradient-to-br from-muted/50 to-muted/30 border-border">
          <p className="text-lg text-card-foreground leading-relaxed mb-4">
            I'm currently pursuing a Master's in Data Science at TUD while working on innovative projects 
            that bridge the gap between backend engineering and machine learning. My experience ranges from 
            developing award-winning deep learning models to architecting secure authentication microservices.
          </p>
          <p className="text-lg text-card-foreground leading-relaxed">
            Beyond coding, I believe in the principle: <span className="font-semibold text-primary">"To fail is to learn"</span> - 
            embracing challenges as opportunities for growth. When I'm not building software, you might find me 
            working at The Merrion Inn, Dublin's Best Food Pub Award winner.
          </p>
        </Card>
      </div>
    </section>
  );
};
