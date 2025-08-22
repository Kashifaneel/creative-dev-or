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
      icon: <Palette className="h-10 w-10" />,
      skills: [
        { name: "React/Next.js", icon: <Code2 className="h-6 w-6" /> },
        { name: "TypeScript", icon: <FileCode className="h-6 w-6" /> },
        { name: "Tailwind CSS", icon: <Palette className="h-6 w-6" /> },
        { name: "Vue.js", icon: <Layers className="h-6 w-6" /> },
        { name: "HTML/CSS", icon: <Globe className="h-6 w-6" /> },
      ],
      color: "from-orange-500 to-orange-400",
      bgColor: "bg-gradient-to-br from-gray-900 to-black",
      borderColor: "border-orange-500/30",
      hoverBorder: "hover:border-orange-500",
    },
    {
      title: "Backend Development",
      icon: <Server className="h-10 w-10" />,
      skills: [
        { name: "Node.js", icon: <Server className="h-6 w-6" /> },
        { name: "Python", icon: <Code2 className="h-6 w-6" /> },
        { name: "PHP Laravel", icon: <Shield className="h-6 w-6" /> },
        { name: "Express.js", icon: <Zap className="h-6 w-6" /> },
        { name: "REST APIs", icon: <GitBranch className="h-6 w-6" /> },
        { name: "GraphQL", icon: <Layers className="h-6 w-6" /> },
      ],
      color: "from-orange-600 to-orange-500",
      bgColor: "bg-gradient-to-br from-black to-gray-900",
      borderColor: "border-orange-600/30",
      hoverBorder: "hover:border-orange-600",
    },
    {
      title: "Database & Tools",
      icon: <Database className="h-10 w-10" />,
      skills: [
        { name: "PostgreSQL", icon: <Database className="h-6 w-6" /> },
        { name: "MySQL", icon: <Database className="h-6 w-6" /> },
        { name: "MongoDB", icon: <Cpu className="h-6 w-6" /> },
        { name: "Redis", icon: <Zap className="h-6 w-6" /> },
        { name: "Docker", icon: <Cloud className="h-6 w-6" /> },
        { name: "AWS/Vercel", icon: <Cloud className="h-6 w-6" /> },
      ],
      color: "from-orange-400 to-orange-300",
      bgColor: "bg-gradient-to-br from-gray-800 to-black",
      borderColor: "border-orange-400/30",
      hoverBorder: "hover:border-orange-400",
    },
  ]

  const technologies = [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "hover:bg-blue-100 dark:hover:bg-blue-900/20",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      color: "hover:bg-gray-100 dark:hover:bg-gray-800/20",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      color: "hover:bg-blue-100 dark:hover:bg-blue-900/20",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "hover:bg-green-100 dark:hover:bg-green-900/20",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      color: "hover:bg-yellow-100 dark:hover:bg-yellow-900/20",
    },
    {
      name: "PHP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      color: "hover:bg-purple-100 dark:hover:bg-purple-900/20",
    },
    {
      name: "Laravel",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.jpg",
      color: "hover:bg-red-100 dark:hover:bg-red-900/20",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      color: "hover:bg-blue-100 dark:hover:bg-blue-900/20",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      color: "hover:bg-orange-100 dark:hover:bg-orange-900/20",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      color: "hover:bg-green-100 dark:hover:bg-green-900/20",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      color: "hover:bg-blue-100 dark:hover:bg-blue-900/20",
    },
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.png",
      color: "hover:bg-orange-100 dark:hover:bg-orange-900/20",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4 text-white">
            Technical{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Proficient in modern web technologies across the full development stack
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl ${category.bgColor} ${category.borderColor} border-2 ${category.hoverBorder} transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20`}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-orange-500 to-transparent rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-orange-400 to-transparent rounded-full blur-lg animate-pulse delay-1000"></div>
              </div>

              <div className="relative z-10 p-8">
                <div className="text-center mb-6">
                  <div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${category.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="text-black">{category.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105 border border-white/10 hover:border-orange-500/50 group/skill"
                    >
                      <div
                        className={`text-transparent bg-gradient-to-r ${category.color} bg-clip-text group-hover/skill:scale-110 transition-transform duration-300`}
                      >
                        {skill.icon}
                      </div>
                      <span className="font-medium text-gray-200 group-hover/skill:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                      <div className="ml-auto w-2 h-2 rounded-full bg-orange-500 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold font-heading mb-8 text-white">Technologies I Work With</h3>
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-6 items-center justify-items-center">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-300 hover:scale-110 border-2 border-gray-700 hover:border-orange-500 bg-gray-900/50 hover:bg-gradient-to-br hover:from-orange-500/10 hover:to-orange-600/10"
              >
                <img
                  src={tech.icon || "/placeholder.svg"}
                  alt={tech.name}
                  className="h-12 w-12 object-contain group-hover:scale-110 transition-transform duration-300 filter group-hover:drop-shadow-lg group-hover:drop-shadow-orange-500/50"
                />
                <span className="text-xs font-medium text-gray-400 group-hover:text-orange-300 transition-colors">
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
