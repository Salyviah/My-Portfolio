"use client"

import { useEffect, useState } from 'react'
import { Code, Coffee, Users, Award } from 'lucide-react'

const achievements = [
  { icon: Code, value: '50+', label: 'Projects Completed' },
  { icon: Coffee, value: '5000+', label: 'Cups of Coffee' },
  { icon: Users, value: '20+', label: 'Satisfied Clients' },
  { icon: Award, value: '10+', label: 'Certifications' },
]

export function Achievements() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((item, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <item.icon className="w-12 h-12 mx-auto mb-4 text-emerald-500" />
              <h3 className="text-3xl font-bold mb-2">{item.value}</h3>
              <p className="text-gray-600 dark:text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

