import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

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
const app = initializeApp(firebaseConfig);

// Obtém a instância do Firestore
export const db = getFirestore(app);
