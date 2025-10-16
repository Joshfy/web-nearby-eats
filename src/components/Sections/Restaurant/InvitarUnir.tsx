import  { JSX } from "react";
import { ModalPlanes } from "../../Modal/ModalPlanes";
import { BotonAnimado } from "../../Buttons/BotonAnimade";
import { PLANES_DATA } from "../../../Dates/DatosPlanes";

export function Invitar(): JSX.Element {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">¿Listo para revolucionar tu restaurante?</h2>
          <p className="text-xl text-white/90 mb-8">
            Únete y se de los primeros  restaurantes que para aprovechar a Nearby Eats para aumentar su visibilidad y ventas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
              href="https://wa.me/+51927595983?text=Estoy%20interesado%20en%20pertenecer%20a%20la%20plataforma" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <BotonAnimado className="px-8 py-3 bg-white text-[rgb(255,179,71)] font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Solicitar demostración
              </BotonAnimado>
            </a>

            <ModalPlanes planes={PLANES_DATA} />
          </div>
        </div>
      </div>
    </>
  );
}