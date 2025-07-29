
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

const HeroSection = () => {
  const scrollToProducts = () => {
    const productSection = document.getElementById('produtos');
    if (productSection) {
      productSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  const scrollToBenefits = () => {
    const benefitsSection = document.getElementById('beneficios');
    if (benefitsSection) {
      benefitsSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center gradient-bg overflow-hidden">
      {/* Background Pattern - Optimized for performance */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-20 left-2 sm:left-4 md:left-10 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-2 sm:right-4 md:right-10 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-32 left-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1 fade-in">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
              <span className="text-gradient">Autocuidado de verdade</span>
              <br /> 
              sem complicação
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed fade-in fade-in-delay-1 max-w-2xl mx-auto lg:mx-0">
              Na Lunara, a gente acredita que beleza é leveza. Aqui tem tudo pra você se cuidar com praticidade e amor.
            </p>

            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center lg:justify-start fade-in fade-in-delay-2 mb-6 sm:mb-8 md:mb-12">
              <Button 
                onClick={scrollToProducts} 
                className="btn-gradient text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg order-1"
                aria-label="Ver produtos em destaque"
              >
                Ver Produtos
              </Button>
              <Button 
                onClick={scrollToBenefits} 
                variant="outline" 
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg border-2 border-pink-300 text-pink-600 hover:bg-pink-50 order-2"
                aria-label="Saiba mais sobre nossos benefícios"
              >
                Saiba Mais
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col xs:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-gray-500 fade-in fade-in-delay-3">
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" aria-hidden="true"></div>
                <span className="whitespace-nowrap">Frete Grátis Brasil</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" aria-hidden="true"></div>
                <span className="whitespace-nowrap">+10k clientes satisfeitas</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative fade-in fade-in-delay-1 order-1 lg:order-2">
            <div className="relative max-w-xs xs:max-w-sm sm:max-w-md mx-auto lg:max-w-none">
              <OptimizedImage
                src="/lovable-uploads/55505b55-7b7f-4725-a602-48eec7ae7b42.png"
                alt="Mulher com cabelo liso e saudável usando produtos Lunara"
                className="rounded-2xl shadow-2xl hover-scale w-full h-auto object-cover aspect-[3/4] sm:aspect-[4/5] lg:aspect-auto max-h-[400px] sm:max-h-[500px] lg:max-h-none"
                width={800}
                height={600}
                priority={true}
              />
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 md:-bottom-6 md:-left-6 bg-white p-2 sm:p-3 md:p-4 rounded-xl shadow-lg max-w-[120px] xs:max-w-[140px] sm:max-w-none">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm md:text-base">
                    98%
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base">Satisfação</p>
                    <p className="text-xs sm:text-sm text-gray-600">das clientes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block focus:outline-none focus:ring-2 focus:ring-pink-500 rounded-full p-2"
        aria-label="Rolar para seção de produtos"
      >
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </button>
    </section>
  );
};

export default HeroSection;
