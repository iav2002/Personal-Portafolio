import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    role: "Chef de Partie",
    company: "The Merrion Inn",
    location: "Dublin, Ireland",
    period: "November 2022 - Present",
    award: "Gastropub awarded Best Food Pub at the Irish Pub Awards 2023",
    softSkills: ["Team Leadership", "Pressure Management", "Adaptability", "Attention to Detail"],
    description: [
      "Led and coordinated a team of 5 chefs, demonstrating strong leadership and communication skills while ensuring seamless kitchen operations during high-pressure service hours",
      "Adapted quickly under pressure, handling last-minute changes and special dietary requirements with flexibility and attention to detail",
    ],
  },
  {
    role: "Kitchen Porter",
    company: "The Merrion Inn",
    location: "Dublin, Ireland",
    period: "September 2021 - November 2022",
    softSkills: ["Time Management", "Organization", "Quality Standards"],
    description: [
      "Managed kitchen logistics and inventory with strong organizational skills, maintaining high cleanliness standards through efficient time management",
    ],
  },
  {
    role: "Carer Assistant",
    company: "Private Home Care",
    location: "Dublin, Ireland",
    period: "December 2020 - May 2022",
    softSkills: ["Communication", "Empathy", "Responsibility", "Documentation"],
    description: [
      "Provided compassionate one-on-one care, developing strong interpersonal and communication skills while maintaining detailed documentation for medical staff and family members",
    ],
  },
];

export const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="py-6 px-8 bg-background">
      <div className="container max-w-6xl mx-auto">
        <h2 className={`text-3xl font-bold mb-8 text-foreground transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Professional Experience & Soft Skills
        </h2>
        
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className={`p-6 card-glass transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: isVisible ? `${(index + 1) * 150}ms` : '0ms' }}
            >
              <div className="space-y-3">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                    {exp.award && (
                      <p className="text-xs text-primary mt-1">{exp.award}</p>
                    )}
                  </div>
                  <div className="text-muted-foreground text-xs md:text-right">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.softSkills.map((skill, skillIdx) => (
                    <Badge
                      key={skillIdx}
                      variant="secondary"
                      className="bg-primary/10 text-primary border border-primary/20 text-xs font-medium px-2.5 py-0.5"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
