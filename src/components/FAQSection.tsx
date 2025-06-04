
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "Preciso instalar algo no meu computador?",
      answer: "Não! O Zend funciona 100% na nuvem. Você acessa direto pelo navegador, seja no computador, tablet ou celular. Seus dados ficam sincronizados em tempo real em todos os dispositivos."
    },
    {
      question: "O Zend funciona em todos os dispositivos?",
      answer: "Sim! O Zend é totalmente responsivo e funciona perfeitamente em computadores (Windows, Mac, Linux), tablets e smartphones (Android e iOS). Você pode usar onde e quando quiser."
    },
    {
      question: "Posso cancelar quando quiser?",
      answer: "Claro! Você pode cancelar sua assinatura a qualquer momento, sem taxas ou burocracias. E se não ficar satisfeito em 30 dias, devolvemos 100% do seu dinheiro."
    },
    {
      question: "O envio em massa é seguro e legal?",
      answer: "Sim! O Zend está 100% em conformidade com as políticas do WhatsApp e com a LGPD. Usamos tecnologia avançada para garantir entregas seguras e evitar bloqueios. Mais de 5.000 empresas já confiam em nossa plataforma."
    },
    {
      question: "Quantas mensagens posso enviar por dia?",
      answer: "Isso varia conforme seu plano. No plano Mensal são até 1.000/mês, no Anual até 5.000/mês e no Vitalício é ilimitado. O sistema distribui os envios de forma inteligente para otimizar a entrega."
    },
    {
      question: "Vocês oferecem suporte em português?",
      answer: "Sim! Nosso suporte é 100% em português brasileiro. Oferecemos suporte por chat, email e WhatsApp. Clientes Premium têm atendimento prioritário em até 1 hora."
    },
    {
      question: "Como funciona a personalização das mensagens?",
      answer: "Muito simples! Você cria sua mensagem usando variáveis como {{nome}}, {{empresa}}, {{cidade}}. O sistema automaticamente substitui essas variáveis pelos dados reais de cada contato na sua lista."
    },
    {
      question: "Posso importar minha lista de contatos?",
      answer: "Sim! Você pode importar contatos de arquivos CSV, Excel, Google Sheets ou até mesmo conectar com seu CRM. O processo é super simples e leva apenas alguns cliques."
    },
    {
      question: "O que acontece se eu ultrapassar o limite de mensagens?",
      answer: "Você receberá um aviso antes de atingir o limite. Se ultrapassar, pode fazer upgrade instantâneo para um plano maior ou aguardar a renovação do período. Nunca cobramos taxas extras surpresa."
    },
    {
      question: "Como posso ter certeza que vale a pena?",
      answer: "Oferecemos 30 dias de garantia total. Se você não aumentar suas vendas em pelo menos 50%, devolvemos 100% do valor pago. Além disso, pode testar grátis por 7 dias antes de pagar qualquer coisa."
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="h-8 w-8 text-primary-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Dúvidas Frequentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Respondemos as principais dúvidas para você tomar a melhor decisão
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index}
                value={`item-${index}`}
                className="bg-gray-50 rounded-xl border border-gray-200 px-6 py-2 hover:shadow-md transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-primary-600 transition-colors duration-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe está pronta para te ajudar! Entre em contato e tire todas suas dúvidas antes de decidir.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5511999999999?text=Olá! Tenho dúvidas sobre o Zend"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors duration-300"
              >
                💬 WhatsApp
              </a>
              <a 
                href="mailto:suporte@zend.com.br"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-colors duration-300"
              >
                ✉️ Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
