import imgEvent from "../../../../../public/img/cleanEvent.png";
import imgEvent2 from "../../../../../public/img/cleanEvent2.png";
import imgEvent3 from "../../../../../public/img/cleanEvent3.png";

// Función para retornar una imagen aleatoria
const FactoryImgEvent = () => {
  const images = [imgEvent, imgEvent2, imgEvent3];
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

export default FactoryImgEvent;