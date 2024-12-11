"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import Link from "next/link"
import { useEffect, useState } from 'react'

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="contact" className="py-24 container px-4 bg-gray-50 dark:bg-gray-900">
      <h2 
        className={`text-4xl font-bold mb-12 text-center transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        Get In Touch
      </h2>
      <div className="grid lg:grid-cols-2 gap-12">
        <div 
          className={`space-y-8 transition-all duration-500 ease-out delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
        >
          <form className="space-y-6">
            <div className="space-y-2">
              <Input
                placeholder="Enter your name or company name"
                className="bg-white dark:bg-gray-800 border-0 h-12"
              />
              <p className="text-sm text-muted-foreground">
                Please enter your full name or company name.
              </p>
            </div>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white dark:bg-gray-800 border-0 h-12"
              />
              <p className="text-sm text-muted-foreground">
                Enter a valid email address so we can get in touch.
              </p>
            </div>
            <div className="space-y-2">
              <Textarea
                placeholder="Write your message here..."
                className="min-h-[200px] bg-white dark:bg-gray-800 border-0 resize-none"
              />
              <p className="text-sm text-muted-foreground">
                Please provide a detailed message for your inquiry.
              </p>
            </div>
            <Button className="w-full bg-emerald-500 hover:bg-emerald-600 h-12 text-base transition-colors duration-300">
              Send Message
            </Button>
          </form>
        </div>
        <div 
          className={`space-y-8 transition-all duration-500 ease-out delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
        >
          <div>
            <h3 className="text-lg font-semibold mb-2 flex items-center text-emerald-500">
              <MapPin className="w-5 h-5 mr-2" />
              ADDRESS
            </h3>
            <p className="text-muted-foreground">Waithaka, Nairobi, Kenya.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 flex items-center text-emerald-500">
              <Mail className="w-5 h-5 mr-2" />
              EMAIL
            </h3>
            <Link 
              href="mailto:salyviahkamau@gmail.com" 
              className="text-muted-foreground hover:text-emerald-500 transition-colors"
            >
              salyviahkamau@gmail.com
            </Link>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 flex items-center text-emerald-500">
              <Phone className="w-5 h-5 mr-2" />
              PHONE
            </h3>
            <Link 
              href="tel:+254702977782" 
              className="text-muted-foreground hover:text-emerald-500 transition-colors"
            >
              +254702977782
            </Link>
          </div>
          <div className="flex gap-6">
            <Link 
              href="#" 
              className="text-muted-foreground hover:text-emerald-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link 
              href="https://github.com/Salyviah" 
              className="text-muted-foreground hover:text-emerald-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link 
              href="#" 
              className="text-muted-foreground hover:text-emerald-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-6 h-6" />
            </Link>
            <Link 
              href="#" 
              className="text-muted-foreground hover:text-emerald-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

