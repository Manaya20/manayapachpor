import { Dispatch, SetStateAction, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
  // Close menu when clicking on a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Close menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="md:hidden bg-muted/20 backdrop-blur-md border-b border-border"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a 
              href="#about" 
              className="block px-3 py-2 rounded-md hover:bg-primary/10 hover:text-primary transition-colors duration-300"
              onClick={handleLinkClick}
            >
              About
            </a>
            <a 
              href="#experience" 
              className="block px-3 py-2 rounded-md hover:bg-primary/10 hover:text-primary transition-colors duration-300"
              onClick={handleLinkClick}
            >
              Experience
            </a>
            <a 
              href="#projects" 
              className="block px-3 py-2 rounded-md hover:bg-primary/10 hover:text-primary transition-colors duration-300"
              onClick={handleLinkClick}
            >
              Projects
            </a>
            <a 
              href="#skills" 
              className="block px-3 py-2 rounded-md hover:bg-primary/10 hover:text-primary transition-colors duration-300"
              onClick={handleLinkClick}
            >
              Skills
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-2 rounded-md hover:bg-primary/10 hover:text-primary transition-colors duration-300"
              onClick={handleLinkClick}
            >
              Contact
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
