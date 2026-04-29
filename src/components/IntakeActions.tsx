import React from 'react';

// Tipagem baseada no nosso padrão global
type AcaoTomada = 'tomado' | 'nao_tomado' | 'pulado';

interface IntakeActionsProps {
  tomada: any; // Usando 'any' temporariamente para blindar o build contra tipos externos
  onAction?: (acao: AcaoTomada) => void;
}

export function IntakeActions({ tomada, onAction }: IntakeActionsProps) {
  return (
    <div className="flex flex-wrap gap-3 mt-4">
      <button
        onClick={() => onAction && onAction('tomado')}
        className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
      >
        Tomado
      </button>
      
      <button
        onClick={() => onAction && onAction('nao_tomado')}
        className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
      >
        Não Tomado
      </button>
      
      <button
        onClick={() => onAction && onAction('pulado')}
        className="px-4 py-2 text-sm font-medium text-gray-800 bg-yellow-400 rounded-lg shadow-sm hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors"
      >
        Pulado
      </button>
    </div>
  );
}
