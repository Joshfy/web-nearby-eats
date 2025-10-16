import { ShieldCheck, DollarSign, TrendingUp, Award } from 'lucide-react';
import {  useEffect } from 'react';
import { Restaurant_Solucion } from '../components/Sections/Restaurant/SolucionRestaurant';
import { Invitar } from '../components/Sections/Restaurant/InvitarUnir';
export default function ProblemasRestaurant() {
  
  useEffect(() => {
    // Función para manejar la animación de aparición al hacer scroll
    const handleScroll = () => {
      const cards = document.querySelectorAll('.problema-card');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        // Elemento está visible cuando está en el viewport
        if (rect.top < window.innerHeight - 100) {
          card.classList.add('visible');
        }
      });
    };
    
    // Agregar un pequeño retraso para asegurar que las cards sean visibles incluso al cargar
    setTimeout(() => {
      handleScroll();
      const cards = document.querySelectorAll('.problema-card');
      cards.forEach(card => card.classList.add('visible'));
    }, 300);
    
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const challenges = [
    {
      icon: ShieldCheck,
      title: "Dependencia de Algoritmos",
      description: "Los cambios constantes en los algoritmos de redes sociales hacen que sea difícil mantener la visibilidad.",
      color: "#FFD700", // Amarillo
      bgColor: "bg-amber-50",
    },
    {
      icon: DollarSign,
      title: "Costos Elevados",
      description: "La publicidad en redes sociales y plataformas puede ser muy costosa, sin garantía de resultados.",
      color: "#FF6347", // Rojo
      bgColor: "bg-red-50",
    },
    {
      icon: TrendingUp,
      title: "Comisiones Excesivas",
      description: "Las plataformas de entrega cobran comisiones altas, reduciendo las ganancias.",
      color: "#32CD32", // Verde
      bgColor: "bg-green-50",
    },
    {
      icon: Award,
      title: "Destacar entre la Competencia",
      description: "Es difícil sobresalir en un mercado saturado de opciones.",
      color: "#1E90FF", // Azul
      bgColor: "bg-blue-50",
    }
  ];

  return (
    <div className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 md:mb-12"
          >
            Los Desafíos del Rubro Gastronómico
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {challenges.map((item, index) => (
              <div
                key={index}
                className={`problema-card bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${item.bgColor} border border-gray-100`}
                style={{
                  opacity: 0,
                  transform: 'translateY(20px)',
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <div
                    className="p-3 md:p-4 rounded-full mb-4 md:mb-6 shadow-md"
                    style={{ backgroundColor: item.color }}
                  >
                    <item.icon className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">{item.title}</h3>
                  <p className="text-sm md:text-base text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div 
            className="mt-10 md:mt-16 bg-gradient-to-r from-blue-50 to-purple-50 p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg inline-block max-w-3xl mx-auto border border-blue-100"
          >
            <p className="text-base md:text-lg lg:text-xl text-gray-700 italic">
              "En un mundo donde la competencia es feroz y los costos no dejan de aumentar, es crucial encontrar soluciones innovadoras para mantener tu negocio a flote."
            </p>
          </div>
        </div>
      </div>
      <div className='p-5'>
      <Restaurant_Solucion />

      </div>
      <div className='p-5 bg-amber-400'>
      <Invitar />

      </div>
      
      <style>{`
        .problema-card {
          transition: transform 0.5s ease, opacity 0.5s ease, box-shadow 0.3s ease;
        }
        .problema-card:hover {
          transform: translateY(-8px);
        }
        .problema-card.visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        @media (max-width: 640px) {
          .problema-card {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
        }
      `}</style>
    </div>
  );
}