
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductsSection from '@/components/ProductsSection';
import BenefitsSection from '@/components/BenefitsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton';

const Index = () => {
  useEffect(() => {
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
        <SEOHead 
          title="Lunara Cosméticos"
          description="Descubra nossa linha completa de produtos profissionais para transformar seus cabelos com resultados de salão no conforto da sua casa. Progressivas, alisadores e muito mais."
          keywords="produtos cabelo, progressiva sem formol, alisamento, cuidados capilares, beleza, cosmética, pente alisador, gummy cabelo"
        />
        <Header />
        <main>
          <HeroSection />
          <ProductsSection />
          <BenefitsSection />
          <TestimonialsSection />
          <FAQSection />
        </main>
        <Footer />
        <FloatingWhatsAppButton />
      </div>
  );
};

export default Index;
