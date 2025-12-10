import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import tudLogo from "@/assets/tud-logo.png";
import cctLogo from "@/assets/cct-logo.png";

const education = [
  {
    degree: "Master of Science in Computing (Data Science)",
    institution: "Technological University of Dublin (TUD)",
    period: "2025 - 2026",
    status: "Ongoing",
    logo: tudLogo,
  },
  {
    degree: "Bachelor of Science in Computing",
    institution: "College of Computing Technology Dublin",
    period: "2021 - 2025",
    result: "2:1",
    logo: cctLogo,
  },
];

export const Education = () => {
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
    <section ref={sectionRef} id="education" className="py-6 px-8 bg-background">
      <div className="container max-w-6xl mx-auto">
        <h2 className={`text-3xl font-bold mb-8 text-foreground transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Education
        </h2>
        
        <div className="space-y-4">
          {education.map((edu, index) => (
            <Card
              key={index}
              className={`p-6 card-glass transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: isVisible ? `${(index + 1) * 150}ms` : '0ms' }}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center p-2">
                    <img src={edu.logo} alt={edu.institution} className="w-full h-full object-contain" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">{edu.degree}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{edu.institution}</p>
                  <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span>{edu.period}</span>
                    {edu.result && <span>Result: {edu.result}</span>}
                    {edu.status && (
                      <span className="px-2 py-0.5 bg-primary/10 text-primary rounded font-medium">
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
