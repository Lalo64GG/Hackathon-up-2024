import React, { useState } from 'react';
import { useWallet } from './context/walletContex'; // Hook personalizado para acceder a la wallet
import { web3FromAddress } from '@polkadot/extension-dapp';
import useSailsContract from './shared/utils/hooks/useSailsContract'; // Hook para acceder al contrato

const CreateEvent = () => {
  const { accounts } = useWallet(); // Obtenemos las cuentas del contexto
  const { sails, loading } = useSailsContract(); // Obtenemos la instancia de Sails
  const [eventEndBlock, setEventEndBlock] = useState<number>(1000);
  const [idEvent, setIdEvent] = useState<string>('Evento1');
  const [loadingTx, setLoadingTx] = useState<boolean>(false);

  const handleCreateEvent = async () => {
    if (accounts.length === 0 || !sails) {
      console.error('Cuenta no conectada o sails no está configurado');
      return;
    }

    const account = accounts[0].address; // Usamos la primera cuenta conectada

    setLoadingTx(true);
    try {
      const injector = await web3FromAddress(account);

      const transaction = sails.services.Event.functions.Create(eventEndBlock, idEvent)
        .withAccount(account, { signer: injector.signer });

      await transaction.calculateGas();
      const { msgId, txHash, response } = await transaction.signAndSend();

      console.log('Evento creado:', msgId, txHash);
      const result = await response();
      console.log('Resultado del contrato:', result);
    } catch (error) {
      console.error('Error al crear el evento:', error);
    } finally {
      setLoadingTx(false);
    }
  };

  return (
    <div>
      <h2>Crear Evento</h2>
      {loading ? (
        <p>Cargando conexión...</p>
      ) : (
        <div>
          <input
            type="number"
            value={eventEndBlock}
            onChange={(e) => setEventEndBlock(Number(e.target.value))}
            placeholder="Número de bloque"
          />
          <input
            type="text"
            value={idEvent}
            onChange={(e) => setIdEvent(e.target.value)}
            placeholder="ID del evento"
          />
          <button onClick={handleCreateEvent} disabled={loadingTx}>
            {loadingTx ? 'Creando...' : 'Crear Evento'}
          </button>
        </div>
      )}
    </div>
  );
};

export default CreateEvent;
