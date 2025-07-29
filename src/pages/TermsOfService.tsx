
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar ao site
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Termos de Uso</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-sm text-gray-600 mb-8">Última atualização: 14/06/2025</p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Aceitação dos Termos</h2>
              <p className="text-gray-600 leading-relaxed">
                Ao acessar e utilizar o site Lunara, você concorda em cumprir e estar vinculado a todos os termos e condições descritos neste documento. Caso não concorde com os termos, solicitamos que não continue a utilizar nosso site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Uso do Site</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                O site Lunara é destinado à compra de produtos para o cuidado facial e capilar.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Ao utilizar nosso site, você declara que tem pelo menos 18 anos ou que possui a autorização de um responsável legal.
              </p>
              <p className="text-gray-600 leading-relaxed">
                É de sua responsabilidade garantir que todas as informações fornecidas no site sejam verdadeiras e precisas.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Produtos e Preços</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Os preços dos produtos exibidos no site Lunara estão sujeitos a alterações sem aviso prévio.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Reservamo-nos o direito de modificar, descontinuar ou desativar qualquer produto disponível no site a qualquer momento.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Em caso de erro de preço no momento da compra, entraremos em contato com o cliente para confirmar ou corrigir o valor, e, se necessário, cancelar a transação.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Pagamento e Transações</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Todos os pagamentos realizados no site Lunara são processados por meio de plataformas de pagamento terceirizadas, que garantem a segurança das transações.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Não coletamos informações bancárias ou financeiras diretamente; essas informações são gerenciadas pelas plataformas de pagamento com as quais trabalhamos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Entrega e Frete</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Os prazos de entrega e valores do frete são informados durante o processo de compra, podendo variar de acordo com a localização do cliente e a disponibilidade dos produtos.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Não nos responsabilizamos por atrasos causados pelos serviços de entrega ou erros no fornecimento de informações pelo cliente.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">6. Trocas e Devoluções</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Para solicitar a troca ou devolução de um produto, o cliente deve entrar em contato conosco dentro de [número de dias] dias após o recebimento do produto, conforme a nossa política de devoluções.
              </p>
              <p className="text-gray-600 leading-relaxed">
                O produto deve estar em sua embalagem original e sem sinais de uso para ser aceito para troca ou devolução.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">7. Direitos de Propriedade Intelectual</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Todos os conteúdos do site Lunara, incluindo textos, imagens, logos, marcas registradas e qualquer outro material, são de propriedade exclusiva da Lunara ou de seus respectivos licenciadores.
              </p>
              <p className="text-gray-600 leading-relaxed">
                O uso de qualquer conteúdo do site para fins comerciais ou não autorizados é estritamente proibido sem nossa permissão expressa por escrito.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">8. Limitação de Responsabilidade</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A Lunara não será responsável por quaisquer danos diretos, indiretos, incidentais, consequenciais ou punitivos resultantes do uso ou da incapacidade de uso do site ou de nossos produtos.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Não nos responsabilizamos por danos causados por fatores fora do nosso controle, como falhas nos serviços de entrega ou imprevistos de plataformas de pagamento.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">9. Modificação dos Termos</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A Lunara se reserva o direito de modificar ou atualizar estes Termos de Uso a qualquer momento, sem aviso prévio. As mudanças entrarão em vigor imediatamente após a publicação no site.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Recomendamos que você revise periodicamente esta página para se manter informado sobre quaisquer atualizações.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">10. Lei Aplicável</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Estes Termos de Uso serão regidos e interpretados de acordo com as leis do Brasil.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Qualquer disputa relacionada ao uso do site será resolvida pelos tribunais competentes da cidade de [sua cidade].
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">11. Contato</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Se você tiver alguma dúvida sobre os Termos de Uso ou qualquer outra questão, entre em contato conosco:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600 mb-2">
                  <strong>E-mail:</strong> lunarahairs@gmail.com
                </p>
                <p className="text-gray-600">
                  <strong>Telefone:</strong> +55 31 98472-3813
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
