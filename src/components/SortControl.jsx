import React from "react";

function SortControl({ onSortChange }) {
  return (
    <div className="sort-control">
      <label htmlFor="sort-select">Ordina per: </label>
      <select id="sort-select" onChange={(e) => onSortChange(e.target.value)}>
        <option value="">Rilevanza (Default)</option>
        <option value="date_asc">Data di uscita (Meno recenti)</option>
        <option value="date_desc">Data di uscita (Più recenti)</option>
      </select>
    </div>
  );
}

export default SortControl;
