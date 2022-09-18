import React from "react";
import styles from "./product-description.module.scss";

const ProductDescription = ({
  categories,
  url,
  ingredients,
  name,
  allergens,
}) => {
  return (
    <>
      <h2>{name}</h2>
      <div>
        <div className={styles.imgContainer}>
          <div className={styles.imgWrapper}>
            <img src={url || "./fallback.jpeg"} alt={name} />
          </div>
        </div>
        <div className={styles.categoryContainer}>
          {categories?.map((elem, index) => (
            <div key={index}>{elem}</div>
          ))}
        </div>

        <p className={styles.ingredients}>{ingredients}</p>
        <p className={styles.allergen}>
          {allergens?.map((allergen, index) => (
            <span key={index}>{allergen}</span>
          ))}
        </p>
      </div>
    </>
  );
};

export default ProductDescription;
