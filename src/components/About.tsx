import { Card } from "@/components/ui/card";
import { Server, Brain, Container } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-8 px-8 bg-background">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-6xl font-bold mb-8 text-foreground leading-tight">Hello, I'm Ignacio</h2>
        <Card className="p-8 card-glass mb-12">
          <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
         <p>Hi, I'm Ignacio, a <strong>Site Reliability Engineer intern at Crusoe</strong>. I'm from Bolivia, based in Dublin, and most of my time right now goes into <strong>cloud infrastructure</strong>: keeping things running, automating the parts nobody wants to do by hand, and learning how large scale compute really behaves once it is in production.</p>

          <p>Before this I studied Computer Science at CCT College Dublin, and I'm wrapping up an MSc in Data Science at TU Dublin, with my dissertation coming later this year. The AI side has stuck with me too. I built a synthetic image detection model that placed third at the HECA Student Research Awards, and I like keeping one foot in <strong>deep learning</strong>, especially now that the systems I want to run reliably are the same ones training and serving models.</p>

          <p>Outside of all that, you'll usually find me playing chess or watching football.</p>

          <p><strong>If it doesn't exist yet, build it.</strong></p>



          </div>
        </Card>
        
      </div>
    </section>
  );
};
