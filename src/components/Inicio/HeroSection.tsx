import { Users, ChevronRight, Zap } from "lucide-react";

interface HeroProps {
    isLoaded: boolean;
}

export const HeroSection = ({ isLoaded }: HeroProps) => {
  return (
    <section 
      className="py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 bg-gradient-to-b from-[rgb(255,179,71)]/20 to-white overflow-hidden"
      itemScope 
      itemType="https://schema.org/Organization"
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6 order-2 lg:order-1">
            
            {/* Título optimizado para SEO con schema markup */}
            <div className="space-y-3 sm:space-y-4 text-center lg:text-left">
              <h1 
                className="text-4xl font-bold"
                itemProp="name"
              >
                NearbyEats - Descubre Restaurantes Cerca de Ti
              </h1>
              
              <h2 
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter bg-gradient-to-r from-[rgb(255,179,71)] to-[rgb(255,204,51)] text-transparent bg-clip-text leading-[1.1] sm:leading-tight transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                itemProp="slogan"
              >
                La Plataforma que Revolucionara el Sector Gastronomico
              </h2>
              
              <p 
                className={`text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-xl lg:max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0 transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                itemProp="description"
              >
                <strong className="text-[rgb(255,179,71)]">NearbyEats conecta a los amantes de la comida</strong> con los mejores restaurantes locales cerca de ti. 
                Encuentra restaurantes, descubre experiencias gastronómicas únicas y disfruta de la mejor comida local. 
                Nuestra plataforma NearbyEats ofrece herramientas inteligentes para que los negocios de comida brillen y los usuarios descubran nuevos sabores. 
                Todo en una app pensada para <strong className="text-[rgb(255,179,71)]">transformar la forma en que vivimos la gastronomía</strong>.
              </p>
            </div>

            {/* Llamadas a la acción con texto SEO-friendly */}
            <div 
              className={`space-y-4 transition-all duration-1000 delay-200 px-2 sm:px-0 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            >
              {/* Mensaje de lanzamiento próximo con keywords */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-[rgb(255,179,71)]/20 to-[rgb(255,204,51)]/20 rounded-full border border-[rgb(255,179,71)]/30 text-sm text-gray-700 mb-4">
                  <Zap className="h-4 w-4 text-[rgb(255,179,71)]" />
                  <span className="font-medium">🚀 NearbyEats - Próximo Lanzamiento de la App de Restaurantes</span>
                </div>
              </div>

              {/* Lista de beneficios con keywords para SEO */}
              <div className="hidden">
                <ul itemProp="knowsAbout">
                  <li>Buscar restaurantes cerca de mí con NearbyEats</li>
                  <li>Encontrar comida local y restaurantes cercanos</li>
                  <li>App para descubrir restaurantes y gastronomía</li>
                  <li>Plataforma de restaurantes NearbyEats</li>
                  <li>Descubre los mejores lugares para comer cerca</li>
                </ul>
              </div>

              {/* Botón de comunidad/contacto con aria-label para accesibilidad */}
              <div className="text-center">
                <a 
                  href="https://www.instagram.com/nearbyeats_app?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-4 py-2 bg-white/80 border border-[rgb(255,179,71)]/30 text-gray-700 rounded-xl font-medium text-sm hover:border-[rgb(255,179,71)] hover:bg-[rgb(255,179,71)]/5 transition-all duration-300 group-hover:shadow-md"
                  aria-label="Únete a la comunidad de NearbyEats en Instagram"
                  itemProp="sameAs"
                >
                  <Users className="h-4 w-4 text-[rgb(255,179,71)]" />
                  <span>Únete a la Comunidad NearbyEats</span>
                  <ChevronRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Mensaje final con keywords naturales */}
            <div className="text-center lg:text-left px-2 sm:px-0">
              <p className="text-sm text-gray-500 italic">
                🚀 <strong>NearbyEats próximamente:</strong> La app para encontrar restaurantes cerca está llegando. 
                <span className="text-[rgb(255,179,71)] font-medium"> ¡Descubre comida local y únete desde el primer día!</span>
              </p>
            </div>

            {/* Keywords adicionales para SEO (ocultas pero indexables) */}
            <div className="sr-only">
              NearbyEats app de restaurantes, encontrar comida cerca de mí, descubrir restaurantes locales, 
              plataforma gastronómica, app para buscar restaurantes, NearbyEats México, restaurantes cercanos, 
              comida local, descubre restaurantes, app de gastronomía
            </div>
          </div>
          
          {/* Imagen con alt text optimizado para SEO */}
          <div 
            className={`flex items-center justify-center order-1 lg:order-2 transition-all duration-1000 delay-700 px-2 sm:px-0 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}
          >
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-[4/3] sm:aspect-video overflow-hidden rounded-3xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                alt="NearbyEats - App para descubrir restaurantes cerca de ti y encontrar la mejor comida local"
                title="NearbyEats - Encuentra Restaurantes Locales"
                className="object-cover w-full h-full transform transition-transform duration-700 hover:scale-110"
                loading="eager"
                itemProp="image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4 sm:p-6">
                <div className="text-white">
                  <p className="text-base sm:text-lg md:text-xl font-bold mb-1">¡NearbyEats Revoluciona la Gastronomía!</p>
                  <p className="text-xs sm:text-sm opacity-90">Descubre restaurantes cerca y disfruta comida local</p>
                </div>
              </div>
              
              {/* Indicador de "próximamente" */}
              <div className="absolute top-4 right-4 bg-[rgb(255,179,71)] text-white rounded-full px-2 py-1 text-xs font-bold animate-pulse">
                PRÓXIMAMENTE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};