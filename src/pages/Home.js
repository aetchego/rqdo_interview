import DisplayMessage from "../components/display-message/DisplayMessage";
import Layout from "../layout/Layout";
import ProductCard from "../components/product-card/ProductCard";
import Searchbar from "../components/searchbar/Searchbar";
import Spinner from "../components/spinner/Spinner";
import { getProducts } from "../api/request";
import styles from "./home.module.scss";
import { useDebounced } from "../hooks/useDebounced";
import useFetch from "../hooks/useFetch";
import { useState } from "react";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [result, fetch] = useFetch(`/cgi/search.pl`, getProducts, {
    queryParams: {
      search_terms: searchQuery,
      search_simple: 1,
      action: "process",
      fields: ["id", "product_name", "image_front_small_url"],
      json: 1,
      page: 1,
      page_size: 24,
    },
  });

  useDebounced(
    () => {
      if (searchQuery) {
        fetch();
      }
    },
    1000,
    [searchQuery]
  );

  return (
    <Layout>
      <Searchbar onSearch={setSearchQuery} />
      <div className={styles.cardContainer}>
        {result.status === "SUCCESS" && result.response.size === 0 && (
          <DisplayMessage>
            Aucun résultat n'a été trouvé pour cette recherche.
          </DisplayMessage>
        )}
        {result.status === "SUCCESS" &&
          result.response.products.map((elem) => (
            <div className={styles.card} key={elem.id}>
              <ProductCard
                id={elem.id}
                url={elem.image_front_small_url}
                name={elem.product_name}
              />
            </div>
          ))}
        {result.status === "ERROR" && (
          <DisplayMessage>
            Désolé nous ne pouvons pas accéder à votre demande.
          </DisplayMessage>
        )}
        {result.status === "FETCHING" && <Spinner />}
      </div>
    </Layout>
  );
};

export default Home;
