import { motion } from "framer-motion"
import { ArrowRight, Code, Palette, Video, Shirt } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Link } from "react-router-dom"
import heroBackground from "@/assets/hero-background.jpg"
import prathamProfile from "@/assets/pratham-profile.jpg"
import prashanjeetProfile from "@/assets/prashanjeet-profile.jpg"
import { projects as portfolioProjects } from "./Portfolio"
import video1 from "@/assets/1.mp4"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useState } from "react"

const services = [
  { icon: Video, title: "Video Editing", description: "Professional video editing and motion graphics" },
  { icon: Palette, title: "Graphic Design", description: "Creative designs that tell your story" },
  { icon: Code, title: "Web Development", description: "Full-stack web applications and websites" },
  { icon: Shirt, title: "T-shirt Design", description: "Custom apparel and merchandise design" },
]

export default function Home() {
  // Select Chess Game with AI, Graphic Design Portfolio 1, and Video Project 1 for featured works
  const featuredWorks = [
    portfolioProjects.find(p => p.title === "Chess Game with AI"),
    portfolioProjects.find(p => p.title === "Graphic Design Portfolio 1"),
    portfolioProjects.find(p => p.title === "Video Project 1"),
  ].filter(Boolean);

  const [fullscreenVideoOpen, setFullscreenVideoOpen] = useState(false);
  const [fullscreenImageOpen, setFullscreenImageOpen] = useState(false);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-electric-blue via-neon-purple to-sunset-orange bg-clip-text text-transparent">
                AiirVik
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-light"
            >
              From Code to Canvas – Design It. Edit It. Code It. Wear It.
              <br />
              <span className="text-primary font-medium">Your Creative Powerhouse.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-electric-blue to-neon-purple hover:opacity-90 transition-all duration-300 text-white font-semibold px-8 py-6 rounded-full"
              >
                <Link to="/contact">
                  Let's Create Together
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
            </motion.div>
          </motion.div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </section>

      {/* Co-founders Introduction */}
      <section className="py-24 bg-card">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Meet the Creative Minds</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Two passionate creators bringing together technology and artistry to deliver exceptional digital experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="relative">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-electric-blue to-neon-purple rounded-full flex items-center justify-center">
                  <img
                    src={prathamProfile}
                    alt="Pratham Debnath"
                    className="w-28 h-28 rounded-full object-cover bg-background border-4 border-white/20"
                    onContextMenu={e => e.preventDefault()}
                    draggable={false}
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-heading font-semibold text-2xl">Pratham Debnath</h3>
                <p className="text-primary font-medium">MCA Student & Full-Stack Developer</p>
                <p className="text-muted-foreground mt-4">
                  Cybersecurity enthusiast and web developer with expertise in video editing. 
                  Passionate about creating seamless digital experiences from frontend to backend.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="relative">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-neon-purple to-sunset-orange rounded-full flex items-center justify-center">
                  <img
                    src={prashanjeetProfile}
                    alt="Prashanjeet Dutta"
                    className="w-28 h-28 rounded-full object-cover bg-background border-4 border-white/20"
                    onContextMenu={e => e.preventDefault()}
                    draggable={false}
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-heading font-semibold text-2xl">Prashanjeet Dutta</h3>
                <p className="text-accent font-medium">Creative Professional & Digital Artist</p>
                <p className="text-muted-foreground mt-4">
                  Digital artist with 3+ years of experience in illustration, branding, and custom design. 
                  Transforming ideas into visual masterpieces.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Our Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive creative and technical solutions to bring your vision to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 border-border hover:border-primary/50">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Works Section */}
      <section className="py-24 bg-card">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Featured Works</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A showcase of our best projects across different creative disciplines.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredWorks.map((work, index) => {
              const isWebDevWithGithub = work.category === "Web Development" && work.links?.github;
              const isGraphicDesign1 = work.title === "Graphic Design Portfolio 1";
              const isVideoProject1 = work.title === "Video Project 1";
              const cardProps = isWebDevWithGithub
                ? {
                    onClick: () => window.open(work.links.github, "_blank"),
                    style: { cursor: "pointer" },
                    className: "overflow-hidden group hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 border-border hover:border-primary/50 ring-2 ring-transparent hover:ring-primary/40"
                  }
                : isGraphicDesign1
                ? {
                    onClick: () => setFullscreenImageOpen(true),
                    style: { cursor: "pointer" },
                    className: "overflow-hidden group hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 border-border hover:border-primary/50 ring-2 ring-transparent hover:ring-primary/40"
                  }
                : isVideoProject1
                ? {
                    onClick: () => setFullscreenVideoOpen(true),
                    style: { cursor: "pointer" },
                    className: "overflow-hidden group hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 border-border hover:border-primary/50 ring-2 ring-transparent hover:ring-primary/40"
                  }
                : { className: "overflow-hidden" };
              return (
                <motion.div
                  key={work.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Card {...cardProps}>
                    <div className="aspect-video bg-gradient-to-br from-electric-blue/20 to-neon-purple/20 relative overflow-hidden">
                      {isVideoProject1 ? (
                        <video
                          src={video1}
                          className="w-full h-full object-cover"
                          controls={false}
                          preload="metadata"
                          muted
                          playsInline
                          onContextMenu={e => e.preventDefault()}
                          controlsList="nodownload"
                          draggable={false}
                        />
                      ) : work.image ? (
                        <img
                          src={work.image}
                          alt={work.title}
                          className={`w-full h-full object-cover transition-transform duration-300 ${isGraphicDesign1 ? 'hover:scale-110' : 'group-hover:scale-105'}`}
                          onContextMenu={e => e.preventDefault()}
                          draggable={false}
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center space-y-2">
                            <div className="w-12 h-12 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                              <work.icon className="h-6 w-6 text-primary" />
                            </div>
                            <p className="text-sm text-muted-foreground">Preview</p>
                          </div>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-6 space-y-3">
                      <div className="flex justify-between items-start">
                        <h3 className="font-heading font-semibold text-lg">{work.title}</h3>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {work.category}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm">{work.description}</p>
                      <p className="text-xs text-accent">by {work.author}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
          {/* Fullscreen Video Dialog for Video Project 1 */}
          <Dialog open={fullscreenVideoOpen} onOpenChange={setFullscreenVideoOpen}>
            <DialogContent className="max-w-5xl w-full h-[90vh] p-0 flex flex-col">
              <DialogHeader className="p-4 flex flex-row items-center justify-between border-b shrink-0">
                <DialogTitle>Video Project 1</DialogTitle>
              </DialogHeader>
              <div className="flex-grow flex items-center justify-center bg-black">
                <video
                  src={video1}
                  className="w-full h-full max-h-[70vh] object-contain bg-black"
                  controls
                  autoPlay
                  muted={false}
                  onContextMenu={e => e.preventDefault()}
                  controlsList="nodownload"
                  draggable={false}
                />
              </div>
            </DialogContent>
          </Dialog>
          {/* Fullscreen Image Dialog for Graphic Design Portfolio 1 */}
          <Dialog open={fullscreenImageOpen} onOpenChange={setFullscreenImageOpen}>
            <DialogContent className="max-w-3xl w-full h-[90vh] p-0 flex flex-col">
              <DialogHeader className="p-4 flex flex-row items-center justify-between border-b shrink-0">
                <DialogTitle>Graphic Design Portfolio 1</DialogTitle>
              </DialogHeader>
              <div className="flex-grow flex items-center justify-center bg-black">
                <img
                  src={featuredWorks.find(w => w.title === "Graphic Design Portfolio 1").image}
                  alt="Graphic Design Portfolio 1"
                  className="max-h-[75vh] w-auto object-contain bg-black mx-auto"
                  onContextMenu={e => e.preventDefault()}
                  draggable={false}
                />
              </div>
            </DialogContent>
          </Dialog>
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
              Ready to Transform Your Ideas?
            </h2>
            <p className="text-muted-foreground text-lg">
              Let's collaborate and create something extraordinary together. 
              From concept to completion, we're here to bring your vision to life.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-electric-blue to-neon-purple hover:opacity-90 transition-all duration-300 text-white font-semibold px-12 py-6 rounded-full"
            >
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}