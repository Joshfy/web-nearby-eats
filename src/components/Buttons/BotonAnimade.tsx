import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface BotonAnimadoProps {
  children: ReactNode;
  className: string;
  onClick?: () => void;
}

export const BotonAnimado: React.FC<BotonAnimadoProps> = ({ children, className, onClick }) => {
  return (
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};