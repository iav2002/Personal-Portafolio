import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink, FileText, Globe } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import hecaAward from "@/assets/heca-award.jpg";
import aiPoster from "@/assets/ai-detection-poster.png";

const techLogos: { [key: string]: string } = {
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  TensorFlow: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  Keras: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg",
  Streamlit: "https://streamlit.io/images/brand/streamlit-mark-color.svg",
  CNN: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  ResNet50: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "Spring Boot": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  "Spring Security": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  TOTP: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  Microservices: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  Pandas: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  NLP: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Scikit-learn": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
  "K-Means": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Random Forest": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  Flask: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  Vercel: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  Supabase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  Serverless: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  "Spring AI": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  Gemini: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg",
  AWS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  Hadoop: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg",
  HBase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  Linux: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
};

const projects = [
  {
    title: "Deep Learning Model for Fake Image Detection",
    description:
      "Developed a deep learning model using TensorFlow and Keras to detect manipulated images and combat disinformation. Evaluated multiple CNN architectures including ResNet50 and EfficientNetB0, achieving 86.5% accuracy. Deployed as an interactive web application using Streamlit.",
    technologies: ["Python", "TensorFlow", "Keras", "Streamlit", "CNN", "ResNet50"],
    award: "3rd Place - HECA Student Research Awards 2025",
    githubUrl: "https://github.com/iav2002/Fake-Image-Detector",
    posterUrl: "/AI_Detection_Poster.pdf",
    deployedUrl: "https://iav2002-ai-image-detector.hf.space",
    highlight: true,
  },
  {
    title: "AI Integrated E-Commerce Backend",
    description:
      "Built a scalable backend system using Spring Boot and PostgreSQL to handle complex product and order data as a classic E-commerce. I integrated Gemini to automate content generation and created a React dashboard to test the system end to end. The entire platform is containerized with Docker and deployed on AWS.",
    technologies: ["Java", "Spring Boot", "Spring AI", "Gemini", "PostgreSQL", "Docker", "AWS"],
    githubUrl: "https://github.com/iav2002/2fa-microservice",
    deployedUrl: "/#projects",
    highlight: false,
  },
  {
    title: "Serverless URL Shortener",
    description:
      "Designed and built a fast, efficient URL shortening service using Python - Flask and Vercel. By choosing a serverless approach backed by Supabase, I created a system that runs without any server maintenance or idle costs, while still being able to scale instantly if were need it.",
    technologies: ["Python", "Flask", "Vercel", "Supabase", "PostgreSQL"],
    githubUrl: "https://github.com/iav2002/URL-Shortener",
    deployedUrl: "/#projects",
    highlight: false,
  },
  {
    title: "Big Data Processing & Web Application",
    description:
      "I Developed a data system to process 25 million Spotify records (3.5GB). Using Hadoop MapReduce and Python, I built an ETL pipeline feeding a hybrid HBase - MySQL database. The data is served via a secure Spring Boot application, optimized with server-side pagination and performance-tuned using YCSB benchmarks.",
    technologies: ["Java", "Spring Boot", "Hadoop", "HBase", "Python", "MySQL", "Linux"],
    githubUrl: "https://github.com/iav2002/Big-Data-Processing-Web-Application",
    highlight: false,
  },
];

