import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export function About() {
  const highlights = [
    "Full-stack development expertise",
    "Modern framework proficiency",
    "Database design & optimization",
    "Responsive & accessible design",
    "Performance optimization",
    "Clean, maintainable code",
  ]

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold font-heading">
                About <span className="text-primary">Creative Dev</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate web developer with over 3 years of experience creating digital solutions that make a
                difference. My journey in web development started with curiosity and has evolved into a deep expertise
                across the full technology stack.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in building scalable web applications using modern technologies like React, Next.js,
                Node.js, and various databases. My approach combines technical excellence with creative problem-solving
                to deliver exceptional user experiences.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <Card className="p-6">
            <CardContent className="space-y-6 p-0">
              <div className="text-center">
                <img
                  src="	https://images.pexels.com/photos/441963/pexels-photo-441963.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Creative Dev profile"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold font-heading">Creative Dev</h3>
                <p className="text-muted-foreground">Full-Stack Web Developer</p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Location</span>
                  <span>Pakistan</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Experience</span>
                  <span>3+ Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Availability</span>
                  <span className="text-primary">Available</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Email</span>
                  <span>kashifaneel@gmail.com</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
