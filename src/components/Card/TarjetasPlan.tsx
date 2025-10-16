
// components/planes/TarjetaPlan.tsx
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { Plan } from "../../types/Tipos";
import { CaracteristicaPlan } from "../Sections/Restaurant/CaracteristicasPla";
import { PrecioPlan } from "../Sections/Restaurant/PrecioPlan";
import { BotonEmpezar } from "../Buttons/BotonEmpezar";
interface TarjetaPlanProps {
  plan: Plan;
  index: number;
}

export const TarjetaPlan: React.FC<TarjetaPlanProps> = ({ plan, index }) => {
    const enviarWhatsapp = () => {
    const numero = "51927585983"; // Reemplaza con tu número en formato internacional sin "+" ni espacios
    const mensaje = `Hola buenas, estoy interesado en pertenecer a la plataforma Nearby Eats con el plan ${plan.nombre} `;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={cn(
        "rounded-lg overflow-hidden border shadow-md hover:shadow-lg transition-all duration-300",
        plan.destacado ? "border-orange-400 shadow-orange-200" : "border-gray-200"
      )}
    >
      <div className={cn("p-4 text-center", plan.destacado ? "bg-[rgb(255,179,71)]" : "bg-gray-200")}>
        <h3 className={cn("text-2xl font-bold", plan.destacado ? "text-white" : "text-gray-700")}>
          {plan.nombre}
        </h3>
        <p className={cn("text-sm", plan.destacado ? "text-white/90" : "text-gray-600")}>
          {plan.descripcion}
        </p>
      </div>
      <div className="p-6 bg-white">
        <ul className="space-y-3 mb-6">
          {plan.caracteristicas.map((caracteristica, idx) => (
            <CaracteristicaPlan 
              key={idx} 
              texto={caracteristica} 
              index={idx} 
              planIndex={index}
            />
          ))}
        </ul>
        <PrecioPlan precio={plan.precio} index={index} />
        <BotonEmpezar destacado={plan.destacado} onClick={enviarWhatsapp} />
      </div>
    </motion.div>
  );
};
