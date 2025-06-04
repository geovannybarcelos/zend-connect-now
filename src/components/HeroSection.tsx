
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Users, Zap } from "lucide-react";

const HeroSection = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-primary-50 via-blue-50 to-primary-100 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-60 right-20 w-24 h-24 bg-primary-300 rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-primary-400 rounded-full opacity-25 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                Conecte-se
              </span>{" "}
              com seus clientes de forma{" "}
              <span className="relative">
                rápida
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-primary-700 rounded"></div>
              </span>
              , humana e poderosa.
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Com o <strong className="text-primary-600">Zend</strong>, envie mensagens em massa pelo WhatsApp e transforme conversas em vendas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToPricing}
                className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Comece Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                Ver Demonstração
              </Button>
            </div>

            {/* Social proof */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary-600" />
                <span className="font-semibold">+5.000</span> empresas confiam
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary-600" />
                <span className="font-semibold">+1M</span> mensagens enviadas
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary-600" />
                <span className="font-semibold">98%</span> satisfação
              </div>
            </div>
          </div>

          {/* Right content - Platform mockup */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Main device mockup */}
              <div className="bg-white rounded-3xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-6 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">Dashboard Zend</h3>
                  
                  <div className="space-y-3">
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Mensagens Enviadas</span>
                        <span className="font-bold">1.247</span>
                      </div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Taxa de Entrega</span>
                        <span className="font-bold text-green-300">98.5%</span>
                      </div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Conversões</span>
                        <span className="font-bold text-yellow-300">23.4%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-green-500 text-white p-3 rounded-full shadow-lg animate-pulse-scale">
                <MessageSquare className="h-6 w-6" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-primary-600 text-white px-4 py-2 rounded-full shadow-lg animate-float text-sm font-semibold">
                ✨ Automático
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
