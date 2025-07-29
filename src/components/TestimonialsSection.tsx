import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [{
    id: 1,
    name: 'Larissa Oliveira',
    location: 'Porto Alegre, RS',
    rating: 5,
    text: 'Sabe aquela luta contra a queda de cabelo? Eu estava nessa e decidi tentar o Tophair Gummy. E, sério, foi a melhor decisão! Meus fios ficaram muito mais fortes, com mais volume e não caem tanto mais. E o melhor, ele é gostoso! Agora não fico mais sem ele!',
    image: '/lovable-uploads/36f058a2-c1dd-4cb9-a35d-2587550c9dda.png',
    product: 'Tophair Gummy'
  }, {
    id: 2,
    name: 'Amanda Costa',
    location: 'São Paulo, SP',
    rating: 5,
    text: 'Sempre fiquei com receio de fazer progressiva por medo de danificar o cabelo. Mas a Progressiva Vegetal Sem Formol foi uma surpresa maravilhosa! Meu cabelo ficou lisinho, com um brilho incrível, e o melhor, sem aquele cheiro forte de química. Super recomendo!',
    image: '/lovable-uploads/3c03a1b5-bc3d-489e-a9eb-62c970695b6a.png',
    product: 'Progressiva Vegetal Sem Formol'
  }, {
    id: 3,
    name: 'Júlia Fernandes',
    location: 'Rio de Janeiro, RJ',
    rating: 5,
    text: 'Eu estava com muitas manchas de acne e já tinha tentado de tudo, mas nada fazia efeito. Quando comecei a usar o Clareador de Manchas de Pele, eu não acreditei no resultado! Minhas manchas desapareceram rápido, e minha pele ficou mais uniforme e iluminada. Agora não fico mais sem esse produto!',
    image: '/lovable-uploads/58b7463a-c562-44db-b910-a8a905eb62cc.png',
    product: 'Clareador de Manchas de Pele'
  }, {
    id: 4,
    name: 'Renata Silva',
    location: 'Belo Horizonte, MG',
    rating: 5,
    text: 'Eu sempre tive dificuldade para depilar meu rosto em casa, até que encontrei o Batom Depilador DepilaPlus. Ele é super prático, fácil de usar e, o melhor de tudo, não me causou dor. Meu rosto ficou lisinho e sem nenhuma irritação. Amei!',
    image: '/lovable-uploads/19fd8c76-8f84-4be9-a64d-83af04878208.png',
    product: 'Batom Depilador DepilaPlus'
  }];
  const nextTestimonial = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentIndex(prevIndex => prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1);
  };
  return <section id="depoimentos" className="pt-8 pb-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-6 md:mb-12 lg:mb-16 fade-in">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 md:mb-4 lg:mb-6">
            O que nossas <span className="text-gradient">clientes dizem</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Milhares de mulheres já transformaram seus cabelos conosco. 
            Veja alguns depoimentos reais de quem confia na nossa qualidade.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out" style={{
              transform: `translateX(-${currentIndex * 100}%)`
            }}>
                {testimonials.map(testimonial => <div key={testimonial.id} className="w-full flex-shrink-0 px-2 md:px-4">
                    <Card className="mx-auto max-w-3xl shadow-lg">
                      <CardContent className="p-4 md:p-6 lg:p-8">
                        <div className="text-center">
                          {/* Quote Icon */}
                          <Quote className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-pink-300 mx-auto mb-3 md:mb-4 lg:mb-6" />
                          
                          {/* Rating */}
                          <div className="flex justify-center mb-4 md:mb-6">
                            {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-yellow-400 fill-current" />)}
                          </div>

                          {/* Testimonial Text */}
                          <blockquote className="text-sm md:text-base lg:text-xl xl:text-2xl text-gray-700 italic mb-4 md:mb-6 lg:mb-8 leading-relaxed px-2">
                            "{testimonial.text}"
                          </blockquote>

                          {/* Customer Info */}
                          <div className="flex items-center justify-center gap-3 md:gap-4 flex-wrap">
                            <OptimizedImage 
                              src={testimonial.image} 
                              alt={`Foto de ${testimonial.name}, cliente satisfeita`} 
                              className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full object-cover flex-shrink-0" 
                              width={64}
                              height={64}
                            />
                            <div className="text-left min-w-0">
                              <h4 className="font-bold text-gray-800 text-sm md:text-base">
                                {testimonial.name}
                              </h4>
                              <p className="text-gray-600 text-xs md:text-sm">
                                {testimonial.location}
                              </p>
                              <p className="text-xs md:text-sm text-pink-600 font-medium">
                                Comprou: {testimonial.product}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>)}
              </div>
            </div>

            {/* Navigation Buttons - Positioned to the sides of the card */}
            <Button variant="outline" size="icon" onClick={prevTestimonial} className="absolute left-2 md:-left-12 lg:-left-16 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:shadow-xl z-10 rounded-full w-10 h-10 md:w-12 md:h-12">
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </Button>

            <Button variant="outline" size="icon" onClick={nextTestimonial} className="absolute right-2 md:-right-12 lg:-right-16 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:shadow-xl z-10 rounded-full w-10 h-10 md:w-12 md:h-12">
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </Button>
          </div>

          {/* Dots Indicator - Redesigned as small circles */}
          
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;