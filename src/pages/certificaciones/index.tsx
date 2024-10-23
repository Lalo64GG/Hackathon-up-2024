import {
  Card,
  CardBody,
  Tab,
  Tabs,
  Button,
  Slider,
  Image,
} from "@nextui-org/react";

export const Certificaciones = () => {
  let tabs = [
    {
      id: "All",
      label: "All",
      content: <div className="bg-red-500">All</div>,
    },
    {
      id: "Code",
      label: "Code",
      content: <div className="bg-red-500">Code</div>,
    },
    {
      id: "Design",
      label: "Design",
      content: <div className="bg-red-500">Design</div>,
    },
    {
      id: "Marketing",
      label: "Marketing",
      content: <div className="bg-red-500">Marketing</div>,
    },
    {
      id: "Ilustration",
      label: "Ilustration",
      content: <div className="bg-red-500">Ilustration</div>,
    },
    {
      id: "Cybersecurity",
      label: "Cybersecurity",
      content: <div className="bg-red-500">Cybersecurity</div>,
    },
  ];

  return (
    <article>
      <section>
        <div className="w-full flex items-start justify-center gap-x-4 mb-10">
          {/* Div con las Tabs */}
          <div className=" w-full lg:w-2/3 h-auto rounded-md px-5">
            <Tabs
              classNames={{
                tabList:
                  "gap-6 w-full  relative rounded-lg px-20 flex justify-center items-center", // Alineación de las pestañas
                cursor: "w-full ",
                tab: "px-8 h-12 text-sm text-gray-300 hover:text-white focus:text-white", // Estilo del texto
                tabContent: "relative",
              }}
              aria-label="Dynamic tabs"
              items={tabs}
              variant="underlined"
            >
              {(item) => (
                <Tab key={item.id} title={item.label} className="w-full">
                  <Card
                    isBlurred
                    className="ml-16 border-none bg-background/60 dark:bg-default-100/50 max-w-[800px]"
                    shadow="sm"
                  >
                    <CardBody>
                      <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                        <div className="relative col-span-6 md:col-span-4">
                          <Image
                            alt="Album cover"
                            className="object-cover"
                            height={200}
                            shadow="md"
                            src="https://nextui.org/images/album-cover.png"
                            width="100%"
                          />
                        </div>

                        <div className="flex flex-col col-span-6 md:col-span-8">
                          <div className="flex justify-between items-start">
                            <div className="flex flex-col gap-0">
                              <h1 className=" text-2xl font-semibold text-foreground/90">
                                Daily Mix
                              </h1>

                              <p className=" text-base font-medium mt-2 text-foreground/30">
                                an online courser for those who want to delive into UX/UI
                              </p>

                              <div className=" mt-4 flex gap-x-4">
                              <p>Certification by</p>
                              <p className="text-foreground/50">ICONO</p>
                              </div>
                            </div>
                            <Button
                              isIconOnly
                              className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                              radius="full"
                              variant="light"
                            ></Button>
                          </div>

                          <div className="flex flex-col mt-3 gap-1">
                           
                            <div className="flex justify-between">
                              <Button color="success" className="w-2 p-1">
                                Prototyping 
                              </Button>
                              <Button color="undefined">
                                sada
                              </Button>
                              <Button color="primary">
                                User Research
                              </Button>
                            </div>
                          </div>

                          <div className="flex w-full items-center justify-center">
                            <Button
                              isIconOnly
                              className="data-[hover]:bg-foreground/10"
                              radius="full"
                              variant="light"
                            ></Button>
                            <Button
                              isIconOnly
                              className="data-[hover]:bg-foreground/10"
                              radius="full"
                              variant="light"
                            ></Button>
                            <Button
                              isIconOnly
                              className="w-auto h-auto data-[hover]:bg-foreground/10"
                              radius="full"
                              variant="light"
                            ></Button>
                            <Button
                              isIconOnly
                              className="data-[hover]:bg-foreground/10"
                              radius="full"
                              variant="light"
                            ></Button>
                            <Button
                              isIconOnly
                              className="data-[hover]:bg-foreground/10"
                              radius="full"
                              variant="light"
                            ></Button>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Tab>
              )}
            </Tabs>
          </div>

          {/* Div con el contenido */}
          <div className="bg-gray-800 w-full lg:w-1/3 h-auto rounded-md p-5 hidden lg:flex flex-col">
            <h1 className="text-white">Contenido</h1>
          </div>
        </div>
      </section>
    </article>
  );
};
