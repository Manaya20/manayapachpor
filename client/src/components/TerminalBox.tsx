import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const TerminalBox = () => {
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [line3, setLine3] = useState("");
  const [line4, setLine4] = useState("");
  const [line5, setLine5] = useState("");
  const [cursor, setCursor] = useState(true);

  const typeLine = (
    text: string,
    setter: React.Dispatch<React.SetStateAction<string>>,
    delay: number,
    callback?: () => void
  ) => {
    let currentText = "";
    let index = 0;
    
    const interval = setInterval(() => {
      if (index < text.length) {
        currentText += text.charAt(index);
        setter(currentText);
        index++;
      } else {
        clearInterval(interval);
        if (callback) {
          setTimeout(callback, delay);
        }
      }
    }, 40);
  };

  useEffect(() => {
    setTimeout(() => {
      typeLine("manaya@portfolio:~ $ whoami", setLine1, 500, () => {
        typeLine("technical_lead && cs_student", setLine2, 800, () => {
          typeLine("manaya@portfolio:~ $ ls skills", setLine3, 500, () => {
            typeLine("python flask machine_learning typescript node.js", setLine4, 800, () => {
              typeLine("manaya@portfolio:~ $ cat passion.txt", setLine5, 500);
            });
          });
        });
      });
    }, 1000);

    // Blinking cursor
    const cursorInterval = setInterval(() => {
      setCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="relative">
      <motion.div 
        className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary via-secondary to-accent blur-xl opacity-20"
        animate={{ 
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      <Card className="relative bg-card p-6 rounded-lg border border-border shadow-xl overflow-hidden">
        <CardContent className="p-0">
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            <div className="ml-auto text-muted-foreground text-sm font-mono">terminal</div>
          </div>
          <div className="font-mono text-sm text-muted-foreground">
            <p className="mb-2">
              {line1}
            </p>
            <p className="mb-4 text-foreground">
              {line2}
            </p>
            <p className="mb-2">
              {line3}
            </p>
            <p className="mb-4">
              <span className="text-secondary">{line4.includes("python") ? "python " : ""}</span>
              <span className="text-primary">{line4.includes("flask") ? "flask " : ""}</span>
              <span className="text-accent">{line4.includes("machine_learning") ? "machine_learning " : ""}</span>
              <span className="text-secondary">{line4.includes("typescript") ? "typescript " : ""}</span>
              <span className="text-primary">{line4.includes("node.js") ? "node.js" : ""}</span>
            </p>
            <p className="mb-2">
              {line5}
            </p>
            <p className="mb-4">
              {line5 && "Building AI-powered applications and scalable web solutions"}
            </p>
            <p>
              <span className="text-accent">manaya@portfolio:</span>
              <span className="text-primary">~</span>$ {cursor && <span className="animate-pulse">|</span>}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TerminalBox;
