import { useEffect, useRef } from "react";

import Layout from "../layout/Layout";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router";

const Product = () => {
  let ref = useRef(useParams()?.productId);
  const [result, fetch] = useFetch(
    `https://world.openfoodfacts.org/api/v0/product/${ref.current}.json`,
    {
      method: "get",
      queryParams: {
        fields:
          "product_name,categories,image_front_url,Callergens_hierarchy,ingredients_text",
      },
    }
  );

  useEffect(() => {
    fetch();
  }, []);

  useEffect(() => {
    console.log(result);
  }, [result]);

  return (
    <Layout>
      <h2>coucou</h2>
    </Layout>
  );
};

export default Product;
