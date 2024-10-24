import { Button, Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Importar useNavigate de React Router
import { useWallet } from "../../context/walletContex";

export const Landing = () => {
  const { accounts, connectWallet, api } = useWallet(); // Obtener cuentas y api de la wallet
  const [isConnected, setIsConnected] = useState(false);
  const navigate = useNavigate(); // Hook para redirigir

  // Verificar si la wallet está conectada y si hay una conexión a la red Vara
  useEffect(() => {
    if (accounts.length > 0 && api) {
      setIsConnected(true); // Si hay cuentas y conexión API, el usuario está conectado
      navigate('/dashboard'); // Redirigir a la página de perfil si está conectado
      
    } else {
      setIsConnected(false); // Si no hay cuentas o conexión API, no está conectado
      console.log("problema con la red")
    }
  }, [accounts, api, navigate]); // Dependencias que controlan la redirección

  return (
    <article className="bg-[#050505] text-white p-4 ">
      <div>
        <main className="flex flex-col w-full">
          <section>
            <Image
              alt="Educational Image"
              className="object-cover rounded-lg shadow-lg"
              src="/icons/image.png"
              width="100%"
              height={350}
            />
          </section>

          <section className="flex flex-wrap justify-between">
            <div className="flex flex-col justify-center h-full mt-4">
              <h1 className="flex flex-col mb-6 text-4xl font-normal lg:text-6xl">
                Transforming{" "}
                <span className="font-bold">
                  Education <span className="font-light text-white">with</span>
                </span>
                <span className="font-normal">
                  Good<span className="font-bold">Actions</span>
                </span>
              </h1>
              <p className="mb-10 text-lg lg:text-xl">
                Change the <span className="font-bold">World</span>, Earn your{" "}
                <span className="font-bold">Future</span>
              </p>

              {/* Botones para conectar la wallet y verificar la conexión */}
              <div className="flex w-full gap-x-4">
                {/* Verificar si está conectado */}
                {isConnected ? (
                  <Button className="bg-[#BFED54] text-black font-bold rounded-lg  w-62 px-6 ">
                    Wallet Connected
                  </Button>
                ) : (
                  <Button
                    className="bg-[#BFED54] text-black font-bold rounded-lg  w-62 px-6 "
                    onClick={connectWallet} // Botón para conectar la wallet
                  >
                    Sign up with Wallet
                  </Button>
                )}
                <Button className="px-6 py-4 bg-transparent border border-white rounded-md">
                  Learn more
                </Button>
              </div>
            </div>

            <div className="flex flex-col mt-6 lg:flex-row gap-x-2">
              <div
                className=" object-cover rounded-2xl mb-6 lg:mb-0 h-[43vh] w-full lg:w-60 font-semibold text-5xl text-black p-2 flex flex-col items-center justify-between"
                style={{
                  backgroundImage: "url(../../../public/icons/image1.jpg)",
                }}
              >
                Connect With Us
                <div className="w-1/2 h-6 px-2 py-1 mt-4 bg-black rounded-full lg:w-3/4 ">
                  <ul className="flex items-center justify-center gap-4">
                    <li className="ml-2 mr-2 transition duration-200 hover:cursor-pointer hover:opacity-75">
                      <Image
                        alt="Instagram Icon"
                        className="w-4 h-4"
                        src="/icons/facebook.svg"
                      />
                    </li>

                    <li className="mr-2 transition duration-200 hover:cursor-pointer hover:opacity-75">
                      <Image
                        alt="Instagram Icon"
                        className="w-4 h-4"
                        src="/icons/x.svg"
                      />
                    </li>
                    <li className="mr-2 transition duration-200 hover:cursor-pointer hover:opacity-75">
                      <Image
                        alt="Instagram Icon"
                        className="w-4 h-4"
                        src="/icons/threads.svg"
                      />
                    </li>
                    <li className="mr-2 transition duration-200 hover:cursor-pointer hover:opacity-75">
                      <Image
                        alt="Instagram Icon"
                        className="w-4 h-4"
                        src="/icons/instagram.svg"
                      />
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className="object-cover rounded-2xl h-[43vh] w-full lg:w-80 px-6 py-20"
                style={{
                  backgroundImage: "url(../../../public/icons/image3.png)",
                }}
              >
                <h3 className="mb-3 text-2xl font-semibold">
                  Embrace the future of education With Us
                </h3>
                <p className="text-xs">
                  Our online platform allowing to earn knowledge by doing social
                  activities helping the environment
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </article>
  );
};
