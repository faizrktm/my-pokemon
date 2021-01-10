import * as React from "react";
import { useQuery } from "@apollo/client";

import { GET_POKEMONS } from "./query";
import { Button, Page, Text, Box } from "./components";
const List = React.lazy(() => import("./components/pokemons/List"));

function App() {
  const { data, fetchMore, loading } = useQuery(GET_POKEMONS, {
    notifyOnNetworkStatusChange: true,
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

  const hasMore = data?.pokemons?.nextOffset > 0;

  return (
    <Page title="Pokedex">
      <List data={data} />
      {loading && (
        <Box
          sx={{
            mt: 700,
          }}
        >
          <Text variant="label" sx={{ textAlign: "center" }}>
            Loading ...
          </Text>
        </Box>
      )}
      {hasMore && !loading && (
        <Button
          onClick={fetchNext}
          sx={{
            mt: 700,
            mb: 500,
          }}
          label="Fetch More"
        />
      )}
    </Page>
  );
}

export default App;
