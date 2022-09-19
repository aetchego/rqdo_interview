import {
  parseArrayWithDelimiter,
  parseStringWithDelimiter,
} from "../../utils/parser";
import { useEffect, useRef } from "react";

import DisplayMessage from "../../components/display-message/DisplayMessage";
import Layout from "../../layout/Layout";
import ProductDescription from "../../components/product-description/ProductDescription";
import Spinner from "../../components/spinner/Spinner";
import { getProduct } from "../../api/request";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router";

const Product = () => {
  let id = useParams().productId;

  const [result, fetch] = useFetch(`/api/v0/product/${id}.json`, getProduct, {
    queryParams: {
      fields: [
        "product_name",
        "categories",
        "image_front_url",
        "allergens_hierarchy",
        "ingredients_text",
      ],
    },
  });

  useEffect(() => {
    fetch();
  }, []);

  return (
    <Layout>
      {result.status === "SUCCESS" && result.response.status === 1 && (
        <ProductDescription
          name={result.response.product.product_name}
          allergens={parseArrayWithDelimiter(
            result.response.product.allergens_hierarchy
          )}
          categories={parseStringWithDelimiter(
            result.response.product.categories,
            ","
          )}
          url={result.response.product.image_front_url}
          ingredients={result.response.product.ingredients_text}
        ></ProductDescription>
      )}
      {result.status === "SUCCESS" && !result.response.status && (
        <DisplayMessage>Ce produit n'existe pas.</DisplayMessage>
      )}
      {result.status === "ERROR" && (
        <DisplayMessage>
          Désolé nous ne pouvons pas accéder à votre demande.
        </DisplayMessage>
      )}
      {result.status === "FETCHING" && <Spinner />}
    </Layout>
  );
};

export default Product;
