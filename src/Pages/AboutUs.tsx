import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { ChefHat, Compass, Users, Target, ArrowRight, BarChart, Clock } from 'lucide-react';

export function AboutUs() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="py-12 md:py-24 lg:py-20 bg-gradient-to-b from-[rgb(255,179,71)]/10 to-white overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-4 gap-2 px-4 sm:px-6">
                <h1 
                  className={`text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl bg-gradient-to-r from-[rgb(255,179,71)] to-[rgb(255,204,51)] text-transparent bg-clip-text break-words leading-relaxed transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                >
                  Sobre Nosotros <span className="text-black">Nearby Eats</span>
                </h1>
                <p 
                  className={`max-w-[600px] text-gray-600 md:text-xl leading-relaxed transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                >
                  Conectamos amantes de la gastronomía con los mejores locales, transformando la experiencia culinaria a través de la tecnología.
                </p>
              </div>
            </div>
            <div 
              className={`flex items-center justify-center transition-all duration-1000 delay-700 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}
            >
              <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80"
                  alt="Nearby Eats - Equipo"
                  className="object-cover w-full h-full transform transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                  <p className="text-white text-lg font-medium">Revolucionando la experiencia gastronómica</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión Section */}
      <section className="py-12 md:py-20 lg:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Misión */}
            <div 
              className={`bg-gray-50 rounded-2xl p-8 shadow-lg transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[rgb(255,179,71)] to-[rgb(255,204,51)]">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Nuestra Misión</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                En Nearby Eats, nuestra misión es conectar a los amantes de la gastronomía con los mejores locales de comida, 
                haciendo que la experiencia de descubrir, disfrutar y compartir platos deliciosos sea más fácil, rápida y emocionante. 
                Buscamos que cada comida sea una experiencia única, sin importar dónde estés, acercando los sabores que amas 
                a tu puerta de manera eficiente y moderna.
              </p>
            </div>

            {/* Visión */}
            <div 
              className={`bg-gray-50 rounded-2xl p-8 shadow-lg transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
              style={{ transitionDelay: '500ms' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[rgb(255,179,71)] to-[rgb(255,204,51)]">
                  <Compass className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Nuestra Visión</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Nos vemos como la plataforma líder en el descubrimiento gastronómico, transformando cómo las personas 
                exploran y disfrutan de la comida, mientras ayudamos a los negocios locales a digitalizarse, optimizar 
                su servicio y crecer en la era digital. Queremos ser la primera opción para aquellos que buscan nuevos 
                sabores, experiencias culinarias auténticas y convenientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lo que Hacemos Section */}
      <section className="py-12 md:py-20 lg:py-16 bg-gradient-to-b from-white to-[rgb(255,179,71)]/5">
        <div className="container px-4 md:px-6">
          <div 
            className={`text-center mb-12 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{ transitionDelay: '700ms' }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-[rgb(255,179,71)] to-[rgb(255,204,51)] text-transparent bg-clip-text">
              Lo que Hacemos
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Nearby Eats es mucho más que una app para encontrar comida. Es un ecosistema diseñado para 
              mejorar la experiencia gastronómica desde ambos lados:
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Para comensales */}
            <div 
              className={`bg-white rounded-2xl p-8 shadow-xl transition-all duration-1000 hover:shadow-2xl hover:translate-y-[-4px] ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
              style={{ transitionDelay: '900ms' }}
            >
              <div className="flex flex-col items-center text-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[rgb(255,179,71)] to-[rgb(255,204,51)] mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Para los comensales</h3>
              </div>
              <p className="text-gray-600">
                Ofrecemos una plataforma fácil de usar que te ayuda a descubrir nuevos locales, consultar 
                menús actualizados, ver promociones y acceder a reseñas de otros comensales. Todo desde 
                la palma de tu mano.
              </p>
            </div>

            {/* Para los locales */}
            <div 
              className={`bg-white rounded-2xl p-8 shadow-xl transition-all duration-1000 hover:shadow-2xl hover:translate-y-[-4px] ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
              style={{ transitionDelay: '1100ms' }}
            >
              <div className="flex flex-col items-center text-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[rgb(255,179,71)] to-[rgb(255,204,51)] mb-4">
                  <ChefHat className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Para los locales</h3>
              </div>
              <p className="text-gray-600">
                Proporcionamos herramientas digitales para gestionar menús en tiempo real, promociones, 
                pedidos y la interacción directa con los clientes a través de códigos QR y un panel intuitivo. 
                Así, podemos ayudar a los restaurantes a crecer y conectar con más personas de una manera eficiente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestro Compromiso Section */}
      <section className="py-12 md:py-20 lg:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-5">
            <div 
              className={`lg:col-span-2 flex items-center transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-[-16px] opacity-0'}`}
              style={{ transitionDelay: '1300ms' }}
            >
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
                  alt="Nearby Eats - Compromiso"
                  className="object-cover w-full h-full transform transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
            <div 
              className={`lg:col-span-3 flex flex-col justify-center space-y-6 transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}
              style={{ transitionDelay: '1500ms' }}
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-[rgb(255,179,71)] to-[rgb(255,204,51)] text-transparent bg-clip-text">
                Nuestro Compromiso
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Estamos comprometidos con la innovación y con crear un espacio donde los locales de comida 
                puedan prosperar, y los comensales puedan encontrar las mejores opciones gastronómicas sin 
                complicaciones. Sabemos que comer es mucho más que solo alimentarse: es compartir momentos, 
                disfrutar de la cultura y explorar nuevos sabores, y en Nearby Eats, hacemos todo eso posible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Por qué Nearby Eats? Section */}
      <section className="py-12 md:py-20 lg:py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div 
            className={`text-center mb-12 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{ transitionDelay: '1700ms' }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-[rgb(255,179,71)] to-[rgb(255,204,51)] text-transparent bg-clip-text">
              ¿Por qué Nearby Eats?
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Compass,
                title: "Explora sin límites",
                description: "Encuentra locales cercanos según tus gustos y necesidades, con menús visuales y en tiempo real."
              },
              {
                icon: Clock,
                title: "Sin complicaciones",
                description: "Accede fácilmente a códigos QR, promociones y reseñas para que cada elección sea más informada."
              },
              {
                icon: BarChart,
                title: "Crecimiento para todos",
                description: "Ayudamos a los restaurantes a crecer digitalmente mediante herramientas que optimizan sus operaciones."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg transition-all duration-1000 hover:shadow-xl hover:translate-y-[-4px] ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                style={{ transitionDelay: `${1900 + (index * 200)}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[rgb(255,179,71)] to-[rgb(255,204,51)] mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Únete a Nosotros Section */}
      <section className="py-12 md:py-20 lg:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div 
            className={`max-w-3xl mx-auto text-center bg-gradient-to-r from-[rgb(255,179,71)]/10 to-[rgb(255,204,51)]/10 rounded-3xl p-8 md:p-12 shadow-xl transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}`}
            style={{ transitionDelay: '2500ms' }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-[rgb(255,179,71)] to-[rgb(255,204,51)] text-transparent bg-clip-text mb-6">
              Únete a Nosotros
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              En Nearby Eats, estamos construyendo una comunidad gastronómica, conectando a las personas 
              con lo que realmente importa: ¡la buena comida! Únete a nosotros y vive una experiencia 
              culinaria innovadora, donde los sabores se encuentran con la tecnología.
            </p>
           <a href="https://www.instagram.com/nearbyeats_app/">
             <Button 
              
              className="bg-gradient-to-r from-[rgb(255,179,71)] to-[rgb(255,204,51)] text-white hover:opacity-90 inline-flex items-center gap-2 transform transition-all duration-300 hover:scale-105 hover:shadow-lg px-8 py-6 text-lg rounded-full"
            >
              Forma parte de nuestra comunidad <ArrowRight className="h-5 w-5 animate-bounce-x" />
            </Button>
           </a>
          </div>
        </div>
      </section>
    </>
  );
}

