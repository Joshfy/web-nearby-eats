import { TrendingUp, Users, Award, LogIn, Utensils } from "lucide-react";

// components/WhyChooseUsSection.jsx
interface WhyChooseUsSectionProps {
  isLoaded: boolean;
}

export const WhyChooseUsSection = ({ isLoaded }: WhyChooseUsSectionProps) => {
  return (
   
      <section id="ventajas-nearby-eats" className="py-12 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className={`flex flex-col items-center justify-center space-y-4 text-center mb-8 lg:mb-12 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter bg-gradient-to-r from-[rgb(255,179,71)] to-[rgb(255,204,51)] text-transparent bg-clip-text">
              ¿Por qué Elegir Nearby Eats para Buscar Donde Comer?
            </h2>
            <p className="max-w-2xl text-gray-600 text-base sm:text-lg lg:text-xl">
              La plataforma líder para descubrir restaurantes locales en Perú
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              {[
                {
                  icon: TrendingUp,
                  title: "Restaurantes Verificados",
                  description: "Todos los restaurantes en nuestra plataforma están verificados y cuentan con información actualizada"
                },
                {
                  icon: Users,
                  title: "Comunidad Activa",
                  description: "Miles de usuarios comparten reseñas y recomendaciones de restaurantes locales"
                },
                {
                  icon: Award,
                  title: "Calidad Garantizada",
                  description: "Solo trabajamos con restaurantes que mantienen altos estándares de calidad y servicio"
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`flex items-start gap-4 transform transition-all duration-700 hover:translate-x-2 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}
                  style={{ transitionDelay: `${800 + (index * 200)}ms` }}
                >
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-r from-[rgb(255,179,71)] to-[rgb(255,204,51)] transform transition-all duration-300 hover:scale-110 flex-shrink-0">
                    <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-bold">{item.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div 
              className={`flex items-center justify-center order-1 lg:order-2 transition-all duration-1000 delay-1000 ${isLoaded ? 'translate-x-0 opacity-100 rotate-0' : 'translate-x-12 opacity-0 rotate-6'}`}
            >
              <div className="relative w-full max-w-md lg:max-w-lg aspect-square rounded-xl overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80" 
                  alt="Restaurantes locales en Nearby Eats - Comida peruana"
                  className="object-cover w-full h-full transform transition-transform duration-700 hover:scale-110"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pb-3 gap-2.5">
           
                <div className="text-center lg:text-left py-2">
                  <h2 className="text-4xl  font-bold text-gray-900">¿Tienes un Restaurante? Únete a Nearby Eats</h2>
                </div>
                <div>
    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-3 pt-10">
                      <a 
                        href="https://restaurantplatform.nearbyeatsapp.com/login" 
                        className="group"
                        aria-label="Iniciar sesión para restaurantes"
                      >
                        <button 
                          className="w-full px-4 py-3 bg-white text-[rgb(255,179,71)] border-2 border-[rgb(255,179,71)] rounded-xl font-medium shadow-md hover:shadow-lg flex items-center justify-center gap-2 transform transition-all duration-300 hover:bg-[rgb(255,179,71)]/10"
                        >
                          <LogIn className="h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform flex-shrink-0" />
                          <span>Iniciar Sesión Como Restaurantes</span>
                        </button> 
                      </a>
                      
                      <a 
                        href="https://restaurantplatform.nearbyeatsapp.com/register" 
                        className="group"
                        aria-label="Registrar restaurante en Nearby Eats"
                      >
                        <button 
                          className="w-full px-4 py-3 bg-white text-[rgb(255,204,51)] border-2 border-[rgb(255,204,51)] rounded-xl font-medium shadow-md hover:shadow-lg flex items-center justify-center gap-2 transform transition-all duration-300 hover:bg-[rgb(255,204,51)]/10"
                        >
                          <Utensils className="h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform flex-shrink-0" />
                          <span className="truncate">Registrar Restaurante En Nearby Eats</span>
                        </button>
                      </a>
                    </div>
                    </div>
            </div>
          </section>
  );
};