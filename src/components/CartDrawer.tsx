
import React from 'react';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerFooter } from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { Trash2, ShoppingBag, Info } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';
import { productCheckoutLinks } from '@/config/checkoutLinks';
import OptimizedImage from './OptimizedImage';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const { cartItems, removeFromCart, getTotalPrice, clearCart } = useCart();

  const handleLogzzCheckout = (productId: number, productName: string) => {
    const link = productCheckoutLinks[productId]?.logzz;
    if (link) {
      window.open(link, '_blank');
      toast({
        title: "Redirecionando para Logzz...",
        description: `Finalizando compra do produto: ${productName} com pagamento na entrega.`,
      });
    } else {
      toast({
        title: "Link não disponível",
        description: `Este produto não está disponível via Logzz. Use a opção Coinzz.`,
        variant: "destructive",
      });
    }
  };

  const handleCoinzzCheckout = (productId: number, productName: string) => {
    const link = productCheckoutLinks[productId]?.coinzz;
    if (link) {
      window.open(link, '_blank');
      toast({
        title: "Redirecionando para Coinzz...",
        description: `Finalizando compra do produto: ${productName} com pagamento antecipado.`,
      });
    } else {
      toast({
        title: "Link não disponível",
        description: `Este produto não está disponível via Coinzz. Use a opção Logzz.`,
        variant: "destructive",
      });
    }
  };

  const getLogzzExplanation = (productId: number) => {
    const explanations: { [key: number]: string } = {
      10: "Disponível para todas as grandes capitais do Brasil, como São Paulo, Rio de Janeiro, Belo Horizonte, Curitiba, etc.",  // Pente Alisador Portátil
      4: "Disponível para todas as grandes capitais do Brasil, como São Paulo, Rio de Janeiro, Belo Horizonte, Curitiba, etc.",   // Progressiva Vegetal Havana
      2: "Disponível atualmente apenas para Belo Horizonte, São Paulo, Campinas, Curitiba, Salvador e Porto Alegre",             // TopHair Gummy - Cabelo Pele e Unha
      3: "Disponível atualmente apenas para São Paulo, Rio de Janeiro, Recife e Vitória",                                        // Hidratante íntimo Love Girl
      6: "Disponível para todas as grandes capitais do Brasil, como São Paulo, Rio de Janeiro, Belo Horizonte, Curitiba, etc.",  // Clareador de Manchas de Pele
      5: "Disponível atualmente apenas para São Paulo, Goiânia, Manaus, Porto Alegre, Salvador e Teresina",                     // Depilador feminino 5 em 1
      1: "Disponível atualmente apenas para São Paulo, Belo Horizonte e Rio de Janeiro",                                         // Progressiva orgânica Liso Therapy
      8: "Disponível atualmente apenas para Belo Horizonte",                                                                     // Batom Depilador DepilaPlus
      7: "Disponível atualmente apenas para São Paulo"                                                                           // Escova de Limpeza Facial
    };
    return explanations[productId] || "Disponível apenas para quem mora em grandes capitais como São Paulo, Rio de Janeiro, Belo Horizonte, etc.";
  };

  const getCoinzzExplanation = (productId: number) => {
    const explanations: { [key: number]: string } = {
      2: "Use esta opção se sua cidade não estiver entre as cidades disponíveis para a entrega da Logzz",   // TopHair Gummy - Cabelo Pele e Unha
      3: "Use esta opção se sua cidade não estiver entre as cidades disponíveis para a entrega da Logzz",   // Hidratante íntimo Love Girl
      5: "Use esta opção se sua cidade não estiver entre as cidades disponíveis para a entrega da Logzz",   // Depilador feminino 5 em 1
      1: "Use esta opção se sua cidade não estiver entre as cidades disponíveis para a entrega da Logzz",   // Progressiva orgânica Liso Therapy
      8: "Use esta opção se sua cidade não estiver entre as cidades disponíveis para a entrega da Logzz"    // Batom Depilador DepilaPlus
    };
    return explanations[productId];
  };

  if (cartItems.length === 0) {
    return (
      <Drawer open={isOpen} onOpenChange={onClose}>
        <DrawerContent className="max-w-md mx-auto">
          <DrawerHeader>
            <DrawerTitle>Seu Carrinho</DrawerTitle>
          </DrawerHeader>
          <div className="flex flex-col items-center justify-center py-6 sm:py-8 px-3 sm:px-4">
            <ShoppingBag className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mb-3 sm:mb-4" />
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 text-center">Seu carrinho está vazio</h3>
            <p className="text-gray-600 text-center mb-4 sm:mb-6 text-xs sm:text-sm leading-tight px-2">
              Adicione alguns produtos incríveis ao seu carrinho!
            </p>
            <Button onClick={onClose} className="btn-gradient text-white rounded-full px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm">
              Continuar Comprando
            </Button>
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
        <DrawerContent className="max-h-[90vh] max-w-md mx-auto overflow-hidden">
          <DrawerHeader className="px-3 sm:px-4 pb-2">
            <DrawerTitle className="text-sm sm:text-base">Seu Carrinho ({cartItems.length} {cartItems.length === 1 ? 'item' : 'itens'})</DrawerTitle>
          </DrawerHeader>
          
          <div className="flex-1 overflow-y-auto px-3 sm:px-4 max-h-[60vh]">
            {cartItems.map((item) => {
              const links = productCheckoutLinks[item.id];
              const isDepiladorLaserFlex = item.id === 11;
              return (
                <div key={item.id} className="py-3 border-b last:border-b-0">
                  {/* Product Info */}
                  <div className="flex items-start gap-2 sm:gap-3 mb-3">
                    <div className="w-12 h-12 flex-shrink-0">
                      <OptimizedImage
                        src={item.image}
                        alt={`${item.name} - Produto no carrinho`}
                        className="w-full h-full object-contain rounded-lg bg-gray-50"
                        width={48}
                        height={48}
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-xs sm:text-sm leading-tight mb-1 break-words">
                        {item.name}
                      </h3>
                      <p className="text-pink-600 font-bold text-xs sm:text-sm">
                        R$ {item.price.toFixed(2).replace('.', ',')}
                      </p>
                      <p className="text-gray-600 text-xs">Qtd: 1</p>
                    </div>
                    
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-6 w-6 sm:h-7 sm:w-7 text-red-500 hover:text-red-700 flex-shrink-0"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>

                  {/* Explanation for this product - only show for non-Depilador Laser Flex */}
                  {!isDepiladorLaserFlex && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-2 sm:p-3 text-xs mb-3">
                      <div className="flex items-start gap-2">
                        <Info className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div className="min-w-0 flex-1">
                          <p className="font-semibold text-blue-800 mb-2">💡 Opções de entrega:</p>
                          <div className="space-y-1 text-blue-700">
                            <p>• <strong>Logzz:</strong> pagamento na entrega (grandes capitais)</p>
                            <p>• <strong>Coinzz:</strong> pagamento antecipado (todo Brasil)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Special Explanation for Depilador Laser Flex */}
                  {isDepiladorLaserFlex && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-2 sm:p-3 text-xs mb-3">
                      <div className="flex items-start gap-2">
                        <Info className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div className="min-w-0 flex-1">
                          <p className="font-semibold text-blue-800 mb-2">💡 Como funciona a entrega:</p>
                          <div className="space-y-1 text-blue-700">
                            <p>• <strong>Coinzz:</strong> entrega para todo o Brasil com pagamento antecipado</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Checkout Buttons for this product */}
                  <div className="space-y-3">
                    {links?.logzz && !isDepiladorLaserFlex && (
                      <div>
                        <Button
                          onClick={() => handleLogzzCheckout(item.id, item.name)}
                          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold text-xs sm:text-sm"
                        >
                          Pagamento na entrega - Logzz
                        </Button>
                        <p className="text-xs text-gray-600 mt-2 text-center px-1 leading-tight">
                          {getLogzzExplanation(item.id)}
                        </p>
                      </div>
                    )}

                    {links?.coinzz && (
                      <div>
                        <Button
                          onClick={() => handleCoinzzCheckout(item.id, item.name)}
                          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold text-xs sm:text-sm"
                        >
                          {isDepiladorLaserFlex ? 'Finalizar compra - Coinzz' : 'Pagamento antecipado - Coinzz'}
                        </Button>
                        {(getCoinzzExplanation(item.id) || isDepiladorLaserFlex) && (
                          <p className="text-xs text-gray-600 mt-2 text-center px-1 leading-tight">
                            {isDepiladorLaserFlex ? 'Frete grátis para todo o Brasil' : getCoinzzExplanation(item.id)}
                          </p>
                        )}
                      </div>
                    )}

                    {!links?.logzz && !links?.coinzz && (
                      <div className="text-center py-3 text-xs sm:text-sm text-gray-600">
                        Links de checkout não disponíveis para este produto
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
        
        <DrawerFooter className="px-3 sm:px-4 pb-4 border-t">
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm sm:text-lg font-bold">
              <span>Total:</span>
              <span className="text-pink-600">
                R$ {getTotalPrice().toFixed(2).replace('.', ',')}
              </span>
            </div>
            <p className="text-xs text-gray-600 text-center leading-tight">
              *Cada produto é finalizado separadamente
            </p>
            
            <Button
              variant="outline"
              onClick={clearCart}
              className="w-full py-3 text-xs sm:text-sm"
            >
              Limpar Carrinho
            </Button>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
