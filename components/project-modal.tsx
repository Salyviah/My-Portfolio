import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Github, ExternalLink } from 'lucide-react'
import Link from "next/link"

export interface ProjectType {
  title: string
  description: string
  technologies: string[]
  githubLink: string
  link?: string
}

interface ProjectModalProps {
  project: ProjectType | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>
            {project.description}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <h4 className="text-sm font-medium mb-2">Technologies used:</h4>
          <ul className="list-disc list-inside">
            {project.technologies.map((tech) => (
              <li key={tech} className="text-sm text-muted-foreground">{tech}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4 flex flex-col space-y-2">
          <Link
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-primary hover:underline"
          >
            <Github className="mr-2 h-4 w-4" />
            View on GitHub
          </Link>
          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-primary hover:underline"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              View Live Project
            </Link>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

