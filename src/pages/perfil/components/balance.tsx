import { useEffect, useState } from "react";
import { useWallet } from "../../../context/walletContex";

export const Balance = () => {
  const { accounts, api } = useWallet(); // Obtener las cuentas y la API
  const [balance, setBalance] = useState<string | null>(null); // Balance como string para evitar NaN

  // Obtener el balance de la wallet conectada
  useEffect(() => {
    const fetchBalance = async () => {
      if (api && accounts.length > 0) {
        try {
          const { data: balanceData } = await api.query.system.account(accounts[0].address);
          const freeBalance = balanceData.free.toBn(); // Obtener el balance libre como BN (BigNumber)
          
          // Convertir el balance a formato legible (en unidades de DOT o equivalente)
          const balanceInUnits = api.registry.chainDecimals ? freeBalance / Math.pow(10, api.registry.chainDecimals[0]) : freeBalance;

          setBalance(balanceInUnits.toFixed(4)); // Mostrar solo 4 decimales
        } catch (error) {
          console.error("Error fetching balance:", error);
        }
      }
    };

    fetchBalance();
  }, [api, accounts]);

  return (
    <div className="bg-[#151516] rounded-xl w-80 py-3 px-3 mt-3">
      <p className="text-xl font-semibold">Balance</p>
      {/* Mostrar el balance si está disponible */}
      <p>{balance !== null ? `${balance} Tokens` : "Loading..."}</p>
    </div>
  );
};
