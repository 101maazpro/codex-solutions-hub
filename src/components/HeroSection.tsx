import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import heroLab from "@/assets/hero-lab.jpg";
import heroBlockchain from "@/assets/hero-blockchain.jpg";
import heroCity from "@/assets/hero-city.jpg";

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const heroImages = [
    {
      src: heroLab,
      alt: "Futuristic Laboratory"
    },
    {
      src: heroBlockchain,
      alt: "Blockchain Network"
    },
    {
      src: heroCity,
      alt: "Smart City"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Crossfade */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-background/60" />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-orbitron font-bold text-glow mb-6 float-animation">
          Discover Innovative{" "}
          <span className="gradient-text">Software Solutions</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/80 mb-8 font-inter max-w-3xl mx-auto leading-relaxed">
          Explore Codex, the leading marketplace for ready-made software projects across{" "}
          <span className="text-primary font-semibold">AI/ML</span>, Web apps,{" "}
          <span className="text-secondary font-semibold">blockchain</span>, healthtech, and fintech.{" "}
          <span className="text-accent font-semibold">Find your next solution today!</span>
        </p>

        <Button 
          size="lg" 
          className="btn-neon text-lg px-8 py-4 rounded-full pulse-glow"
        >
          Explore Now
        </Button>
      </div>

      {/* Animated Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImage 
                ? "bg-primary shadow-glow-primary" 
                : "bg-foreground/30 hover:bg-foreground/50"
            }`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;