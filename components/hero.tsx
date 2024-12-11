"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Database, Layout, Server, Star, Zap } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-center pt-16 container px-4 bg-gradient-to-b from-emerald-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div 
        className={`text-center mb-12 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-blue-500">
          Salyviah Kamau
        </h1>
        <p className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
          Full-Stack Software Developer
        </p>
        <div className="flex justify-center mt-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
          ))}
        </div>
      </div>

      <div 
        className={`max-w-3xl text-center mb-12 transition-all duration-500 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          Passionate about crafting efficient, scalable, and user-centric web applications. 
          With a strong foundation in both front-end and back-end technologies, I bring ideas to life 
          through clean code and innovative solutions.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[
            { icon: Layout, text: "Responsive UI" },
            { icon: Server, text: "RESTful APIs" },
            { icon: Database, text: "Database Design" },
            { icon: Code, text: "Clean Code" },
            { icon: Zap, text: "Performance Optimization" }
          ].map((item, index) => (
            <div
              key={index}
              className={`flex items-center bg-white dark:bg-gray-700 rounded-full px-4 py-2 shadow-md transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <item.icon className="w-5 h-5 mr-2 text-emerald-500" />
              <span className="text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div 
        className={`flex gap-4 mb-12 transition-all duration-500 ease-out delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        <Button 
          size="lg" 
          className="bg-emerald-500 hover:bg-emerald-600 text-white transition-colors duration-300"
          onClick={() => scrollToSection('contact')}
        >
          Hire Me
        </Button>
        <Button 
          size="lg" 
          variant="outline"
          className="border-emerald-500 text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900 transition-colors duration-300"
          onClick={() => scrollToSection('projects')}
        >
          View Projects
        </Button>
      </div>

      <div
        className={`text-center transition-all duration-500 ease-out delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        <Link 
          href="/Salyviah_Kamau_Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-emerald-500 hover:text-emerald-600 transition-colors duration-300"
        >
          Download Resume <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}