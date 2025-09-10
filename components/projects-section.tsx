"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, ChevronLeft, ChevronRight, Play, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with React, Node.js, and Stripe integration featuring real-time inventory management and advanced analytics.",
    image: "/placeholder.svg?height=400&width=600&text=E-Commerce+Platform",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io"],
    github: "#",
    live: "#",
    category: "Full Stack",
    status: "Completed",
  },
  {
    id: 2,
    title: "AI Task Manager",
    description:
      "An intelligent task management app with AI-powered scheduling and collaborative features for modern teams and productivity optimization.",
    image: "/placeholder.svg?height=400&width=600&text=AI+Task+Manager",
    technologies: ["Next.js", "TypeScript", "Prisma", "OpenAI", "Tailwind"],
    github: "#",
    live: "#",
    category: "AI/ML",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Creative Portfolio",
    description:
      "A modern portfolio website with stunning animations, interactive elements, and responsive design showcasing creative work.",
    image: "/placeholder.svg?height=400&width=600&text=Creative+Portfolio",
    technologies: ["Next.js", "Framer Motion", "Tailwind", "TypeScript"],
    github: "#",
    live: "#",
    category: "Frontend",
    status: "Completed",
  },
  {
    id: 4,
    title: "Crypto Dashboard",
    description:
      "Real-time cryptocurrency tracking dashboard with advanced charts, portfolio management, and market analysis tools.",
    image: "/placeholder.svg?height=400&width=600&text=Crypto+Dashboard",
    technologies: ["Vue.js", "D3.js", "WebSocket", "Chart.js", "Firebase"],
    github: "#",
    live: "#",
    category: "Data Viz",
    status: "Completed",
  },
  {
    id: 5,
    title: "Social Media App",
    description:
      "A modern social media platform with real-time messaging, content sharing, and advanced user engagement features.",
    image: "/placeholder.svg?height=400&width=600&text=Social+Media+App",
    technologies: ["React Native", "Firebase", "Redux", "Expo", "Node.js"],
    github: "#",
    live: "#",
    category: "Mobile",
    status: "Completed",
  },
  {
    id: 6,
    title: "Learning Management System",
    description:
      "Comprehensive LMS with course creation, progress tracking, interactive quizzes, and student-teacher collaboration tools.",
    image: "/placeholder.svg?height=400&width=600&text=Learning+Management",
    technologies: ["React", "Django", "PostgreSQL", "Redis", "AWS"],
    github: "#",
    live: "#",
    category: "Full Stack",
    status: "Completed",
  },
]

export function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))]
  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((p) => p.category === selectedCategory)

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length)
  }

  const currentProject = filteredProjects[currentIndex]

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-8 shadow-2xl"
          >
            <Briefcase className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gradient"
          >
            Featured Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8"
          >
            A showcase of my recent work and creative solutions
          </motion.p>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setSelectedCategory(category)
                  setCurrentIndex(0)
                }}
                className={`glass border-white/20 transition-all duration-300 ${
                  selectedCategory === category
                    ? "btn-gradient text-white border-0"
                    : "hover:bg-white/10 dark:hover:bg-black/10 bg-transparent"
                }`}
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </motion.div>

        {/* Main Project Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="relative max-w-6xl mx-auto mb-16"
        >
          <div className="glass rounded-3xl p-6 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedCategory}-${currentIndex}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="border-0 bg-transparent overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Project Image */}
                    <div className="relative group">
                      <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden">
                        <Image
                          src={currentProject.image || "/placeholder.svg"}
                          alt={currentProject.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Status Badge */}
                        <div className="absolute top-4 left-4">
                          <Badge
                            variant="secondary"
                            className={`glass border-0 ${
                              currentProject.status === "Completed"
                                ? "bg-green-500/20 text-green-300"
                                : "bg-yellow-500/20 text-yellow-300"
                            }`}
                          >
                            {currentProject.status}
                          </Badge>
                        </div>

                        {/* Category Badge */}
                        <div className="absolute top-4 right-4">
                          <Badge variant="secondary" className="glass bg-purple-500/20 text-purple-300 border-0">
                            {currentProject.category}
                          </Badge>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="flex space-x-3">
                            <Button size="sm" className="bg-white/20 backdrop-blur-sm border-white/30">
                              <Play className="w-4 h-4 mr-2" />
                              Preview
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <CardContent className="p-0 flex flex-col justify-center">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-3xl font-bold mb-4 text-gradient">{currentProject.title}</h3>
                          <p className="text-muted-foreground text-lg leading-relaxed">{currentProject.description}</p>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {currentProject.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="outline"
                                className="glass border-white/20 bg-white/5 hover:bg-white/10 transition-colors"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-4 pt-4">
                          <Button className="flex-1 btn-gradient hover-glow border-0 shadow-lg">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Button>
                          <Button
                            variant="outline"
                            className="flex-1 glass border-white/20 hover:bg-white/10 bg-transparent"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            View Code
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevProject}
                className="glass rounded-full w-12 h-12 hover:bg-white/20 transition-all duration-300"
                disabled={filteredProjects.length <= 1}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              {/* Project Indicators */}
              <div className="flex space-x-2">
                {filteredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg scale-125"
                        : "bg-white/40 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={nextProject}
                className="glass rounded-full w-12 h-12 hover:bg-white/20 transition-all duration-300"
                disabled={filteredProjects.length <= 1}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-gradient">All Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => setCurrentIndex(index)}
              >
                <Card className="glass border-0 shadow-xl hover-glow transition-all duration-300 overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge variant="secondary" className="glass bg-white/20 text-white border-0 mb-2">
                        {project.category}
                      </Badge>
                      <h4 className="text-white font-bold text-lg">{project.title}</h4>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs glass border-white/20">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs glass border-white/20">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1 glass border-white/20 bg-transparent">
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </Button>
                      <Button size="sm" className="flex-1 btn-gradient">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="glass rounded-2xl p-12 max-w-2xl mx-auto shadow-2xl">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Interested in Working Together?</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always excited to take on new challenges and create amazing digital experiences. Let's discuss your
              next project!
            </p>
            <Button className="btn-gradient hover-glow border-0 shadow-lg">Get In Touch</Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
