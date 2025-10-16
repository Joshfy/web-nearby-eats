import { ShieldCheck, DollarSign, TrendingUp, Award, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ProblemasRestaurant() {
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
  
  const challenges = [
    {
      icon: ShieldCheck,
      title: "Dependencia de Algoritmos",
      description: "Los cambios constantes en los algoritmos de redes sociales hacen que sea difícil mantener la visibilidad y alcance orgánico.",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50",
      delay: 0,
      imagePosition: 'right'
    },
    {
      icon: DollarSign,
      title: "Costos Elevados de Marketing",
      description: "La publicidad en redes sociales y plataformas puede ser muy costosa, sin garantía de resultados o retorno de inversión.",
      color: "from-red-400 to-pink-500",
      bgColor: "bg-red-50",
      delay: 200,
      imagePosition: 'left'
    },
    {
      icon: TrendingUp,
      title: "Comisiones Excesivas",
      description: "Las plataformas de entrega cobran comisiones altas que pueden llegar hasta el 30%, reduciendo significativamente las ganancias.",
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50",
      delay: 400,
      imagePosition: 'right'
    },
    {
      icon: Award,
      title: "Saturación del Mercado",
      description: "Es cada vez más difícil sobresalir en un mercado saturado de opciones, donde captar la atención del cliente es un desafío constante.",
      color: "from-blue-400 to-indigo-500",
      bgColor: "bg-blue-50",
      delay: 600,
      imagePosition: 'left'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
              Desafíos Actuales
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Los obstáculos que enfrentan
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500"> los restaurantes hoy</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                En un mercado cada vez más competitivo, los restaurantes enfrentan desafíos únicos 
                que requieren soluciones innovadoras y estratégicas.
              </p>
            </div>
          </div>

          {/* Challenges Section */}
          <div className="space-y-12 lg:space-y-20">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className={`observe-me transition-all duration-700 ${
                  challenge.imagePosition === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } flex flex-col lg:flex gap-8 lg:gap-16 items-center`}
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(40px)',
                  transitionDelay: `${challenge.delay}ms`
                }}
              >
                {/* Content Section */}
                <div className="flex-1 lg:max-w-xl">
                  <div className="space-y-6">
                    {/* Icon and Title */}
                    <div className="flex items-center space-x-4">
                      <div className={`flex-shrink-0 p-3 rounded-2xl bg-gradient-to-br ${challenge.color} text-white shadow-lg`}>
                        <challenge.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                        {challenge.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {challenge.description}
                    </p>

                    {/* Impact indicator */}
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2 text-red-600">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium">Alto impacto en el negocio</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual Representation */}
                <div className="flex-1 lg:max-w-lg">
                  <div className="relative group">
                    {/* Decorative background */}
                    <div className={`absolute inset-0 ${challenge.bgColor} rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300`}></div>
                    
                    {/* Main container */}
                    <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-8">
                      {/* Visual representation of the problem */}
                      <div className="text-center space-y-6">
                        {/* Large icon */}
                        <div className={`mx-auto w-24 h-24 rounded-3xl bg-gradient-to-br ${challenge.color} flex items-center justify-center shadow-lg`}>
                          <challenge.icon className="h-12 w-12 text-white" />
                        </div>
                        
                        {/* Problem visualization */}
                        <div className="space-y-4">
                          <div className="text-lg font-semibold text-gray-800">
                            Impacto en tu negocio:
                          </div>
                          
                          {index === 0 && (
                            <div className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">Alcance orgánico</span>
                                <span className="text-red-500 font-bold">↓ 60%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-gradient-to-r from-red-400 to-red-600 h-2 rounded-full w-2/5"></div>
                              </div>
                            </div>
                          )}
                          
                          {index === 1 && (
                            <div className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">Costo por cliente</span>
                                <span className="text-red-500 font-bold">↑ $25</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-gradient-to-r from-red-400 to-red-600 h-2 rounded-full w-4/5"></div>
                              </div>
                            </div>
                          )}
                          
                          {index === 2 && (
                            <div className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">Margen de ganancia</span>
                                <span className="text-red-500 font-bold">↓ 30%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-gradient-to-r from-red-400 to-red-600 h-2 rounded-full w-3/4"></div>
                              </div>
                            </div>
                          )}
                          
                          {index === 3 && (
                            <div className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">Competidores cercanos</span>
                                <span className="text-red-500 font-bold">+50</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-gradient-to-r from-red-400 to-red-600 h-2 rounded-full w-full"></div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Warning badge */}
                    <div className="absolute -top-4 -right-4 bg-red-500 text-white rounded-full p-3 shadow-lg">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Impact Section */}
          <div className="text-center mt-20 lg:mt-28">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl border-2 border-red-100 p-8 lg:p-12 max-w-4xl mx-auto relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 left-0 w-full h-full opacity-5">
                <div className="absolute top-4 left-4 w-8 h-8 bg-red-500 rounded-full"></div>
                <div className="absolute top-12 right-8 w-6 h-6 bg-orange-500 rounded-full"></div>
                <div className="absolute bottom-8 left-12 w-4 h-4 bg-red-400 rounded-full"></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  El costo de no actuar es demasiado alto
                </h3>
                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                  Mientras estos desafíos persisten, los restaurantes que no adaptan su estrategia digital 
                  pierden clientes, ingresos y oportunidades de crecimiento cada día.
                </p>
                <div className="inline-flex items-center text-red-600 font-semibold text-lg group cursor-pointer">
                  <span className="mr-2">Descubre la solución</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}