
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-2xl font-bold">Zend</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              A plataforma mais completa para automação de WhatsApp. Transforme conversas em vendas e multiplique seus resultados.
            </p>
            
            {/* Social media */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">Recursos</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">Preços</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">Testimoniais</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">Suporte</a></li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-primary-500" />
                <span>suporte@zend.com.br</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-primary-500" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-primary-500" />
                <span>São Paulo, SP - Brasil</span>
              </div>
            </div>

            {/* Business hours */}
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h5 className="font-semibold mb-2 text-primary-400">Horário de Atendimento</h5>
              <p className="text-sm text-gray-400">
                Segunda à Sexta: 9h às 18h<br />
                Sábado: 9h às 12h
              </p>
            </div>
          </div>
        </div>

        {/* Legal links */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                LGPD
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                Status do Sistema
              </a>
            </div>
            
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© 2024 Zend. Feito com</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>no Brasil</span>
            </div>
          </div>
        </div>

        {/* Security badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 items-center opacity-75">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">SSL</span>
            </div>
            <span>Conexão Segura</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">LGPD</span>
            </div>
            <span>Conforme LGPD</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">99%</span>
            </div>
            <span>Uptime Garantido</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
