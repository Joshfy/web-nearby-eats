// components/planes/BotonEmpezar.tsx
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
interface BotonEmpezarProps {
  destacado?: boolean;
  onClick?: () => void;
}
export const BotonEmpezar: React.FC<BotonEmpezarProps> = ({ destacado, onClick  }) => {
  return (
    <motion.button 
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={cn(
        "w-full mt-6 py-3 font-semibold rounded transition-all duration-300",
        destacado 
          ? "bg-[rgb(255,179,71)] text-white hover:bg-orange-500" 
          : "bg-gray-200 text-gray-800 hover:bg-gray-300"
      )}
    >
      EMPEZAR
    </motion.button>
  );
};
