
import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle, Clock, TrendingUp, Users, Zap } from "lucide-react";

const ProblemSolutionSection = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Problem Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Quantas Oportunidades Você Está{" "}
            <span className="text-red-600">Perdendo</span>?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-6 border border-red-200 rounded-xl bg-red-50 animate-fade-in-up">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-red-800 mb-3">Tempo Perdido</h3>
            <p className="text-red-700">
              "Você ainda envia mensagens uma a uma? Imagine quantas horas por dia você desperdiça..."
            </p>
          </div>

          <div className="text-center p-6 border border-red-200 rounded-xl bg-red-50 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-red-800 mb-3">Respostas Lentas</h3>
            <p className="text-red-700">
              "Quantas oportunidades já perdeu por não responder a tempo?"
            </p>
          </div>

          <div className="text-center p-6 border border-red-200 rounded-xl bg-red-50 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-red-600 transform rotate-180" />
            </div>
            <h3 className="text-xl font-bold text-red-800 mb-3">Vendas Perdidas</h3>
            <p className="text-red-700">
              "Enquanto você digita, seus concorrentes já fecharam a venda."
            </p>
          </div>
        </div>

        {/* Solution Section */}
        <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              A Solução Está Aqui:{" "}
              <span className="text-primary-600">Zend</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Com Zend, você <strong>automatiza o disparo de mensagens pelo WhatsApp</strong> com poucos cliques e transforma cada contato em uma oportunidade real de negócio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Automação Inteligente</h3>
              <p className="text-gray-600">
                Envie centenas de mensagens personalizadas em segundos
              </p>
              <div className="mt-4 flex items-center justify-center text-green-600">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span className="font-semibold">5x mais rápido</span>
              </div>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Alcance Máximo</h3>
              <p className="text-gray-600">
                Conecte-se com milhares de clientes simultaneamente
              </p>
              <div className="mt-4 flex items-center justify-center text-blue-600">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span className="font-semibold">98% de entrega</span>
              </div>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Resultados Reais</h3>
              <p className="text-gray-600">
                Aumente suas vendas em até 300% no primeiro mês
              </p>
              <div className="mt-4 flex items-center justify-center text-purple-600">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span className="font-semibold">ROI garantido</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Quero Começar Agora
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSolutionSection;
