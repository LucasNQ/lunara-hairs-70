
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
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
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Política de Privacidade</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-sm text-gray-600 mb-8">Última atualização: 14/06/2025</p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Introdução</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Bem-vindo ao Lunara! A sua privacidade é muito importante para nós. Esta Política de Privacidade tem como objetivo esclarecer como coletamos, utilizamos, armazenamos e protegemos as informações pessoais que você nos fornece ao navegar em nosso site e realizar compras dos nossos produtos para o cuidado facial e capilar. Ao acessar e utilizar nossos serviços, você concorda com as práticas descritas nesta política.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Estamos comprometidos com a segurança dos seus dados e garantimos que todas as informações pessoais fornecidas serão tratadas com responsabilidade e em conformidade com a Lei Geral de Proteção de Dados (LGPD) e outras legislações aplicáveis.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Informações que Coletamos</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Coletamos as seguintes informações quando você se cadastra em nosso site ou realiza uma compra:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Nome completo</li>
                <li>E-mail</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Além disso, utilizamos um cookie de rastreamento de pagamento para garantir a segurança da transação e melhorar a experiência de compra.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Como Utilizamos Suas Informações</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Utilizamos suas informações pessoais apenas para manter o contato necessário relacionado aos produtos adquiridos, como envio de atualizações sobre o status do pedido, informações sobre promoções ou para resolver qualquer questão relacionada ao seu pedido.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Não usamos suas informações para outros fins além dos mencionados acima.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Compartilhamento de Informações</h2>
              <p className="text-gray-600 leading-relaxed">
                Não compartilhamos suas informações pessoais com terceiros. Seus dados são utilizados exclusivamente para os fins descritos nesta política.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Proteção de Dados</h2>
              <p className="text-gray-600 leading-relaxed">
                Adotamos medidas de segurança, como criptografia no site, para proteger suas informações pessoais durante o processo de navegação e compra.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">6. Seus Direitos</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Você tem o direito de entrar em contato conosco caso precise de suporte para qualquer troca ou devolução de produtos. Como não coletamos informações bancárias ou financeiras, seus dados pessoais estão limitados ao nome, e-mail e informações necessárias para contato.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Se desejar corrigir ou atualizar qualquer informação pessoal fornecida, entre em contato conosco através dos meios de comunicação descritos abaixo.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">7. Alterações na Política de Privacidade</h2>
              <p className="text-gray-600 leading-relaxed">
                A Política de Privacidade pode ser atualizada periodicamente. Quaisquer alterações serão publicadas nesta página, com a data de revisão atualizada. Recomendamos que você consulte esta página regularmente para se manter informado sobre as mudanças.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">8. Contato</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Se você tiver dúvidas sobre nossa Política de Privacidade ou precisar de qualquer assistência, entre em contato conosco:
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

export default PrivacyPolicy;
