import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { web3Accounts, web3Enable } from '@polkadot/extension-dapp';
import { ApiPromise, WsProvider } from '@polkadot/api'; // Polkadot API para la conexión a Vara Network

// Definir la interfaz del contexto
interface WalletContextType {
  accounts: any[];
  connectWallet: () => Promise<void>;
  api: ApiPromise | null;
}

// Crear el contexto con un valor inicial vacío
const WalletContext = createContext<WalletContextType | undefined>(undefined);

// Hook personalizado para usar el contexto de Wallet
export const useWallet = (): WalletContextType => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet debe ser usado dentro de un WalletProvider');
  }
  return context;
};

// Proveedor de contexto para la wallet
export const WalletProvider = ({ children }: { children: ReactNode }) => {
  const [accounts, setAccounts] = useState<any[]>([]);
  const [api, setApi] = useState<ApiPromise | null>(null);

  // Función para conectar la wallet
  const connectWallet = async () => {
    const extensions = await web3Enable('TuApp');
    if (extensions.length === 0) {
      console.log('No se encontraron extensiones compatibles');
      return;
    }

    const allAccounts = await web3Accounts();
    setAccounts(allAccounts);
  };

  // Función para conectar a Vara Network
  const connectVaraNetwork = async () => {
    try {
      const provider = new WsProvider('wss://testnet.vara.network');
      const apiInstance = await ApiPromise.create({ provider });
      setApi(apiInstance);
      console.log('Conectado a la red Vara:', apiInstance.genesisHash.toHex());
    } catch (error) {
      console.error('Error al conectar a Vara Network:', error);
    }
  };

  useEffect(() => {
    connectVaraNetwork();
    connectWallet();
  }, []);

  return (
    <WalletContext.Provider value={{ accounts, connectWallet, api }}>
      {children}
    </WalletContext.Provider>
  );
};
