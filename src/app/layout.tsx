import './globals.css';
import React from 'react';
import Link from 'next/link';

// Configuração de SEO e título da aba do navegador
export const metadata = {
  title: 'Sistema de Prescrições',
  description: 'Gerenciamento aberto de prescrições médicas',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50 text-gray-900 antialiased">
        <div className="min-h-screen flex flex-col md:flex-row">
          
          {/* Menu Lateral */}
          <aside className="w-full md:w-64 bg-white border-r border-gray-200 p-6 flex-shrink-0">
            <h2 className="text-2xl font-bold text-blue-600 mb-8">Rx System</h2>
            <nav className="flex flex-col space-y-4">
              <Link href="/dashboard" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                Dashboard
              </Link>
              <Link href="/pacientes" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                Pacientes
              </Link>
              <Link href="/profissionais" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                Profissionais
              </Link>
              <Link href="/medicamentos" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                Medicamentos
              </Link>
              <Link href="/prescricoes" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                Prescrições
              </Link>
            </nav>
          </aside>

          {/* Área onde as páginas (como o Dashboard) vão aparecer */}
          <main className="flex-1 p-8">
            {children}
          </main>
          
        </div>
      </body>
    </html>
  );
}
