"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Mail, Phone, Linkedin, Github } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [filteredProjects, setFilteredProjects] = useState([])
  const [isInView, setIsInView] = useState(false)

  const projects = [
    { id: 1, title: "Corporate Training Program", category: "e-learning", image: "/placeholder.svg?height=200&width=300" },
    { id: 2, title: "Interactive Language Course", category: "language", image: "/placeholder.svg?height=200&width=300" },
    { id: 3, title: "Gamified Math Lessons", category: "gamification", image: "/placeholder.svg?height=200&width=300" },
    { id: 4, title: "Virtual Reality History Tour", category: "vr", image: "/placeholder.svg?height=200&width=300" },
    { id: 5, title: "Adaptive Learning Platform", category: "e-learning", image: "/placeholder.svg?height=200&width=300" },
    { id: 6, title: "Microlearning Mobile App", category: "mobile", image: "/placeholder.svg?height=200&width=300" },
  ]

  const skills = [
    { name: "Instructional Design", level: 90 },
    { name: "E-Learning Development", level: 85 },
    { name: "LMS Management", level: 80 },
    { name: "Video Production", level: 75 },
    { name: "Gamification", level: 70 },
  ]

  const testimonials = [
    { id: 1, name: "Solomon Song", role: "Enegy Consultant", company: "Tech Corp", text: "The e-learning courses developed were engaging and effective. Our employee productivity increased significantly." },
    { id: 2, name: "Tanya Beniquez", role: "Founder", company: "ETeach", text: "The instructional design was top-notch. The courses were not only informative but also interactive and enjoyable." },
    { id: 3, name: "Anna Spear", role: "Supervisor", company: "IDOL", text: "The attention to detail in creating personalized learning paths was impressive. Our learners showed great improvement." },
  ]

  useEffect(() => {
    setFilteredProjects(projects)
  }, [])

  const filterProjects = (category) => {
    setActiveFilter(category)
    if (category === 'all') {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter(project => project.category === category))
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="text-center">
          <motion.h1 
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Sereyutdam Song
          </motion.h1>
          <motion.p 
            className="text-2xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            E-Learning Specialist & Instructional Designer
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size="lg" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
              Learn More <ChevronDown className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <img src="/placeholder.svg?height=300&width=300" alt="Sereyutdam Song" className="rounded-full w-64 h-64 object-cover mx-auto" />
            </div>
            <div className="md:w-2/3">
              <p className="text-lg mb-4">
                I'm an experienced e-learning specialist and instructional designer with a passion for creating engaging and effective online learning experiences. With over 8 years in the field, I've developed a keen understanding of adult learning principles and how to apply them in digital environments.
              </p>
              <p className="text-lg mb-4">
                My expertise includes designing and developing interactive e-learning courses, managing learning management systems, and implementing gamification strategies to enhance learner engagement and retention.
              </p>
              <p className="text-lg">
                I'm dedicated to staying at the forefront of educational technology and continuously improving my skills to deliver cutting-edge solutions for my clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills & Expertise</h2>
          <div className="grid gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-primary text-primary-foreground">
                      {skill.name}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block">
                      {skill.level}%
                    </span>
                  </div>
                </div>
                <motion.div 
                  className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-primary/20"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                >
                  <div style={{ width: `${skill.level}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"></div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Portfolio</h2>
          <div className="flex justify-center space-x-4 mb-8">
            <Button 
              variant={activeFilter === 'all' ? 'default' : 'outline'}
              onClick={() => filterProjects('all')}
            >
              All
            </Button>
            <Button 
              variant={activeFilter === 'e-learning' ? 'default' : 'outline'}
              onClick={() => filterProjects('e-learning')}
            >
              E-Learning
            </Button>
            <Button 
              variant={activeFilter === 'gamification' ? 'default' : 'outline'}
              onClick={() => filterProjects('gamification')}
            >
              Gamification
            </Button>
            <Button 
              variant={activeFilter === 'vr' ? 'default' : 'outline'}
              onClick={() => filterProjects('vr')}
            >
              VR
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <Badge>{project.category}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
          <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <p className="mb-4 italic">"{testimonial.text}"</p>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <p className="mb-4">I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
              <div className="space-y-2">
                <p className="flex items-center"><Mail className="mr-2" /> utdamsong777@gmail.com</p>
                <p className="flex items-center"><Phone className="mr-2" /> +1 (555) 77-735-356</p>
                <p className="flex items-center"><Linkedin className="mr-2" /> https://www.linkedin.com/in/sereyutdamsong/</p>
                <p className="flex items-center"><Github className="mr-2" /> github.com/utdsong</p>
              </div>
            </div>
            <form className="space-y-4">
              <Input placeholder="Your Name" required />
              <Input type="email" placeholder="Your Email" required />
              <Input placeholder="Subject" required />
              <Textarea placeholder="Your Message" required />
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-primary text-primary-foreground text-center">
        <p>&copy; 2024 Sereyutdam Song. All rights reserved.</p>
      </footer>
    </div>
  )
}