/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from "react";
import { DialogContent } from "../ui/dialog";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
interface ContenidoDialogoAnimadoProps {
  children: ReactNode;
  className?: string;
  [x: string]: any;
}

export const ContenidoDialogoAnimado: React.FC<ContenidoDialogoAnimadoProps> = ({ 
    children, 
    className, 
    ...props 
  }) => {
    return (
      <DialogContent
        className={cn(
          "sm:max-w-5xl lg:max-w-6xl p-0", // Aumentado el ancho máximo
          "max-h-[85vh] md:max-h-[90vh]",
          className
        )}
        {...props}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="h-full max-h-full overflow-y-auto overscroll-contain"
        >
          {children}
        </motion.div>
      </DialogContent>
    );
  };