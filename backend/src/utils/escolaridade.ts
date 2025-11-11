import { Escolaridade } from '@prisma/client';
const ordem: Escolaridade[] = [
  'FUNDAMENTAL',
  'MEDIO',
  'TECNICO',
  'SUPERIOR',
  'POS',
  'MESTRADO',
  'DOUTORADO',
];
export const escolaridadeGTE = (usuarioNivel: Escolaridade, minimo: Escolaridade) =>
  ordem.indexOf(usuarioNivel) >= ordem.indexOf(minimo);