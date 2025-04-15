import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { experiences } from "@/lib/data";

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Work <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Experience</span>
        </motion.h2>
        
        <motion.div 
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {experiences.map((experience, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="border border-border/80 shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="md:flex md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold">{experience.title}</h3>
                      <div className="flex items-center mt-2">
                        <span className="text-primary font-medium">{experience.company}</span>
                        {experience.location && (
                          <>
                            <span className="mx-2 text-muted-foreground">•</span>
                            <span className="text-muted-foreground">{experience.location}</span>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0 text-muted-foreground">
                      {experience.period}
                    </div>
                  </div>
                  
                  <ul className="space-y-3 text-muted-foreground">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex">
                        <ChevronRight className="text-primary mt-1.5 mr-2" size={14} />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
