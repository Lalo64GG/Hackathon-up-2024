import { Outlet } from "react-router-dom";
import { Nav } from "../components/NavBar";
import { SideBar } from "../components/SideBar";

export const Layout = () => {
  return (
    <div className="flex h-screen">
      {/* Barra lateral fija */}
      <div className="fixed top-0 left-0 h-full w-24 lg:w-64 m-2">
        <SideBar />
      </div>

      {/* Contenedor principal que incluye la barra de navegación y el contenido */}
      <div className="flex-1 ml-24 lg:ml-64">
        {/* Barra de navegación fija en la parte superior */}
        <div className="fixed  top-0 left lg:left-  z-10 my-2 ">
          <Nav />
        </div>

        {/* Contenido principal ajustado */}
        <div className="pt-16 px-4 mt-16">
         <Outlet/>
        </div>
      </div>
    </div>
  );
};
