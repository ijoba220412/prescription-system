```typescript
import React from 'react';
import { useFirestore } from 'firebase/firestore';
import { collection, getDocs } from 'firebase/firestore/lite';
import { Box, Heading, Text } from '@chakra-ui/react';

const Dashboard: React.FC = () => {
  const db = useFirestore();
  const [data, setData] = React.useState<{ totalPendentes:
number; taxaAdesao: number }>({
    totalPendentes: 0,
    taxaAdesao: 0,
  });

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const prescricoesCollectionRef = collection(db,
'prescricoes');
        const querySnapshot = await
getDocs(prescricoesCollectionRef);
        let totalPendentes = 0;

        querySnapshot.forEach((doc) => {
          const prescricao = doc.data() as Prescricao;
          totalPendentes += prescricao.medicamentos.filter(
            (medicamento) =>
              medicamento.tomada.status === 'pendente' ||
medicamento.tomada.status === 'nao_tomado'
          ).length;
        });

        const taxaAdesao = Math.round((totalPendentes /
querySnapshot.size) * 100);

        setData({ totalPendentes, taxaAdesao });
      } catch (error) {
        console.error('Erro ao obter dados dos pacientes:',
error);
      }
    };

    fetchData();
  }, [db]);

  return (
    <Box p={8}>
      <Heading>Dashboard</Heading>
      <Box mt={4}>
        <Text>Total de tomadas pendentes:
{data.totalPendentes}</Text>
        <Text>Taxa de adesão geral: {data.taxaAdesao}%</Text>
      </Box>
    </Box>
  );
};

export default Dashboard;
```