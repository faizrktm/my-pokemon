import * as React from "react";
import { useQuery } from "@apollo/client";

import { GET_POKEMONS } from "./query";
import { Page } from "./components";
const List = React.lazy(() => import("./components/pokemons/List"));

function App() {
  const { data, fetchMore } = useQuery(GET_POKEMONS, {
    variables: {
      offset: 0,
      limit: 10,
    },
  });

  const fetchNext = () => {
    fetchMore({
      variables: {
        offset: data?.pokemons?.nextOffset,
      },
    });
  };

  return (
    <Page title="Pokeman">
      <List data={data} />
      <button
        onClick={fetchNext}
        style={{ marginTop: "1rem", marginBottom: "1rem" }}
      >
        Fetch More
      </button>
    </Page>
  );
}

export default App;
