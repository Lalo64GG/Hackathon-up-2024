import { Tab, Tabs } from "@nextui-org/react";
import { CardCertificates } from "./components/CardCertificates";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
            <div className="flex items-center justify-center w-full gap-x-4">
              {/* Sección de Tabs */}
              <motion.div
                className="dark:bg-[#0F0F0F] w-full  rounded-md"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <Tabs
                  classNames={{
                    tabList:
                      "gap-6 px-2 relative rounded-lg overflow-x-auto flex justify-start lg:justify-start items-center",
                    tab: `px-6 py-3 h-12 text-base font-semibold 
                          text-gray-300 hover:text-white focus:text-white whitespace-nowrap 
                          transition-colors duration-300 ease-in-out`,
                    tabContent: "relative",
                  }}
                  fullWidth={true}
                  aria-label="Dynamic tabs"
                  items={tabs}
                  variant="underlined"
                >
                  {tabs.map((tab) => (
                    <Tab key={tab.id} title={tab.label}>
                      <div className="max-h-[70vh] overflow-y-auto space-y-6 p-4">
                        {[...Array(6)].map((_, index) => (
                          <CardWithAnimation key={index} />
                        ))}
                      </div>
                    </Tab>
                  ))}
                </Tabs>
              </motion.div>
            </div>
          </section>
        </main>
      </div>
    </article>
  );
};

// Componente para la tarjeta con animación al hacer scroll
const CardWithAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <CardCertificates />
    </motion.div>
  );
};
