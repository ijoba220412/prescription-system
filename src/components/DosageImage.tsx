import React from 'react';
import { Pill, Tablets, AlertTriangle } from 'lucide-react';

interface DosageImageProps {
  quantity: number;
  form: 'comprimido' | 'cápsula';
}

export function DosageImage({ quantity, form }: DosageImageProps) {
  const isDecimal = quantity % 1 !== 0;
  const fullCount = Math.floor(quantity);

  // Regra 1: Cápsula fracionada (ERRO)
  if (form === 'cápsula' && isDecimal) {
    return (
      <div className="flex items-center text-red-500 space-x-2 p-2 bg-red-50 rounded-md">
        <AlertTriangle size={24} />
        <span className="text-sm font-semibold">
          Quantidade inválida para cápsulas
        </span>
      </div>
    );
  }

  // Regra 2: Cápsula inteira
  if (form === 'cápsula') {
    return (
      <div className="flex flex-wrap gap-1">
        {Array.from({ length: fullCount }).map((_, i) => (
          <Tablets key={`capsule-${i}`} size={24} className="text-blue-600" />
        ))}
      </div>
    );
  }

  // Regra 3: Comprimido (inteiros + fracionados)
  return (
    <div className="flex flex-wrap gap-1 items-center">
      {/* Comprimidos inteiros */}
      {Array.from({ length: fullCount }).map((_, i) => (
        <Pill key={`full-pill-${i}`} size={24} className="text-blue-600" />
      ))}
      
      {/* Comprimido com linha de corte visual (se houver fração) */}
      {isDecimal && (
        <div className="relative inline-block">
          <Pill size={24} className="text-blue-400" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-[2px] bg-red-500 -rotate-45 shadow-sm"></div>
          </div>
        </div>
      )}
    </div>
  );
}
