import { RecibedTransition } from "./reicibedTransition";
import { SentTransition } from "./sentTransition";
import { useWallet } from "../../../context/walletContex";

export const TransitionsHistory = () => {
  const { accounts } = useWallet(); // Obtener las cuentas conectadas

  // Obtener el primer ID de la wallet conectada, si está disponible
  const idWallet = accounts.length > 0 ? accounts[0].address : "No wallet connected";

  return (
    <div className="bg-[#151516] rounded-2xl p-4">
      <RecibedTransition idWallet={idWallet} value={100} />
      <SentTransition idWallet={idWallet} value={100} />
    </div>
  );
};
