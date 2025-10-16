import { MenuSquare, Bell, LayoutDashboard, QrCode, BarChart3, BadgePercent, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import Foto1 from '../../../assets/restaurant/1.png';
import Foto2 from '../../../assets/restaurant/2.png';
import Foto3 from '../../../assets/restaurant/3.png';
import Foto4 from '../../../assets/restaurant/4.png'; 
import Foto5 from '../../../assets/restaurant/5.png';
import Foto6 from '../../../assets/restaurant/6.png';
import Foto7 from '../../../assets/restaurant/7.png';

export function Restaurant_Solucion() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    setInView(true);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.target.classList.contains('observe-me')) {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.observe-me').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: MenuSquare,
      title: "Menús Digitales",
      description: "Digitaliza menús con imágenes y descripciones detalladas de cada plato para una experiencia más atractiva.",
      image: Foto1,
      delay: 0,
      imagePosition: 'right'
    },
    {
      icon: Bell,
      title: "Platos Destacados",
      description: "Destaca tus platos más populares con imágenes atractivas y descripciones tentadoras que despierten el apetito.",
      image: Foto2,
      delay: 150,
      imagePosition: 'left'
    },
    {
      icon: Bell,
      title: "Promociones Inteligentes",
      description: "Publica promociones y actualizaciones de forma sencilla y directa a clientes interesados en tiempo real.",
      image: Foto3,
      delay: 300,
      imagePosition: 'right'
    },
    {
      icon: LayoutDashboard,
      title: "Panel Centralizado",
      description: "Gestiona menús y pedidos desde un panel que conecta con WhatsApp para una mejor interacción con clientes.",
      image: Foto6,
      delay: 450,
      imagePosition: 'left'
    },
    {
      icon: LayoutDashboard,
      title: "Panel de Control",
      description: "Administra tu negocio desde una interfaz intuitiva y fácil de usar con todas las herramientas necesarias.",
      image: Foto5,
      delay: 600,
      imagePosition: 'right'
    },
    {
      icon: QrCode,
      title: "Códigos QR Personalizados",
      description: "Utiliza códigos QR personalizados para atraer más comensales a la app y aumentar las visitas a tu local.",
      image: Foto4,
      delay: 750,
      imagePosition: 'left'
    },
    {
      icon: BadgePercent,
      title: "Cupones Canjeables",
      description: "Crea cupones de descuento estratégicos para atraer nuevos clientes y fidelizar a los existentes.",
      image: "https://img.freepik.com/vector-premium/plantilla-cupon-descuento-comida-o-restaurante-perfecta-aumentar-descuento-su-producto-evect-vector-plantilla-diseno-cupon-descuento-comida-o-restaurante_9237-126.jpg",
      delay: 900,
      imagePosition: 'right'
    },
    {
      icon: BarChart3,
      title: "Análisis y Métricas",
      description: "Observa métricas detalladas: visitantes, pedidos realizados, platos más populares y cuantas personas estan interesadas en tu local.",
      image: Foto7,
      delay: 1050,
      imagePosition: 'left'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
              Solución Digital Completa
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              La revolución digital para
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500"> tu restaurante</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Nearby Eats conecta comensales con locales de comida en tiempo real, 
                ofreciendo herramientas innovadoras que transforman la experiencia gastronómica.
              </p>
            </div>
          </div>

          {/* Features Section */}
          <div className="space-y-12 lg:space-y-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`observe-me transition-all duration-700 ${
                  feature.imagePosition === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } flex flex-col lg:flex gap-8 lg:gap-16 items-center`}
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(40px)',
                  transitionDelay: `${feature.delay}ms`
                }}
              >
                {/* Content Section */}
                <div className="flex-1 lg:max-w-xl">
                  <div className="space-y-6">
                    {/* Icon and Title */}
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 p-3 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-500 text-white shadow-lg">
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                        {feature.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Call to Action */}
                    <a 
                    href="https://restaurantplatform.nearbyeatsapp.com/login" 
                    className="group"
                                      target="_blank" 

                    aria-label="Iniciar sesión para restaurantes"
                    
                  >
                     <div className="flex items-center text-orange-600 font-medium group cursor-pointer">
                      <span className="mr-2">Descubre más</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                   </a>
                  </div>
                </div>

                {/* Image Section */}
                <div className="flex-1 lg:max-w-lg">
                  <div className="relative group">
                    {/* Decorative background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                    
                    {/* Image container */}
                    <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                      <div className="aspect-[4/3] p-4">
                        <img 
                          src={feature.image} 
                          alt={feature.title}
                          className="w-full h-full object-contain rounded-2xl"
                          loading="lazy"
                        />
                      </div>
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Floating badge */}
                    <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg border border-gray-100">
                      <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="text-center mt-20 lg:mt-28">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                ¿Listo para transformar tu restaurante?
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                Únete a cientos de restaurantes que ya están revolucionando su negocio con Nearby Eats.
              </p>
              <a 
                    href="https://restaurantplatform.nearbyeatsapp.com/login" 
                    className="group"
                    aria-label="Iniciar sesión para restaurantes"
                                      target="_blank" 

                  >
                 <button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                Comenzar ahora
              </button>
              </a>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}