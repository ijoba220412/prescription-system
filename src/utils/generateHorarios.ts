import { Prescricao } from '@/types/index';

interface HorarioAgendado {
  data: Date;
  status: TomadaStatus;
}

const generateHorarios = (prescricao: Prescricao):
HorarioAgendado[] => {
  const horarios: HorarioAgendado[] = [];
  let currentDate = new Date(prescricao.dataInicio);

  while (
    currentDate <= new Date(
      prescricao.dataInicio.getFullYear(),
      prescricao.dataInicio.getMonth(),
      prescricao.dataInicio.getDate() + prescricao.duracao * 24
    )
  ) {
    horarios.push({
      data: currentDate,
      status: 'pendente',
    });

    if (prescricao.intervalo) {
      const interval = parseInt(prescricao.intervalo, 10);
      currentDate.setDate(currentDate.getDate() + interval);
    } else {
      // No interval specified, assume daily
      currentDate.setDate(currentDate.getDate() + 1);
    }
  }

  return horarios;
};

export default generateHorarios;
