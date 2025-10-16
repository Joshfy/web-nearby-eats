
// components/planes/PrecioPlan.tsx
import React from "react";
import { motion } from "framer-motion";

interface PrecioPlanProps {
  precio: string;
  index: number;
}

export const PrecioPlan: React.FC<PrecioPlanProps> = ({ precio, index }) => {
  return (
    <div className="text-center mt-4 bg-red">
      <motion.div 
        className="text-4xl font-bold text-gray-800"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
      >
        {precio}
      </motion.div>
      <div className="text-gray-500 text-sm">/ mes</div>
    </div>
  );
};