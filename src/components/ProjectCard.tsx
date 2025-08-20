import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  stars?: number;
}

export const ProjectCard = ({ 
  title, 
  description, 
  image, 
  tags, 
  liveUrl, 
  githubUrl, 
  stars 
}: ProjectCardProps) => {
  return (
    <Card className="project-card glass glass-hover group overflow-hidden rounded-2xl border-0">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute top-4 right-4 flex gap-2">
          {stars && (
            <Badge variant="secondary" className="glass text-xs">
              <Star className="w-3 h-3 mr-1 fill-current" />
              {stars}
            </Badge>
          )}
        </div>
      </div>
      
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-card-foreground mb-2 group-hover:gradient-text transition-all duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge 
              key={tag} 
              variant="outline" 
              className="text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
            >
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-3 pt-2">
          {liveUrl && (
            <Button 
              variant="default" 
              size="sm" 
              className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-primary-glow hover:to-secondary-glow"
              asChild
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button 
              variant="outline" 
              size="sm" 
              className="glass border-card-border hover:bg-primary/10"
              asChild
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};