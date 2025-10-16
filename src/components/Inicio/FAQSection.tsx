// components/FAQSection.jsx
interface FAQSectionProps {
  isLoaded: boolean;
}

export const FAQSection = ({ isLoaded }: FAQSectionProps) => {
  return (
<>
    <section className="py-12 lg:py-16 bg-white" id="preguntas-frecuentes">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tighter text-center mb-8 lg:mb-12 bg-gradient-to-r from-[rgb(255,179,71)] to-[rgb(255,204,51)] text-transparent bg-clip-text">
            Preguntas Frecuentes sobre Nearby Eats
          </h2>
          <div className="max-w-4xl mx-auto space-y-4 lg:space-y-6">
            {[
              {
                q: "¿Cómo puedo encontrar restaurantes cerca de mi ubicación?",
                a: "Nearby Eats usa tu ubicación para mostrar restaurantes cercanos. Solo permite el acceso a tu ubicación y verás todas las opciones disponibles en tu área."
              },
              {
                q: "¿Puedo hacer reservas a través de Nearby Eats?",
                a: "Sí, puedes contactar directamente con los restaurantes a través de nuestra plataforma para hacer reservas o consultar disponibilidad."
              },
              {
                q: "¿Nearby Eats tiene servicio de delivery?",
                a: "Conectamos con restaurantes que ofrecen delivery. Puedes ver qué restaurantes cerca de ti tienen este servicio disponible."
              },
              {
                q: "¿Es gratis usar Nearby Eats?",
                a: "Sí, buscar y encontrar restaurantes en Nearby Eats es completamente gratuito para los usuarios."
              }
            ].map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow">
                <h3 className="text-base sm:text-lg font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="unete-nearby-eats" className="py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className={`flex flex-col items-center justify-center space-y-6 text-center transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
            style={{ transitionDelay: '1200ms' }}
          >
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter bg-gradient-to-r from-[rgb(255,179,71)] to-[rgb(255,204,51)] text-transparent bg-clip-text">
                Únete a la Comunidad de Nearby Eats
              </h2>
              <p className="max-w-2xl text-gray-600 text-base sm:text-lg lg:text-xl">
                Forma parte de la mayor comunidad de amantes de la gastronomía en Perú
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-sm sm:max-w-md">
              <a 
                href="https://platform.nearbyeatsapp.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
                aria-label="Ver plataforma Nearby Eats"
              >
                <button 
                  className="w-full px-6 py-3 bg-black text-white rounded-xl font-medium shadow-md hover:shadow-lg flex items-center justify-center gap-2 transform transition-all duration-300 hover:bg-gray-900"
                >
                  <span>Ver Plataforma</span>
                </button>
              </a>
              <a 
                href="https://wa.me/51927585983" 
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="Contactar con Nearby Eats"
              >
                <button 
                  className="w-full px-6 py-3 bg-white text-gray-800 border border-gray-300 rounded-xl font-medium shadow-sm hover:shadow-md flex items-center justify-center gap-2 transform transition-all duration-300 hover:bg-gray-50"
                >
                  <span>Contacto</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
</>
  
  );
};