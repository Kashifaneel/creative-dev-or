import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Code2,
  Database,
  Server,
  Globe,
  Palette,
  Cpu,
  FileCode,
  Layers,
  GitBranch,
  Cloud,
  Shield,
  Zap,
} from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Palette className="h-8 w-8" />,
      skills: [
        { name: "React/Next.js", icon: <Code2 className="h-5 w-5" /> },
        { name: "TypeScript", icon: <FileCode className="h-5 w-5" /> },
        { name: "Tailwind CSS", icon: <Palette className="h-5 w-5" /> },
        { name: "Vue.js", icon: <Layers className="h-5 w-5" /> },
        { name: "HTML/CSS", icon: <Globe className="h-5 w-5" /> },
      ],
    },
    {
      title: "Backend Development",
      icon: <Server className="h-8 w-8" />,
      skills: [
        { name: "Node.js", icon: <Server className="h-5 w-5" /> },
        { name: "Python", icon: <Code2 className="h-5 w-5" /> },
        { name: "PHP Laravel", icon: <Shield className="h-5 w-5" /> },
        { name: "Express.js", icon: <Zap className="h-5 w-5" /> },
        { name: "REST APIs", icon: <GitBranch className="h-5 w-5" /> },
        { name: "GraphQL", icon: <Layers className="h-5 w-5" /> },
      ],
    },
    {
      title: "Database & Tools",
      icon: <Database className="h-8 w-8" />,
      skills: [
        { name: "PostgreSQL", icon: <Database className="h-5 w-5" /> },
        { name: "MySQL", icon: <Database className="h-5 w-5" /> },
        { name: "MongoDB", icon: <Cpu className="h-5 w-5" /> },
        { name: "Redis", icon: <Zap className="h-5 w-5" /> },
        { name: "Docker", icon: <Cloud className="h-5 w-5" /> },
        { name: "AWS/Vercel", icon: <Cloud className="h-5 w-5" /> },
      ],
    },
  ]

  const technologies = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.jpg" },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.png",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proficient in modern web technologies across the full development stack
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4 text-primary">{category.icon}</div>
                <CardTitle className="font-heading">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="text-primary">{skill.icon}</div>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold font-heading mb-8">Technologies I Work With</h3>
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-6 items-center justify-items-center">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-muted/50 transition-all duration-300 hover:scale-110"
              >
                <img
                  src={tech.icon || "/placeholder.svg"}
                  alt={tech.name}
                  className="h-12 w-12 object-contain group-hover:scale-110 transition-transform duration-300"
                />
                <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
