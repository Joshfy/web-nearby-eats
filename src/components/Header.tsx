import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X, LogIn, UserPlus, Utensils, ChevronDown } from 'lucide-react';
import Logo from "../assets/logo.png";
import clsx from 'clsx';

function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showRestaurantDropdown, setShowRestaurantDropdown] = useState(false);
  
  // Refs para navegación por teclado
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMobileNavItemRef = useRef<HTMLAnchorElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };
    
    // Set mounted to true after a small delay to trigger animation
    setTimeout(() => setMounted(true), 100);
    
    window.addEventListener('scroll', handleScroll);
    // Close mobile menu on route change
    setMobileMenuOpen(false);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Manejo de escape key para cerrar menús
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (showRestaurantDropdown) {
          setShowRestaurantDropdown(false);
          dropdownButtonRef.current?.focus();
        } else if (mobileMenuOpen) {
          setMobileMenuOpen(false);
          mobileMenuButtonRef.current?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [showRestaurantDropdown, mobileMenuOpen]);

  // Focus management para dropdown
  useEffect(() => {
    if (showRestaurantDropdown) {
      // Focus en el primer elemento del dropdown
      const firstButton = dropdownRef.current?.querySelector('button');
      firstButton?.focus();
    }
  }, [showRestaurantDropdown]);

  // Focus management para mobile menu
  useEffect(() => {
    if (mobileMenuOpen) {
      firstMobileNavItemRef.current?.focus();
    }
  }, [mobileMenuOpen]);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  // Handle clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showRestaurantDropdown &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowRestaurantDropdown(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showRestaurantDropdown]);

  const handleDropdownKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      const buttons = dropdownRef.current?.querySelectorAll('button');
      if (buttons) {
        const currentIndex = Array.from(buttons).indexOf(event.target as HTMLButtonElement);
        let nextIndex;
        
        if (event.key === 'ArrowDown') {
          nextIndex = currentIndex < buttons.length - 1 ? currentIndex + 1 : 0;
        } else {
          nextIndex = currentIndex > 0 ? currentIndex - 1 : buttons.length - 1;
        }
        
        (buttons[nextIndex] as HTMLElement).focus();
      }
    }
  };

  const navItems = [
    { path: '/', label: 'Inicio' },
    { path: '/restaurants', label: 'Restaurantes' },
    { path: '/comensales', label: 'Comensales' },
    { path: '/sobre-nosotros', label: 'Sobre Nosotros' }
  ];
  
  return (
    <header 
      className={clsx(
        'sticky top-0 z-50 w-full border-b transition-all duration-300 ease-in-out',
        scrolled ? 
          'bg-white to-amber-450 shadow-lg py-2' : 
          'bg-white py-3',
        mounted ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      )}
      role="banner"
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          <Link 
            to="/" 
            className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-amber-500 rounded-lg p-1"
            aria-label="Nearby Eats - Ir al inicio"
          >
            <div
              className={clsx(
                ' overflow-hidden transition-all duration-500 shadow-lg flex items-center justify-center',
                {
                  'scale-100': mounted,
                  'scale-0': !mounted,
                  'h-10 w-10': scrolled,
                  'h-12 w-12': !scrolled
                }
              )}
            >
              <img
                src={Logo}
                alt="Nearby Eats"
                className="w-4/5 h-4/5 object-contain"
              />
            </div>
            <span 
              className={clsx(
                'font-bold text-black transition-all duration-300 drop-shadow-md',
                {
                  'text-xl': scrolled,
                  'text-2xl': !scrolled,
                  'translate-x-0 opacity-100': mounted,
                  '-translate-x-4 opacity-0': !mounted
                }
              )}
            >
              NearbyEats
            </span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav 
          className="hidden md:flex items-center gap-6 lg:gap-8"
          role="navigation"
          aria-label="Navegación principal"
        >
          {navItems.map((item, index) => (
            <Link 
              key={item.path}
              to={item.path} 
              className={clsx(
                'text-black relative transition-all duration-300 hover:text-black/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-amber-500 rounded px-2 py-1',
                {
                  'font-medium': !isActive(item.path),
                  'font-semibold': isActive(item.path),
                  'text-sm': scrolled,
                  'text-base': !scrolled,
                  'translate-y-0 opacity-100': mounted,
                  'translate-y-4 opacity-0': !mounted
                }
              )}
              style={{ transitionDelay: `${index * 70}ms` }}
              aria-current={isActive(item.path) ? 'page' : undefined}
            >
              {item.label}
              {isActive(item.path) && (
                <span 
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-white rounded-full"
                  aria-hidden="true"
                />
              )}
            </Link>
          ))}
          
          {/* Restaurant Portal Button - Desktop */}
          <div className="restaurant-dropdown relative" ref={dropdownRef}>
            <Button
              ref={dropdownButtonRef}
              className={clsx(
                'bg-white text-amber-300 hover:bg-white/90 focus:bg-white/90 flex items-center gap-1 transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-amber-500',
                {
                  'px-3 py-1.5 text-xs': scrolled,
                  'px-4 py-2 text-sm': !scrolled,
                  'translate-y-0 opacity-100': mounted,
                  'translate-y-4 opacity-0': !mounted
                }
              )}
              style={{ transitionDelay: '280ms' }}
              onClick={() => setShowRestaurantDropdown(!showRestaurantDropdown)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setShowRestaurantDropdown(!showRestaurantDropdown);
                }
              }}
              aria-expanded={showRestaurantDropdown}
              aria-haspopup="menu"
              aria-label="Portal de restaurantes - Menú desplegable"
            >
              <Utensils size={scrolled ? 14 : 16} className="mr-1" aria-hidden="true" />
              <span className="hidden sm:inline">Portal de Restaurantes</span>
              <span className="sm:hidden">Restaurantes</span>
              <ChevronDown 
                size={scrolled ? 14 : 16} 
                className={`transition-transform duration-300 ${showRestaurantDropdown ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </Button>
            
            {/* Restaurant Dropdown */}
            {showRestaurantDropdown && (
              <div 
                className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 z-50"
                role="menu"
                aria-labelledby="restaurant-portal-button"
              >
                <div className="p-4 bg-amber-50 border-b border-amber-100">
                  <h3 className="font-medium text-amber-800">Portal para Restaurantes</h3>
Eres un local de comidas y quieres potenciarte ? Unete ahora !!                </div>
                <div className="p-3" onKeyDown={handleDropdownKeyDown}>
                  <Button
                    className="w-full mb-2 justify-center flex items-center gap-2 bg-white text-amber-700 hover:bg-amber-50 focus:bg-amber-50 border border-amber-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    onClick={() => {
                      window.open('https://restaurantplatform.nearbyeatsapp.com/login', '_blank');
                      setShowRestaurantDropdown(false);
                    }}
                    role="menuitem"
                    aria-label="Iniciar sesión en el portal de restaurantes"
                  >
                    <LogIn size={16} aria-hidden="true" />
                    Iniciar Sesión
                  </Button>
                  <Button
                    className="w-full justify-center flex items-center gap-2 bg-amber-500 text-white hover:bg-amber-600 focus:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-700"
                    onClick={() => {
                      window.open('https://restaurantplatform.nearbyeatsapp.com/register', '_blank');
                      setShowRestaurantDropdown(false);
                    }}
                    role="menuitem"
                    aria-label="Registrar nuevo restaurante en la plataforma"
                  >
                    <UserPlus size={16} aria-hidden="true" />
                    Registrar Restaurante
                  </Button>
                </div>
              </div>
            )}
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          ref={mobileMenuButtonRef}
          className={clsx(
            'md:hidden text-white p-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-amber-500',
            scrolled ? 'bg-amber-400' : 'bg-amber-300'
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        id="mobile-navigation"
        className={clsx(
          'md:hidden fixed left-0 right-0 bg-gradient-to-b from-amber-300 to-amber-200 shadow-lg overflow-hidden transition-all duration-300 ease-in-out',
          {
            'max-h-screen opacity-100 translate-y-0': mobileMenuOpen,
            'max-h-0 opacity-0 -translate-y-4': !mobileMenuOpen
          }
        )}
        style={{ 
          top: scrolled ? '54px' : '65px'
        }}
        role="navigation"
        aria-label="Navegación móvil"
        aria-hidden={!mobileMenuOpen}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-3 mb-6">
            {navItems.map((item, index) => (
              <Link 
                key={item.path}
                ref={index === 0 ? firstMobileNavItemRef : undefined}
                to={item.path} 
                className={clsx(
                  'text-black py-2 px-4 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-amber-300',
                  isActive(item.path) 
                    ? 'bg-white/20 font-semibold' 
                    : 'hover:bg-white/10 focus:bg-white/10 font-medium'
                )}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={isActive(item.path) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          {/* Mobile Restaurant Promo */}
          <div className="bg-amber-50 p-4 rounded-xl shadow-md mb-4">
            <div className="flex items-center gap-2 mb-3">
              <Utensils size={20} className="text-amber-600" aria-hidden="true" color="black" />
              <h3 className="font-semibold text-black-800">Portal para Restaurantes</h3>
            </div>
            <p className="text-sm text-amber-500 mb-4">
Eres un local de comidas y quieres potenciarte ? Unete ahora !!            </p>
            <div className="flex flex-col gap-3">
              <Button
                className="w-full justify-center flex items-center gap-2 bg-white text-amber-500 hover:bg-gray-50 focus:bg-gray-50 border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                onClick={() => {
                  window.open('https://restaurantplatform.nearbyeatsapp.com/login', '_blank');
                  setMobileMenuOpen(false);
                }}
                aria-label="Iniciar sesión en el portal de restaurantes"
              >
                <LogIn size={18} aria-hidden="true" />
                Iniciar Sesión
              </Button>
              <Button
                className="w-full justify-center flex items-center gap-2 bg-amber-400 text-white hover:bg-amber-600 focus:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-700"
                onClick={() => {
                  window.open('https://restaurantplatform.nearbyeatsapp.com/register', '_blank');
                  setMobileMenuOpen(false);
                }}
                aria-label="Registrar nuevo restaurante en la plataforma"
              >
                <UserPlus size={18} aria-hidden="true" />
                Registrar Restaurante
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS for transitions and animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @media (max-width: 768px) {
          .restaurant-dropdown {
            position: static;
          }
        }

        /* Mejorar contraste para enlaces activos */
        @media (prefers-contrast: high) {
          .bg-white\\/20 {
            background-color: rgba(255, 255, 255, 0.4);
          }
        }

        /* Reducir animaciones para usuarios que prefieren menos movimiento */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </header>
  );
}

export default Header;