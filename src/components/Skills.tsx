import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Java", "JavaScript", "R", "Dart"],
  },
  {
    title: "Backend & Frameworks",
    skills: ["Spring Boot", "Flask", "FastAPI", "Node.js"],
  },
  {
    title: "Data Science & ML",
    skills: ["TensorFlow", "Keras", "Pandas", "Scikit-learn", "NLP"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "Flutter", "HTML/CSS"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "AWS", "Git", "Linux", "Bash"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Technical Skills</h2>
          <p className="text-muted-foreground text-lg">
            Technologies and tools I work with
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 border-border bg-card"
            >
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/20"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Card className="p-6 inline-block bg-accent/10 border-accent/20">
            <p className="text-accent-foreground font-semibold">
              🏆 AWS Certified Cloud Practitioner
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
