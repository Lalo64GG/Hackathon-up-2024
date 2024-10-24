import { GearApi } from '@gear-js/api'; // Asegúrate de usar GearApi
import { Sails } from 'sails-js';
import { SailsIdlParser } from 'sails-js-parser';
import { useWallet } from '../../../context/walletContex'; // Hook para la wallet
import { useEffect, useState } from 'react';

const CONTRACT_ID = '0xffb8275d28d7a78d4b7b7b4fd745383b160f7827896b30bbb72ee801a1f595a2';

const useSailsContract = () => {
  const { api } = useWallet(); // Obtenemos la API del contexto de Wallet
  const [sails, setSails] = useState<Sails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const connectToContract = async () => {
      if (!api || !(api instanceof GearApi)) {  // Verifica que sea la GearApi
        console.error('API de Gear no disponible');
        setLoading(false);
        return;
      }

      try {
        // Inicializar el parser de IDL
        const parser = await SailsIdlParser.new();

        // Crear instancia de Sails pasando el parser
        const sailsInstance = new Sails(parser);

        // Definir el IDL
        const idl = `
          type IoEventState = struct {
            event_end_block: u64,
            all_users: vec struct { actor_id: str },
          };

          constructor {
            New : ();
          };

          service Event {
            Create : (event_end_block: u64, id_event: str) -> null;
            EndEvent : (id_event: str) -> vec actor_id;
            query Events : () -> IoEventState;
          };
        `;

        // Parsear el IDL usando sails
        sailsInstance.parseIdl(idl);
        sailsInstance.setApi(api); // Usamos GearApi en lugar de ApiPromise
        sailsInstance.setProgramId(CONTRACT_ID); // Establecer el ID del contrato

        setSails(sailsInstance);
        setLoading(false);
      } catch (error) {
        console.error('Error al conectar con el contrato:', error);
        setLoading(false);
      }
    };

    connectToContract();
  }, [api]);

  return { sails, loading };
};

export default useSailsContract;
