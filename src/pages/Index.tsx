import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import FeaturedProjectsSection from "@/components/FeaturedProjectsSection";
import CategoryCarousel from "@/components/CategoryCarousel";
import WhyChooseSection from "@/components/WhyChooseSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <FeaturedProjectsSection />
        <CategoryCarousel />
        <WhyChooseSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;