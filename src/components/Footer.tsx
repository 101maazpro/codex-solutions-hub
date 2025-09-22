import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const exploreLinks = [
    "Premium Projects",
    "Starter Kits", 
    "Enterprise Solutions"
  ];

  const solutionsLinks = [
    "AI/ML Projects",
    "Web App Solutions",
    "Blockchain Tools"
  ];

  const companyLinks = [
    "About Us",
    "Contact"
  ];

  return (
    <footer className="bg-muted/30 border-t border-border/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-orbitron font-bold gradient-text mb-4">
              Codex
            </h3>
            <p className="text-foreground/70 mb-6 max-w-md font-inter">
              The leading marketplace for innovative software solutions. 
              Deploy faster, build smarter, scale better with Codex.
            </p>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 font-orbitron">
              Explore
            </h4>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-foreground/70 hover:text-primary transition-colors font-inter"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 font-orbitron">
              Solutions
            </h4>
            <ul className="space-y-3">
              {solutionsLinks.map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-foreground/70 hover:text-primary transition-colors font-inter"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 font-orbitron">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-foreground/70 hover:text-primary transition-colors font-inter"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 pt-8 border-t border-border/40">
          <div className="max-w-md mx-auto text-center">
            <h4 className="font-semibold text-foreground mb-4 font-orbitron">
              Stay Updated
            </h4>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-background/50 border-border/40 focus:border-primary"
              />
              <Button className="btn-neon px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60 font-inter mb-4 md:mb-0">
            © 2025 Codex. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6">
            <a 
              href="#" 
              className="text-sm text-foreground/60 hover:text-primary transition-colors font-inter"
            >
              Terms and Conditions
            </a>
            <a 
              href="#" 
              className="text-sm text-foreground/60 hover:text-primary transition-colors font-inter"
            >
              Privacy Policy
            </a>
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-3 ml-6">
              <a 
                href="#" 
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;