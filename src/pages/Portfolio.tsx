import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Instagram, Play, Code, Palette, Video, Shirt, Award, Heart, Clock, Pause, VolumeX, Volume2, X } from "lucide-react"
import { useState } from "react"
import { useRef } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"

// Import assets
import gd1 from "@/assets/gd1.jpg"
import gd2 from "@/assets/gd2.jpg"
import gd3 from "@/assets/gd3.jpg"
import gd4 from "@/assets/gd4.jpg"
import gd5 from "@/assets/gd5.jpg"
import tshirtDesign from "@/assets/tshirtwatermarked1.jpg"
import video1 from "@/assets/1.mp4"
import video2 from "@/assets/2.mp4"
import video3 from "@/assets/3.mp4"
import video4 from "@/assets/4.mp4"
import video5 from "@/assets/5.mp4"
import video6 from "@/assets/6.mp4"
import imgchess from "@/assets/imgchess.png"
import imgevent from "@/assets/imgevent.png"

const categories = ["All", "Web Development", "Graphic Design", "Video Editing", "T-shirt Design"]

export const projects = [
  {
    id: 1,
    title: "Chess Game with AI",
    description: "Interactive chess game with intelligent AI opponent featuring modern UI and smooth gameplay mechanics.",
    category: "Web Development",
    author: "Pratham Debnath",
    image: imgchess, // updated
    technologies: ["React", "JavaScript", "CSS3", "AI Algorithm"],
    links: {
      github: "https://github.com/isthatpratham/chess_game_ai",
      live: "#"
    },
    icon: Code
  },
  {
    id: 2,
    title: "Event Management System",
    description: "Comprehensive college event management system with user authentication, admin panel, and real-time updates.",
    category: "Web Development",
    author: "Pratham Debnath & Prashanjeet Dutta",
    image: imgevent, // updated
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    links: {
      github: "https://github.com/isthatpratham/event_ms",
      live: "#"
    },
    icon: Code
  },
  {
    id: 3,
    title: "Graphic Design Portfolio 1",
    description: "Creative graphic design showcasing modern visual aesthetics and professional design principles.",
    category: "Graphic Design",
    author: "Prashanjeet Dutta",
    image: gd1,
    technologies: ["Adobe Illustrator", "Photoshop", "Digital Design"],
    links: {
      instagram: "https://www.instagram.com/artiivik/"
    },
    icon: Palette
  },
  {
    id: 4,
    title: "Graphic Design Portfolio 2",
    description: "Innovative design concepts with attention to detail and contemporary visual elements.",
    category: "Graphic Design",
    author: "Prashanjeet Dutta",
    image: gd2,
    technologies: ["Adobe Illustrator", "Photoshop", "Typography"],
    links: {
      instagram: "https://www.instagram.com/artiivik/"
    },
    icon: Palette
  },
  {
    id: 5,
    title: "Graphic Design Portfolio 3",
    description: "Professional branding and visual identity design with cohesive color schemes.",
    category: "Graphic Design",
    author: "Prashanjeet Dutta",
    image: gd3,
    technologies: ["Adobe Illustrator", "Branding", "Color Theory"],
    links: {
      instagram: "https://www.instagram.com/artiivik/"
    },
    icon: Palette
  },
  {
    id: 6,
    title: "Graphic Design Portfolio 4",
    description: "Creative compositions featuring dynamic layouts and modern design trends.",
    category: "Graphic Design",
    author: "Prashanjeet Dutta",
    image: gd4,
    technologies: ["Adobe Illustrator", "Layout Design", "Visual Arts"],
    links: {
      instagram: "https://www.instagram.com/artiivik/"
    },
    icon: Palette
  },
  {
    id: 7,
    title: "Graphic Design Portfolio 5",
    description: "Artistic designs combining traditional and digital techniques for unique visual impact.",
    category: "Graphic Design",
    author: "Prashanjeet Dutta",
    image: gd5,
    technologies: ["Adobe Illustrator", "Digital Art", "Mixed Media"],
    links: {
      instagram: "https://www.instagram.com/artiivik/"
    },
    icon: Palette
  },
  {
    id: 8,
    title: "Video Project 1",
    description: "Professional video editing with smooth transitions and cinematic effects.",
    category: "Video Editing",
    author: "Pratham Debnath",
    video: video1,
    technologies: ["Premiere Pro", "After Effects", "Color Grading"],
    links: {
      instagram: "https://www.instagram.com/aiir.vis/"
    },
    icon: Video
  },
  {
    id: 9,
    title: "Video Project 2",
    description: "Creative video production with motion graphics and dynamic visual storytelling.",
    category: "Video Editing",
    author: "Pratham Debnath",
    video: video2,
    technologies: ["Premiere Pro", "Motion Graphics", "Sound Design"],
    links: {
      instagram: "https://www.instagram.com/aiir.vis/"
    },
    icon: Video
  },
  {
    id: 10,
    title: "Video Project 3",
    description: "High-quality video editing with professional color correction and effects.",
    category: "Video Editing",
    author: "Pratham Debnath",
    video: video3,
    technologies: ["Premiere Pro", "After Effects", "Visual Effects"],
    links: {
      instagram: "https://www.instagram.com/aiir.vis/"
    },
    icon: Video
  },
  {
    id: 11,
    title: "Video Project 4",
    description: "Creative video composition with seamless editing and modern visual aesthetics.",
    category: "Video Editing",
    author: "Pratham Debnath",
    video: video4,
    technologies: ["Premiere Pro", "Color Grading", "Audio Mixing"],
    links: {
      instagram: "https://www.instagram.com/aiir.vis/"
    },
    icon: Video
  },
  {
    id: 12,
    title: "Video Project 5",
    description: "Professional video production with cinematic quality and smooth workflow.",
    category: "Video Editing",
    author: "Pratham Debnath",
    video: video5,
    technologies: ["Premiere Pro", "After Effects", "Cinematography"],
    links: {
      instagram: "https://www.instagram.com/aiir.vis/"
    },
    icon: Video
  },
  {
    id: 13,
    title: "Video Project 6",
    description: "Advanced video editing featuring complex transitions and visual storytelling.",
    category: "Video Editing",
    author: "Pratham Debnath",
    video: video6,
    technologies: ["Premiere Pro", "Advanced Effects", "Post Production"],
    links: {
      instagram: "https://www.instagram.com/aiir.vis/"
    },
    icon: Video
  },
  {
    id: 14,
    title: "Custom T-shirt Design",
    description: "Unique t-shirt design featuring creative graphics and watermarked branding elements.",
    category: "T-shirt Design",
    author: "Prashanjeet Dutta",
    image: tshirtDesign,
    technologies: ["Illustrator", "Apparel Design", "Print Graphics"],
    links: {
      instagram: "https://www.instagram.com/artiivik/"
    },
    icon: Shirt
  }
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All")
  // State to track play/pause and mute/unmute for each video
  const [videoStates, setVideoStates] = useState(() => {
    // Only for video projects
    const state: Record<number, { playing: boolean; muted: boolean }> = {}
    projects.forEach((project) => {
      if (project.video) {
        state[project.id] = { playing: false, muted: false }
      }
    })
    return state
  })
  // Refs for each video
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({})

  // State for fullscreen modal
  const [fullscreenVideo, setFullscreenVideo] = useState<null | { id: number; src: string; title: string }>(null)
  const fullscreenRef = useRef<HTMLVideoElement | null>(null)

  // Add state for fullscreen image
  const [fullscreenImage, setFullscreenImage] = useState<null | { src: string; title: string }>(null)

  const handlePlayPause = (id: number, isFullscreen = false) => {
    const video = isFullscreen ? fullscreenRef.current : videoRefs.current[id]
    if (video) {
      if (video.paused) {
        video.play()
        setVideoStates((prev) => ({ ...prev, [id]: { ...prev[id], playing: true } }))
      } else {
        video.pause()
        setVideoStates((prev) => ({ ...prev, [id]: { ...prev[id], playing: false } }))
      }
    }
  }

  const handleMuteUnmute = (id: number, isFullscreen = false) => {
    const video = isFullscreen ? fullscreenRef.current : videoRefs.current[id]
    if (video) {
      video.muted = !video.muted
      setVideoStates((prev) => ({ ...prev, [id]: { ...prev[id], muted: video.muted } }))
    }
  }

  // Pause video when closing fullscreen
  const handleCloseFullscreen = () => {
    if (fullscreenRef.current) {
      fullscreenRef.current.pause()
    }
    setFullscreenVideo(null)
  }

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

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
              Our <span className="bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text text-transparent">Portfolio</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our curated collection of projects showcasing creativity, technical expertise, 
              and innovative solutions across different creative disciplines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-card">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`transition-all duration-300 ${
                  activeCategory === category 
                    ? "bg-gradient-to-r from-electric-blue to-neon-purple text-white" 
                    : "hover:border-primary hover:text-primary"
                }`}
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => {
              // Make web dev cards clickable to GitHub
              const isWebDevWithImage =
                project.category === "Web Development" && project.links.github && project.image;
              const cardProps = isWebDevWithImage
                ? {
                    onClick: () => window.open(project.links.github, "_blank"),
                    style: { cursor: "pointer" },
                  }
                : {};
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Card
                    className="group overflow-hidden hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 h-full"
                    {...cardProps}
                  >
                    {/* Project Media */}
                    <div
                      className={`${project.video ? 'aspect-video' : 'aspect-auto'} bg-gradient-to-br from-electric-blue/20 to-neon-purple/20 relative overflow-hidden rounded-t-lg`}
                      {...(project.video
                        ? {
                            onClick: (e) => {
                              if ((e.target as HTMLElement).closest('.video-overlay-btn')) return;
                              setFullscreenVideo({ id: project.id, src: project.video, title: project.title });
                            },
                            style: { cursor: 'pointer' },
                          }
                        : project.image && !isWebDevWithImage
                        ? {
                            onClick: () => setFullscreenImage({ src: project.image, title: project.title }),
                            style: { cursor: 'pointer' },
                          }
                        : {})}
                    >
                      {project.video ? (
                        <div className="relative w-full h-full">
                          <video
                            className="w-full h-full object-cover"
                            // REMOVE native controls in card view
                            controls={false}
                            preload="metadata"
                            ref={el => { videoRefs.current[project.id] = el }}
                            muted={videoStates[project.id]?.muted}
                            onPlay={() => setVideoStates((prev) => ({ ...prev, [project.id]: { ...prev[project.id], playing: true } }))}
                            onPause={() => setVideoStates((prev) => ({ ...prev, [project.id]: { ...prev[project.id], playing: false } }))}
                            onContextMenu={e => e.preventDefault()}
                            controlsList="nodownload"
                            draggable={false}
                          >
                            <source src={project.video} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                          {/* Overlay controls for video projects */}
                          <div className="absolute bottom-3 right-3 flex gap-2 z-10">
                            <Button
                              size="icon"
                              variant="secondary"
                              className="video-overlay-btn bg-black/60 hover:bg-black/80 text-white border-white/20"
                              onClick={e => { e.stopPropagation(); handlePlayPause(project.id); }}
                              type="button"
                            >
                              {videoStates[project.id]?.playing ? <Pause size={16} /> : <Play size={16} />}
                            </Button>
                            <Button
                              size="icon"
                              variant="secondary"
                              className="video-overlay-btn bg-black/60 hover:bg-black/80 text-white border-white/20"
                              onClick={e => { e.stopPropagation(); handleMuteUnmute(project.id); }}
                              type="button"
                            >
                              {videoStates[project.id]?.muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                            </Button>
                          </div>
                        </div>
                      ) : project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-auto object-contain"
                          onContextMenu={e => e.preventDefault()}
                          draggable={false}
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center space-y-2">
                            <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                              <project.icon className="h-8 w-8 text-primary" />
                            </div>
                            <p className="text-sm text-muted-foreground">Project Preview</p>
                          </div>
                        </div>
                      )}
                      
                      {/* Overlay with links - only show for Web Development projects */}
                      {project.category === "Web Development" && (
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="flex space-x-3">
                            {project.links.github && (
                              <Button
                                size="sm"
                                variant="secondary"
                                asChild
                                className="bg-white/20 hover:bg-white/30 text-white border-white/20"
                              >
                                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                  <Github size={16} />
                                </a>
                              </Button>
                            )}
                            {project.links.live && (
                              <Button
                                size="sm"
                                variant="secondary"
                                asChild
                                className="bg-white/20 hover:bg-white/30 text-white border-white/20"
                              >
                                <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink size={16} />
                                </a>
                              </Button>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    <CardContent className="p-6 space-y-4">
                      {/* Project Header */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-start">
                          <h3 className="font-heading font-semibold text-lg leading-tight">{project.title}</h3>
                          <Badge variant="secondary" className="text-xs flex-shrink-0 ml-2">
                            {project.category}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm">{project.description}</p>
                      </div>

                      {/* Technologies - Only for Web Development */}
                      {project.category === "Web Development" && (
                        <div className="space-y-2">
                          <h4 className="font-medium text-sm">Technologies:</h4>
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Author */}
                      <div className="pt-2 border-t border-border">
                        <p className="text-xs text-muted-foreground">
                          Created by <span className="text-primary font-medium">{project.author}</span>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 mx-auto bg-muted rounded-full flex items-center justify-center mb-4">
                <Palette className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">No projects found</h3>
              <p className="text-muted-foreground">Try selecting a different category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-card">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Our Impact</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Numbers that reflect our commitment to delivering exceptional creative solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Projects Completed", icon: Code },
              { number: "3+", label: "Years Experience", icon: Award },
              { number: "100%", label: "Client Satisfaction", icon: Heart },
              { number: "24/7", label: "Support Available", icon: Clock }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-1">
                  <div className="font-heading font-bold text-3xl text-primary">{stat.number}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
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
              Like What You See?
            </h2>
            <p className="text-muted-foreground text-lg">
              Let's create something amazing together. Get in touch to discuss your project 
              and see how we can bring your vision to life.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-electric-blue to-neon-purple hover:opacity-90 transition-all duration-300 text-white font-semibold px-12 py-6 rounded-full"
            >
              <a href="/contact">
                Start Your Project
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Video Fullscreen Dialog */}
      <Dialog open={!!fullscreenVideo} onOpenChange={(open) => { if (!open) handleCloseFullscreen() }}>
        <DialogContent className="max-w-5xl w-full h-[90vh] p-0 flex flex-col">
          <DialogHeader className="p-4 flex flex-row items-center justify-between border-b shrink-0">
            <DialogTitle>{fullscreenVideo?.title}</DialogTitle>
          </DialogHeader>
          <div className="flex-grow flex items-center justify-center bg-black">
            {fullscreenVideo && (
              <video
                ref={fullscreenRef}
                className="w-full h-full max-h-[70vh] object-contain bg-black"
                controls
                autoPlay
                muted={videoStates[fullscreenVideo.id]?.muted}
                onPlay={() => setVideoStates((prev) => ({ ...prev, [fullscreenVideo.id]: { ...prev[fullscreenVideo.id], playing: true } }))}
                onPause={() => setVideoStates((prev) => ({ ...prev, [fullscreenVideo.id]: { ...prev[fullscreenVideo.id], playing: false } }))}
                onContextMenu={e => e.preventDefault()}
                controlsList="nodownload"
                draggable={false}
              >
                <source src={fullscreenVideo.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            {/* Overlay controls for fullscreen video */}
            {fullscreenVideo && (
              <div className="absolute bottom-8 right-8 flex gap-2 z-10">
                <Button
                  size="icon"
                  variant="secondary"
                  className="bg-black/60 hover:bg-black/80 text-white border-white/20"
                  onClick={() => handlePlayPause(fullscreenVideo.id, true)}
                  type="button"
                >
                  {videoStates[fullscreenVideo.id]?.playing ? <Pause size={16} /> : <Play size={16} />}
                </Button>
                <Button
                  size="icon"
                  variant="secondary"
                  className="bg-black/60 hover:bg-black/80 text-white border-white/20"
                  onClick={() => handleMuteUnmute(fullscreenVideo.id, true)}
                  type="button"
                >
                  {videoStates[fullscreenVideo.id]?.muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </Button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
      {/* Image Fullscreen Dialog */}
      <Dialog open={!!fullscreenImage} onOpenChange={(open) => { if (!open) setFullscreenImage(null) }}>
        <DialogContent className="max-w-3xl w-full h-[90vh] p-0 flex flex-col">
          <DialogHeader className="p-4 flex flex-row items-center justify-between border-b shrink-0">
            <DialogTitle>{fullscreenImage?.title}</DialogTitle>
          </DialogHeader>
          <div className="flex-grow flex items-center justify-center bg-black">
            {fullscreenImage && (
              <img
                src={fullscreenImage.src}
                alt={fullscreenImage.title}
                className="max-h-[75vh] w-auto object-contain bg-black mx-auto"
                onContextMenu={e => e.preventDefault()}
                draggable={false}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}