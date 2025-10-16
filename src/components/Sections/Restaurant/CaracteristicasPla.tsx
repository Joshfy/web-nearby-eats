
// components/planes/CaracteristicaPlan.tsx
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface CaracteristicaPlanProps {
  texto: string;
  index: number;
  planIndex: number;
}

export const CaracteristicaPlan: React.FC<CaracteristicaPlanProps> = ({ 
  texto, 
  index, 
  planIndex 
}) => {
  return (
    <motion.li 
      className="flex items-start"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.2 + (index * 0.05) + (planIndex * 0.1) }}
    >
      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
      <span className="text-gray-700 text-sm">{texto}</span>
    </motion.li>
  );
};
