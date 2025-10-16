import { useEffect } from "react";
export const SEO = () => {

  useEffect(() => {
    // Meta tags optimizados para SEO de restaurantes
    document.title = "Nearby Eats - ¿Que Somos?";
    
    const metaDescription = document.createElement('meta');
    metaDescription.name = "description";
    metaDescription.content = "Encuentra los mejores locales de comida cerca de ti con Nearby Eats. Descubre comida local, restaurantes cercanos y experiencias gastronómicas únicas en Perú. ¡Busca restaurantes ahora!";
    document.head.appendChild(metaDescription);
    
    const metaKeywords = document.createElement('meta');
    metaKeywords.name = "keywords";
    metaKeywords.content = "locales de comida cerca de mi, nearby eats, buscar restaurantes, restaurantes cercanos, comida cerca de mi, restaurantes locales Peru, encontrar restaurantes, delivery restaurantes, mejores restaurantes, gastronomia peruana, comida peruana";
    document.head.appendChild(metaKeywords);
    
    // Open Graph meta tags para redes sociales
    const ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.content = "Nearby Eats - Encuentra Locales de Comida Cerca de Ti";
    document.head.appendChild(ogTitle);
    
    const ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.content = "Descubre los mejores locales de comida y comida cerca de ti con Nearby Eats";
    document.head.appendChild(ogDescription);
    
    // Canonical URL
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = 'https://nearbyeatsapp.com';
    document.head.appendChild(canonical);
    
    
    return () => {
      document.head.removeChild(metaDescription);
      document.head.removeChild(metaKeywords);
      document.head.removeChild(ogTitle);
      document.head.removeChild(ogDescription);
      document.head.removeChild(canonical);
    };
  }, []);
  
  return (
    <>
      {/* Schema.org structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "Inicio",
            "item": "https://nearbyeatsapp.com"
          }]
        })
      }} />
    </>
  );
};