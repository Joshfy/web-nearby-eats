import { Search, Star, Phone } from "lucide-react";

// components/FeaturesSection.jsx
export const FeaturesSection = () => {
  return (
    
      <section className="py-12 lg:py-16 bg-white" id="como-funciona">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter text-center mb-8 lg:mb-12 bg-gradient-to-r from-[rgb(255,179,71)] to-[rgb(255,204,51)] text-transparent bg-clip-text">
            ¿Cómo Encontrar Locales de Comida con Nearby Eats?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Search,
                title: "Busca Locales de comida Cerca de Ti",
                description: "Encuentra locales de comida cercanos usando tu ubicación. Filtra por tipo de comida, precio y valoraciones."
              },
              {
                icon: Star,
                title: "Lee Reseñas y Valoraciones",
                description: "Consulta opiniones reales de otros usuarios sobre restaurantes locales antes de decidir dónde comer."
              },
              {
                icon: Phone,
                title: "Reserva o Pide Delivery",
                description: "Contacta directamente con el restaurante para hacer reservas o pedir comida a domicilio."
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-4 sm:p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <feature.icon className="h-10 w-10 sm:h-12 sm:w-12 text-[rgb(255,179,71)] mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};