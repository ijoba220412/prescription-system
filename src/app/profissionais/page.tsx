import { useEffect } from "react";
import { useRouter } from "next/router";
import { useCollectionData } from
"react-firebase-hooks/firestore";
import { collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { Button, IconHeart } from "@radix-ui/react-icons";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

const firestore = getFirestore();

export default function ProfissionaisPage() {
  const [profi, setProfi] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      const unsubscribe = collection(firestore, "profissionais")
        .orderBy("nome")
        .onSnapshot((querySnapshot) =>
          setProfi(
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
mb-8">Profissionais</header>
      <Link href="/cadastro-profissional" passHref>
        <Button variant="outline" size="lg" className="mb-8">
          Adicionar Profissional
        </Button>
      </Link>
      {profi.length > 0 ? (
        <ul className="grid grid-cols-2 md:grid-cols-3
lg:grid-cols-4 gap-4 p-4 bg-white rounded shadow-md">
          {profi.map((prof) => (
            <li key={prof.id} className="p-4 border-gray-300
rounded">
              <h2 className="text-xl font-bold
mb-2">{prof.nome}</h2>
              <div className="mb-2">
                <p>{prof.endereco}</p>
                <p>{prof.telefone}</p>
              </div>
              <button
                onClick={() =>
router.push(`/detalhes-profissional/${prof.id}`)}
                className="bg-blue-500 text-white p-2 rounded"
              >
                Detalhes
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum profissional encontrado</p>
      )}
    </div>
  );
}

export default ProfissionaisPage;
