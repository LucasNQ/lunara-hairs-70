
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: 'Como funciona a entrega?',
      answer: (
        <>
          Trabalhamos com duas empresas de entrega: <span className="bg-green-100 text-green-800 px-2 py-1 rounded font-semibold">Logzz</span>: A Logzz faz entregas nas maiores cidades do Brasil, como São Paulo, Belo Horizonte, Rio de Janeiro e etc. O pagamento é feito no momento da entrega, ou seja, você paga o valor do produto quando ele chegar na sua casa.
          <br /><br />
          <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded font-semibold">Coinzz</span>: A Coinzz entrega para qualquer lugar do Brasil, mas o pagamento precisa ser feito antes do envio do produto. Ou seja, você paga o produto online e recebe em qualquer cidade do país.
        </>
      )
    },
    {
      question: 'Os produtos são seguros para todos os tipos de cabelo?',
      answer: 'Sim! Nossos produtos foram desenvolvidos com muito cuidado para atender a diferentes tipos e texturas de cabelo. Cada mulher tem sua beleza única, e nossos produtos respeitam isso. Mas, como cada organismo reage de forma diferente, sempre indicamos fazer o teste de mecha e, se tiver dúvidas específicas, nosso suporte está aqui pra te ajudar!'
    },
    {
      question: 'Quanto tempo dura o efeito da progressiva?',
      answer: 'Com o uso correto, os resultados podem durar até 6 meses — sim, você leu certo! Isso pode variar de pessoa pra pessoa, dependendo dos cuidados no dia a dia. Mas pode ter certeza: o efeito de cabelo alinhado e com brilho se mantém por muito mais tempo quando você segue nosso passo a passo.'
    },
    {
      question: 'Como aplicar os produtos em casa?',
      answer: 'A proposta é justamente essa: praticidade, conforto e autonomia! Nossos produtos vêm com instruções claras, e ainda temos vídeos e suporte técnico para te acompanhar. Você não precisa ser expert em salão para ter resultados incríveis — só precisa de um tempinho pra você e vontade de se cuidar!'
    },
    {
      question: 'Qual a diferença entre progressiva e relaxamento?',
      answer: 'Ótima pergunta! A progressiva alinha e reduz o volume dos fios, deixando o cabelo mais liso, com aparência natural e muito brilho. Já o relaxamento age na estrutura do fio, amaciando a curvatura natural. São técnicas diferentes, e a escolha ideal depende do seu objetivo com o cabelo — e, claro, estamos aqui pra te orientar no que for preciso!'
    },
    {
      question: 'Como é calculado o frete?',
      answer: 'Frete é grátis para todo o Brasil. Simples assim! A gente acredita que você merece se cuidar sem complicação.'
    },
    {
      question: 'Posso parcelar a compra?',
      answer: 'Claro que sim! Oferecemos parcelamento no cartão de crédito pra facilitar a sua vida. Você escolhe o melhor jeito de cuidar de você, no seu tempo e dentro do seu orçamento.'
    }
  ];

  return (
    <section id="contato" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Esclarecemos as principais dúvidas sobre nossos produtos e processos.
            Se você ainda tem alguma dúvida entre em contato conosco!
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={`bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border-0 fade-in fade-in-delay-${(index % 3) + 1}`}
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-pink-50/50 rounded-lg transition-colors">
                  <span className="font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12 fade-in fade-in-delay-3">
          <p className="text-gray-600 mb-6">
            Ainda tem dúvidas? Nossa equipe está pronta para ajudar!
          </p>
          <div className="flex justify-center">
            <a
              href="https://wa.me/5531984723813?text=Oi!+Estava+no+site+da+Lunara+e+estou+com+algumas+dúvidas.+Voc%C3%AA+pode+me+ajudar?+"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 inline-block"
            >
              💬 Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
