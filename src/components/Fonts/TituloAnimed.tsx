
// components/planes/TituloAnimado.tsx
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface TituloAnimadoProps {
  children: ReactNode;
  className?: string;
}

export const TituloAnimado: React.FC<TituloAnimadoProps> = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
