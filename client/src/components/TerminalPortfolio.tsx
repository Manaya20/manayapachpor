import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import InteractiveTerminal from "./InteractiveTerminal";

const TerminalPortfolio = () => {
  const [matrixCanvas, setMatrixCanvas] = useState<HTMLCanvasElement | null>(null);
  
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/api/download-resume';
    link.download = 'Manaya_Pachpor_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    // Matrix effect logic
    if (!matrixCanvas) return;
    
    const canvas = matrixCanvas;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Setting canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Characters to be used in the matrix
    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789';
    const charArray = chars.split('');

    // Creating drops
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    
    // Array to store drops position
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * canvas.height / fontSize);
    }

    // Drawing function
    let frame = 0;
    const draw = () => {
      // Translucent black background to create fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Setting text color and font
      ctx.fillStyle = '#0F0'; // Green hex
      ctx.font = `${fontSize}px monospace`;
      
      // Looping over drops
      for (let i = 0; i < drops.length; i++) {
        // Select random character
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        
        // x = i*fontSize, y = value of drops[i]*fontSize
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        // Make the drop randomly restart from top
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        // Increment y coordinate
        drops[i]++;
      }

      frame++;
      requestAnimationFrame(draw);
    };

    // Start the animation
    const animationId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [matrixCanvas]);

  return (
    <div className="min-h-screen relative bg-black overflow-hidden">
      {/* Matrix canvas background */}
      <canvas 
        ref={setMatrixCanvas} 
        className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none"
      />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-2 sm:p-4 backdrop-blur-sm bg-black/30 border-b border-primary/20 sticky top-0 z-20">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <a href="#" className="text-lg xs:text-xl md:text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Manaya.dev
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-2 xs:space-x-3 sm:space-x-4"
            >
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 md:h-10 md:w-10 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10"
                asChild
              >
                <a 
                  href="https://github.com/Manaya20"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={16} className="md:h-5 md:w-5" />
                </a>
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 md:h-10 md:w-10 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10"
                asChild
              >
                <a 
                  href="https://www.linkedin.com/in/manaya-pachpor-b039b4250/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={16} className="md:h-5 md:w-5" />
                </a>
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 md:h-10 md:w-10 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10"
                asChild
              >
                <a 
                  href="mailto:pachpor.manaya@gmail.com"
                >
                  <Mail size={16} className="md:h-5 md:w-5" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="hidden sm:flex items-center gap-2 border-primary/20 hover:bg-primary/10 text-xs md:text-sm h-7 md:h-9"
                onClick={downloadResume}
              >
                <Download size={14} className="md:h-4 md:w-4" /> Resume
              </Button>
            </motion.div>
          </div>
        </header>
        
        {/* Main content */}
        <main className="flex-1 p-3 sm:p-4 md:p-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
            {/* Info Column - shown as top section on mobile, side column on desktop */}
            <motion.div 
              className="lg:col-span-4 space-y-4 lg:space-y-6 order-1 lg:order-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-2 md:space-y-4">
                <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Manaya Pachpor
                </h1>
                <h2 className="text-lg sm:text-xl text-muted-foreground">
                  Computer Science Student <span className="text-primary">&</span> Technical Lead
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground">
                  I specialize in building AI-powered applications and web solutions. Currently pursuing my Bachelor's in Computer Science with a focus on Big Data Analysis.
                </p>
              </div>
              
              {/* Quick Stats on mobile - horizontal layout */}
              <div className="block lg:hidden">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <div className="p-3 bg-card/30 backdrop-blur-sm border border-primary/20 rounded-lg">
                    <div className="text-xs font-medium text-muted-foreground">Experience</div>
                    <div className="font-mono text-primary text-sm">2+ years</div>
                  </div>
                  <div className="p-3 bg-card/30 backdrop-blur-sm border border-primary/20 rounded-lg">
                    <div className="text-xs font-medium text-muted-foreground">Projects</div>
                    <div className="font-mono text-primary text-sm">5+</div>
                  </div>
                  <div className="p-3 bg-card/30 backdrop-blur-sm border border-primary/20 rounded-lg">
                    <div className="text-xs font-medium text-muted-foreground">Education</div>
                    <div className="font-mono text-primary text-sm">BTech CS</div>
                  </div>
                  <div className="p-3 bg-card/30 backdrop-blur-sm border border-primary/20 rounded-lg">
                    <div className="text-xs font-medium text-muted-foreground">Location</div>
                    <div className="font-mono text-primary text-sm">Chennai, IN</div>
                  </div>
                </div>
              </div>
              
              {/* Quick Stats on desktop - vertical layout */}
              <div className="hidden lg:block p-4 bg-card/30 backdrop-blur-sm border border-primary/20 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Quick Stats</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Experience</span>
                    <span className="font-mono text-primary">2+ years</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Projects</span>
                    <span className="font-mono text-primary">5+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Education</span>
                    <span className="font-mono text-primary">BTech CS</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Location</span>
                    <span className="font-mono text-primary">Chennai, India</span>
                  </div>
                </div>
              </div>
              
              <div className="p-3 sm:p-4 bg-card/30 backdrop-blur-sm border border-primary/20 rounded-lg">
                <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Top Skills</h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">Python</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">Machine Learning</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">Flask</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">JavaScript</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">Node.js</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">Data Analysis</span>
                </div>
              </div>
              
              <div className="block md:hidden">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={downloadResume}
                >
                  <Download size={16} className="mr-2" /> Download Resume
                </Button>
              </div>
            </motion.div>
            
            {/* Terminal Column */}
            <motion.div 
              className="lg:col-span-8 order-2 lg:order-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <InteractiveTerminal />
            </motion.div>
          </div>
        </main>
        
        {/* Footer */}
        <footer className="py-3 sm:py-4 px-3 sm:px-4 border-t border-primary/20 backdrop-blur-sm bg-black/30">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left text-muted-foreground text-xs sm:text-sm mb-2 md:mb-0">
              Manaya Pachpor.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default TerminalPortfolio;