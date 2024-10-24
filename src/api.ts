import { GearApi } from '@gear-js/api';
import { Sails } from 'sails-js';

// Configuración de la conexión a la red de Vara
const VARA_WS_URL = "wss://testnet.vara.network";
const PROGRAM_ID = "0xffb8275d28d7a78d4b7b7b4fd745383b160f7827896b30bbb72ee801a1f595a2";

let api: GearApi;
let sails: Sails;

// Función para inicializar la API y Sails
export async function initializeApi() {
  if (!api) {
    api = await GearApi.create({ provider: VARA_WS_URL });
  }

  if (!sails) {
    sails = new Sails();

    // Asignar el program ID del contrato
    sails.setProgramId(PROGRAM_ID);
    sails.setApi(api);
  }

  return { api, sails };
}
