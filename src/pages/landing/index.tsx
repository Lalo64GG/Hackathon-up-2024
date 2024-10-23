import { Button, Image } from "@nextui-org/react";

export const Landing = () => {
  return (
    <article className="bg-[#050505] text-white min-h-screen">
      <div>
        <main className="w-full min-h-screen flex flex-col lg:flex-row">
          {/* Sección de la barra lateral izquierda y título */}
          <section className="w-full lg:w-1/2 flex flex-col justify-between p-6 lg:p-8">
            {/* Barra de navegación */}
            <nav className="flex justify-between items-center mb-8">
              <div className="flex items-center">
                <a className="flex items-center text-white">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 11C22 17.0751 17.0751 22 11 22C15.1311 22 18.48 18.6511 18.48 14.52C18.48 10.3889 15.1311 7.04 11 7.04C6.86891 7.04 3.52 10.3889 3.52 14.52C3.52 18.6511 6.86891 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11Z"
                      fill="white"
                    />
                    <path
                      d="M11 22C8.08394 22 5.72 19.6361 5.72 16.72C5.72 13.8039 8.08394 11.44 11 11.44C13.9161 11.44 16.28 13.8039 16.28 16.72C16.28 19.6361 13.9161 22 11 22Z"
                      fill="white"
                    />
                  </svg>
                  <span className="ml-2 text-lg font-bold">GoodActions</span>
                </a>
              </div>
              <div className="flex gap-4">
                <Button size="sm" className="bg-[#BFED54] rounded-xl text-black font-bold">
                  Login
                </Button>
                <Button size="sm" className="bg-transparent ">
                  Register
                </Button>
              </div>
            </nav>

            {/* Título principal y botones de acción */}
            <div className="flex flex-col justify-center h-full text-center lg:text-left">
              <h1 className="text-3xl lg:text-5xl mb-6 font-light flex flex-col">
                Transforming
                <span className="text-5xl lg:text-7xl font-bold bg-gradient-to-b from-[#ffffff] to-[#999999] text-transparent bg-clip-text">
                  Education <span className="font-light text-white">with</span>
                </span>
                <span className="font-normal">
                  Good<span className="font-bold">Actions</span>
                </span>
              </h1>
              <p className="text-base lg:text-xl mb-6">
                Change the <span className="font-bold">World</span>, Earn your{" "}
                <span className="font-bold">Future</span>
              </p>
              <div className="flex gap-4 justify-center lg:justify-start">
                <Button className="bg-[#BFED54] text-black rounded-md px-6 py-3">
                  Join us
                </Button>
                <Button className="bg-transparent border border-white rounded-md px-6 py-3">
                  Learn more
                </Button>
              </div>
            </div>
          </section>

          {/* Sección de la imagen y contenido derecho */}
          <section className="w-full lg:w-1/2 flex flex-col justify-center p-6 lg:p-8">
            {/* Imagen con texto superpuesto */}
            <div className="relative w-full mb-6">
              <Image
                alt="Educational Image"
                className="object-cover rounded-lg shadow-lg"
                src="/icons/image.png"
                width="100%"
                height={400}
              />
              <div className="z-10 absolute inset-0 flex items-center justify-center p-4">
                <h2 className="text-2xl lg:text-4xl font-bold text-center text-white leading-snug">
                  Explore all the benefits <br />
                  Empowering <span className="text-yellow-400">Change</span> through{" "}
                  <span className="text-blue-400">Education</span>
                </h2>
              </div>
            </div>

            {/* Sección de contenido adicional */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <div
                className="h-56 w-full md:w-[90%] rounded-2xl p-6 bg-cover bg-center"
                style={{ backgroundImage: "url(/icons/image1.jpg)" }}
              >
                <h3 className="text-2xl lg:text-4xl text-black font-bold mb-4">
                  Connect With Us
                </h3>
              </div>
              <div
                className="h-56 w-full md:w-[90%] rounded-2xl p-6 flex flex-col justify-center bg-cover bg-center"
                style={{ backgroundImage: "url(/icons/image2.jpg)" }}
              >
                <h3 className="text-xl lg:text-2xl text-black font-bold mb-4">
                  Embrace the future of education With Us
                </h3>
                <p className="text-sm lg:text-base text-black">
                  Our online platform allows you to earn knowledge by doing social actions
                  while helping the environment.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </article>
  );
};
