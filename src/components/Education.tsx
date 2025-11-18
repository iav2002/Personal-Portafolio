import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Computing (Data Science)",
    institution: "Technological University of Dublin (TUD)",
    period: "2025 - 2026",
    status: "Ongoing",
  },
  {
    degree: "Bachelor of Science in Computing",
    institution: "College of Computing Technology Dublin",
    period: "2021 - 2025",
    result: "2:1",
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Education</h2>
          <p className="text-muted-foreground text-lg">Academic background</p>
        </div>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-lg transition-all duration-300 border-border bg-card"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-card-foreground mb-1">{edu.degree}</h3>
                  <p className="text-primary font-medium mb-2">{edu.institution}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span>{edu.period}</span>
                    {edu.result && <span className="font-medium">Result: {edu.result}</span>}
                    {edu.status && (
                      <span className="px-2 py-1 bg-accent/20 text-accent rounded-md font-medium">
                        {edu.status}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
