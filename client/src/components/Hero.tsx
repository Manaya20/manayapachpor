import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Linkedin, Github, Mail } from "lucide-react";
import TerminalBox from "./TerminalBox";

const Hero = () => {
  const downloadResume = () => {
    // Create a link to download the resume
    const link = document.createElement('a');
    link.href = '/api/download-resume';
    link.download = 'Manaya_Pachpor_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          <motion.div 
            className="md:col-span-3 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <motion.h2 
                className="text-xl md:text-2xl text-muted-foreground font-light mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Hello, I'm
              </motion.h2>
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Manaya Pachpor
              </motion.h1>
              <motion.h2 
                className="text-2xl md:text-3xl text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Computer Science Student <span className="text-primary">&</span> Technical Lead
              </motion.h2>
            </div>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              I specialize in building AI-powered applications and web solutions. Currently pursuing my Bachelor's in Computer Science with a focus on Big Data Analysis at SRM Institute of Science and Technology.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white gap-2"
                asChild
              >
                <a href="#contact">
                  Contact Me
                  <ArrowRight size={16} />
                </a>
              </Button>
              
              <Button 
                size="lg"
                variant="outline" 
                className="gap-2"
                onClick={downloadResume}
              >
                <Download size={16} />
                Resume
              </Button>
            </motion.div>
            
            <motion.div 
              className="flex space-x-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <a 
                href="https://www.linkedin.com/in/manaya-pachpor-b039b4250/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary text-xl transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://github.com/Manaya20" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary text-xl transition-colors duration-300"
              >
                <Github size={24} />
              </a>
              <a 
                href="mailto:pachpor.manaya@gmail.com"
                className="text-muted-foreground hover:text-primary text-xl transition-colors duration-300"
              >
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <TerminalBox />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
