
import { Upload, MessageSquare, Image, BarChart3, Shield, Smartphone } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Upload,
      title: "Importação Fácil de Contatos",
      description: "Importe seus contatos diretamente de CSV, Excel ou Google Sheets em segundos",
      color: "blue"
    },
    {
      icon: MessageSquare,
      title: "Mensagens Personalizadas",
      description: "Use variáveis para personalizar cada mensagem automaticamente com nome, empresa, etc.",
      color: "green"
    },
    {
      icon: Image,
      title: "Envio de Mídias",
      description: "Envie imagens, documentos, PDFs e vídeos junto com suas mensagens",
      color: "purple"
    },
    {
      icon: BarChart3,
      title: "Dashboard em Tempo Real",
      description: "Acompanhe estatísticas detalhadas: entrega, visualização e taxa de resposta",
      color: "orange"
    },
    {
      icon: Shield,
      title: "Totalmente Seguro",
      description: "Criptografia de dados e total conformidade com a LGPD e políticas do WhatsApp",
      color: "red"
    },
    {
      icon: Smartphone,
      title: "Funciona em Qualquer Lugar",
      description: "Acesse via web, mobile ou desktop. Seus dados sincronizados em tempo real",
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: { bg: "bg-blue-100", icon: "text-blue-600", border: "border-blue-200" },
      green: { bg: "bg-green-100", icon: "text-green-600", border: "border-green-200" },
      purple: { bg: "bg-purple-100", icon: "text-purple-600", border: "border-purple-200" },
      orange: { bg: "bg-orange-100", icon: "text-orange-600", border: "border-orange-200" },
      red: { bg: "bg-red-100", icon: "text-red-600", border: "border-red-200" },
      indigo: { bg: "bg-indigo-100", icon: "text-indigo-600", border: "border-indigo-200" }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Recursos que{" "}
            <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              Transformam
            </span>{" "}
            Seu Negócio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tudo que você precisa para automatizar seu WhatsApp e multiplicar suas vendas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const colors = getColorClasses(feature.color);
            const Icon = feature.icon;
            
            return (
              <div 
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border ${colors.border} animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon className={`h-8 w-8 ${colors.icon}`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bonus section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              🎯 Bônus Especial
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Quem assinar hoje recebe acesso GRATUITO ao nosso curso "WhatsApp Marketing Avançado" (valor R$ 297)
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/20 px-4 py-2 rounded-full">✅ Templates prontos</div>
              <div className="bg-white/20 px-4 py-2 rounded-full">✅ Estratégias de conversão</div>
              <div className="bg-white/20 px-4 py-2 rounded-full">✅ Scripts testados</div>
              <div className="bg-white/20 px-4 py-2 rounded-full">✅ Suporte prioritário</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
