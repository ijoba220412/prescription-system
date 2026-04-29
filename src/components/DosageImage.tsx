import React from 'react';
import { Pill, Tablets } from 'lucide-react';

interface DosageImageProps {
  quantity: number;
  form: 'comprimido' | 'cápsula';
}

const DosageImage: React.FC<DosageImageProps> = ({ quantity, form
}) => {
  const isDecimal = quantity % 1 !== 0;

  return (
    <div className="flex items-center gap-2">
      {form === 'cápsula' ? (
        isDecimal ? (
          <>
            <AlertTriangle size={24} color="red" />
            <span className="text-red">Quantidade inválida para
cápsulas.</span>
          </>
        ) : (
          Array.from({ length: quantity }, (_, i) => (
            <Tablets key={i} size={24} className="text-blue-500"
/>
          ))
        )
      ) : form === 'comprimido' ? (
        <>
          {Math.floor(quantity) > 0 && (
            <Pill size={24} className="text-green-500" />
          )}
          {isDecimal && (
            <div
              style={{
                backgroundColor: '#D3E9FF',
                width: '16px',
                height: '8px',
                borderRadius: '4px',
                position: 'absolute',
                top: '-2px',
                left: '-2px',
              }}
            />
          )}
        </>
      ) : null}
    </div>
  );
};

export default DosageImage;
