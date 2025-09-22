import { Button } from "@/components/ui/button";
import techWorkspace from "@/assets/tech-workspace.jpg";

const WhyChooseSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-orbitron font-bold text-center gradient-text mb-16">
          Why Choose Codex?
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed font-inter">
              At Codex, we provide a revolutionary platform for{" "}
              <span className="text-primary font-semibold">lightning-fast deployment</span> of 
              enterprise-grade software solutions. Our marketplace features carefully curated,{" "}
              <span className="text-secondary font-semibold">ready-made software</span> across 
              AI/ML, blockchain, web applications, and cutting-edge fintech solutions.
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed font-inter">
              Whether you're building the next unicorn startup or scaling an enterprise operation, 
              our pre-built solutions eliminate months of development time, allowing you to{" "}
              <span className="text-accent font-semibold">focus on innovation</span> rather than 
              infrastructure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="btn-neon px-8 py-3">
                Learn More
              </Button>
              <Button 
                variant="outline" 
                className="px-8 py-3 border-primary/40 hover:border-primary hover:bg-primary/10"
              >
                Explore Now
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={techWorkspace}
                alt="High-tech workspace"
                className="w-full h-auto object-cover float-animation"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;