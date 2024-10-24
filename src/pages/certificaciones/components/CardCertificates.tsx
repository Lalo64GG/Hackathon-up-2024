import { Card, CardBody, Button, Image } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

type CardCertificatesProps = {
  hiddenButton?: boolean;
};

export const CardCertificates = ({ hiddenButton }: CardCertificatesProps) => {

  const navigate = useNavigate();

  return (
    <Card
      isBlurred
      className={`m-4 border-none bg-background/60 dark:bg-default-100/50 max-w-full mb-4 rounded-lg shadow-md `} 
      shadow="sm"
    >
      <CardBody className={`p-6  ${
        hiddenButton ? "hover:cursor-pointer hover:border-green-500 hover:border" : ""
      }` }>
        {/* Contenedor principal para la imagen y el contenido */}
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          {/* Imagen en el lado izquierdo */}
          <div className="w-full md:w-1/3">
            <Image
              alt="Album cover"
              className="object-cover w-full h-full rounded-md"
              width={"100%"}
              height={200}
              shadow="md"
              src="/img/ss.png"
            />
          </div>

          {/* Contenido textual y botones */}
          <div className="flex flex-col w-full md:w-2/3 mt-5">
            {/* Título y descripción */}
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-semibold text-foreground/90">
                UX/UI Designer
              </h1>
              <div className="flex items-center">
                <span className="text-yellow-400 text-xl mr-2">•</span>
                <span className="text-xl font-semibold">5.0</span>
              </div>
            </div>

            <p className="text-base font-medium mt-2 text-foreground/50">
              An online course for those who want to delve into UX/UI
            </p>

            {/* Información de certificación */}
            <div className="mt-4 flex gap-2 items-center">
              <p className="text-sm">Certification by</p>
              <Image
                alt="Certification Logo"
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                width={24}
                height={24}
              />
            </div>

            {/* Botones de categorías y el botón de acción */}
            <div className="flex justify-between items-center mt-6">
              <div className="flex gap-3">
                <Button
                  size="sm"
                  variant="shadow"
                  color="success"
                  className="rounded-2xl"
                >
                  Prototyping
                </Button>
                <Button
                  size="sm"
                  className="rounded-2xl bg-[#D4D4D8] text-black"
                >
                  Wireframes
                </Button>
                <Button size="sm" color="primary" className="rounded-2xl">
                  User Research
                </Button>
              </div>

              {!hiddenButton && (
                <Button
                  size="sm"
                  variant="shadow"
                  className="bg-[#BFED54] rounded-full p-3"
                  onClick={() => navigate("/overview")}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.4297 5.92969L20.4997 11.9997L14.4297 18.0697"
                      stroke="#18191A"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.5 12H20.33"
                      stroke="#18191A"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
