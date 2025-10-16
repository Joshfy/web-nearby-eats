import { MapPin, ArrowRight, Star, Sparkles, Utensils, TrendingUp } from "lucide-react";
interface HeroProps {
    isLoaded: boolean;
}
export function Botones({ isLoaded }: HeroProps){
    return(
    <>
      {/* CTAs principales para ambos públicos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {/* CTA para comensales */}
                <a 
                  href="https://platform.nearbyeatsapp.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group block"
                  aria-label="Explora restaurantes - Para comensales"
                >
                  <button 
                    className="w-full px-4 sm:px-6 py-4 sm:py-5 text-sm sm:text-base md:text-lg bg-gradient-to-r from-[rgb(255,179,71)] to-[rgb(255,204,51)] text-white rounded-2xl font-bold shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 sm:gap-3 transform transition-all duration-300 hover:scale-[1.02] group-hover:shadow-[rgb(255,179,71)]/50 relative overflow-hidden"
                  >
                    {/* Efecto de brillo animado */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    <Utensils className="h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-pulse flex-shrink-0 relative z-10" />
                    <span className="min-w-0 text-center leading-tight relative z-10">
                      <span className="block font-bold">Explora Restaurantes</span>
                      <span className="block text-xs opacity-90 font-medium">Para comensales</span>
                    </span>
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform flex-shrink-0 relative z-10" />
                  </button>
                </a>

                {/* CTA para restaurantes */}
                <a 
                  href="https://restaurantplatform.nearbyeatsapp.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group block"
                  aria-label="Impulsa tu restaurante - Para negocios"
                >
                  <button 
                    className="w-full px-4 sm:px-6 py-4 sm:py-5 text-sm sm:text-base md:text-lg bg-white border-2 border-[rgb(255,179,71)] text-[rgb(255,179,71)] rounded-2xl font-bold hover:bg-[rgb(255,179,71)] hover:text-white shadow-lg hover:shadow-xl flex items-center justify-center gap-2 sm:gap-3 transform transition-all duration-300 hover:scale-[1.02] relative overflow-hidden"
                  >
                    {/* Efecto de brillo animado */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgb(255,179,71)]/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-pulse flex-shrink-0 relative z-10" />
                    <span className="min-w-0 text-center leading-tight relative z-10">
                      <span className="block font-bold">Impulsa tu Restaurante</span>
                      <span className="block text-xs opacity-90 font-medium">Para negocios</span>
                    </span>
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform flex-shrink-0 relative z-10" />
                  </button>
                </a>
              </div>
               <div 
              className={`grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6 px-2 sm:px-0 transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            >
              <div className="flex items-center gap-3 bg-white/70 px-3 py-3 rounded-xl border border-[rgb(255,179,71)]/20 hover:border-[rgb(255,179,71)]/40 transition-all duration-300">
                <MapPin className="h-5 w-5 text-[rgb(255,179,71)] flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-800">Descubre restaurantes</p>
                  <p className="text-xs text-gray-600">Cerca de ti, al instante</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/70 px-3 py-2.5 rounded-xl border border-[rgb(255,179,71)]/20 hover:border-[rgb(255,179,71)]/40 transition-all duration-300">
                <Star className="h-5 w-5 text-[rgb(255,179,71)] flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-800">Reseñas personalizadas</p>
                  <p className="text-xs text-gray-600">Para cada usuario</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/70 px-3 py-2.5 rounded-xl border border-[rgb(255,179,71)]/20 hover:border-[rgb(255,179,71)]/40 transition-all duration-300">
                <TrendingUp className="h-5 w-5 text-[rgb(255,179,71)] flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-800">Herramientas innovadoras</p>
                  <p className="text-xs text-gray-600">Para que los restaurantes crezcan</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/70 px-3 py-2.5 rounded-xl border border-[rgb(255,179,71)]/20 hover:border-[rgb(255,179,71)]/40 transition-all duration-300">
                <Sparkles className="h-5 w-5 text-[rgb(255,179,71)] flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-800">Experiencia moderna</p>
                  <p className="text-xs text-gray-600">Transformando la gastronomía</p>
                </div>
              </div>
            </div>
    
    </>)
}