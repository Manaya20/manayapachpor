import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Bot, Users } from "lucide-react";

const About = () => {
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-20 bg-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-4">Education</h3>
            
            <Card className="border border-border/80 shadow-lg hover:shadow-primary/5 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-semibold">SRM Institute of Science and Technology</h4>
                  <span className="text-muted-foreground text-sm">2022-2026</span>
                </div>
                <p className="text-muted-foreground mb-2">Bachelor of Technology in Computer Science</p>
                <p className="text-muted-foreground italic">Specialization in Big Data Analysis</p>
              </CardContent>
            </Card>

            <Card className="border border-border/80 shadow-lg hover:shadow-primary/5 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-semibold">Navrachana School Sama</h4>
                  <span className="text-muted-foreground text-sm">2015-2022</span>
                </div>
                <p className="text-muted-foreground">High School Diploma</p>
                <p className="text-muted-foreground italic">Vadodara, India</p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-4">Personal Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm passionate about leveraging technology to solve real-world problems. My journey in computer science began with a curiosity about how software systems work, and has evolved into a focused pursuit of AI and data analysis expertise.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              As a Technical Lead at SRMKZILLA, I enjoy mentoring other developers and coordinating technical projects from start to finish. I believe in building solutions that are not just technically sound but also user-centered and accessible.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, I'm exploring the latest developments in machine learning and AI, contributing to open-source projects, or working on personal experiments that challenge my technical abilities.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="bg-muted/20 px-4 py-2 rounded-md border border-border flex items-center">
                <Code className="text-primary mr-2" size={18} />
                <span>Coding Enthusiast</span>
              </div>
              <div className="bg-muted/20 px-4 py-2 rounded-md border border-border flex items-center">
                <Bot className="text-primary mr-2" size={18} />
                <span>AI Explorer</span>
              </div>
              <div className="bg-muted/20 px-4 py-2 rounded-md border border-border flex items-center">
                <Users className="text-primary mr-2" size={18} />
                <span>Team Leader</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
