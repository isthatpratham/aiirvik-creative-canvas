import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Video, Palette, Code, Shirt, ArrowRight, Check } from "lucide-react"
import { Link } from "react-router-dom"

const services = [
  {
    icon: Video,
    title: "Video Editing",
    description: "Professional video editing and motion graphics to bring your stories to life",
    features: [
      "Professional video editing",
      "Motion graphics and animations",
      "Color correction and grading",
      "Audio synchronization",
      "Social media optimization",
      "YouTube content creation"
    ],
    tools: ["Adobe Premiere Pro", "After Effects", "Audition"],
    provider: "Pratham Debnath",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Creative visual designs that communicate your message effectively",
    features: [
      "Custom illustrations",
      "Digital artwork",
      "Print design materials",
      "Social media graphics",
      "Marketing collaterals",
      "Vector artwork"
    ],
    tools: ["Photoshop", "Illustrator", "Clip Studio Paint"],
    provider: "Prashanjeet Dutta",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Full-stack web applications and responsive websites built with modern technologies",
    features: [
      "Responsive web design",
      "Frontend development",
      "Backend development",
      "Database integration",
      "API development",
      "Security implementation"
    ],
    tools: ["React", "Node.js", "TypeScript", "MongoDB"],
    provider: "Pratham Debnath",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Shirt,
    title: "T-shirt Design",
    description: "Custom apparel and merchandise designs that make a statement",
    features: [
      "Custom t-shirt designs",
      "Merchandise collections",
      "Print-ready artwork",
      "Brand merchandise",
      "Event apparel",
      "Fashion illustrations"
    ],
    tools: ["Illustrator", "Photoshop", "Procreate"],
    provider: "Prashanjeet Dutta",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: Palette,
    title: "Logo Design",
    description: "Distinctive brand identities and logos that represent your vision",
    features: [
      "Logo design and branding",
      "Brand identity packages",
      "Business card design",
      "Letterhead design",
      "Brand guidelines",
      "Multiple format delivery"
    ],
    tools: ["Illustrator", "Photoshop", "Adobe Fresco"],
    provider: "Prashanjeet Dutta",
    color: "from-pink-500 to-pink-600"
  }
]

export default function Services() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/20 via-background to-neon-purple/20" />
        
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="font-heading font-bold text-4xl md:text-6xl">
              Our <span className="bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text text-transparent">Services</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive creative and technical solutions to bring your vision to life. 
              From concept to completion, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full group hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
                  <CardHeader className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <CardTitle className="text-2xl font-heading">{service.title}</CardTitle>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Features */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tools */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm">Tools & Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.tools.map((tool) => (
                          <Badge key={tool} variant="outline" className="text-xs">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-card">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Our Process</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A streamlined approach to ensure your project is delivered on time and exceeds expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "We understand your vision, requirements, and goals" },
              { step: "02", title: "Planning", desc: "Detailed project planning and timeline establishment" },
              { step: "03", title: "Creation", desc: "Bringing your project to life with expertise and creativity" },
              { step: "04", title: "Delivery", desc: "Final review, revisions, and project delivery" }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {process.step}
                </div>
                <h3 className="font-heading font-semibold text-xl">{process.title}</h3>
                <p className="text-muted-foreground text-sm">{process.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/10 via-neon-purple/10 to-sunset-orange/10" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl">
              Ready to Start Your Project?
            </h2>
            <p className="text-muted-foreground text-lg">
              Let's discuss your requirements and create something amazing together. 
              Get in touch to receive a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-electric-blue to-neon-purple hover:opacity-90 transition-all duration-300 text-white font-semibold px-8 py-6 rounded-full"
              >
                <Link to="/contact">
                  Book a Service
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-6 rounded-full"
              >
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}