import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductGallery from '@/components/ProductGallery';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart, ArrowLeft } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';
import { useProducts } from '@/hooks/useProducts';
import { productDescriptions } from '@/data/productDescriptions';
const ProductDetail = () => {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const {
    addToCart
  } = useCart();
  const {
    getProductById
  } = useProducts();
  const product = getProductById(Number(id));
  if (!product) {
    return <Navigate to="/products" replace />;
  }
  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Produto adicionado!",
      description: `${product.name} foi adicionado ao seu carrinho.`
    });
  };
  return <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        <section className="sm:py-12 bg-gradient-to-r from-pink-50 to-purple-50 py-0">
          <div className="container mx-auto px-4 bg-white">
            <div className="flex items-center gap-4 mb-6">
              <Link to="/products">
                <Button variant="outline" className="flex items-center gap-2 shadow-lg">
                  <ArrowLeft className="w-4 h-4" />
                  Voltar aos Produtos
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Product Gallery */}
              <div className="order-1 lg:order-1">
                <ProductGallery images={product.images} productName={product.name} />
              </div>

              {/* Product Info */}
              <div className="order-2 lg:order-2 space-y-6">
                {/* Title */}
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                    {product.name}
                  </h1>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />)}
                  </div>
                  <span className="text-gray-600">
                    {product.rating} ({product.reviews} avaliações)
                  </span>
                </div>

                {/* Price */}
                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl sm:text-4xl font-bold text-pink-600">
                      R$ {product.price.toFixed(2).replace('.', ',')}
                    </span>
                    <span className="text-xl text-gray-500 line-through">
                      R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                  <div className="text-green-600 font-semibold text-lg">
                    Economia de R$ {(product.originalPrice - product.price).toFixed(2).replace('.', ',')}
                  </div>
                  <div className="text-sm text-gray-600">
                    ou parcelado em até 12x
                  </div>
                </div>

                {/* Add to Cart */}
                <div>
                  <Button onClick={handleAddToCart} className="w-full btn-gradient text-white rounded-full font-semibold py-4 text-lg">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Adicionar ao Carrinho
                  </Button>
                </div>

                {/* Description */}
                <div className="prose max-w-none">
                  <h3 className="text-xl font-semibold mb-3">Sobre o produto</h3>
                  <div 
                    className="text-gray-600 leading-relaxed"
                    dangerouslySetInnerHTML={{ 
                      __html: productDescriptions[product.id] || 
                        "Este é um produto de alta qualidade desenvolvido especialmente para cuidados de beleza. Com resultados comprovados e aprovação de milhares de clientes satisfeitas." 
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default ProductDetail;