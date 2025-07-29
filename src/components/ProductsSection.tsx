
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ProductCard from './ProductCard';
import { useProducts } from '@/hooks/useProducts';

const ProductsSection = () => {
  const navigate = useNavigate();
  const { getFeaturedProducts } = useProducts();
  
  const featuredProducts = getFeaturedProducts(3);

  const handleViewAllProducts = () => {
    navigate('/products');
  };

  return (
    <section id="produtos" className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 fade-in">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
            Produtos em <span className="text-gradient">Destaque</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Quando a gente encontra um produto que realmente entende o nosso cabelo e a nossa pele, tudo muda. É cuidado de verdade, feito pra realçar o que a gente já tem de mais bonito.
          </p>
        </div>

        {/* Products Grid - Mobile-First Strategy */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              priority={index === 0}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-6 sm:mt-8 lg:mt-12 fade-in fade-in-delay-3">
          <Button 
            onClick={handleViewAllProducts} 
            className="btn-gradient text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
            aria-label="Ver todos os produtos disponíveis"
          >
            Ver Todos os Produtos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
