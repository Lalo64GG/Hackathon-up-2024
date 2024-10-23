import { Options } from "./options";
import { useState } from "react";
import { Challenges } from "./challenges";
import { TransitionsW } from "./transitions";
import { motion } from "framer-motion";

export const SubMenu = () => {
  const [option, setOption] = useState<number>(1);

 
  const variants = {
    hidden: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100,  
    }),
    visible: { 
      opacity: 1, 
      x: 0,  
      transition: { 
        duration: 0.3, 
        ease: [0.25, 0.8, 0.25, 1] 
      }
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? -100 : 100, 
      transition: { 
        duration: 0.3, // Tiempo de la animación (más rápido)
        ease: [0.25, 0.8, 0.25, 1] // Curva suave para la salida
      }
    }),
  };

  // Determina la dirección según el valor de option
  const direction = option === 1 ? 1 : -1; // 1 para derecha, -1 para izquierda

  return (
    <>
      <div className={`grid items-center w-full mt-2 ${option === 1 ? "grid-cols-1" : "grid-cols-2"}`}>
        <Options handlerOptions={setOption} valueOption={option} />
        {option === 2 && <h2 className="text-2xl font-semibold">Transitions</h2>}
      </div>

      <div className="mx-5 mt-10">
        <motion.div
          key={option} // Para que Framer Motion detecte los cambios en option
          custom={direction} // Pasamos la dirección personalizada
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
        >
          {option === 1 ? <Challenges /> : <TransitionsW />}
        </motion.div>
      </div>
    </>
  );
};
