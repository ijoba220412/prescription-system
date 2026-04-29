// Enumeração para TomadaStatus
export enum TomadaStatus {
  pendente = 'pendente',
  tomado = 'tomado',
  nao_tomado = 'nao_tomado',
  pulado = 'pulado'
}

// Enumeração para AcaoTomada
export type AcaoTomada = 'tomado' | 'nao_tomado' | 'pulado';
