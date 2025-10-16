import { Comensal_Solucion } from '../components/Sections/Comensal/SolucionComensales';
import ProblemasComensal from '../components/Sections/Comensal/ProblemasComensal';
function Comensales() {


  return (
    <div className="min-h-screen py-12">
        
      {/* Problem Section */}
      <section className="py-16 bg-white observe-me">
        <ProblemasComensal/>
       
      </section>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-[rgb(255,179,71)]/10 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[rgb(255,179,71)] to-[rgb(255,204,51)] text-transparent bg-clip-text">Nuestra Solución</h1>
            <p className="text-xl text-gray-700 mb-8">
            Facilitar la búsqueda de restaurantes mediante información actualizada, comunicación directa con los locales y acceso rápido a promociones, todo adaptado a tus necesidades y presupuesto.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-gray-50 observe-me">
        <Comensal_Solucion/>
        
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 bg-gradient-to-r from-[rgb(255,179,71)] to-[rgb(255,204,51)] observe-me">
        <Invitar/>
       
      </section> */}

      {/* Testimonial Section
      <section className="py-16 bg-white observe-me">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Lo que dicen nuestros restaurantes</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "María González",
                  position: "Dueña de La Trattoria",
                  text: "Desde que implementamos Nearby Eats, hemos visto un incremento del 30% en clientes nuevos. La facilidad para actualizar nuestro menú y promociones ha sido un cambio radical.",
                  image: "/api/placeholder/100/100"
                },
                {
                  name: "Carlos Mendoza",
                  position: "Chef en Sabores del Mar",
                  text: "Lo que más nos ha gustado es la conexión directa con WhatsApp. Nuestros clientes aprecian la comunicación rápida y nosotros ahorramos tiempo en la gestión.",
                  image: "/api/placeholder/100/100"
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 rounded-lg p-6 border border-gray-100"
                  style={{ 
                    opacity: inView ? 1 : 0, 
                    transform: inView ? 'translateY(0)' : 'translateY(20px)',
                    transitionDelay: `${index * 150}ms`
                  }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-sm text-gray-600">{item.position}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{item.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default Comensales;