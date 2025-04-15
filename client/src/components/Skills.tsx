import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { languages, frameworks, databases, cloudServices, mlData } from "@/lib/data";
import { Code, Database, Wrench, Cloud, Brain } from "lucide-react";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const SkillItem = ({ skill }: { skill: string }) => (
    <Card className="border border-border/80 shadow hover:shadow-primary/5 transition-all duration-300">
      <CardContent className="p-4">
        <div className="flex items-center">
          <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
          <span>{skill}</span>
        </div>
      </CardContent>
    </Card>
  );

  const SkillCategory = ({ 
    title, 
    skills, 
    icon: Icon 
  }: { 
    title: string; 
    skills: string[]; 
    icon: React.ElementType 
  }) => (
    <motion.div variants={itemVariants}>
      <h3 className="text-xl font-semibold mb-6 flex items-center">
        <Icon className="text-primary mr-2" size={20} /> {title}
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill, idx) => (
          <SkillItem key={idx} skill={skill} />
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Technical <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Skills</span>
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="space-y-10">
            <SkillCategory 
              title="Programming Languages" 
              skills={languages} 
              icon={Code} 
            />
            
            <SkillCategory 
              title="Databases" 
              skills={databases} 
              icon={Database} 
            />
          </div>

          <div className="space-y-10">
            <SkillCategory 
              title="Frameworks & Tools" 
              skills={frameworks} 
              icon={Wrench} 
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
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
