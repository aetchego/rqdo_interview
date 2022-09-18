import { Link } from "react-router-dom";
import React from "react";
import styles from "./product-card.module.scss";

const ProductCard = ({ id, url, name }) => {
  return (
    <Link to={id}>
      <div className={styles.card}>
        <img src={url || "./fallback.jpeg"} alt={name} />
        <div className={styles.description}>
          <p>{name}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
