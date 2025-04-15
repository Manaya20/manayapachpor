import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Bot, Users } from "lucide-react";

const TerminalAbout = () => {
  return (
    <div className="space-y-4 text-muted-foreground text-sm">
      <div className="text-green-400 font-semibold text-base mb-2">
        About Manaya Pachpor:
      </div>
      
      <div className="space-y-4">
        <div>
          <p className="text-primary font-medium mb-1">Education:</p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>
              <span className="text-accent">SRM Institute of Science and Technology</span> (2022-2026)
              <br />
              <span className="text-sm">Bachelor of Technology in Computer Science</span>
              <br />
              <span className="text-sm italic">Specialization in Big Data Analysis</span>
            </li>
            <li>
              <span className="text-accent">Navrachana School Sama</span> (2015-2022)
              <br />
              <span className="text-sm">High School Diploma</span>
              <br />
              <span className="text-sm italic">Vadodara, India</span>
            </li>
          </ul>
        </div>
        
        <div>
          <p className="text-primary font-medium mb-1">Personal Journey:</p>
          <p className="mb-2">
            I'm passionate about leveraging technology to solve real-world problems. My journey in computer science began with a curiosity about how software systems work, and has evolved into a focused pursuit of AI and data analysis expertise.
          </p>
          <p className="mb-2">
            As a Technical Lead at SRMKZILLA, I enjoy mentoring other developers and coordinating technical projects from start to finish. I believe in building solutions that are not just technically sound but also user-centered and accessible.
          </p>
          <p className="mb-2">
            When I'm not coding, I'm exploring the latest developments in machine learning and AI, contributing to open-source projects, or working on personal experiments that challenge my technical abilities.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md flex items-center">
            <Code className="text-primary mr-1" size={12} />
            Coding Enthusiast
          </span>
          <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md flex items-center">
            <Bot className="text-primary mr-1" size={12} />
            AI Explorer
          </span>
          <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md flex items-center">
            <Users className="text-primary mr-1" size={12} />
            Team Leader
          </span>
        </div>
      </div>
    </div>
  );
};

export default TerminalAbout;