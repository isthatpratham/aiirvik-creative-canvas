import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Heart, Target, Users } from "lucide-react"
import prathamProfile from "@/assets/pratham-profile.jpg"
import prashanjeetProfile from "@/assets/prashanjeet-profile.jpg"

export default function About() {
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
              About <span className="bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text text-transparent">AiirVik</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're a creative-tech duo passionate about transforming ideas into digital masterpieces. 
              From concept to completion, we bring together technical expertise and artistic vision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Philosophy */}
      <section className="py-24 bg-card">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="font-heading font-bold text-3xl md:text-4xl">Our Mission</h2>
                <p className="text-muted-foreground text-lg">
                  To bridge the gap between technology and creativity, delivering exceptional digital experiences 
                  that not only meet but exceed our clients' expectations. We believe in the power of collaboration 
                  and innovation to solve complex problems and create beautiful solutions.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-heading font-semibold text-2xl">Our Philosophy</h3>
                <p className="text-muted-foreground">
                  "From Code to Canvas" represents our holistic approach to digital creation. We don't just build websites 
                  or create designs in isolation – we craft comprehensive digital experiences that tell stories, 
                  solve problems, and inspire action.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: Target, title: "Vision-Driven", desc: "Every project starts with understanding your vision" },
                { icon: Users, title: "Collaborative", desc: "We work closely with our clients throughout the process" },
                { icon: Award, title: "Quality-Focused", desc: "Excellence is not an option, it's our standard" },
                { icon: Heart, title: "Passionate", desc: "We love what we do and it shows in our work" }
              ].map((item, index) => (
                <Card key={item.title} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="w-12 h-12 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-heading font-semibold">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Journey - Timeline */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Our Journey</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Two creative minds coming together to form a powerhouse of innovation and design.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Pratham's Timeline */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="text-center">
                <h3 className="font-heading font-bold text-2xl text-primary mb-2">Pratham Debnath</h3>
                <p className="text-muted-foreground">The Technical Visionary</p>
              </div>

              <div className="space-y-6">
                {[
                  { year: "May 2022", title: "Started Freelance Journey", desc: "Began video editing freelance work" },
                  { year: "August 2022", title: "Started BCA Journey", desc: "Enrolled in BCA program at DHSK College" },
                  { year: "June 2025", title: "Graduated BCA", desc: "Successfully completed Bachelor of Computer Applications" },
                  { year: "July 2025", title: "Started MCA", desc: "Pursuing MCA at SRM University, specializing in cybersecurity" },
                  { year: "July 2025", title: "Co-founded AiirVik", desc: "Partnered with Prashanjeet to create comprehensive digital solutions" }
                ].map((milestone, index, arr) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 bg-primary rounded-full" />
                      {/* Use bg-border for all connecting lines for consistency */}
                      {index < arr.length - 1 && (
                        <div className="w-0.5 h-16 bg-border mt-2" />
                      )}
                    </div>
                    <div className="space-y-2 pb-8">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-primary">{milestone.year}</span>
                      </div>
                      <h4 className="font-heading font-semibold">{milestone.title}</h4>
                      <p className="text-muted-foreground text-sm">{milestone.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Prashanjeet's Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="text-center">
                <h3 className="font-heading font-bold text-2xl text-accent mb-2">Prashanjeet Dutta</h3>
                <p className="text-muted-foreground">The Creative Mastermind</p>
              </div>

              <div className="space-y-6">
                {[
                  { year: "August 2022", title: "Started BCA Journey", desc: "Enrolled in BCA program at DHSK College" },
                  { year: "September 2022", title: "Started Freelance Journey", desc: "Began freelance graphic design work" },
                  { year: "June 2025", title: "Graduated BCA", desc: "Successfully completed Bachelor of Computer Applications" },
                  { year: "July 2025", title: "Co-founded AiirVik", desc: "Joined forces with Pratham to offer comprehensive creative solutions" }
                ].map((milestone, index, arr) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 bg-accent rounded-full" />
                      {index < arr.length - 1 && <div className="w-0.5 h-16 bg-border mt-2" />}
                    </div>
                    <div className="space-y-2 pb-8">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-accent">{milestone.year}</span>
                      </div>
                      <h4 className="font-heading font-semibold">{milestone.title}</h4>
                      <p className="text-muted-foreground text-sm">{milestone.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Personal Messages */}
      <section className="py-24 bg-card">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full">
                <CardContent className="p-8 space-y-6">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-electric-blue to-primary rounded-full flex items-center justify-center mb-4">
                      <img
                        src={prathamProfile}
                        alt="Pratham Debnath"
                        className="w-20 h-20 rounded-full object-cover border-4 border-white/20"
                        onContextMenu={e => e.preventDefault()}
                        draggable={false}
                      />
                    </div>
                    <h3 className="font-heading font-bold text-xl">Pratham Debnath</h3>
                  </div>
                  <blockquote className="text-muted-foreground italic text-center">
                    "Technology is powerful when it serves creativity. My goal is to build robust, 
                    secure, and beautiful digital experiences that make a real difference in people's lives. 
                    Every line of code is written with purpose and passion."
                  </blockquote>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="p-8 space-y-6">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-neon-purple to-accent rounded-full flex items-center justify-center mb-4">
                      <img
                        src={prashanjeetProfile}
                        alt="Prashanjeet Dutta"
                        className="w-20 h-20 rounded-full object-cover border-4 border-white/20"
                        onContextMenu={e => e.preventDefault()}
                        draggable={false}
                      />
                    </div>
                    <h3 className="font-heading font-bold text-xl">Prashanjeet Dutta</h3>
                  </div>
                  <blockquote className="text-muted-foreground italic text-center">
                    "Art is not what you see, but what you make others see. I believe in creating designs 
                    that don't just look beautiful, but tell stories and evoke emotions. Every project is 
                    an opportunity to create something truly unique."
                  </blockquote>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}