import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  image: string;
  name: string;
  originalPrice: number;
  salePrice?: number;
  onSale?: boolean;
}

const ProductCard = ({ image, name, originalPrice, salePrice, onSale = false }: ProductCardProps) => {
  const displayPrice = salePrice || originalPrice;
  
  return (
    <div className="product-card group">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {onSale && (
          <Badge 
            className="absolute top-3 left-3 bg-accent text-accent-foreground font-semibold"
          >
            Sale
          </Badge>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
          {name}
        </h3>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            {onSale && salePrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice}
              </span>
            )}
            <span className="font-bold text-lg text-primary">
              ${displayPrice}
            </span>
          </div>
        </div>
        
        <Button 
          className="w-full btn-neon"
          size="sm"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;