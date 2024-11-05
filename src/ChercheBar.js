import React, { useState } from "react";
export default function ChercheBar(props) {
  const [item, setitem] = useState("");
  function onChercheSubmitBar(event) {
    event.preventDefault();
    props.onChercheSubmit(item);
  }
  return (
    <div className="earacherche">
      <form onSubmit={(event) => onChercheSubmitBar(event)}>
        <h2>composant ChercheBar</h2>
        <div>
          <label>Entrer le mot clé de recherche:</label>
          <input
            type="text"
            value={item}
            onChange={(event) => setitem(event.target.value.toUpperCase())}
          />
        </div>
        <button type="submit">chercher</button>
      </form>
    </div>
  );
}
