import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { FactoryCardHabilities } from "./factorys/factorityHabilities";

type HabilitiesCardProps = {
  habilities: string[];
};

export const HabilitiesCard = ({ habilities }: HabilitiesCardProps) => {
  return (
    <Card className="py-3 bg-[#0C0C0C] px-7 mt-3">
      <CardHeader>
        <h2 className="text-sm font-semibold">Habilities</h2>
      </CardHeader>

      <CardBody>
        <section className="grid w-full grid-cols-3 gap-x-3 gap-y-3">
          {habilities.map((hability, index) => {
            const option = (index % 3) + 1; // Calcula el valor de option según el índice

            return (
              <FactoryCardHabilities
                nameCard={hability}
                key={index}
                option={option}
              />
            );
          })}
        </section>
      </CardBody>
    </Card>
  );
};
