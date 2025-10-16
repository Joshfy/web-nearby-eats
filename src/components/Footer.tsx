import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Utensils, Instagram, Facebook, Twitter, Mail, ChevronUp, Youtube, Phone } from 'lucide-react';

function Footer() {
  const [scrollToTop, setScrollToTop] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrollToTop(true);
      } else {
        setScrollToTop(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    
    // Activar animación de entrada después de un pequeño delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);
  
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };


  
  return (
    <footer className={`bg-gradient-to-r from-orange-50 to-amber-50 pt-16 relative border-t border-orange-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700 ease-in-out`}>
      {/* Scroll To Top Button */}
      {scrollToTop && (
        <button 
          onClick={scrollUp}
          className="fixed bottom-8 right-8 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 z-50 group"
          aria-label="Volver arriba"
        >
          <ChevronUp className="h-6 w-6 group-hover:animate-bounce" />
        </button>
      )}
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Utensils className="h-8 w-8 text-orange-500" />
              <h3 className="text-2xl font-bold text-gray-800 tracking-tight">Nearby Eats</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Conectando a los amantes de la comida con los mejores restaurantes locales. Descubre experiencias culinarias únicas cerca de ti.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "https://www.instagram.com/nearbyeats_app/", label: "Instagram", color: "hover:text-pink-600" },
                { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-blue-600" },
                { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-blue-400" },
                { icon: Youtube, href: "https://www.youtube.com/@NearbyEats-i5q", label: "Youtube", color: "hover:text-red-700" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`text-gray-500 ${social.color} transform hover:scale-125 transition-all duration-300`}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Links Section */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-800 border-b border-orange-200 pb-2">
              Enlaces rápidos
            </h4>
            <ul className="space-y-3">
              {[
                { title: "Inicio", href: "/" },
                { title: "Restaurantes", href: "/restaurants" },
                { title: "Comensales", href: "/comensales" },
                { title: "Sobre nosotros", href: "/sobre-nosotros" },
              ].map((link, index) => (
                <li key={index} className="transform hover:translate-x-2 transition-transform duration-300">
                  <Link 
                    to={link.href}
                    className="text-gray-600 hover:text-orange-500 flex items-center group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-800 border-b border-orange-200 pb-2">
              Contacto
            </h4>
            <ul className="space-y-4">
              {[
                { icon: Phone, text: "+51 927 585 983" },
                { icon: Mail, text: "josuedoestech@gmail.com" }
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <div className="mt-1 text-orange-500 group-hover:text-orange-600 transition-colors duration-300">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-800 border-b border-orange-200 pb-2">
              Suscríbete
            </h4>
            <p className="text-gray-600">
              Recibe las últimas noticias y ofertas especiales.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <Mail className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu correo electrónico"
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50 transition-all duration-300"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Suscribirme
              </button>
            </form>
          </div> */}
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="border-t border-orange-100 py-6 bg-orange-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Nearby Eats. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            {["Términos", "Privacidad", "Cookies", "Configuración"].map((link, index) => (
              <a 
                key={index} 
                href="#" 
                className="text-gray-500 hover:text-orange-500 text-sm transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;