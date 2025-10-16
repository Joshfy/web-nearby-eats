// pages/Inicio.js
import { useState, useEffect } from "react";
import { HeroSection } from "../components/Inicio/HeroSection";
import { FeaturesSection } from "../components/Inicio/FeaturesSection";
import { WhyChooseUsSection } from "../components/Inicio/WhyChooseUsSection ";
import { FAQSection } from "../components/Inicio/FAQSection";
import { SchemaMarkup } from "../components/Inicio/SchemaMarkup";
import { SEO } from "../components/Inicio/SEO";
import { Botones } from "../components/Inicio/Botones";
function Inicio() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <SEO />
      
      <HeroSection isLoaded={isLoaded} />
      <Botones isLoaded={isLoaded}/>
      
      <FeaturesSection />
      
      <WhyChooseUsSection isLoaded={isLoaded} />
      
      
      <FAQSection isLoaded={isLoaded} />
      
      
      <SchemaMarkup />
    </>
  );
}

export default Inicio;