// components/SchemaMarkup.jsx
export const SchemaMarkup = () => {
  return (
    <>
      
      {/* WebSite Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Nearby Eats - Encuentra Restaurantes Cerca de Ti",
          // ... resto del schema
        })
      }} />
      
      
      {/* Schema.org structured data optimizado para restaurantes */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Nearby Eats - Encuentra Restaurantes Cerca de Ti",
          "url": "https://nearbyeatsapp.com",
          "description": "Encuentra los mejores restaurantes cerca de ti con Nearby Eats. Descubre comida local, restaurantes cercanos y experiencias gastronómicas únicas en Perú.",
          "keywords": "restaurantes cerca de mi, nearby eats, buscar restaurantes, restaurantes cercanos, comida cerca de mi, restaurantes locales Peru",
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://nearbyeatsapp.com/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          },
          "sameAs": [
            "https://platform.nearbyeatsapp.com"
          ]
        })
      }} />
     
      
      {/* LocalBusiness Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Nearby Eats",
          "description": "Plataforma para encontrar restaurantes cerca de ti en Perú",
          "url": "https://nearbyeatsapp.com",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "PE",
            "addressRegion": "Perú"
          },
          "serviceArea": {
            "@type": "Country",
            "name": "Perú"
          },
          "areaServed": "Perú",
          "knowsAbout": [
            "Restaurantes",
            "Comida local",
            "Gastronomía peruana",
            "Delivery de comida",
            "Reservas de restaurantes"
          ]
        })
      }} />
      
      {/* FAQ Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "¿Cómo puedo encontrar restaurantes cerca de mi ubicación?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Nearby Eats usa tu ubicación para mostrar restaurantes cercanos. Solo permite el acceso a tu ubicación y verás todas las opciones disponibles en tu área."
              }
            },
            {
              "@type": "Question", 
              "name": "¿Es gratis usar Nearby Eats?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sí, buscar y encontrar restaurantes en Nearby Eats es completamente gratuito para los usuarios."
              }
            }
          ]
        })
      }} />
    </>
  );
};