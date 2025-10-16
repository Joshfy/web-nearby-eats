
// components/planes/ModalPlanes.tsx
import React, { useState } from "react";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Plan } from "../../types/Tipos";
import { ContenidoDialogoAnimado } from "../Dialog/ContentDialog";
import { TarjetaPlan } from "../Card/TarjetasPlan";
import { TituloAnimado } from "../Fonts/TituloAnimed";
import { BotonAnimado } from "../Buttons/BotonAnimade";
interface ModalPlanesProps {
  planes: Plan[];
}

export const ModalPlanes: React.FC<ModalPlanesProps> = ({ planes }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <BotonAnimado className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full transition-all duration-300">
          Ver planes y precios
        </BotonAnimado>
      </DialogTrigger>
      <ContenidoDialogoAnimado className="p-6 overflow-y-auto">
        <DialogHeader>
          <TituloAnimado>
            <DialogTitle className="text-2xl font-bold text-center mb-6">Planes y Precios</DialogTitle>
          </TituloAnimado>
        </DialogHeader>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 items-start">
        {planes.map((plan, index) => (
            <TarjetaPlan key={index} plan={plan} index={index} />
        ))}
        </div>
      </ContenidoDialogoAnimado>
    </Dialog>
  );
};
