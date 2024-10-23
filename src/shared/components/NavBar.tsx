import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  Dropdown,
  DropdownTrigger,
  Avatar,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { SearchIcon } from "../icons/SearchIcon";
import { useParams } from "react-router-dom";
import { FaSun, FaCoins } from "react-icons/fa"; // Importación de íconos necesarios

export const Nav = () => {
  const { id } = useParams();

  console.log(id);

  return (
    <Navbar
      className="rounded-md dark:bg-[#131212] py-2 w-full"
      maxWidth="full"
    >
      {/* Contenido del lado izquierdo (Título) */}
      <NavbarContent className="w-full lg:w-auto flex justify-start" justify="start">
        <NavbarBrand className="text-white">
          <p className="font-bold text-lg">CERTIFICACIONES</p>
        </NavbarBrand>
      </NavbarContent>

      {/* Contenido central (Buscador) */}
      <NavbarContent
        className="hidden md:flex flex-1 justify-center"
        justify="center"
      >
        <Input
          classNames={{
            base: "max-w-full w-64 md:w-96",
            inputWrapper:
              "h-10 rounded-full bg-[#2A2A2A] text-white px-4 placeholder-gray-500",
          }}
          placeholder="Search"
          startContent={<SearchIcon size={18} />}
          type="search"
          aria-label="Search"
        />
      </NavbarContent>

      {/* Contenido del lado derecho */}
      <NavbarContent className="flex items-center justify-end gap-x-28" justify="end">
        {/* Puntuación del Usuario */}
        <NavbarItem className="hidden md:flex items-center gap-1 text-white">
          <FaCoins size={18} className="text-yellow-400" />
          <span>6.7k</span>
        </NavbarItem>

        {/* Cambio de tema */}
        <NavbarItem className="hidden md:flex items-center">
          <FaSun size={20} className="text-yellow-400" />
        </NavbarItem>
        
        {/* Avatar del usuario y nombre */}
        <div className="flex items-center gap-3">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                size="md"
                src=""
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">junior.garcia@example.com</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          
        </div>
      </NavbarContent>
    </Navbar>
  );
};
