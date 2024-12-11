"use client"

import { Check } from 'lucide-react'
import { useEffect, useState } from 'react'

const SKILLS = [
  "HTML", "CSS", "JavaScript", "TypeScript",
  "React", "Next.js", "Node.js", "Express",
  "MongoDB", "PostgreSQL", "Git", "RESTful APIs",
  "GraphQL", "Tailwind CSS", "Sass", "Jest",
  "Cypress", "Webpack", "Docker", "AWS"
]

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="skills" className="py-24 container px-4 bg-gray-50 dark:bg-gray-900">
      <div 
        className={`flex flex-col items-center mb-12 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-emerald-500 mb-4">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          </svg>
        </div>
        <h2 className="text-4xl font-bold text-center">Skills & Technologies</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {SKILLS.map((skill, index) => (
          <div
            key={skill}
            className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <div
              className="flex items-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Check className="w-5 h-5 text-emerald-500 mr-2" />
              <span className="font-medium">{skill}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
