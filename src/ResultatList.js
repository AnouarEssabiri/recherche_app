import React from "react";

export default function ResultatList(props) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-gray-700 mb-4 text-center">
        Composant ResultatList
      </h1>
      {props.resultats.length === 0 ? (
        <p className="text-gray-500 text-center">Pas de résultats</p>
      ) : (
        <div className="list">
          <ul className="space-y-2">
            {props.resultats.map((item) => {
              return (
                <li
                  key={item.nom}
                  className="p-2 bg-blue-100 text-blue-800 rounded-md shadow-sm hover:bg-blue-200"
                >
                  {item.nom}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
