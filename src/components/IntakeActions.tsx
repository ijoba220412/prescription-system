```typescript
import React from 'react';
import { Button } from '@chakra-ui/react';

interface IntakeActionsProps {
  tomada: HorarioAgendado & { index: number };
  updateTomada: (index: number, newStatus: TomadaStatus) => void;
}

const IntakeActions: React.FC<IntakeActionsProps> = ({ tomada,
updateTomada }) => {
  return (
    <div className="flex gap-4">
      <Button
        onClick={() => updateTomada(tomada.index, 'tomado')}
        colorScheme="green"
      >
        Tomado
      </Button>
      <Button
        onClick={() => updateTomada(tomada.index, 'nao_tomado')}
        colorScheme="red"
      >
        Não Tomado
      </Button>
      <Button
        onClick={() => updateTomada(tomada.index, 'pulado')}
        colorScheme="yellow"
      >
        Pulado
      </Button>
    </div>
  );
};

export default IntakeActions;
```