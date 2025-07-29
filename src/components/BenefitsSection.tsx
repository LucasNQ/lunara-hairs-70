
import React from 'react';
import { Shield, Heart, Sparkles, Clock, Award, Truck } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Heart,
      title: 'Fórmula Natural',
      description: 'Ingredientes selecionados que respeitam a saúde dos seus cabelos'
    },
    {
      icon: Sparkles,
      title: 'Resultado Profissional',
      description: 'Qualidade de salão no conforto da sua casa'
    },
    {
      icon: Shield,
      title: 'Aprovado pela Anvisa',
      description: 'Produtos rigorosamente revisionados pela anvisa'
    },
    {
      icon: Award,
      title: 'Durabilidade Avançada',
      description: 'Resultados que permanecem por mais tempo'
    },
    {
      icon: Truck,
      title: 'Entrega Rápida',
      description: 'Frete grátis para todo Brasil'
    }
  ];

  return (
    <section id="beneficios" className="py-20 gradient-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-400 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Por que escolher nossos <span className="text-gradient">produtos?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Transforme seu cabelo e sua pele com produtos que não apenas tratam, mas abraçam sua natureza selvagem, única e imbatível.</p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index} 
                className={`group p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 fade-in fade-in-delay-${index % 3 + 1}`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 fade-in fade-in-delay-3">
          {[
            { number: '10.000+', label: 'Clientes Satisfeitas' },
            { number: '98%', label: 'Taxa de Aprovação' },
            { number: 'Free', label: 'Frete Grátis' },
            { number: '24h', label: 'Suporte Dedicado' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
