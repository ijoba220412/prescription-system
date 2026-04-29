import { useEffect } from "react";
import { useRouter } from "next/router";
import { useCollectionData } from
"react-firebase-hooks/firestore";
import { collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { Button, IconHeart } from "@radix-ui/react-icons";

const firestore = getFirestore();

export default function MedicamentosPage() {
  const [medicamento, setMedicamento] = useState([]);
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] =
useState("todos");

  useEffect(() => {
    const unsubscribe = collection(firestore, "medicamentos")
      .onSnapshot((querySnapshot) =>
        setMedicamento(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        )
      );

    return () => unsubscribe();
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center
h-screen w-full bg-gray-100">
      <header className="text-4xl font-bold
mb-8">Medicamentos</header>
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="mb-8 p-2 border-gray-300 rounded"
      >
        <option value="todos">Todos</option>
        {medicamento.map((med) => (
          <option key={med.id} value={med.fabricante}>
            {med.fabricante}
          </option>
        ))}
      </select>
      <ul className="grid grid-cols-2 md:grid-cols-3
lg:grid-cols-4 gap-4 p-4 bg-white rounded shadow-md">
        {medicamento
          .filter(
            (med) =>
              selectedCategory === "todos" || med.fabricante ===
selectedCategory
          )
          .map((med) => (
            <li key={med.id} className="p-4 border-gray-300
rounded">
              <h2 className="text-xl font-bold
mb-2">{med.nome_comercial}</h2>
              <div className="mb-2">
                <p>{med.principio_ativo}</p>
                <p>Presentação: {med.presentacao}</p>
              </div>
              <button
                onClick={() =>
router.push(`/detalhes-medicamento/${med.id}`)}
                className="bg-blue-500 text-white p-2 rounded"
              >
                Detalhes
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
