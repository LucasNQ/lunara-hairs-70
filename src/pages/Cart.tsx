
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton';
import { Button } from '@/components/ui/button';
import { Trash2, ShoppingBag, ArrowLeft, Info } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';
import { productCheckoutLinks } from '@/config/checkoutLinks';
import OptimizedImage from '@/components/OptimizedImage';

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    getTotalPrice,
    clearCart
  } = useCart();

  const handleLogzzCheckout = (productId: number, productName: string) => {
    const link = productCheckoutLinks[productId]?.logzz;
    if (link) {
      window.open(link, '_blank');
      toast({
        title: "Redirecionando para Logzz...",
        description: `Finalizando compra do produto: ${productName} com pagamento na entrega.`
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
        description: `Finalizando compra do produto: ${productName} com pagamento antecipado.`
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

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      
      <main className="pt-20">
        {/* Page Header */}
        <section className="py-8 sm:py-12 bg-gradient-to-r from-pink-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
              <Link to="/">
                <Button variant="outline" className="flex items-center gap-2 text-sm sm:text-base px-3 sm:px-4 py-2">
                  <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Voltar</span>
                </Button>
              </Link>
            </div>
            
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-2 sm:mb-4">
              Seu <span className="text-gradient">Carrinho</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-600">
              {cartItems.length > 0 ? `${cartItems.length} ${cartItems.length === 1 ? 'produto' : 'produtos'} no seu carrinho` : 'Seu carrinho está vazio'}
            </p>
          </div>
        </section>

        {/* Cart Content */}
        <section className="py-8 sm:py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-8 sm:py-12 px-4">
                <ShoppingBag className="w-16 sm:w-24 h-16 sm:h-24 text-gray-300 mb-4 sm:mb-6" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2 sm:mb-4 text-center">Seu carrinho está vazio</h3>
                <p className="text-gray-600 text-center mb-6 sm:mb-8 max-w-md text-sm sm:text-base px-2 leading-tight">
                  Parece que você ainda não adicionou nenhum produto ao seu carrinho. 
                  Que tal dar uma olhada em nossos produtos incríveis?
                </p>
                <Link to="/products">
                  <Button className="btn-gradient text-white rounded-full px-6 sm:px-8 py-3 text-sm sm:text-base touch-manipulation">
                    Ver Produtos
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="w-full">
                {/* Cart Items */}
                <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 overflow-hidden mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Produtos no Carrinho</h2>
                  
                  <div className="space-y-6 sm:space-y-8">
                    {cartItems.map(item => {
                      const links = productCheckoutLinks[item.id];
                      const isDepiladorLaserFlex = item.id === 11;
                      return (
                        <div key={item.id} className="border border-gray-200 rounded-lg p-3 sm:p-4 md:p-6">
                          {/* Product Info */}
                          <div className="flex items-start gap-3 sm:gap-4 mb-4">
                            <div className="w-16 h-16 flex-shrink-0">
                              <OptimizedImage 
                                src={item.image} 
                                alt={`${item.name} - Produto no carrinho`} 
                                className="w-full h-full object-contain rounded-lg bg-gray-50"
                                width={64}
                                height={64}
                              />
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-sm sm:text-base md:text-lg text-gray-800 mb-1 break-words leading-tight">
                                {item.name}
                              </h3>
                              <p className="text-pink-600 font-bold text-base sm:text-lg md:text-xl">
                                R$ {item.price.toFixed(2).replace('.', ',')}
                              </p>
                              <p className="text-gray-600 text-xs sm:text-sm">Quantidade: 1</p>
                            </div>
                            
                            <Button 
                              variant="outline" 
                              size="icon" 
                              className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 text-red-500 hover:text-red-700 flex-shrink-0" 
                              onClick={() => removeFromCart(item.id)}
                            >
                              <Trash2 className="h-3 w-3 sm:h-4 sm:w-4" />
                            </Button>
                          </div>

                          {/* Explanation Box for this product */}
                          {!isDepiladorLaserFlex && (
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4 text-xs sm:text-sm mb-4">
                              <div className="flex items-start gap-2">
                                <Info className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                <div className="min-w-0 flex-1">
                                  <p className="font-semibold text-blue-800 mb-2">💡 Como funciona a entrega deste produto:</p>
                                  <div className="space-y-1 text-blue-700">
                                    <p>• <strong>Logzz:</strong> entrega com pagamento na hora, disponível apenas nas grandes capitais.</p>
                                    {!(item.name === "Progressiva orgânica Liso Therapy" || item.name === "Escova de Limpeza Facial 5 em 1") && (
                                      <p>• <strong>Coinzz:</strong> entrega para todo o Brasil com pagamento antecipado.</p>
                                    )}
                                  </div>
                                  <p className="text-blue-700 mt-2 font-medium">Escolha corretamente de acordo com a sua região:</p>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Special Explanation Box for Depilador Laser Flex */}
                          {isDepiladorLaserFlex && (
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4 text-xs sm:text-sm mb-4">
                              <div className="flex items-start gap-2">
                                <Info className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                <div className="min-w-0 flex-1">
                                  <p className="font-semibold text-blue-800 mb-2">💡 Como funciona a entrega deste produto:</p>
                                  <div className="space-y-1 text-blue-700">
                                    <p>• <strong>Coinzz:</strong> entrega para todo o Brasil com pagamento antecipado.</p>
                                  </div>
                                  <p className="text-blue-700 mt-2 font-medium">Clique abaixo para finalizar sua compra:</p>
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
                                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-sm sm:text-base font-semibold rounded-lg touch-manipulation"
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
                                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-sm sm:text-base font-semibold rounded-lg touch-manipulation"
                                >
                                  {isDepiladorLaserFlex ? 'Finalizar compra - Coinzz' : 'Pagamento antecipado - Coinzz'}
                                </Button>
                                <p className="text-xs text-gray-600 mt-2 text-center px-1 leading-tight">
                                  {isDepiladorLaserFlex 
                                    ? 'Frete grátis para todo o Brasil' 
                                    : (item.name === "Pente Alisador Portátil" || item.name === "Progressiva Vegetal Havana" || item.name === "Clareador de Manchas de Pele")
                                    ? 'Use essa opção se sua cidade não for uma capital do Brasil.'
                                    : 'Use esta opção se sua cidade não estiver entre as cidades disponíveis para a entrega da Logzz'}
                                </p>
                              </div>
                            )}

                            {!links?.logzz && !links?.coinzz && (
                              <div className="text-center py-4 text-xs sm:text-sm text-gray-600">
                                Links de checkout não disponíveis para este produto
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
                    <Button 
                      variant="outline" 
                      onClick={clearCart} 
                      className="text-red-600 hover:text-red-700 text-sm sm:text-base px-4 py-2 order-2 sm:order-1 w-full sm:w-auto"
                    >
                      Limpar Carrinho
                    </Button>
                    
                    <div className="text-center sm:text-right order-1 sm:order-2">
                      <p className="text-base sm:text-lg md:text-xl font-bold text-gray-800">
                        Total: <span className="text-pink-600">R$ {getTotalPrice().toFixed(2).replace('.', ',')}</span>
                      </p>
                      <p className="text-xs text-gray-600 mt-1">*Cada produto é finalizado separadamente</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <Link to="/products">
                    <Button variant="outline" className="text-sm sm:text-base py-2 sm:py-3 px-6">
                      Continuar Comprando
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default Cart;
