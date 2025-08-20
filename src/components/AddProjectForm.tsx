import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";

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

interface AddProjectFormProps {
  onAddProject: (project: Omit<Project, 'id'>) => void;
}

export const AddProjectForm = ({ onAddProject }: AddProjectFormProps) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    tags: "",
    liveUrl: "",
    githubUrl: "",
    stars: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newProject = {
      title: formData.title,
      description: formData.description,
      image: formData.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      liveUrl: formData.liveUrl || undefined,
      githubUrl: formData.githubUrl || undefined,
      stars: formData.stars ? parseInt(formData.stars) : undefined
    };

    onAddProject(newProject);
    setFormData({
      title: "",
      description: "",
      image: "",
      tags: "",
      liveUrl: "",
      githubUrl: "",
      stars: ""
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="glass glass-hover mb-8">
          <Plus className="mr-2 h-5 w-5" />
          Добавить проект
        </Button>
      </DialogTrigger>
      <DialogContent className="glass max-w-md">
        <DialogHeader>
          <DialogTitle className="gradient-text">Новый проект</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Название *</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              required
              className="glass"
            />
          </div>
          
          <div>
            <Label htmlFor="description">Описание *</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              required
              className="glass"
            />
          </div>
          
          <div>
            <Label htmlFor="image">URL изображения</Label>
            <Input
              id="image"
              type="url"
              value={formData.image}
              onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
              placeholder="https://example.com/image.jpg"
              className="glass"
            />
          </div>
          
          <div>
            <Label htmlFor="tags">Теги (через запятую)</Label>
            <Input
              id="tags"
              value={formData.tags}
              onChange={(e) => setFormData(prev => ({ ...prev, tags: e.target.value }))}
              placeholder="React, TypeScript, API"
              className="glass"
            />
          </div>
          
          <div>
            <Label htmlFor="liveUrl">Ссылка на демо</Label>
            <Input
              id="liveUrl"
              type="url"
              value={formData.liveUrl}
              onChange={(e) => setFormData(prev => ({ ...prev, liveUrl: e.target.value }))}
              placeholder="https://example.com"
              className="glass"
            />
          </div>
          
          <div>
            <Label htmlFor="githubUrl">GitHub ссылка</Label>
            <Input
              id="githubUrl"
              type="url"
              value={formData.githubUrl}
              onChange={(e) => setFormData(prev => ({ ...prev, githubUrl: e.target.value }))}
              placeholder="https://github.com/username/repo"
              className="glass"
            />
          </div>
          
          <div>
            <Label htmlFor="stars">Количество звезд</Label>
            <Input
              id="stars"
              type="number"
              value={formData.stars}
              onChange={(e) => setFormData(prev => ({ ...prev, stars: e.target.value }))}
              placeholder="0"
              className="glass"
            />
          </div>
          
          <div className="flex gap-2 pt-4">
            <Button type="button" variant="outline" onClick={() => setOpen(false)} className="flex-1">
              Отмена
            </Button>
            <Button type="submit" className="flex-1">
              Добавить
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};