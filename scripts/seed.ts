import { initializeApp, getFirestore } from 'firebase/app';
import { collection, addDoc } from 'firebase/firestore/lite';

// Importação de pacotes que NUNCA devem ser importadas dentro da
pasta src/
const { Pill, Tablets, AlertTriangle } = require('lucide-react');

// Configuração do Firebase App
const firebaseConfig = {
  apiKey: "AIzaSyDqyKxM4idfyKhRssyq-M7Yzb5lCSWS1sU",
  authDomain: "receita-facilitada.firebaseapp.com",
  projectId: "receita-facilitada",
  storageBucket: "receita-facilitada.firebasestorage.app",
  messagingSenderId: "1029880325250",
  appId: "1:1029880325250:web:c24445dfc3a21ed1bf809b",
  measurementId: "G-6GWMLTV5SE"
};

// Inicializa o Firebase App
initializeApp(firebaseConfig);

const db = getFirestore();

// Função para criar dados falsos
async function seedData() {
  try {
    // Profissional Falso
    const profissionalId = await addDoc(collection(db,
'profissionais'), {
      nome: 'Profissional Exemplo',
      especialidade: 'Clínico Geral',
      email: 'exemplo@clinicageral.com'
    });

    console.log('Profissional adicionado:', profissionalId.id);

    // Paciente Falso
    const pacienteId = await addDoc(collection(db, 'pacientes'),
{
      nome: 'Paciente Exemplo',
      idade: 30,
      telefone: '+1234567890',
      endereco: '123 Main St'
    });

    console.log('Paciente adicionado:', pacienteId.id);

    // Medicamento Falso
    const medicamentoId = await addDoc(collection(db,
'medicamentos'), {
      nome: 'Medicamento Exemplo',
      dosagem: '0.5 mg',
      intervalo: '12',
      prescricaoId: profissionalId.id,
    });

    console.log('Medicamento adicionado:', medicamentoId.id);
  } catch (error) {
    console.error('Erro ao adicionar dados falsos:', error);
  }
}

// Execução da função
seedData();
