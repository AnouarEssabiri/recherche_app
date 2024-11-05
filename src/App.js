import React, { useState } from "react";
import ChercheBar from "./ChercheBar";
import ResultatList from "./ResultatList";

const list = [
  { nom: "banane", type: "fruit" },
  { nom: "orange", type: "fruit" },
  { nom: "pomme", type: "fruit" },
  { nom: "raisins", type: "fruit" },
  { nom: "kiwi", type: "fruit" },
  { nom: "tomate", type: "legume" },
  { nom: "carotte", type: "legume" },
  { nom: "pomme de terre", type: "legume" },
  { nom: "navet", type: "legume" },
  { nom: "poivron", type: "legume" },
];

export default function App() {
  const [type, setType] = useState("");
  const [resultas, setResultas] = useState([]);

  function onChercheSubmitApp(type) {
    setType(type);
    setResultas(list.filter((item) => item.type.toUpperCase() === type));
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Composant App</h1>
      <ChercheBar onChercheSubmit={onChercheSubmitApp} />
      <div className="mt-4 text-lg text-gray-700">
        <p>
          Le type:{" "}
          <span className="text-blue-600 font-semibold">{type}</span>
        </p>
      </div>
      <ResultatList resultats={resultas} />
    </div>
  );
}
