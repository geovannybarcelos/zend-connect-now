
import { Button } from "@/components/ui/button";
import { Check, Crown, Flame, Clock, Star } from "lucide-react";
import { useState } from "react";

const PricingSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 12,
    minutes: 23,
    seconds: 45
  });

  const plans = [
    {
      name: "Mensal",
      price: "R$ 39,90",
      period: "/mês",
      description: "Ideal para começar",
      features: [
        "1.000 mensagens/mês",
        "Importação de contatos",
        "Mensagens personalizadas",
        "Dashboard básico",
        "Suporte por email"
      ],
      cta: "Começar Teste Grátis",
      popular: false,
      badge: "Cancele quando quiser",
      savings: null
    },
    {
      name: "Anual",
      price: "R$ 430",
      period: "/ano",
      originalPrice: "R$ 478,80",
      description: "Economize R$ 48,80 por ano",
      features: [
        "5.000 mensagens/mês",
        "Importação ilimitada",
        "Templates personalizados",
        "Dashboard avançado",
        "Envio de mídias",
        "Relatórios detalhados",
        "Suporte prioritário"
      ],
      cta: "Assinar Agora",
      popular: true,
      badge: "Mais Vendido",
      savings: "48,80"
    },
    {
      name: "Vitalício",
      price: "R$ 930",
      period: "pagamento único",
      originalPrice: "R$ 1.430",
      description: "Acesso total para sempre",
      features: [
        "Mensagens ILIMITADAS",
        "Todos os recursos premium",
        "Atualizações gratuitas",
        "API personalizada",
        "Suporte vitalício",
        "Treinamento exclusivo",
        "Consultoria mensal"
      ],
      cta: "Aproveitar Oferta",
      popular: false,
      badge: "🔥 Oferta Limitada",
      savings: "500"
    }
  ];

  return (
    <div id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* Urgency timer */}
        <div className="text-center mb-8">
          <div className="inline-block bg-red-600 text-white px-6 py-3 rounded-full text-sm font-bold animate-pulse">
            <Clock className="inline w-4 h-4 mr-2" />
            Promoção termina em: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Escolha o Plano que Vai{" "}
            <span className="text-primary-600">Revolucionar</span>{" "}
            Seu Negócio
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            Mais de 5.000 empresas já transformaram seus resultados
          </p>
          <div className="text-sm text-red-600 font-semibold">
            ⚠️ Apenas 23 vagas restantes para o plano vitalício!
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular ? 'border-4 border-primary-500 scale-105' : 'border border-gray-200'
              } animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                    <Crown className="w-4 h-4" />
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    {plan.originalPrice && (
                      <span className="text-lg text-gray-400 line-through mr-2">{plan.originalPrice}</span>
                    )}
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                  
                  {plan.savings && (
                    <div className="mt-3 inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      💰 Economize R$ {plan.savings}
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  className={`w-full py-4 text-lg font-semibold rounded-xl transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white shadow-lg transform hover:scale-105' 
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                >
                  {plan.cta}
                </Button>

                {/* Badge */}
                {!plan.popular && (
                  <div className="text-center mt-4">
                    <span className={`text-sm px-3 py-1 rounded-full ${
                      plan.name === 'Vitalício' 
                        ? 'bg-red-100 text-red-800 font-bold' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {plan.badge}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee and bonuses */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              🛡️ Garantia Total de 30 Dias
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Se em 30 dias você não aumentar suas vendas em pelo menos 50%, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="flex items-center justify-center gap-3 text-green-600">
                <Star className="w-6 h-6" />
                <span className="font-semibold">Satisfação Garantida</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-blue-600">
                <Flame className="w-6 h-6" />
                <span className="font-semibold">Suporte 24/7</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-purple-600">
                <Crown className="w-6 h-6" />
                <span className="font-semibold">ROI Comprovado</span>
              </div>
            </div>
          </div>
        </div>

        {/* Final urgency */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-6 max-w-2xl mx-auto">
            <h4 className="text-xl font-bold mb-2">⚠️ ATENÇÃO: Oferta por Tempo Limitado!</h4>
            <p className="text-red-100">
              Os preços promocionais sobem R$ 100 na próxima semana. Garante sua vaga agora!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
