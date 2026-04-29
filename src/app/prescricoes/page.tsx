import { useEffect } from "react";
import { useRouter } from "next/router";
import { useCollectionData } from
"react-firebase-hooks/firestore";
import { collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import DosageImage from "@/components/DosageImage";

const firestore = getFirestore();

export default function PrescricoesPage() {
  const [prescription, setPrescription] = useState([]);
  const router = useRouter();
  const today = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(today);

  useEffect(() => {
    const unsubscribe = collection(firestore, "prescricoes")
      .onSnapshot((querySnapshot) =>
        setPrescription(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        )
      );

    return () => unsubscribe();
  }, []);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center
h-screen w-full bg-gray-100">
      <header className="text-4xl font-bold
mb-8">Prescrições</header>
      <select
        value={selectedDate}
        onChange={handleDateChange}
        className="mb-8 p-2 border-gray-300 rounded"
      >
        {Array.from({ length: 14 }, (_, i) => {
          const date = new Date(today);
          date.setDate(date.getDate() + i);
          return (
            <option key={date.toISOString().split("T")[0]}
value={date.toISOString().split("T")[0]}>
              {date.toLocaleDateString()}
            </option>
          );
        })}
      </select>
      <ul className="grid grid-cols-2 md:grid-cols-3
lg:grid-cols-4 gap-4 p-4 bg-white rounded shadow-md">
        {prescription
          .filter(
            (pres) =>
              pres.data === selectedDate &&
              pres.status.toLowerCase() !== "cancelada"
          )
          .map((pres) => (
            <li key={pres.id} className="p-4 border-gray-300
rounded">
              <h2 className="text-xl font-bold
mb-2">{pres.recebedor}</h2>
              <div className="mb-2">
                {Object.entries(pres.dosagens)
                  .map(([dosageKey, dosageValue]) => (
                    <DosageImage
                      key={dosageKey}
                      dosage={Number(dosageValue)}
                      daysLeft={pres.days_left[dosageKey]}
                    />
                  ))}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
