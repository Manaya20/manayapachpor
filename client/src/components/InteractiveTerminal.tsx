import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { experiences, projects, languages, frameworks, databases, cloudServices, mlData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import TerminalAbout from "./TerminalAbout";
import TerminalExperience from "./TerminalExperience";
import TerminalProjects from "./TerminalProjects";
import TerminalSkills from "./TerminalSkills";

type TerminalCommand = 
  | "help" 
  | "about" 
  | "experience" 
  | "projects" 
  | "skills" 
  | "resume" 
  | "clear" 
  | "socials";

type CommandHistory = {
  command: string;
  output: React.ReactNode;
};

const InteractiveTerminal = () => {
  const [inputValue, setInputValue] = useState("");
  const [commandHistory, setCommandHistory] = useState<CommandHistory[]>([
    { 
      command: "welcome", 
      output: (
        <div className="text-green-400 mb-4">
          <p className="font-bold text-xl mb-2">Welcome to Manaya's Interactive Portfolio Terminal!</p>
          <p>Type 'help' to see available commands.</p>
        </div>
      ) 
    }
  ]);
  const [currentPath, setCurrentPath] = useState("~/portfolio");
  const [activeSection, setActiveSection] = useState<TerminalCommand | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const downloadResume = useCallback(() => {
    // Create a link to download the resume
    const link = document.createElement('a');
    link.href = '/api/download-resume';
    link.download = 'Manaya_Pachpor_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [commandHistory]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        inputRef.current.focus();
      }
    };

    document.addEventListener("click", handleClickOutside);
    inputRef.current?.focus();

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    const command = inputValue.trim().toLowerCase();
    setInputValue("");
    
    let output: React.ReactNode;
    
    // Process command
    switch (command) {
      case "help":
        output = (
          <div className="text-muted-foreground space-y-1">
            <p className="text-primary font-semibold">Available commands:</p>
            <p><span className="text-green-400">about</span> - Learn about Manaya</p>
            <p><span className="text-green-400">experience</span> - View work experience</p>
            <p><span className="text-green-400">projects</span> - Browse featured projects</p>
            <p><span className="text-green-400">skills</span> - See technical skills</p>
            <p><span className="text-green-400">resume</span> - Download resume</p>
            <p><span className="text-green-400">socials</span> - View social links</p>
            <p><span className="text-green-400">clear</span> - Clear the terminal</p>
            <p><span className="text-green-400">help</span> - Show this help message</p>
          </div>
        );
        setActiveSection("help");
        break;
        
      case "about":
        output = <TerminalAbout />;
        setActiveSection("about");
        break;
        
      case "experience":
        output = <TerminalExperience />;
        setActiveSection("experience");
        break;
        
      case "projects":
        output = <TerminalProjects />;
        setActiveSection("projects");
        break;
        
      case "skills":
        output = <TerminalSkills />;
        setActiveSection("skills");
        break;
        
      case "resume":
        downloadResume();
        output = (
          <div className="text-green-400">
            <p>Downloading resume...</p>
          </div>
        );
        setActiveSection("resume");
        break;
        
      case "clear":
        setCommandHistory([]);
        return;
        
      case "socials":
        output = (
          <div className="text-muted-foreground space-y-2">
            <p className="text-primary font-semibold">Connect with Manaya:</p>
            <p>
              <span className="text-green-400">LinkedIn:</span>{" "}
              <a 
                href="https://www.linkedin.com/in/manaya-pachpor-b039b4250/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                linkedin.com/in/manaya-pachpor-b039b4250
              </a>
            </p>
            <p>
              <span className="text-green-400">GitHub:</span>{" "}
              <a 
                href="https://github.com/Manaya20" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                github.com/Manaya20
              </a>
            </p>
            <p>
              <span className="text-green-400">Email:</span>{" "}
              <a 
                href="mailto:pachpor.manaya@gmail.com"
                className="text-blue-400 hover:underline"
              >
                pachpor.manaya@gmail.com
              </a>
            </p>
          </div>
        );
        setActiveSection("socials");
        break;
        
      default:
        output = (
          <div className="text-red-400">
            <p>Command not found: {command}</p>
            <p>Type 'help' to see available commands.</p>
          </div>
        );
        setActiveSection(null);
    }
    
    setCommandHistory(prev => [...prev, { command, output }]);
  };

  const handleCommandClick = (command: TerminalCommand) => {
    setInputValue(command);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  return (
    <div className="w-full h-full flex flex-col gap-2 sm:gap-4">
      <div className="grid grid-cols-4 sm:flex sm:flex-wrap gap-1.5 xs:gap-2">
        {["help", "about", "experience", "projects", "skills", "resume", "socials", "clear"].map((cmd) => (
          <Button 
            key={cmd}
            variant={activeSection === cmd ? "default" : "outline"} 
            size="sm" 
            onClick={() => handleCommandClick(cmd as TerminalCommand)}
            className="text-[10px] xs:text-xs px-1.5 xs:px-3 py-0.5 xs:py-1 h-7 xs:h-8 w-full sm:w-auto"
          >
            {cmd}
          </Button>
        ))}
      </div>

      <Card className="flex-1 bg-card/30 backdrop-blur-sm border border-border/50 shadow-xl overflow-hidden">
        <div className="flex items-center px-3 sm:px-4 py-2 bg-muted/30 border-b border-border/30">
          <div className="flex space-x-2">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="mx-auto font-mono text-[10px] sm:text-xs text-muted-foreground">
            <span className="hidden xs:inline">manaya@portfolio ~</span> interactive-terminal
          </div>
        </div>
        
        <CardContent className="p-2 sm:p-4 h-[350px] sm:h-[450px] md:h-[500px] lg:h-[600px] overflow-y-auto font-mono text-xs sm:text-sm">
          {commandHistory.map((item, index) => (
            <div key={index} className="mb-3 sm:mb-4">
              {item.command !== "welcome" && (
                <div className="flex flex-wrap items-center mb-1 sm:mb-2">
                  <span className="text-primary text-xs sm:text-sm">manaya@portfolio</span>
                  <span className="text-muted-foreground">:</span>
                  <span className="text-blue-400">{currentPath}</span>
                  <span className="text-muted-foreground">$ </span>
                  <span className="ml-1">{item.command}</span>
                </div>
              )}
              <div>{item.output}</div>
            </div>
          ))}
          
          <form onSubmit={handleSubmit} className="flex flex-wrap items-center">
            <span className="text-primary text-xs sm:text-sm">manaya@portfolio</span>
            <span className="text-muted-foreground">:</span>
            <span className="text-blue-400">{currentPath}</span>
            <span className="text-muted-foreground">$ </span>
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 ml-1 bg-transparent outline-none border-none text-xs sm:text-sm min-w-[50px]"
              aria-label="Terminal input"
              autoComplete="off"
              spellCheck="false"
            />
          </form>
          <div ref={terminalEndRef} />
        </CardContent>
      </Card>
    </div>
  );
};

export default InteractiveTerminal;