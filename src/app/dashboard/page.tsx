import React from 'react';

export default function DashboardPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Painel de Prescrições
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-600">Tomadas Pendentes (Hoje)</h2>
          <p className="text-4xl font-bold text-blue-600 mt-2">0</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-600">Taxa de Adesão</h2>
          <p className="text-4xl font-bold text-green-600 mt-2">100%</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-600">Pacientes Ativos</h2>
          <p className="text-4xl font-bold text-purple-600 mt-2">0</p>
        </div>
      </div>

      <div className="mt-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <p className="text-gray-500 text-center">
          O sistema está online e pronto para receber os dados do Firestore.
        </p>
      </div>
    </div>
  );
}
