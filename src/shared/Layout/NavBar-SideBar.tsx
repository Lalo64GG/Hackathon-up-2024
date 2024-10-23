import { Outlet } from "react-router-dom";
import { Nav } from "../components/NavBar";
import { SideBar } from "../components/SideBar";

export const Layout = () => {
  return (
    <div className="flex h-screen p-4 overflow-hidden">
      {/* Barra lateral adaptativa, siempre visible */}
      <div className="w-20 lg:w-56 h-full bg-slate-100 dark:bg-[#131212] rounded-md">
        <SideBar />
      </div>

      {/* Contenedor principal que incluye la barra de navegación y el contenido */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Barra de navegación fija en la parte superior */}
        <div className="sticky z-10 ml-2">
          <Nav />
        </div>

        {/* Contenido principal ajustado, con overflow-y-auto para scroll interno */}
        <div className="flex-1 overflow-y-auto ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
