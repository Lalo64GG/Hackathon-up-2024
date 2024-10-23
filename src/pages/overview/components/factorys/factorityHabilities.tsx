import { Button } from "@nextui-org/react";
/*Este componente es encargado de 
renderizar varios tipo de tarjetas de habilidad
segun el tipo indicado por parametro
*/
type factoryHabilitiesProps = {
  option: number;
  nameCard: string;
};
export const FactoryCardHabilities = ({
  option,
  nameCard,
}: factoryHabilitiesProps) => {
  if (option == 1) {
    return (
      <Button color="success" size="sm" variant="shadow" radius="lg">
        {nameCard}
      </Button>
    );
  } else if (option == 2) {
    return (
      <Button
        className="text-black bg-gray-400"
        size="sm"
        variant="shadow"
        radius="lg"
      >
        {nameCard}
      </Button>
    );
  }else{
    return (
        <Button
            color="primary"
            size="sm"
            variant="shadow"
            radius="lg"
            className="text-black"
          >
           {nameCard}
          </Button>
    )
  }
};
