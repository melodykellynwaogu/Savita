import React from "react";

function Out ({ query, setQuery, onSearch }) {
  return (
    <div style={{ margin: "1rem 0" }}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search recipes..."
        style={{ padding: "0.5rem", width: "250px" }}
      />
      <button onClick={onSearch} style={{ marginLeft: "0.5rem" }}>
        Search
      </button>
    </div>
  );
}

export default Out;
