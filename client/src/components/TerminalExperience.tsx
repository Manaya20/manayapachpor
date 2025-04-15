import { ChevronRight } from "lucide-react";
import { experiences } from "@/lib/data";

const TerminalExperience = () => {
  return (
    <div className="space-y-6 text-muted-foreground text-sm">
      <div className="text-green-400 font-semibold text-base mb-2">
        Work Experience:
      </div>
      
      {experiences.map((experience, index) => (
        <div key={index} className="pb-4 border-b border-primary/10 last:border-0">
          <div className="mb-2">
            <div className="text-primary font-medium">{experience.title}</div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-accent">{experience.company}</span>
                {experience.location && (
                  <>
                    <span className="mx-2 text-muted-foreground">•</span>
                    <span>{experience.location}</span>
                  </>
                )}
              </div>
              <span className="text-xs">{experience.period}</span>
            </div>
          </div>
          
          <ul className="space-y-1 mt-2">
            {experience.responsibilities.map((responsibility, idx) => (
              <li key={idx} className="flex">
                <ChevronRight className="text-green-400 mt-1 mr-1 flex-shrink-0" size={12} />
                <span className="text-xs">{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TerminalExperience;