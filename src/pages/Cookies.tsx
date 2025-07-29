
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Cookies = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao início
          </Link>
        </div>

        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Política de Cookies</h1>
          <p className="text-gray-600 mb-8">Última atualização: 14/06/2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. O que são Cookies?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cookies são pequenos arquivos de texto armazenados no seu dispositivo (computador, celular, tablet) quando você visita um site. Esses arquivos contêm informações que permitem que o site "lembre" de você, como suas preferências e atividades de navegação. Os cookies são amplamente utilizados para melhorar a experiência do usuário, facilitar navegações futuras e fornecer dados analíticos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Quais Cookies Utilizamos?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              No site Lunara, utilizamos os seguintes tipos de cookies:
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Cookies Estritamente Necessários:</h3>
                <p className="text-gray-700 leading-relaxed">
                  São essenciais para o funcionamento do site. Sem eles, os serviços que você solicitou, como a finalização de compras, não seriam possíveis.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Cookies de Desempenho e Análise:</h3>
                <p className="text-gray-700 leading-relaxed">
                  Esses cookies ajudam a melhorar a performance do site, coletando informações sobre como os usuários interagem com nossas páginas (como o tempo de navegação e páginas mais visitadas). Eles não coletam dados pessoais identificáveis.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Cookies de Funcionalidade:</h3>
                <p className="text-gray-700 leading-relaxed">
                  Esses cookies permitem que o site lembre de suas escolhas, como idioma preferido, e oferecem funcionalidades personalizadas.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Cookies de Publicidade (Facebook Pixel):</h3>
                <p className="text-gray-700 leading-relaxed">
                  Usamos o Facebook Pixel, um cookie de publicidade, para monitorar e analisar as interações dos usuários com nosso site e anúncios do Facebook. Ele nos ajuda a entender como você interage com nosso site depois de visualizar ou clicar em um anúncio no Facebook ou Instagram. Com esses dados, podemos melhorar a relevância dos nossos anúncios e otimizar nossas campanhas publicitárias, oferecendo a você uma experiência mais personalizada.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Como Usamos os Cookies?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Usamos cookies para melhorar sua experiência de navegação no Lunara, como:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Lembrar suas preferências e configurações (ex: idioma, país de entrega);</li>
              <li>Processar transações de pagamento de forma segura;</li>
              <li>Monitorar e analisar o uso do site para melhorar nosso desempenho;</li>
              <li>Exibir anúncios personalizados com base nas suas interações com o nosso site, utilizando dados fornecidos pelo Facebook Pixel.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Consentimento para o Uso de Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ao acessar nosso site, você será notificado sobre o uso de cookies por meio de uma notificação ou banner. Você pode aceitar os cookies clicando em "Aceitar" ou "OK". Caso não aceite, você pode ajustar as configurações de cookies no seu navegador ou, em alguns casos, desativar os cookies.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Se você continuar navegando no site, isso será considerado como sua aceitação dos cookies que utilizamos, incluindo os cookies do Facebook Pixel.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Como Controlar e Desativar os Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Você pode gerenciar e controlar os cookies através das configurações do seu navegador. Cada navegador tem uma maneira diferente de desativar os cookies. Você pode consultar as configurações de cookies do seu navegador nas seguintes páginas:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Google Chrome: Configurações de cookies no Chrome</li>
              <li>Mozilla Firefox: Configurações de cookies no Firefox</li>
              <li>Safari: Configurações de cookies no Safari</li>
              <li>Microsoft Edge: Configurações de cookies no Edge</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Se você desativar os cookies, algumas funcionalidades do site podem ser afetadas, e você pode não conseguir acessar todas as áreas do site. Além disso, o Facebook Pixel pode não funcionar corretamente para fornecer anúncios personalizados.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Alterações na Política de Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              Podemos atualizar esta Política de Cookies periodicamente para refletir mudanças no uso de cookies ou nas regulamentações aplicáveis. Recomendamos que você consulte esta página regularmente para se manter informado sobre quaisquer alterações.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contato</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Se você tiver alguma dúvida sobre o uso de cookies no Lunara, incluindo o uso do Facebook Pixel, entre em contato conosco através do e-mail:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>E-mail:</strong> lunarahairs@gmail.com
              </p>
              <p className="text-gray-700">
                <strong>Telefone:</strong> +55 31 98472-3813
              </p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cookies;
