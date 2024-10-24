import React, { useState } from 'react';
import { useWallet } from './context/walletContex'; // Hook personalizado para acceder a la wallet
import { web3FromAddress } from '@polkadot/extension-dapp';
import useSailsContract from './shared/utils/hooks/useSailsContract'; // Hook para acceder al contrato

const EndEvent = () => {
  const { accounts } = useWallet(); // Obtenemos las cuentas del contexto
  const { sails, loading } = useSailsContract(); // Obtenemos la instancia de Sails
  const [idEvent, setIdEvent] = useState<string>('Evento1');
  const [loadingTx, setLoadingTx] = useState<boolean>(false);
  const [actors, setActors] = useState<string[]>([]);

  const handleEndEvent = async () => {
    if (accounts.length === 0 || !sails) {
      console.error('Cuenta no conectada o sails no está configurado');
      return;
    }

    const account = accounts[0].address; // Usamos la primera cuenta conectada

    setLoadingTx(true);
    try {
      const injector = await web3FromAddress(account);

      const transaction = sails.services.Event.functions.EndEvent(idEvent)
        .withAccount(account, { signer: injector.signer });

      await transaction.calculateGas();
      const { msgId, txHash, response } = await transaction.signAndSend();

      console.log('Evento finalizado:', msgId, txHash);
      const result = await response();
      setActors(result);
      console.log('Actores al final del evento:', result);
    } catch (error) {
      console.error('Error al finalizar el evento:', error);
    } finally {
      setLoadingTx(false);
    }
  };

  return (
    <div>
      <h2>Finalizar Evento</h2>
      {loading ? (
        <p>Cargando conexión...</p>
      ) : (
        <div>
          <input
            type="text"
            value={idEvent}
            onChange={(e) => setIdEvent(e.target.value)}
            placeholder="ID del evento"
          />
          <button onClick={handleEndEvent} disabled={loadingTx}>
            {loadingTx ? 'Finalizando...' : 'Finalizar Evento'}
          </button>
          {actors.length > 0 && (
            <div>
              <h3>Actores:</h3>
              <ul>
                {actors.map((actor, idx) => (
                  <li key={idx}>{actor}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EndEvent;
