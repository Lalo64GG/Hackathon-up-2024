import { useState } from "react";
import { useWallet } from "../../../context/walletContex";
import ContentPasteIcon from '@mui/icons-material/ContentPaste'; // Importar el ícono de Material UI

const VNWallet = () => {
  const { accounts } = useWallet(); // Obtener las cuentas conectadas
  const [copied, setCopied] = useState(false); // Estado para mostrar el feedback de "copiado"

  // Obtener el ID de la wallet conectada, si está disponible
  const idWallet = accounts.length > 0 ? accounts[0].address : "No wallet connected";

  // Truncar el ID si tiene más de 25 caracteres
  const truncatedId = idWallet.length > 25 ? `${idWallet.slice(0, 25)}...` : idWallet;

  // Función para copiar el ID de la wallet y mostrar el feedback
  const handleCopy = () => {
    navigator.clipboard.writeText(idWallet);
    setCopied(true); // Mostrar que el texto fue copiado
    setTimeout(() => setCopied(false), 2000); // Ocultar el feedback después de 2 segundos
  };

  return (
    <div className="flex items-center justify-between p-6 text-white shadow-lg bg-gradient-to-r from-green-500 to-purple-600 rounded-xl w-80">
      <div>
        <h2 className="text-2xl font-bold">VN Wallet</h2>
        {/* Mostrar el ID truncado, pero copiar el ID completo */}
        <p className="text-sm opacity-80">{truncatedId}</p>
      </div>
      <div className="flex items-center space-x-2">
        {/* Botón para copiar el ID */}
        <button
          className="text-xl text-white bg-transparent border-none cursor-pointer hover:text-gray-300"
          onClick={handleCopy}
        >
          {/* Usar el ícono de copiar de MUI con un tamaño pequeño */}
          <ContentPasteIcon style={{ fontSize: 18 }} />
        </button>

        {/* Feedback visual cuando se copia */}
        {copied && (
          <span className="text-sm text-green-200">Copied!</span>
        )}
      </div>
    </div>
  );
};

export default VNWallet;
