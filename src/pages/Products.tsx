
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductModal from '@/components/ProductModal';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Product } from '@/contexts/CartContext';
import { useProducts } from '@/hooks/useProducts';

const Products = () => {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { products } = useProducts();


  return (
    <>
      <div className="min-h-screen">
        <Header />
        
        <main className="pt-20">
          {/* Page Header */}
          <section className="py-12 bg-gradient-to-r from-pink-50 to-purple-50">
            <div className="container mx-auto px-4">
              <div className="flex items-center gap-4 mb-6">
                <Link to="/">
                  <Button variant="outline" className="flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Voltar
                  </Button>
                </Link>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Todos os <span className="text-gradient">Produtos</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl">
                Tudo o que você precisa, num só lugar!<br />
                Aqui você encontra nossa linha completa de cuidados para cabelo e pele — feita pra facilitar sua rotina e deixar você com aquele glow de quem se ama. Produtos práticos, de qualidade e com resultados reais, direto na sua casa.
              </p>
            </div>
          </section>

          {/* Products Grid */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {products.map((product, index) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    priority={index < 3}
                  />
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      <ProductModal 
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Products;
