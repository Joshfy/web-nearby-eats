import { DollarSign, TrendingUp, MapPin, Search, ArrowRight, Frown, AlertTriangle } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ProblemasComensal() {
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
      icon: MapPin,
      title: "Datos Desactualizados",
      description: "Siempre que queremos descubrir un nuevo lugar, nos encontramos con información desactualizada. Horarios incorrectos, menús obsoletos y ubicaciones que ya no existen.",
      color: "from-red-400 to-pink-500",
      bgColor: "bg-red-50",
      delay: 0,
      imagePosition: 'right',
      frustrationLevel: 85,
      impact: "Pérdida de tiempo y experiencias decepcionantes"
    },
    {
      icon: Search,
      title: "Información Incompleta",
      description: "Muchos restaurantes no cuentan con información detallada de sus platillos, fotos del local, precios actualizados, lo que nos hace dudar si visitar o no el lugar.",
      color: "from-orange-400 to-red-500",
      bgColor: "bg-orange-50",
      delay: 200,
      imagePosition: 'left',
      frustrationLevel: 78,
      impact: "Decisiones difíciles y expectativas no cumplidas"
    },
    {
      icon: TrendingUp,
      title: "Ofertas Ocultas",
      description: "Para los comensales es difícil encontrar ofertas y promociones, ya que en la mayoría de casos tenemos que seguir múltiples redes sociales para enterarnos.",
      color: "from-blue-400 to-indigo-500",
      bgColor: "bg-blue-50",
      delay: 400,
      imagePosition: 'right',
      frustrationLevel: 72,
      impact: "Pagamos más de lo necesario constantemente"
    },
    {
      icon: DollarSign,
      title: "Presupuesto Limitado",
      description: "Cuando salimos con amigos y familia, nos gustaría tener una herramienta que nos ayude a encontrar lugares que se ajusten a nuestro presupuesto específico.",
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50",
      delay: 600,
      imagePosition: 'left',
      frustrationLevel: 68,
      impact: "Restricciones en nuestras opciones de entretenimiento"
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-6">
              <Frown className="w-4 h-4 mr-2" />
              Frustraciones Diarias
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Lo que más molesta a
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500"> los comensales</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Cada día, millones de personas enfrentan estos problemas al buscar dónde comer. 
                Son frustraciones reales que afectan la experiencia gastronómica.
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

                    {/* Impact */}
                    <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-orange-400">
                      <div className="flex items-start space-x-3">
                        <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-gray-800 mb-1">Impacto en la experiencia:</p>
                          <p className="text-sm text-gray-600">{challenge.impact}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual Frustration Meter */}
                <div className="flex-1 lg:max-w-lg">
                  <div className="relative group">
                    {/* Decorative background */}
                    <div className={`absolute inset-0 ${challenge.bgColor} rounded-3xl transform rotate-2 group-hover:rotate-4 transition-transform duration-300`}></div>
                    
                    {/* Main container */}
                    <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-8">
                      {/* Frustration meter */}
                      <div className="text-center space-y-6">
                        {/* Large icon */}
                        <div className={`mx-auto w-24 h-24 rounded-3xl bg-gradient-to-br ${challenge.color} flex items-center justify-center shadow-lg`}>
                          <challenge.icon className="h-12 w-12 text-white" />
                        </div>
                        
                        {/* Frustration level */}
                        <div className="space-y-4">
                          <div className="text-lg font-semibold text-gray-800">
                            Nivel de Frustración
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Usuarios afectados</span>
                              <span className="text-orange-600 font-bold">{challenge.frustrationLevel}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3">
                              <div 
                                className={`bg-gradient-to-r ${challenge.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                                style={{ width: `${challenge.frustrationLevel}%` }}
                              ></div>
                            </div>
                          </div>

                          {/* Frequency indicator */}
                          <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center justify-center space-x-2">
                              <div className="flex space-x-1">
                                {[...Array(5)].map((_, i) => (
                                  <div 
                                    key={i} 
                                    className={`w-2 h-2 rounded-full ${
                                      i < Math.floor(challenge.frustrationLevel / 20) 
                                        ? 'bg-orange-400' 
                                        : 'bg-gray-300'
                                    }`}
                                  ></div>
                                ))}
                              </div>
                              <span className="text-xs text-gray-600 ml-2">Frecuencia semanal</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Frustration badge */}
                    <div className="absolute -top-4 -right-4 bg-orange-500 text-white rounded-full p-3 shadow-lg">
                      <Frown className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Solution Preview Section */}
          <div className="text-center mt-20 lg:mt-28">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl border-2 border-green-100 p-8 lg:p-12 max-w-4xl mx-auto relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 left-0 w-full h-full opacity-5">
                <div className="absolute top-4 right-4 w-8 h-8 bg-green-500 rounded-full"></div>
                <div className="absolute bottom-8 left-8 w-6 h-6 bg-blue-500 rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-green-400 rounded-full"></div>
              </div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-6">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  La Solución Existe
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Nearby Eats elimina estas frustraciones
                </h3>
                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                  Información siempre actualizada, comunicación directa con restaurantes, 
                  acceso inmediato a promociones y filtros por presupuesto. 
                  <strong>Olvídate de la incertidumbre y descubre tu próximo lugar favorito sin complicaciones.</strong>
                </p>
                <a href="https://nearbyeatsapp.com" target="_blank" 
                >
                  <div className="inline-flex items-center text-green-600 font-semibold text-lg group cursor-pointer">
                  <span className="mr-2">Conoce cómo lo solucionamos</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}