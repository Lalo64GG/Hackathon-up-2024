import FactoryImgEvent from "./factory/factoryImgEvent";

type CardEventProps = {
  title: string;
  description: string;
};

export const CardEvent = ({ title, description }: CardEventProps) => {
  const randomImage = FactoryImgEvent(); 

  return (
    <div className="relative w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg h-80 md:h-96 lg:h-[500px]"> {/* Controlando la altura del contenedor */}
      <img src={randomImage} alt="Event Image" className="object-cover w-full h-full" /> {/* La imagen ahora ocupa el espacio total del div */}
      <div className="absolute inset-0 flex items-center p-4 bg-black bg-opacity-50">
        <div>
          <h3 className="text-lg font-bold text-white md:text-xl lg:text-2xl">{title}</h3>
          <p className="text-xs text-gray-300 md:text-sm lg:text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};
