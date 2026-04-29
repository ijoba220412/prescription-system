import { useEffect } from "react";
import { useRouter } from "next/router";
import { useCollectionData } from
"react-firebase-hooks/firestore";
import { collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { Button, IconHeart } from "@radix-ui/react-icons";
import { useAuth } from "@/context/AuthContext";

const firestore = getFirestore();

export default function PacientesPage() {
  const [paciente, setPaciente] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      const unsubscribe = collection(firestore, "pacientes")
        .orderBy("nome")
        .onSnapshot((querySnapshot) =>
          setPaciente(
            querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          )
        );

      return () => unsubscribe();
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center
h-screen w-full bg-gray-100">
      <header className="text-4xl font-bold
mb-8">Pacientes</header>
      {paciente.length > 0 ? (
        <ul className="grid grid-cols-2 md:grid-cols-3
lg:grid-cols-4 gap-4 p-4 bg-white rounded shadow-md">
          {paciente.map((pac) => (
            <li key={pac.id} className="p-4 border-gray-300
rounded">
              <h2 className="text-xl font-bold
mb-2">{pac.nome}</h2>
              <div className="mb-2">
                <p>{pac.endereco}</p>
                <p>{pac.telefone}</p>
              </div>
              <button
                onClick={() =>
router.push(`/detalhes-paciente/${pac.id}`)}
                className="bg-blue-500 text-white p-2 rounded"
              >
                Detalhes
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum paciente encontrado</p>
      )}
    </div>
  );
}
