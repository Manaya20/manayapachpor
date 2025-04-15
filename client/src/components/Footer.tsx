const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start">
            <a href="#hero" className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Manaya Pachpor
            </a>
          </div>
          <div className="mt-8 md:mt-0">
            <p className="text-center md:text-right text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} Manaya Pachpor. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
