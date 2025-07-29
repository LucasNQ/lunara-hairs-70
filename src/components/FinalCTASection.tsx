
import React from 'react';
import { Button } from '@/components/ui/button';
import { Clock, Gift, Truck, Shield } from 'lucide-react';

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
        <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Header */}
          <div className="fade-in">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Transforme seus cabelos
              <br />
              <span className="text-yellow-300">hoje mesmo!</span>
            </h2>
            
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Última chance de garantir seus produtos com <strong>desconto exclusivo</strong>
              <br />
              e frete grátis para todo o Brasil
            </p>
          </div>

          {/* Urgency Timer */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-8 fade-in fade-in-delay-1">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-6 h-6 text-yellow-300" />
              <span className="text-lg font-semibold">Oferta por tempo limitado!</span>
            </div>
            <div className="text-3xl md:text-4xl font-bold text-yellow-300">
              ⏰ Apenas hoje: 40% OFF
            </div>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-4 gap-6 mb-10 fade-in fade-in-delay-2">
            {[
              { icon: Gift, text: '40% OFF exclusivo' },
              { icon: Truck, text: 'Frete grátis Brasil' },
              { icon: Shield, text: '30 dias garantia' },
              { icon: Clock, text: 'Entrega em 3 dias' }
            ].map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-medium">{benefit.text}</span>
                </div>
              );
            })}
          </div>

          {/* Price Display */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 mb-8 fade-in fade-in-delay-3">
            <div className="text-center">
              <p className="text-lg mb-2">Kit Completo Transformação</p>
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-2xl text-gray-300 line-through">
                  De R$ 299,90
                </span>
                <span className="text-4xl md:text-5xl font-bold text-yellow-300">
                  Por R$ 179,90
                </span>
              </div>
              <p className="text-sm opacity-75">
                ou parcelado em até 12x
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-4 fade-in fade-in-delay-3">
            <Button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-12 py-6 rounded-full text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 w-full md:w-auto">
              🛒 COMPRAR AGORA COM DESCONTO
            </Button>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-full font-semibold transition-all duration-300">
                💬 Tirar Dúvidas no WhatsApp
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-full font-semibold transition-all duration-300">
                📞 Falar com Consultora
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20 fade-in fade-in-delay-3">
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm opacity-75">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Compra 100% Segura</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>+10.000 clientes satisfeitas</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Suporte especializado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
