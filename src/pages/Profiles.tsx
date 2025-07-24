import { motion } from "framer-motion"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, ExternalLink, Github, Instagram, Linkedin, GraduationCap, Award, Code, Palette, X } from "lucide-react"
import prathamProfile from "@/assets/pratham-profile.jpg"
import prashanjeetProfile from "@/assets/prashanjeet-profile.jpg"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import allcertificatespratham from "@/assets/allcertificatespratham.pdf"
import allcertificatesprashanjeet from "@/assets/allcertificatesprashanjeet.pdf"

export default function Profiles() {
  const [resumeUrl, setResumeUrl] = useState("")
  // Add state for certifications dialog
  const [certDialogOpen, setCertDialogOpen] = useState(false)
  // Add state for Prashanjeet's certifications dialog
  const [certDialogOpenPrashanjeet, setCertDialogOpenPrashanjeet] = useState(false)

  const handleViewOnline = (url: string) => {
    if (!url || url === "#") {
      // TODO: Maybe show a toast message that resume is not available
      console.warn("Resume URL is not available.");
      return;
    }
    // Modify Google Drive link for embedding
    const embedUrl = url.replace("/view?usp=drive_link", "/preview").replace("/view", "/preview")
    setResumeUrl(embedUrl)
  }

  const closeViewer = () => {
    setResumeUrl("")
  }

  const prathamResumeUrl = "https://drive.google.com/file/d/1uSROJAmWRs-Z-R-Q-tdTNhjfi_g9Ki2g/view?usp=drive_link"
  // TODO: Add Prashanjeet's resume link
  const prashanjeetResumeUrl = "#" 

  return (
    <div className="pt-16">
      <Dialog open={!!resumeUrl} onOpenChange={(isOpen) => !isOpen && closeViewer()}>
        <DialogContent className="max-w-5xl w-full h-[90vh] p-0 flex flex-col">
          <DialogHeader className="p-4 flex flex-row items-center justify-between border-b shrink-0">
            <DialogTitle>Resume Viewer</DialogTitle>
          </DialogHeader>
          <div className="flex-grow">
            <iframe
              src={resumeUrl}
              className="w-full h-full border-0"
              allow="fullscreen"
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
      {/* Certifications Fullscreen Dialog for Pratham */}
      <Dialog open={certDialogOpen} onOpenChange={setCertDialogOpen}>
        <DialogContent className="max-w-5xl w-full h-[90vh] p-0 flex flex-col">
          <DialogHeader className="p-4 flex flex-row items-center justify-between border-b shrink-0">
            <DialogTitle>Certifications - Pratham Debnath</DialogTitle>
          </DialogHeader>
          <div className="flex-grow">
            <iframe
              src={allcertificatespratham}
              className="w-full h-full border-0"
              allow="fullscreen"
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
      {/* Certifications Fullscreen Dialog for Prashanjeet */}
      <Dialog open={certDialogOpenPrashanjeet} onOpenChange={setCertDialogOpenPrashanjeet}>
        <DialogContent className="max-w-5xl w-full h-[90vh] p-0 flex flex-col">
          <DialogHeader className="p-4 flex flex-row items-center justify-between border-b shrink-0">
            <DialogTitle>Certifications - Prashanjeet Dutta</DialogTitle>
          </DialogHeader>
          <div className="flex-grow">
            <iframe
              src={allcertificatesprashanjeet}
              className="w-full h-full border-0"
              allow="fullscreen"
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
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
              Meet the <span className="bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text text-transparent">Team</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get to know the creative minds behind AiirVik. Each bringing unique skills and perspectives to deliver exceptional results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pratham Debnath Profile */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                {/* Profile Image & Quick Info */}
                <div className="bg-gradient-to-br from-electric-blue to-primary p-8 text-white">
                  <div className="text-center space-y-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/20">
                      <img 
                        src={prathamProfile} 
                        alt="Pratham Debnath" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="font-heading font-bold text-2xl">Pratham Debnath</h2>
                      <p className="text-white/80 font-medium">MCA Student & Full-Stack Developer</p>
                    </div>
                    
                    {/* Social Links */}
                    <div className="flex justify-center space-x-4">
                      <a 
                        href="https://github.com/isthatpratham" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Github size={20} />
                      </a>
                      <a 
                        href="https://www.linkedin.com/in/pratham-debnath-894471314/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Linkedin size={20} />
                      </a>
                      <a 
                        href="https://www.instagram.com/aiir.vis/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Instagram size={20} />
                      </a>
                    </div>
                    
                    {/* Resume Buttons */}
                    <div className="space-y-3">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full border-white/20 text-white hover:bg-white/10"
                        onClick={() => handleViewOnline(prathamResumeUrl)}
                      >
                        <ExternalLink size={16} className="mr-2" />
                        View Resume
                      </Button>
                      <Button 
                        variant="secondary" 
                        size="sm" 
                        className="w-full"
                        asChild
                      >
                        <a href="/resumes/pratham-resume.pdf" download>
                          <Download size={16} className="mr-2" />
                          Download Resume
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-white/20 text-white hover:bg-white/10"
                        asChild
                        onClick={() => setCertDialogOpen(true)}
                      >
                        <a href="#">
                          <Award size={16} className="mr-2" />
                          View Certifications
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Detailed Information */}
                <div className="lg:col-span-2 p-8 space-y-8">
                  {/* About */}
                  <div className="space-y-4">
                    <h3 className="font-heading font-semibold text-xl flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      About
                    </h3>
                    <p className="text-muted-foreground">
                      Passionate MCA student with a strong background in cybersecurity, web development, and video editing. 
                      Freelance video editor since 2022, specializing in Adobe Premiere Pro and After Effects. 
                      Currently expanding expertise in full-stack development and secure coding practices.
                    </p>
                  </div>

                  {/* Education */}
                  <div className="space-y-4">
                    <h3 className="font-heading font-semibold text-xl flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      Education
                    </h3>
                    <div className="space-y-3">
                      <div className="border-l-2 border-primary pl-4">
                        <h4 className="font-medium">Master of Computer Applications (MCA)</h4>
                        <p className="text-sm text-muted-foreground">SRM University (2025 – Present)</p>
                      </div>
                      <div className="border-l-2 border-border pl-4">
                        <h4 className="font-medium">Bachelor of Computer Applications (BCA)</h4>
                        <p className="text-sm text-muted-foreground">DHSK College (2022 – 2025)</p>
                      </div>
                    </div>
                  </div>

                  {/* Tools & Skills */}
                  <div className="space-y-4">
                    <h3 className="font-heading font-semibold text-xl">Tools & Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Adobe Premiere Pro", "After Effects", "React", "Node.js", 
                        "JavaScript", "TypeScript", "Python", "Cybersecurity", 
                        "MySQL", "MongoDB", "Git", "Canva"
                      ].map((tool) => (
                        <Badge key={tool} variant="secondary">{tool}</Badge>
                      ))}
                    </div>
                  </div>

                  {/* Notable Projects */}
                  <div className="space-y-4">
                    <h3 className="font-heading font-semibold text-xl">Notable Projects</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardContent className="p-4 space-y-2">
                          <h4 className="font-medium">Chess Game with AI</h4>
                          <p className="text-sm text-muted-foreground">Interactive chess game with AI opponent built using modern web technologies.</p>
                          <a 
                            href="https://github.com/isthatpratham/chess_game_ai" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary text-sm flex items-center gap-1 hover:underline"
                          >
                            <Github size={14} />
                            View on GitHub
                          </a>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4 space-y-2">
                          <h4 className="font-medium">Event Management System</h4>
                          <p className="text-sm text-muted-foreground">Comprehensive college event management system with user authentication and admin panel.</p>
                          <a 
                            href="https://github.com/isthatpratham/event_ms" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary text-sm flex items-center gap-1 hover:underline"
                          >
                            <Github size={14} />
                            View on GitHub
                          </a>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="space-y-4">
                    <h3 className="font-heading font-semibold text-xl">Services Offered</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                          <Code className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Frontend Development</h4>
                          <p className="text-sm text-muted-foreground">React, TypeScript, Tailwind CSS</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                          <Code className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Video Editing</h4>
                          <p className="text-sm text-muted-foreground">Professional video editing and motion graphics</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Prashanjeet Dutta Profile */}
      <section className="py-24 bg-card">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                {/* Profile Image & Quick Info */}
                <div className="bg-gradient-to-br from-neon-purple to-accent p-8 text-white">
                  <div className="text-center space-y-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/20">
                      <img 
                        src={prashanjeetProfile} 
                        alt="Prashanjeet Dutta" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="font-heading font-bold text-2xl">Prashanjeet Dutta</h2>
                      <p className="text-white/80 font-medium">Creative Professional & Digital Artist</p>
                    </div>
                    
                    {/* Social Links */}
                    <div className="flex justify-center space-x-4">
                      <a 
                        href="https://github.com/pranzy24" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Github size={20} />
                      </a>
                      <a 
                        href="https://www.linkedin.com/in/prashanjeet-dutta-b754552b6/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Linkedin size={20} />
                      </a>
                      <a 
                        href="https://www.instagram.com/artiivik/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Instagram size={20} />
                      </a>
                    </div>
                    
                    {/* Resume Buttons */}
                    <div className="space-y-3">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full border-white/20 text-white hover:bg-white/10"
                        onClick={() => handleViewOnline(prashanjeetResumeUrl)}
                      >
                        <ExternalLink size={16} className="mr-2" />
                        View Resume
                      </Button>
                      <Button 
                        variant="secondary" 
                        size="sm" 
                        className="w-full"
                        asChild
                      >
                        <a href="#" download>
                          <Download size={16} className="mr-2" />
                          Download Resume
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-white/20 text-white hover:bg-white/10"
                        asChild
                        onClick={() => setCertDialogOpenPrashanjeet(true)}
                      >
                        <a href="#">
                          <Award size={16} className="mr-2" />
                          View Certifications
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Detailed Information */}
                <div className="lg:col-span-2 p-8 space-y-8">
                  {/* About */}
                  <div className="space-y-4">
                    <h3 className="font-heading font-semibold text-xl flex items-center gap-2">
                      <Award className="h-5 w-5 text-accent" />
                      About
                    </h3>
                    <p className="text-muted-foreground">
                      Creative professional and digital artist with 3+ years of experience in illustration, t-shirt design, 
                      branding, and concept art. Passionate about transforming ideas into visual masterpieces using industry-leading 
                      design tools. Specializes in custom vector art and digital illustrations.
                    </p>
                  </div>

                  {/* Education */}
                  <div className="space-y-4">
                    <h3 className="font-heading font-semibold text-xl flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-accent" />
                      Education
                    </h3>
                    <div className="space-y-3">
                      <div className="border-l-2 border-accent pl-4">
                        <h4 className="font-medium">Bachelor of Computer Applications (BCA)</h4>
                        <p className="text-sm text-muted-foreground">DHSK College (2022 – 2025)</p>
                      </div>
                    </div>
                  </div>

                  {/* Tools & Skills */}
                  <div className="space-y-4">
                    <h3 className="font-heading font-semibold text-xl">Design Tools & Software</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Adobe Photoshop", "Adobe Illustrator", "Clip Studio Paint", 
                        "Procreate", "Adobe Fresco", "Canva", "Digital Illustration", 
                        "Vector Art", "T-shirt Design", "Branding", "Logo Design", "Concept Art"
                      ].map((tool) => (
                        <Badge key={tool} variant="secondary">{tool}</Badge>
                      ))}
                    </div>
                  </div>

                  {/* Focus Areas */}
                  <div className="space-y-4">
                    <h3 className="font-heading font-semibold text-xl">Focus Areas</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardContent className="p-4 space-y-2">
                          <h4 className="font-medium">Custom Vector Art</h4>
                          <p className="text-sm text-muted-foreground">Detailed vector illustrations and custom artwork for various applications.</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4 space-y-2">
                          <h4 className="font-medium">T-shirt Collections</h4>
                          <p className="text-sm text-muted-foreground">Creative apparel designs and merchandise collections.</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4 space-y-2">
                          <h4 className="font-medium">Digital Illustrations</h4>
                          <p className="text-sm text-muted-foreground">Concept art and digital paintings for various projects.</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4 space-y-2">
                          <h4 className="font-medium">Branding Solutions</h4>
                          <p className="text-sm text-muted-foreground">Complete brand identity including logos and visual assets.</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="space-y-4">
                    <h3 className="font-heading font-semibold text-xl">Services Offered</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mt-1">
                          <Palette className="h-4 w-4 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-medium">Graphic Design</h4>
                          <p className="text-sm text-muted-foreground">Complete visual design solutions</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mt-1">
                          <Palette className="h-4 w-4 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-medium">Logo Design</h4>
                          <p className="text-sm text-muted-foreground">Custom logo and brand identity creation</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}