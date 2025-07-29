
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart } from 'lucide-react';
import { Product, useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';
import OptimizedImage from './OptimizedImage';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  const { addToCart } = useCart();

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Produto adicionado!",
      description: `${product.name} foi adicionado ao seu carrinho.`,
    });
    onClose();
  };

  const productDescription = product.description || 
    `Produto profissional de alta qualidade para cuidado capilar. Desenvolvido com tecnologia avançada para proporcionar resultados excepcionais. Ideal para uso doméstico com resultados de salão.`;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{product.name}</DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Product Image */}
          <div className="relative bg-gray-50 rounded-lg overflow-hidden">
            <div className="w-full h-80 flex items-center justify-center p-4">
              <OptimizedImage
                src={product.image}
                alt={`${product.name} - Visualização detalhada do produto`}
                className="max-w-full max-h-full object-contain"
                width={500}
                height={500}
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-4">
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                {product.rating} ({product.reviews} avaliações)
              </span>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-pink-600">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                </span>
              </div>
              <div className="text-green-600 font-medium">
                Economia de R$ {(product.originalPrice - product.price).toFixed(2).replace('.', ',')}
              </div>
              <div className="text-sm text-gray-600">
                ou parcelado em até 12x
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="font-semibold text-lg mb-2">Descrição</h3>
              <div 
                className="text-gray-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: productDescription }}
              />
            </div>


            {/* Add to Cart Button */}
            <Button 
              onClick={handleAddToCart}
              className="w-full btn-gradient text-white rounded-full font-semibold py-3 text-lg"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Adicionar ao Carrinho
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
