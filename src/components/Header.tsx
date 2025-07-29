
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { getTotalItems } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProducts = () => {
    const productSection = document.getElementById('produtos');
    if (productSection) {
      productSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleCartClick = () => {
    navigate('/cart');
    setIsMenuOpen(false);
  };

  const handleMenuItemClick = (href: string) => {
    setIsMenuOpen(false);
    
    if (location.pathname === '/') {
      setTimeout(() => {
        // For contact link, scroll to FAQ section
        if (href === '#contato') {
          const faqSection = document.querySelector('#contato');
          if (faqSection) {
            faqSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
            return;
          }
        }
        
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      navigate(`/${href}`);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect shadow-lg' : 'glass-effect'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => navigate('/')}
              className="text-lg sm:text-xl md:text-2xl font-bold text-gradient hover:opacity-80 transition-opacity"
            >
              Lunara
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleMenuItemClick(item.href)}
                className="text-gray-700 hover:text-pink-500 transition-colors duration-300 font-medium text-sm xl:text-base whitespace-nowrap"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Cart and CTA - Desktop */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3">
            <button 
              onClick={handleCartClick}
              className="relative p-2 text-gray-700 hover:text-pink-500 transition-colors flex-shrink-0"
              aria-label="Carrinho de compras"
            >
              <ShoppingCart className="h-5 w-5 xl:h-6 xl:w-6" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full h-4 w-4 xl:h-5 xl:w-5 flex items-center justify-center font-medium">
                  {getTotalItems()}
                </span>
              )}
            </button>
            <Button 
              onClick={scrollToProducts}
              className="btn-gradient text-white px-3 py-2 xl:px-4 xl:py-2 rounded-full font-semibold text-sm xl:text-base whitespace-nowrap"
            >
              Compre Agora
            </Button>
          </div>

          {/* Mobile cart and menu button */}
          <div className="flex items-center space-x-1 lg:hidden">
            <button 
              onClick={handleCartClick}
              className="relative p-2 text-gray-700 hover:text-pink-500 transition-colors flex-shrink-0"
              aria-label="Carrinho de compras"
            >
              <ShoppingCart className="h-5 w-5" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-medium">
                  {getTotalItems()}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-pink-500 transition-colors flex-shrink-0"
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="px-4 pt-2 pb-4 space-y-1 bg-white/95 backdrop-blur-sm rounded-lg mt-2 shadow-lg mx-4">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleMenuItemClick(item.href)}
                  className="block w-full text-left px-3 py-3 text-gray-700 hover:text-pink-500 transition-colors font-medium text-base"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-3 border-t border-gray-200">
                <Button 
                  onClick={scrollToProducts}
                  className="w-full btn-gradient text-white py-3 rounded-full font-semibold text-base"
                >
                  Compre Agora
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
