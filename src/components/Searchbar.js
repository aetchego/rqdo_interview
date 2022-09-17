import React from "react";

const Searchbar = ({ onSearch }) => {
  return (
    <input
      placeholder="Rechercher un produit"
      onChange={(event) => onSearch(event.target.value)}
    />
  );
};

export default Searchbar;
