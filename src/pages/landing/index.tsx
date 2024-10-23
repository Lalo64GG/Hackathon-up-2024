import { Button, Image } from "@nextui-org/react";

export const Landing = () => {
  return (
    <article className="bg-[#050505] text-white p-4 ">
      <div>
        <main className="w-full flex flex-col">
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
              <h1 className=" text-4xl lg:text-6xl mb-6 flex flex-col font-normal">
                Transforming{" "}
                <span className="font-bold">
                  Education <span className="font-light text-white">with</span>
                </span>
                <span className="font-normal">
                  Good<span className="font-bold">Actions</span>
                </span>
              </h1>
              <p className="text-lg lg:text-xl mb-10">
                Change the <span className="font-bold">World</span>, Earn your{" "}
                <span className="font-bold">Future</span>
              </p>
              <div className="flex w-full gap-x-4">
                <Button className="bg-[#BFED54] text-black font-bold rounded-lg  w-62 px-6 ">
                  Sing up with Wallet
                </Button>
                <Button className="bg-transparent border border-white rounded-md px-6 py-4">
                  Learn more
                </Button>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-x-2  mt-6">
              <div
                className=" object-cover rounded-2xl mb-6 lg:mb-0 h-[43vh] w-full lg:w-60 font-semibold text-5xl text-black p-2 flex flex-col items-center justify-between"
                style={{
                  backgroundImage: "url(../../../public/icons/image1.jpg)",
                }}
              >
                Connect With Us
                <div className="bg-black h-6 w-1/2 lg:w-3/4 rounded-full py-1 px-2 mt-4 ">
                <ul className="flex justify-center items-center gap-4">
                    <li className="mr-2 ml-2 hover:cursor-pointer hover:opacity-75 transition duration-200">
                      <Image
                        alt="Instagram Icon"
                        className="h-4 w-4"
                        src="/icons/facebook.svg"
                      />
                    </li>

                    <li className="mr-2 hover:cursor-pointer hover:opacity-75 transition duration-200">
                      <Image
                        alt="Instagram Icon"
                        className="h-4 w-4"
                        src="/icons/x.svg"
                      />
                    </li>
                    <li className="mr-2 hover:cursor-pointer hover:opacity-75 transition duration-200">
                      <Image
                        alt="Instagram Icon"
                        className="h-4 w-4"
                        src="/icons/threads.svg"
                      />
                    </li>
                    <li className="mr-2 hover:cursor-pointer hover:opacity-75 transition duration-200">
                      <Image
                        alt="Instagram Icon"
                        className="h-4 w-4"
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
                <h3 className="font-semibold text-2xl mb-3">
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
