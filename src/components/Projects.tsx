import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Deep Learning Model for Fake Image Detection",
    description:
      "Developed a deep learning model using TensorFlow and Keras to detect manipulated images and combat disinformation. Evaluated multiple CNN architectures including ResNet50 and EfficientNetB0, achieving 86.5% accuracy. Deployed as an interactive web application using Streamlit.",
    technologies: ["Python", "TensorFlow", "Keras", "Streamlit", "CNN", "ResNet50"],
    award: "3rd Place - HECA Student Research Awards 2025",
    githubUrl: "https://github.com/iav2002/fake-image-detection",
    highlight: true,
  },
  {
    title: "Centralized 2FA Microservice",
    description:
      "Architected a secure, stateless 2FA microservice using Spring Boot to provide centralized authentication for multiple applications. Implemented TOTP algorithm (RFC 6238) with robust clock skew handling. Containerized with Docker for scalable deployment.",
    technologies: ["Java", "Spring Boot", "Spring Security", "Docker", "TOTP", "Microservices"],
    githubUrl: "https://github.com/iav2002/2fa-microservice",
    highlight: false,
  },
  {
    title: "Brainrot Index Predictor",
    description:
      "Designed a hybrid analytical and predictive model to measure addictive engagement patterns in short-form content. Engineered behavioral and linguistic features using NLP. Applied K-Means clustering and trained classification models (Logistic Regression, Random Forest) to predict engagement scores.",
    technologies: ["Python", "Pandas", "NLP", "Scikit-learn", "K-Means", "Random Forest"],
    githubUrl: "https://github.com/iav2002/brainrot-index",
    highlight: false,
  },
  {
    title: "Cloud-Based URL Shortener",
    description:
      "Built a highly available microservice with Flask to generate short URLs. Containerized with Docker and deployed on AWS ECS with horizontal auto-scaling based on CloudWatch metrics, ensuring reliability and performance under varying traffic loads.",
    technologies: ["Python", "Flask", "Docker", "AWS ECS", "CloudWatch", "Auto-scaling"],
    githubUrl: "https://github.com/iav2002/url-shortener",
    highlight: false,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Featured Projects</h2>
          <p className="text-muted-foreground text-lg">
            Some of my recent work in backend engineering and data science
          </p>
        </div>
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`p-8 hover:shadow-xl transition-all duration-300 border ${
                project.highlight
                  ? "border-primary/50 bg-gradient-to-br from-primary/5 to-secondary/5"
                  : "border-border bg-card"
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <h3 className="text-2xl font-bold text-card-foreground">{project.title}</h3>
                {project.award && (
                  <Badge className="bg-accent text-accent-foreground flex items-center gap-1 whitespace-nowrap">
                    <Award className="h-4 w-4" />
                    {project.award}
                  </Badge>
                )}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="outline"
                    className="border-primary/30 text-primary"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                View on GitHub
              </a>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://github.com/iav2002"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-lg transition-colors"
          >
            View more on GitHub
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
