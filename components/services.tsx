import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Smartphone, Database, Zap, Shield, Headphones } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and best practices.",
      features: ["Responsive Design", "SEO Optimization", "Performance Tuning"],
      
    },
    {
      icon: Code,
      title: "Web Application Development",
      description: "Full-stack web applications with advanced functionality and user management.",
      features: ["User Authentication", "Real-time Features", "API Integration"],
      
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps for iOS and Android platforms.",
      features: ["React Native", "Flutter", "Native iOS/Android"],
      
    },
        
   
    {
      icon: Headphones,
      title: "Consultation",
      description: "Technical consultation and architecture planning for your projects.",
      features: ["Architecture Review", "Technology Selection", "Project Planning"],
      
    },
  ]

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">
            Professional <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web development services to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-heading">{service.title}</CardTitle>
                <p className="text-muted-foreground">{service.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-border">
                  <div className="text-2xl font-bold text-primary mb-4">{service.price}</div>
                  <Button className="w-full">
                   
                      <a href="#contact">
                        
                        Get Started
                      </a>
                    </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-primary/5 to-accent/5">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold font-heading mb-4">Need a Custom Solution?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Every project is unique. Let's discuss your specific requirements and create a tailored solution that
                perfectly fits your needs and budget.
              </p>
              <Button size="lg">Schedule a Free Consultation</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
