import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";
import cryptoWallet from "@/assets/crypto-wallet.jpg";
import aiRobot from "@/assets/ai-robot.jpg";
import dataAnalytics from "@/assets/data-analytics.jpg";
import brainNetwork from "@/assets/brain-network.jpg";

const ProductsSection = () => {
  const products = [
    {
      image: cryptoWallet,
      name: "Blockchain Analytics API",
      originalPrice: 299,
      salePrice: 199,
      onSale: true
    },
    {
      image: aiRobot,
      name: "AI Chatbot Framework",
      originalPrice: 459,
      salePrice: 329,
      onSale: true
    },
    {
      image: dataAnalytics,
      name: "Real-time Analytics Suite",
      originalPrice: 599,
    },
    {
      image: brainNetwork,
      name: "Neural Network Toolkit",
      originalPrice: 749,
      salePrice: 549,
      onSale: true
    },
    {
      image: cryptoWallet,
      name: "Crypto Wallet SDK",
      originalPrice: 399,
      salePrice: 299,
      onSale: true
    },
    {
      image: aiRobot,
      name: "Machine Learning Platform",
      originalPrice: 899,
    },
    {
      image: dataAnalytics,
      name: "Business Intelligence API",
      originalPrice: 699,
      salePrice: 499,
      onSale: true
    },
    {
      image: brainNetwork,
      name: "Deep Learning Framework",
      originalPrice: 799,
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-orbitron font-bold gradient-text">
            Explore Our Cutting-Edge Software
          </h2>
          <Button variant="outline" className="border-primary/40 hover:border-primary">
            View All
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;