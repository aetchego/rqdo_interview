import { useEffect, useState } from "react";

import Layout from "../layout/Layout";
import Searchbar from "../components/Searchbar";
import { useDebounced } from "../hooks/useDebounced";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [result, fetch] = useFetch(
    `https://world.openfoodfacts.org/cgi/search.pl`,
    {
      method: "get",
      queryParams: {
        search_terms: searchQuery,
        search_simple: 1,
        action: "process",
        fields: "id,product_name,image_front_small_url",
        json: 1,
        page: 1,
        page_size: 24,
      },
    }
  );

  useDebounced(
    () => {
      if (searchQuery) {
        fetch();
      }
    },
    1000,
    [searchQuery]
  );

  useEffect(() => {
    console.log(result);
  }, [result]);

  return (
    <Layout>
      <h1>Gestion Gello catalogue</h1>
      <Searchbar onSearch={setSearchQuery} />
    </Layout>
  );
};

export default Home;
