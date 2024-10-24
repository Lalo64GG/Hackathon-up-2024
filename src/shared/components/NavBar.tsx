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
import { FaSun, FaCoins, FaBell } from "react-icons/fa"; // Importación de íconos necesarios
import { useState, useEffect } from "react";
import { useWallet } from "../../context/walletContex";

export const Nav = () => {
  const { id } = useParams();
  const { accounts, api } = useWallet(); // Usar el contexto de la wallet para obtener la cuenta y el balance
  const [balance, setBalance] = useState<string | null>(null); // Estado para guardar el balance

  // Obtener el balance de la wallet conectada
  useEffect(() => {
    const fetchBalance = async () => {
      if (api && accounts.length > 0) {
        try {
          const { data: balanceData } = await api.query.system.account(accounts[0].address);
          const freeBalance = balanceData.free.toBn(); // Obtener el balance libre como BN (BigNumber)
          
          // Convertir el balance a formato legible (en unidades de tokens)
          const balanceInUnits = api.registry.chainDecimals
            ? freeBalance / Math.pow(10, api.registry.chainDecimals[0])
            : freeBalance;

          setBalance(balanceInUnits.toFixed(4)); // Mostrar el balance con 4 decimales
        } catch (error) {
          console.error("Error fetching balance:", error);
        }
      }
    };

    fetchBalance();
  }, [api, accounts]);

  return (
    <Navbar
      className="rounded-2xl dark:bg-[#131212]  w-full"
      maxWidth="full"
    >
      {/* Contenido del lado izquierdo (Título) */}
      <NavbarContent className="w-full lg:w-auto flex justify-start" justify="start">
        <NavbarBrand className="text-white">
          <p className="text-2xl font-bold">CHALLENGES</p>
        </NavbarBrand>
      </NavbarContent>

      {/* Sección central: Buscador */}
      <NavbarContent className="justify-center w-1/3">
        <Input
          classNames={{
            base: "max-w-full w-full md:w-96",
            inputWrapper: "h-10 rounded-full bg-[#2A2A2A] text-white px-4 placeholder-gray-500",
          }}
          placeholder="Search"
          startContent={<SearchIcon size={20} />}
          type="search"
          aria-label="Search"
        />
      </NavbarContent>

      {/* Sección derecha: Notificaciones, Balance, Tema, Avatar */}
      <NavbarContent className="flex items-center justify-end w-1/3 gap-4 lg:gap-6">
        
        {/* Icono de notificación */}
        <NavbarItem>
          <FaBell size={20} className="text-white transition-colors cursor-pointer hover:text-gray-300" />
        </NavbarItem>

        {/* Mostrar el balance de la wallet si está disponible */}
        {balance !== null && (
          <NavbarItem className="flex items-center gap-1 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
</svg>

            <span className="text-sm">{balance} Tokens</span> {/* Mostrar balance */}
          </NavbarItem>
        )}

      
        {/* Avatar del usuario y menú desplegable */}
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform hover:scale-105"
              size="md"
              src="https://nextui.org/images/hero-card-complete.jpeg"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="flex flex-col h-20 gap-1 px-4 py-2">
              <p className="text-sm text-gray-500">Signed in as</p>
              <p className="font-semibold text-white">junior.garcia@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
           
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
};
