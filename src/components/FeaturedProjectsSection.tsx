import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";
import aiRobot from "@/assets/ai-robot.jpg";
import brainNetwork from "@/assets/brain-network.jpg";
import dataAnalytics from "@/assets/data-analytics.jpg";
import cryptoWallet from "@/assets/crypto-wallet.jpg";

const FeaturedProjectsSection = () => {
  const featuredProjects = [
    {
      image: aiRobot,
      name: "AI Chatbot Framework",
      originalPrice: 899,
      salePrice: 649,
      onSale: true
    },
    {
      image: brainNetwork,
      name: "Image Recognition API",
      originalPrice: 749,
      salePrice: 599,
      onSale: true
    },
    {
      image: dataAnalytics,
      name: "Predictive Analytics Engine",
      originalPrice: 1299,
    },
    {
      image: cryptoWallet,
      name: "DeFi Trading Platform",
      originalPrice: 1599,
      salePrice: 1199,
      onSale: true
    },
    {
      image: aiRobot,
      name: "Natural Language Processor",
      originalPrice: 999,
      salePrice: 799,
      onSale: true
    },
    {
      image: dataAnalytics,
      name: "Advanced Data Pipeline",
      originalPrice: 1099,
    }
  ];

  return (
    <section className="py-16 px-4 bg-muted/20">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-orbitron font-bold gradient-text">
            Featured Projects
          </h2>
          <Button variant="outline" className="border-secondary/40 hover:border-secondary">
            View All
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <ProductCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;