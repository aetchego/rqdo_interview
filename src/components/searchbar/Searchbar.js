import React from "react";
import styles from "./searchbar.module.scss";

const Searchbar = ({ onSearch }) => {
  return (
    <div className={styles.searchbarWapper}>
      <input
        placeholder="Rechercher un produit..."
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
};

export default Searchbar;
