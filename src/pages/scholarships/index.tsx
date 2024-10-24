import { Button, Input } from "@nextui-org/react";
import { SearchIcon } from "../../shared/icons/SearchIcon";
import { CardCertificates } from "../certificaciones/components/CardCertificates";
import { useNavigate } from "react-router-dom";

export const Scholarships = () => {

  const navigate = useNavigate()
  const handleApply = () => {
    navigate("/scholarships/status")
  };

  return (
    <article className="bg-[#0F0F0F] text-white p-4 rounded-lg m-2 ">
      
      <div>
        <main className="flex flex-col lg:flex-row gap-8 bg-[#242121] rounded-md">
          {/* Boton para cambio de pantalla */}
          
          {/* Sección izquierda (información de cómo funciona) */}
          <section className="w-full h-auto p-6 lg:w-1/2 lg:p-8">
            <h1 className="mb-8 text-4xl font-bold lg:text-5xl">
              How it works?
            </h1>
            <p className="mb-6 text-lg">
              On our platform, scholarships are designed to provide
              opportunities for users who may not have the financial means to
              pay for certifications. Users can apply for scholarships based on
              their reputation score, social impact actions, and achievements
              within the platform. Here's a breakdown of how the scholarship
              system works:
            </p>

            <h2 className="mt-10 mb-4 text-3xl font-semibold">
              Earning Scholarship
            </h2>

            <div className="mb-6">
              <h3 className="mb-2 text-xl font-semibold">Reputation Score</h3>
              <p className="text-lg">
                Users earn reputation points by completing social impact actions
                (such as volunteering, reforestation, community cleanups) and
                obtaining certifications. The higher the reputation score, the
                better the chances of qualifying for scholarships.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="mb-2 text-xl font-semibold">Eligibility</h3>
              <p className="text-lg">
                Each scholarship has specific requirements, which may include a
                minimum reputation score, completion of certain social actions,
                or enrollment in particular certification programs.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="mb-2 text-xl font-semibold">
                Action-Based Scholarships
              </h3>
              <p className="text-lg">
                Some scholarships are exclusively available to users who have
                completed a defined number of social actions. These actions are
                verified by organizers or NGOs on the platform.
              </p>
            </div>
          </section>

          {/* Sección derecha (seleccionar certificación) */}
          <section className="w-full h-auto p-6 rounded-lg lg:w-2/3 lg:p-8">
          <div className="flex justify-end w-full hover:cursor-pointer">
           <button onClick={handleApply}>
           <svg
              width="61"
              height="24"
              viewBox="0 0 61 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M45.9102 19.9201L52.4302 13.4001C53.2002 12.6301 53.2002 11.3701 52.4302 10.6001L45.9102 4.08008"
                stroke="#CCCCCC"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.0898 4.07992L8.56984 10.5999C7.79984 11.3699 7.79984 12.6299 8.56984 13.3999L15.0898 19.9199"
                stroke="#CCCCCC"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
           </button>
          </div>
            <h2 className="mb-6 text-2xl font-semibold">
              Select your Certification
            </h2>
            <div className="mb-6">
              <Input
                classNames={{
                  base: "w-full lg:w-[80%]",
                  inputWrapper:
                    "h-10 rounded-full bg-[#2A2A2A] text-white px-4 placeholder-gray-500",
                }}
                placeholder="Search"
                startContent={<SearchIcon size={18} />}
                type="search"
                aria-label="Search"
              />
            </div>

            {/* Contenedor de tarjetas de certificación */}
            <div className="overflow-y-auto max-h-[500px] space-y-4 scrollbar-hide">
              <CardCertificates hiddenButton={true} />
              <CardCertificates hiddenButton={true} />
            </div>

            {/* Botón de aplicación */}
            <div className="flex justify-center mt-8">
              <Button className="bg-[#BFED54] text-black w-full lg:w-[90%] py-4 text-lg font-semibold rounded-md">
                Apply
              </Button>
            </div>
          </section>
        </main>
      </div>
    </article>
  );
};
