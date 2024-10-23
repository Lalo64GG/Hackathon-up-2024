import { FilasTabla } from "./components/FilasTabla";
import SwipeToSlide from "./components/Slider";

export const Partnerships = () => {
  return (
    <div className="rounded-md m-4 p-6 bg-[#1b1b1b] text-white">
      <div className="max-w-6xl mx-auto">
        {/* Sección de Partners */}
        <section className="rounded-lg p-6 mb-10">
          <h2 className="text-3xl font-bold mb-6">Some of our Partnerships</h2>
          <SwipeToSlide/>
        </section>

        {/* Sección de Estado de las Becas */}
        <section className="bg-[#242121] rounded-lg p-6">
          <h2 className="text-3xl font-bold mb-6">Status of your Scholarship</h2>
          
          {/* Encabezado de la tabla */}
          <div className="grid grid-cols-3  gap-4 rounded-full px-8 py-2 bg-[#BFED54] font-semibold text-xl text-black">
            <p>Scholarship</p>
            <p className="flex justify-center">Partnership</p>
            <p className=" flex justify-end">Status</p>
          </div>

          <div className="mt-5 space-y-4 bg-[#191717] max-h-[50vh] rounded-md overflow-y-auto">
            <FilasTabla />
            <FilasTabla />
            <FilasTabla />
            <FilasTabla />
            <FilasTabla />
            <FilasTabla />
            <FilasTabla />
            <FilasTabla />
          </div>
        </section>
      </div>
    </div>
  );
};
