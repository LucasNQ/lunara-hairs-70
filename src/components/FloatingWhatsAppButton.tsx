import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const FloatingWhatsAppButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWhatsAppRedirect = () => {
    window.open('https://wa.me/5531984723813?text=Oi!+Estava+no+site+da+Lunara+e+estou+com+algumas+dúvidas.+Voc%C3%AA+pode+me+ajudar?+', '_blank');
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-5 right-5 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center group"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
      </button>

      {/* Modal Dialog */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">Suporte via WhatsApp</DialogTitle>
            <DialogDescription className="text-center">
              Deseja ir para o nosso suporte do WhatsApp?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex-col sm:flex-row gap-2">
            <Button 
              variant="outline" 
              onClick={() => setIsModalOpen(false)}
              className="w-full sm:w-auto"
            >
              Voltar
            </Button>
            <Button 
              onClick={handleWhatsAppRedirect}
              className="w-full sm:w-auto bg-green-500 hover:bg-green-600"
            >
              Sim
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FloatingWhatsAppButton;