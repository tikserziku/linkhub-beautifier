import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { AddProjectForm } from "./AddProjectForm";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  stars?: number;
}

const initialProjects: Project[] = [
  {
    id: 1,
    title: "AI Task Manager",
    description: "Intelligent task management application with AI-powered prioritization and smart scheduling features.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
    tags: ["React", "TypeScript", "AI", "Firebase"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    stars: 245
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Modern e-commerce platform with real-time inventory, payment processing, and analytics dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Redux"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    stars: 189
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management with real-time metrics and automated reporting.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    tags: ["Vue.js", "D3.js", "Node.js", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    stars: 156
  },
  {
    id: 4,
    title: "Fitness Tracker App",
    description: "Mobile-first fitness tracking application with workout plans, progress tracking, and social features.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
    tags: ["React Native", "Redux", "SQLite", "Firebase"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    stars: 203
  },
  {
    id: 5,
    title: "Weather Forecast Tool",
    description: "Beautiful weather application with detailed forecasts, interactive maps, and location-based alerts.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&h=300&fit=crop",
    tags: ["React", "Weather API", "Mapbox", "PWA"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    stars: 127
  },
  {
    id: 6,
    title: "Code Editor Extension",
    description: "VS Code extension for enhanced productivity with custom themes, snippets, and developer tools.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
    tags: ["TypeScript", "VS Code API", "Extension"],
    liveUrl: "https://marketplace.visualstudio.com",
    githubUrl: "https://github.com",
    stars: 312
  }
];

export const ProjectsGrid = () => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);

  const handleAddProject = (newProject: Omit<Project, 'id'>) => {
    const project: Project = {
      ...newProject,
      id: Math.max(...projects.map(p => p.id)) + 1
    };
    setProjects(prev => [project, ...prev]);
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Мои проекты
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Коллекция инновационных проектов с современными веб-технологиями
          </p>
        </div>
        
        <div className="text-center">
          <AddProjectForm onAddProject={handleAddProject} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};