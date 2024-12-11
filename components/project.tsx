"use client"

import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ProjectModal } from "./project-modal"

export interface ProjectType {
  title: string
  description: string
  technologies: string[]
  githubLink: string
}

const PROJECTS: ProjectType[] = [
  {
    title: "Fitness-Frontend",
    description: "A modern fitness application frontend that provides users with workout tracking, exercise guides, and personalized fitness plans. Built with React and modern web technologies for a seamless user experience.",
    technologies: ["React", "JavaScript", "HTML", "CSS", "RESTful API"],
    githubLink: "https://github.com/Salyviah/Fitness-Frontend"
  },
  {
    title: "Weather App",
    description: "An intuitive weather application built using React and integrated with a weather API. It provides real-time weather information and forecasts for locations worldwide.",
    technologies: ["React", "JavaScript", "HTML", "CSS", "Weather API"],
    githubLink: "https://github.com/Salyviah/weather-app"
  },
  {
    title: "Coffee-Shop",
    description: "Developed a Coffee-Shop management application to streamline operations by managing orders, customers, and menu items. This project focused on creating a seamless user experience and improving operational efficiency.",
    technologies: ["Python","React", "SQL"],
    githubLink: "https://github.com/Salyviah/Coffee-shop"
  },
  {
    title: "Bot Battlr",
    description: "An interactive web application allowing users to create their own bot army. Users can browse available bots, add them to their army, and remove them as needed, showcasing proficiency in React state management.",
    technologies: ["React", "JavaScript", "HTML", "CSS", "RESTful API"],
    githubLink: "https://github.com/Salyviah/bot-battlr"
  }
]

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="projects" className="py-24 container px-4">
      <h2 
        className={`text-4xl font-bold mb-12 text-center transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <div
            key={project.title}
            className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-emerald-500">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center text-emerald-500 hover:text-emerald-600 transition-colors mt-4"
                >
                  View Details
                  <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
