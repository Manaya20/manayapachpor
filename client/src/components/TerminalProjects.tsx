import { projects } from "@/lib/data";
import { Github, ExternalLink } from "lucide-react";

const TerminalProjects = () => {
  return (
    <div className="space-y-6 text-muted-foreground text-sm">
      <div className="text-green-400 font-semibold text-base mb-2">
        Featured Projects:
      </div>
      
      {projects.map((project, index) => (
        <div key={index} className="pb-4 border-b border-primary/10 last:border-0">
          <div className="mb-2">
            <div className="text-primary font-medium">{project.title}</div>
            <p className="text-xs mb-2">{project.description}</p>
            
            <div className="flex flex-wrap gap-1 mb-2">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="px-1.5 py-0.5 bg-primary/10 text-primary text-[10px] rounded">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex space-x-3 text-xs">
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-400 hover:underline flex items-center"
                >
                  <Github size={12} className="mr-1" /> Code
                </a>
              )}
              {project.demo && (
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-400 hover:underline flex items-center"
                >
                  <ExternalLink size={12} className="mr-1" /> Demo
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TerminalProjects;