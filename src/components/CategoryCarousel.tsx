import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroLab from "@/assets/hero-lab.jpg";
import heroBlockchain from "@/assets/hero-blockchain.jpg";
import heroCity from "@/assets/hero-city.jpg";
import techWorkspace from "@/assets/tech-workspace.jpg";

const CategoryCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const categories = [
    {
      image: heroLab,
      title: "AI/ML Projects",
      description: "Cutting-edge artificial intelligence and machine learning solutions"
    },
    {
      image: heroBlockchain,
      title: "Blockchain Tools", 
      description: "Decentralized applications and smart contract frameworks"
    },
    {
      image: heroCity,
      title: "Web App Solutions",
      description: "Modern, scalable web applications and APIs"
    },
    {
      image: techWorkspace,
      title: "Enterprise Solutions",
      description: "Enterprise-grade software for business automation"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % categories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + categories.length) % categories.length);
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-2xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {categories.map((category, index) => (
              <div key={index} className="w-full flex-shrink-0 relative">
                <div className="relative h-96 md:h-[500px]">
                  <img 
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
                  
                  <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-8">
                      <div className="max-w-2xl">
                        <h3 className="text-4xl md:text-5xl font-orbitron font-bold text-glow mb-4">
                          {category.title}
                        </h3>
                        <p className="text-xl text-foreground/80 mb-8 font-inter">
                          {category.description}
                        </p>
                        <Button className="btn-accent text-lg px-8 py-3 rounded-full">
                          Shop Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <Button
            size="icon"
            variant="ghost"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            size="icon"
            variant="ghost"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {categories.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? "bg-primary shadow-glow-primary" 
                    : "bg-foreground/30 hover:bg-foreground/50"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryCarousel;