// Interface para Profissional
export interface Profissional {
  id: string;
  nome: string;
  especialidade: string;
  email: string;
}

// Interface para Paciente
export interface Paciente {
  id: string;
  nome: string;
  idade: number;
  telefone?: string;
  endereco?: string;
  medicamentos?: Medicamento[];
}

// Interface para Medicamento
export interface Medicamento {
  id: string;
  nome: string;
  dosagem: string | null;
  intervalo: string | null;
  prescricaoId?: string;
}

// Interface para Prescrição
export interface Prescricao {
  id: string;
  profissionalId: string;
  pacienteId: string;
  medicamentos: Medicamento[];
  dataInicio: Date;
  dataFim: Date;
}
