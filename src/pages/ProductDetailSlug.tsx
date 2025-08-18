import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useProducts } from '@/hooks/useProducts';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductGallery from '@/components/ProductGallery';
import { productDescriptions } from '@/data/productDescriptions';
import SEOHead from '@/components/SEOHead';

const ProductDetailSlug = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { getProductBySlug } = useProducts();
  const { addToCart } = useCart();

  const product = slug ? getProductBySlug(slug) : null;

  React.useEffect(() => {
    if (!product) {
      navigate('/products');
    }
  }, [product, navigate]);

  if (!product) {
    return null;
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Produto adicionado!",
      description: `${product.name} foi adicionado ao seu carrinho.`,
    });
  };

  const description = productDescriptions[product.id] || "Produto de alta qualidade para cuidados pessoais e beleza. Aprovado por especialistas e com garantia de satisfação.";

  return (
    <>
      <SEOHead
        title={`${product.name} - Lunara Cosméticos`}
        description={`${product.name} por apenas R$ ${product.price.toFixed(2).replace('.', ',')}. ${description.substring(0, 120)}...`}
        keywords={`${product.name.toLowerCase()}, produtos de beleza, cosméticos, lunara, cuidados pessoais`}
        ogImage={product.image}
        canonicalUrl={`https://lunara.com.br/produto/${product.slug}`}
      />
      
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="container mx-auto px-4 pt-24 pb-8 max-w-6xl">
          <Button
            variant="outline"
            onClick={() => navigate('/products')}
            className="mb-6 flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Voltar aos Produtos
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Product Images */}
            <div className="order-1 lg:order-1">
              <ProductGallery 
                images={product.images} 
                productName={product.name}
              />
            </div>

            {/* Product Info */}
            <div className="order-2 lg:order-2 space-y-6">
              <div>
                <Badge className={`${product.badgeColor} text-white mb-4`}>
                  {product.badge}
                </Badge>
                
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-3 mb-6">
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
                  <span className="text-lg text-gray-600">
                    {product.rating} ({product.reviews} avaliações)
                  </span>
                </div>

                {/* Price */}
                <div className="space-y-2 mb-8">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl font-bold text-pink-600">
                      R$ {product.price.toFixed(2).replace('.', ',')}
                    </span>
                    <span className="text-xl text-gray-500 line-through">
                      R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                  <div className="text-lg text-green-600 font-medium">
                    Economia de R$ {(product.originalPrice - product.price).toFixed(2).replace('.', ',')} 
                    ({Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF)
                  </div>
                </div>

                {/* CTA Button */}
                <Button 
                  onClick={handleAddToCart}
                  className="w-full btn-gradient text-white text-lg py-6 rounded-full font-semibold flex items-center justify-center gap-3"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Adicionar ao Carrinho
                </Button>
              </div>
            </div>
          </div>

          {/* Product Description */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Descrição do Produto</h2>
              <div 
                className="prose prose-lg max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </CardContent>
          </Card>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ProductDetailSlug;