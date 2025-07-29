import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart } from 'lucide-react';
import { Product, useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';
import OptimizedImage from './OptimizedImage';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

const ProductCard = ({ product, priority = false }: ProductCardProps) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (event: React.MouseEvent) => {
    event.stopPropagation();
    addToCart(product);
    toast({
      title: "Produto adicionado!",
      description: `${product.name} foi adicionado ao seu carrinho.`,
    });
  };

  return (
    <Card 
      className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
      onClick={handleProductClick}
    >
      <div className="relative overflow-hidden rounded-t-lg flex-shrink-0 bg-gray-50">
        <div className="w-full h-40 xs:h-48 sm:h-56 lg:h-64 flex items-center justify-center p-2 sm:p-3">
          <OptimizedImage
            src={product.image}
            alt={`${product.name} - Produto de cuidado e beleza`}
            className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
            width={300}
            height={300}
            priority={priority}
          />
        </div>
        <Badge className={`absolute top-4 left-4 ${product.badgeColor} text-white`}>
          {product.badge}
        </Badge>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <ShoppingCart className="w-5 h-5 text-gray-700" />
        </div>
      </div>

      <CardContent className="p-4 sm:p-6">
        <h3 className="font-bold text-base sm:text-lg text-gray-800 mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 sm:w-4 sm:h-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs sm:text-sm text-gray-600">
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg sm:text-2xl font-bold text-pink-600">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </span>
          <span className="text-xs sm:text-sm text-gray-500 line-through">
            R$ {product.originalPrice.toFixed(2).replace('.', ',')}
          </span>
        </div>

        <div className="text-xs sm:text-sm text-green-600 font-medium mb-4">
          Economia de R$ {(product.originalPrice - product.price).toFixed(2).replace('.', ',')}
        </div>
      </CardContent>

      <CardFooter className="p-4 sm:p-6 pt-0">
        <Button 
          onClick={handleAddToCart}
          className="w-full btn-gradient text-white rounded-full font-semibold text-sm sm:text-base py-2 sm:py-3"
        >
          Adicionar ao Carrinho
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;