export const Projects = () => {
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
    <section ref={sectionRef} id="projects" className="py-6 px-8 bg-background">
      <div className="container max-w-6xl mx-auto">
        <h2 className={`text-3xl font-bold mb-8 text-foreground transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Projects
        </h2>
        
        <div className="space-y-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`p-6 card-glass transition-all duration-500 ${
                project.highlight ? "border-primary/30" : ""
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: isVisible ? `${(index + 1) * 150}ms` : '0ms' }}
            >
              {project.highlight ? (
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex flex-col gap-4 flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xl font-semibold text-foreground hover:text-primary transition-colors inline-flex items-center gap-1.5"
                      >
                        {project.title}
                        <ExternalLink className="h-4 w-4" />
                      </a>
                      {project.award && (
                        <Badge className="bg-primary text-primary-foreground text-xs whitespace-nowrap flex-shrink-0">
                          <Award className="h-3 w-3 mr-1" />
                          3rd Place HECA 2025
                        </Badge>
                      )}
                    </div>
                    
                    <p className="text-base text-muted-foreground leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-200 dark:bg-white/5 dark:text-muted-foreground dark:hover:bg-white/10 dark:border-white/10 text-xs font-normal px-2 py-0.5 flex items-center gap-1.5"
                        >
                          {techLogos[tech] && (
                            <img src={techLogos[tech]} alt={tech} className="w-3.5 h-3.5" />
                          )}
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        GitHub
                      </a>
                      {project.posterUrl && (
                        <Dialog>
                          <DialogTrigger asChild>
                            <button className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors">
                              <FileText className="h-3.5 w-3.5" />
                              Poster
                            </button>
                          </DialogTrigger>
                          <DialogContent className="max-w-6xl max-h-[90vh] overflow-auto">
                            <img 
                              src={aiPoster} 
                              alt="AI Detection Research Poster" 
                              className="w-full h-auto"
                            />
                          </DialogContent>
                        </Dialog>
                      )}
                      {project.deployedUrl && (
                        <a
                          href={project.deployedUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors"
                        >
                          <Globe className="h-3.5 w-3.5" />
                          Live App
                        </a>
                      )}
                      {project.award && (
                        <a
                          href="https://heca.ie/fifth-annual-heca-student-research-awards/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          HECA Awards
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="cursor-pointer flex-shrink-0 self-start">
                        <img 
                          src={hecaAward} 
                          alt="HECA Student Research Award 2025" 
                          className="rounded-md w-full md:w-40 h-auto shadow-md hover:shadow-lg transition-shadow"
                        />
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl">
                      <img 
                        src={hecaAward} 
                        alt="HECA Student Research Award 2025" 
                        className="w-full h-auto rounded-lg"
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-4">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xl font-semibold text-foreground hover:text-primary transition-colors inline-flex items-center gap-1.5"
                    >
                      {project.title}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    {project.award && (
                      <Badge className="bg-primary text-primary-foreground text-xs whitespace-nowrap flex-shrink-0">
                        <Award className="h-3 w-3 mr-1" />
                        3rd Place HECA 2025
                      </Badge>
                    )}
                  </div>
                  
                  <p className="text-base text-muted-foreground leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-200 dark:bg-white/5 dark:text-muted-foreground dark:hover:bg-white/10 dark:border-white/10 text-xs font-normal px-2 py-0.5 flex items-center gap-1.5"
                      >
                        {techLogos[tech] && (
                          <img src={techLogos[tech]} alt={tech} className="w-3.5 h-3.5" />
                        )}
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      GitHub
                    </a>
                    {project.posterUrl && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <button className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors">
                            <FileText className="h-3.5 w-3.5" />
                            Poster
                          </button>
                        </DialogTrigger>
                        <DialogContent className="max-w-6xl max-h-[90vh] overflow-auto">
                          <img 
                            src={aiPoster} 
                            alt="AI Detection Research Poster" 
                            className="w-full h-auto"
                          />
                        </DialogContent>
                      </Dialog>
                    )}
                    {project.deployedUrl && (
                      <a
                        href={project.deployedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors"
                      >
                        <Globe className="h-3.5 w-3.5" />
                        Live App
                      </a>
                    )}
                    {project.award && (
                      <a
                        href="https://heca.ie/fifth-annual-heca-student-research-awards/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        HECA Awards
                      </a>
                    )}
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
        
        <div className={`mt-8 text-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: isVisible ? `${(projects.length + 1) * 150}ms` : '0ms' }}>
          <a
            href="https://github.com/iav2002"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <span>View all projects on GitHub</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
