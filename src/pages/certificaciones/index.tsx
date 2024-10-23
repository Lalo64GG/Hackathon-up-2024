import { Tab, Tabs } from "@nextui-org/react";
import { CardCertificates } from "./components/CardCertificates";

export const Certificaciones = () => {
  const tabs = [
    { id: "All", label: "All", content: <></> },
    { id: "Code", label: "Code", content: <></> },
    { id: "Design", label: "Design", content: <></> },
    { id: "Marketing", label: "Marketing", content: <></> },
    { id: "Ilustration", label: "Ilustration", content: <></> },
    { id: "Cybersecurity", label: "Cybersecurity", content: <></> },
  ];

  return (
    <article className="p-4">
      <div>
        <main>
          <section>
            <div className="flex items-center justify-center w-full gap-x-4 ">
              <div className="dark:bg-[#0F0F0F] w-full lg:w-3/4 h-screen rounded-md ">
                <Tabs
                  classNames={{
                    tabList:
                      "gap-6 px-2 relative rounded-lg overflow-x-auto flex justify-start lg:justify-start items-center",
                    tab: `
                          px-6 py-3 h-12 text-base font-semibold 
                          text-gray-300 hover:text-white focus:text-white whitespace-nowrap 
                          transition-colors duration-300 ease-in-out
                        `,
                    tabContent: "relative",
                  }}
                  fullWidth={true}
                  aria-label="Dynamic tabs "
                  items={tabs}
                  variant="underlined"
                >
                  {tabs.map((tab) => (
                    <Tab key={tab.id} title={tab.label} id={tab.id}>
                      <div className="max-h-[90vh] overflow-y-auto space-y-6">
                        <CardCertificates />
                        <CardCertificates />
                        <CardCertificates />
                        <CardCertificates />
                        <CardCertificates />
                        <CardCertificates />
                      </div>
                    </Tab>
                  ))}
                </Tabs>
              </div>

              <div className="dark:bg-[#232121] w-full lg:w-1/6 h-screen rounded-md  hidden lg:flex flex-col flex-grow p-5">
                <h1 className="mb-4 text-white">Contenido Adicional</h1>
                <p className="text-gray-400">
                  Este es el contenido adicional que solo se muestra en
                  pantallas grandes. Aquí puedes agregar información
                  complementaria que sea útil para el usuario cuando visualiza
                  en una pantalla más amplia.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </article>
  );
};