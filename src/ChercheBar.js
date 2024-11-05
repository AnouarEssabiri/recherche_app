import React, { useState } from "react";

export default function ChercheBar(props) {
  const [item, setitem] = useState("");

  function onChercheSubmitBar(event) {
    event.preventDefault();
    props.onChercheSubmit(item);
  }

  return (
    <div className="flex items-center justify-center p-6 bg-gray-100 rounded-md shadow-md">
      <form
        onSubmit={onChercheSubmitBar}
        className="w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-gray-700 text-center">
          Composant ChercheBar
        </h2>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-600 mb-1">
            Entrer le mot clé de recherche:
          </label>
          <input
            type="text"
            value={item}
            onChange={(event) => setitem(event.target.value.toUpperCase())}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Chercher
        </button>
      </form>
    </div>
  );
}
