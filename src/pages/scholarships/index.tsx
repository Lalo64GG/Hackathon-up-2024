import { Button, Input } from "@nextui-org/react";
import { SearchIcon } from "../../shared/icons/SearchIcon";
import { CardCertificates } from "../certificaciones/components/CardCertificates";

export const Scholarships = () => {
  return (
    <article className="bg-[#0F0F0F] text-white p-4 rounded-lg m-2 ">
      <div>
        <main className="flex flex-col lg:flex-row gap-8 bg-[#242121] rounded-md">
          {/* Sección izquierda (información de cómo funciona) */}
          <section className="w-full h-auto p-6 lg:w-1/2 lg:p-8">
            <h1 className="mb-8 text-4xl font-bold lg:text-5xl">How it works?</h1>
            <p className="mb-6 text-lg">
              On our platform, scholarships are designed to provide opportunities for users
              who may not have the financial means to pay for certifications. Users can apply
              for scholarships based on their reputation score, social impact actions, and
              achievements within the platform. Here's a breakdown of how the scholarship system works:
            </p>

            <h2 className="mt-10 mb-4 text-3xl font-semibold">Earning Scholarship</h2>
            
            <div className="mb-6">
              <h3 className="mb-2 text-xl font-semibold">Reputation Score</h3>
              <p className="text-lg">
                Users earn reputation points by completing social impact actions (such as
                volunteering, reforestation, community cleanups) and obtaining certifications.
                The higher the reputation score, the better the chances of qualifying for scholarships.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="mb-2 text-xl font-semibold">Eligibility</h3>
              <p className="text-lg">
                Each scholarship has specific requirements, which may include a minimum
                reputation score, completion of certain social actions, or enrollment in
                particular certification programs.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="mb-2 text-xl font-semibold">Action-Based Scholarships</h3>
              <p className="text-lg">
                Some scholarships are exclusively available to users who have completed
                a defined number of social actions. These actions are verified by organizers
                or NGOs on the platform.
              </p>
            </div>
          </section>

          {/* Sección derecha (seleccionar certificación) */}
          <section className="w-full h-auto p-6 rounded-lg lg:w-1/2 lg:p-8">
            <h2 className="mb-6 text-2xl font-semibold">Select your Certification</h2>
            <div className="mb-6">
              <Input
                classNames={{
                  base: "w-full lg:w-[80%]",
                  inputWrapper: "h-10 rounded-full bg-[#2A2A2A] text-white px-4 placeholder-gray-500",
                }}
                placeholder="Search"
                startContent={<SearchIcon size={18} />}
                type="search"
                aria-label="Search"
              />
            </div>

            {/* Contenedor de tarjetas de certificación */}
            <div className="overflow-y-auto max-h-[600px] space-y-4">
              <CardCertificates />
              <CardCertificates />
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
