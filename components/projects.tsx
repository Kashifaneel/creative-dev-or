"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"

export function Projects() {
  const [currentProject, setCurrentProject] = useState(0)

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "https://images.pexels.com/photos/318236/pexels-photo-318236.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind"],
      liveUrl: "#contact",
      githubUrl: "#contact",
      featured: true,
      gradient: "from-orange-600 to-orange-500",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates, team collaboration, and progress tracking.",
      image: "https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
      liveUrl: "#contact",
      githubUrl: "#contact",
      featured: true,
      gradient: "from-orange-500 to-orange-400",
    },
    {
      title: "Real Estate Platform",
      description: "Property listing platform with advanced search, virtual tours, and agent management system.",
      image: "https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_1280.jpg",
      technologies: ["Vue.js", "Express.js", "MySQL", "AWS S3", "Bootstrap"],
      liveUrl: "#contact",
      githubUrl: "#contact",
      featured: false,
      gradient: "from-orange-400 to-orange-300",
    },
    {
      title: "Restaurant Booking System",
      description:
        "Complete restaurant management system with online reservations, menu management, and POS integration.",
      image: "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "PHP Laravel", "MySQL", "Stripe", "Tailwind"],
      liveUrl: "#contact",
      githubUrl: "#contact",
      featured: false,
      gradient: "from-orange-600 to-orange-400",
    },
    {
      title: "Cricket Live Score App",
      description:
        "Mobile application for real-time cricket scores, player statistics, match schedules, and live commentary.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io", "Firebase"],
      liveUrl: "#contact",
      githubUrl: "#contact",
      featured: false,
      gradient: "from-orange-500 to-orange-300",
    },
  ]

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4 text-white">
            Featured{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work and technical capabilities
          </p>
        </div>

        {/* Featured Project Carousel */}
        <div className="relative mb-16">
          <Card
            className={`overflow-hidden border-4 border-transparent bg-gradient-to-r ${projects[currentProject].gradient} p-1`}
          >
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="relative">
                  <img
                    src={projects[currentProject].image || "/placeholder.svg"}
                    alt={projects[currentProject].title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:hidden"></div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl font-heading mb-2 text-white">
                      {projects[currentProject].title}
                    </CardTitle>
                    <p className="text-gray-300 leading-relaxed">{projects[currentProject].description}</p>
                  </CardHeader>
                  <CardContent className="p-0 space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {projects[currentProject].technologies.map((tech, index) => (
                        <Badge
                          key={index}
                          className={`bg-gradient-to-r ${projects[currentProject].gradient} text-white border-0`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button
                        className={`bg-gradient-to-r ${projects[currentProject].gradient} hover:opacity-90 border-0 shadow-lg hover:shadow-xl transition-all duration-300`}
                        asChild
                      >
                        <a href="#contact">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Get Quote
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        className={`border-2 bg-gradient-to-r ${projects[currentProject].gradient} bg-clip-text text-transparent border-current hover:bg-gradient-to-r hover:${projects[currentProject].gradient} hover:text-white transition-all duration-300`}
                        asChild
                      >
                        <a href="#contact">
                          <Github className="mr-2 h-4 w-4" />
                          Contact Me
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </div>
          </Card>

          {/* Carousel Controls */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/90 backdrop-blur-sm border-2 border-orange-500/50 hover:bg-orange-500/20 text-orange-400 hover:text-orange-300"
            onClick={prevProject}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/90 backdrop-blur-sm border-2 border-orange-500/50 hover:bg-orange-500/20 text-orange-400 hover:text-orange-300"
            onClick={nextProject}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((project, index) => (
              <button
                key={index}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentProject
                    ? `bg-gradient-to-r ${project.gradient} shadow-lg`
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
                onClick={() => setCurrentProject(index)}
              />
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 hover:scale-105 border-2 border-gray-700 hover:border-orange-500 bg-gray-900/80 hover:bg-gradient-to-r hover:${project.gradient} hover:p-1`}
            >
              <div className="group-hover:bg-gray-900 group-hover:rounded-lg overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center space-x-4`}
                  >
                    <Button
                      size="sm"
                      className="bg-black text-orange-400 hover:bg-gray-800 border border-orange-500"
                      asChild
                    >
                      <a href="#contact">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-black bg-transparent"
                      asChild
                    >
                      <a href="#contact">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-heading text-white">{project.title}</CardTitle>
                  <p className="text-sm text-gray-300 line-clamp-2">{project.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs border-orange-500/50 text-orange-300 hover:bg-orange-500/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge
                        variant="outline"
                        className="text-xs border-orange-500/50 text-orange-300 hover:bg-orange-500/20 transition-colors"
                      >
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
