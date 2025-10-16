import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { MessageCircle, ArrowUp } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showSupportChat, setShowSupportChat] = useState(false);
  const location = useLocation();

  // Efecto para animación de carga de página
  useEffect(() => {
    setPageLoaded(false);
    
    // Pequeño retraso para asegurar animaciones suaves en cambios de ruta
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 150);
    
    // Scroll automático al inicio de página en cambios de ruta con animación suave
    window.scrollTo({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Efecto para controlar barra de progreso de scroll y botón scroll-to-top
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      
      setScrollProgress(progress);
      setShowScrollTop(window.scrollY > 400);
    };

    // Throttle scroll events para mejor performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);



  // Auto-hide del chat de soporte después de 5 segundos
  useEffect(() => {
    if (showSupportChat) {
      const timer = setTimeout(() => {
        setShowSupportChat(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showSupportChat]);

  // Función para scroll suave al inicio
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 relative">
      {/* Barra de progreso mejorada */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200/50 z-[100]">
        <div 
          className="h-full bg-gradient-to-r from-[rgb(255,179,71)] to-[rgb(255,204,51)] transition-all duration-300 ease-out shadow-sm"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Indicador de conexión */}
      {/* {!isOnline && (
        <div className="fixed top-1 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium z-[99] flex items-center gap-2 animate-pulse">
          <WifiOff className="h-4 w-4" />
          <span className="hidden sm:inline">Sin conexión a internet</span>
          <span className="sm:hidden">Sin conexión</span>
        </div>
      )} */}

      <Header />
      
      {/* Contenido principal con animación de entrada mejorada */}
      <main 
        className={`flex-1 transition-all duration-700 ease-out ${
          pageLoaded 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-4'
        }`}
      >
        {/* Contenedor responsivo mejorado */}
        <div className="mx-auto w-full max-w-[1400px] px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
          <div className="min-h-[50vh]">
            <Outlet />
          </div>
        </div>
      </main>
      
      {/* Decoración visual mejorada */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 flex justify-center">
          <div className="w-full h-8 sm:h-12 bg-gradient-to-b from-transparent via-[rgb(255,179,71)]/3 to-[rgb(255,204,51)]/5" />
        </div>
        {/* Patrón decorativo sutil */}
        <div className="absolute inset-0 opacity-5">
          {/* <div className="w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=\"20\" height=\"20\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cdefs%3E%3Cpattern id=\"grid\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\"%3E%3Cpath d=\"M 20 0 L 0 0 0 20\" fill=\"none\" stroke=\"%23FFB347\" stroke-width=\"0.5\"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\"100%25\" height=\"100%25\" fill=\"url(%23grid)\"/%3E%3C/svg%3E')]" /> */}
        </div>
      </div>
      
      <Footer />
      
      {/* Botones flotantes mejorados */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 flex flex-col gap-3 z-50">
        {/* Botón scroll to top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Volver arriba"
            className="bg-white/90 backdrop-blur-sm text-gray-700 p-3 rounded-full shadow-lg border border-gray-200 hover:bg-white hover:text-[rgb(255,179,71)] transition-all duration-300 hover:scale-110 hover:shadow-xl group"
            style={{
              animation: 'fadeIn 0.3s ease-out forwards'
            }}
          >
            <ArrowUp className="h-5 w-5 group-hover:animate-bounce" />
          </button>
        )}

        {/* Botón de soporte flotante mejorado */}
        <div className="relative">
          <button
            onClick={() => setShowSupportChat(!showSupportChat)}
            aria-label="Chat de soporte"
            className="bg-gradient-to-r from-[rgb(255,179,71)] to-[rgb(255,204,51)] text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group relative overflow-hidden"
          >
            {/* Efecto de onda */}
            <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
            <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            
            {/* Indicador de disponibilidad */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse border-2 border-white" />
          </button>

          {/* Tooltip mejorado */}
          {showSupportChat && (
            <div 
              className="absolute bottom-full right-0 mb-2 w-64 sm:w-72"
              style={{
                animation: 'fadeIn 0.3s ease-out forwards'
              }}
            >
              <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-4 relative">
                {/* Flecha del tooltip */}
                <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-gray-200 transform rotate-45" />
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="font-medium text-gray-900 text-sm">¡Estamos aquí para ayudarte!</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    ¿Necesitas ayuda para encontrar restaurantes o tienes alguna pregunta? Contáctanos.
                  </p>
                  
                  <div className="flex gap-2 pt-2">
                    <a 
                      href="https://wa.me/51927585983" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white text-xs font-medium py-2 px-3 rounded-lg transition-colors duration-200 text-center"
                    >
                      WhatsApp
                    </a>
                    <a 
                      href="mailto:josuedoestech@gmail.com.com"
                      className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium py-2 px-3 rounded-lg transition-colors duration-200 text-center"
                    >
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Overlay para cerrar chat en mobile */}
      {showSupportChat && (
        <div 
          className="fixed inset-0 z-40 sm:hidden"
          onClick={() => setShowSupportChat(false)}
        />
      )}

      {/* Estilos CSS inline para animaciones */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Smooth scroll para navegadores que lo soporten */
        html {
          scroll-behavior: smooth;
        }
        
        /* Optimización para dispositivos táctiles */
        @media (hover: none) and (pointer: coarse) {
          .hover\\:scale-110:hover {
            transform: scale(1.05);
          }
        }
        
        /* Mejoras de performance para animaciones */
        .transition-all {
          will-change: transform, opacity;
        }
      `}</style>
    </div>
  );
}

export default Layout;