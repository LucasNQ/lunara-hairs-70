import React from 'react';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import OptimizedImage from './OptimizedImage';
const Footer = () => {
  return <footer id="contato" className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 sm:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Brand Section with Images */}
          <div className="space-y-3 text-center sm:text-left">
            {/* Payment and Security Images */}
            <div className="flex flex-col xs:flex-row gap-2 justify-center sm:justify-start items-center mb-3">
              <div className="flex-1 max-w-[160px]">
                <OptimizedImage 
                  src="/lovable-uploads/06986a20-883a-4d38-afa4-b5f694d0fd8b.png" 
                  alt="Formas de pagamento aceitas - Cartão de crédito, débito, PIX, boleto" 
                  className="w-full h-auto object-contain" 
                  width={160}
                  height={60}
                />
              </div>
              <div className="flex-1 max-w-[160px]">
                <OptimizedImage 
                  src="/lovable-uploads/ca1b7555-db20-4722-919f-2cc877971cb6.png" 
                  alt="Site seguro com certificado SSL e verificado pelo Google" 
                  className="w-full h-auto object-contain" 
                  width={160}
                  height={60}
                />
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-gradient">Lunara</h3>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base px-2 sm:px-0">Autocuidado de verdade sem complicação. Brilhe com o poder do seu Cabelo e da sua Pele.</p>
            <div className="flex space-x-3 justify-center sm:justify-start pt-2">
              <a href="https://www.facebook.com/profile.php?id=61574815833708" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="https://www.instagram.com/lunara_cosmeticos_?igsh=ZWVvMjVremhsM280" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>


          {/* Support */}
          <div className="space-y-4 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold">Suporte</h4>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li>
                <a href="https://wa.me/5531984723813?text=Oi!+Estava+no+site+da+Lunara+e+estou+com+algumas+d%C3%BAvidas.+Voc%C3%AA+pode+me+ajudar?+" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors inline-block py-1">
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a href="https://wa.me/5531984723813?text=Oi!+Estava+no+site+da+Lunara+e+estou+com+algumas+d%C3%BAvidas.+Voc%C3%AA+pode+me+ajudar?+" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors inline-block py-1">
                  Como Aplicar
                </a>
              </li>
              <li>
                <a href="https://wa.me/5531984723813?text=Oi!+Estava+no+site+da+Lunara+e+estou+com+algumas+d%C3%BAvidas.+Voc%C3%AA+pode+me+ajudar?+" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors inline-block py-1">
                  Rastreamento
                </a>
              </li>
              <li>
                <a href="https://wa.me/5531984723813?text=Oi!+Estava+no+site+da+Lunara+e+estou+com+algumas+d%C3%BAvidas.+Voc%C3%AA+pode+me+ajudar?+" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors inline-block py-1">
                  Garantia
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400 justify-center sm:justify-start">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400 flex-shrink-0" />
                <span className="text-sm sm:text-base">(31) 98472-3813</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 justify-center sm:justify-start">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400 flex-shrink-0" />
                <span className="text-sm sm:text-base break-all">lunarahairs@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 justify-center sm:justify-start">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400 flex-shrink-0" />
                <span className="text-sm sm:text-base">Belo Horizonte, MG 30110-001</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 sm:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © 2025 Lunara. Todos os direitos reservados.
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
              <Link to="/privacy-policy" className="hover:text-pink-400 transition-colors py-1">
                Política de Privacidade
              </Link>
              <Link to="/terms-of-service" className="hover:text-pink-400 transition-colors py-1">
                Termos de Uso
              </Link>
              <Link to="/cookies" className="hover:text-pink-400 transition-colors py-1">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;