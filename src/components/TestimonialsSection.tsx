
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Consultora de Vendas",
      company: "Loja Fashion Premium",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: "Agora consigo atender 5x mais clientes com o Zend. Em apenas 2 semanas aumentei meu faturamento em 180%! É impressionante como a automação mudou meu negócio.",
      rating: 5,
      highlight: "↗️ +180% faturamento"
    },
    {
      name: "João Santos",
      role: "Empreendedor",
      company: "Império Digital",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "Meu faturamento cresceu desde que automatizei meu WhatsApp! O Zend é simples de usar e os resultados aparecem no primeiro dia. Recomendo para todos!",
      rating: 5,
      highlight: "🚀 Resultados no 1º dia"
    },
    {
      name: "Ana Costa",
      role: "Gerente de Marketing",
      company: "Tech Solutions",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "Estava perdendo muitas oportunidades antes do Zend. Agora nossa taxa de conversão subiu para 34% e conseguimos responder todos os leads instantaneamente.",
      rating: 5,
      highlight: "📈 34% conversão"
    },
    {
      name: "Pedro Oliveira",
      role: "Consultor Imobiliário",
      company: "Imóveis Premium",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "Revolucionou minha forma de trabalhar! Consegui automatizar todo o primeiro contato e agora foco apenas nos clientes qualificados. Triplicou minha produtividade.",
      rating: 5,
      highlight: "⚡ 3x produtividade"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Mais de{" "}
            <span className="text-primary-600">5.000 Empresas</span>{" "}
            Já Transformaram Seus Resultados
          </h2>
          <p className="text-xl text-gray-600">
            Veja o que nossos clientes estão dizendo sobre o Zend
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover shadow-md"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                  <p className="text-primary-600 font-semibold text-sm">{testimonial.company}</p>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary-200" />
                <p className="text-gray-700 leading-relaxed italic pl-6">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="mt-6 inline-block bg-gradient-to-r from-green-100 to-green-50 text-green-800 px-4 py-2 rounded-full text-sm font-semibold border border-green-200">
                {testimonial.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            Números que Comprovam Nossa Eficiência
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="animate-fade-in-up">
              <div className="text-4xl md:text-5xl font-bold mb-2">5.000+</div>
              <div className="text-primary-100">Empresas Ativas</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl md:text-5xl font-bold mb-2">1M+</div>
              <div className="text-primary-100">Mensagens/Mês</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-primary-100">Taxa de Entrega</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl md:text-5xl font-bold mb-2">250%</div>
              <div className="text-primary-100">Aumento Médio</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
