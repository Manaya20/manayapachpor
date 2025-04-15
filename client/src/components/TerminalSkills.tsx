import { languages, frameworks, databases, cloudServices, mlData } from "@/lib/data";
import { Code, Database, Wrench, Cloud, Brain } from "lucide-react";

const TerminalSkills = () => {
  const SkillCategory = ({ 
    title, 
    skills, 
    icon: Icon 
  }: { 
    title: string; 
    skills: string[]; 
    icon: React.ElementType 
  }) => (
    <div className="mb-4">
      <div className="flex items-center mb-2">
        <Icon className="text-green-400 mr-1" size={12} /> 
        <span className="text-primary font-medium">{title}:</span>
      </div>
      <div className="flex flex-wrap gap-1 pl-4">
        {skills.map((skill, idx) => (
          <span key={idx} className="px-1.5 py-0.5 bg-primary/10 text-primary text-[10px] rounded">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-4 text-muted-foreground text-sm">
      <div className="text-green-400 font-semibold text-base mb-2">
        Technical Skills:
      </div>
      
      <SkillCategory 
        title="Programming Languages" 
        skills={languages} 
        icon={Code} 
      />
      
      <SkillCategory 
        title="Frameworks & Tools" 
        skills={frameworks} 
        icon={Wrench} 
      />
      
      <SkillCategory 
        title="Databases" 
        skills={databases} 
        icon={Database} 
      />
      
      <SkillCategory 
        title="Cloud Services" 
        skills={cloudServices} 
        icon={Cloud} 
      />
      
      <SkillCategory 
        title="Machine Learning & Data" 
        skills={mlData} 
        icon={Brain} 
      />
    </div>
  );
};

export default TerminalSkills;