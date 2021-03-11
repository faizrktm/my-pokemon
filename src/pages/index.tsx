import * as React from "react";
import { useQuery } from "@apollo/client";

import { GET_POKEMONS, PokemonData, PokemonVars } from "../query";
import { Button, Page, Text, Box } from "../components";
const List = React.lazy(() => import("../components/pokemons/List"));

export default function App() {
  const { data, fetchMore, loading, error } = useQuery<
    PokemonData,
    PokemonVars
  >(GET_POKEMONS, {
    notifyOnNetworkStatusChange: true,
    variables: {
      offset: 0,
      limit: 10,
    },
  });

  const fetchNext = () => {
    try {
      fetchMore({
        variables: {
          offset: data?.pokemons?.nextOffset,
          limit: 10,
        },
      });
    } catch (_) {}
  };

  const hasMore = (data?.pokemons?.nextOffset || 0) > 0;

  return (
    <Page title="Pokedex">
      <List data={data?.pokemons?.results} />
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
      {error && (
        <Box
          sx={{
            mt: 700,
          }}
        >
          <Text sx={{ textAlign: "center", color: "text-error" }}>
            {error.message}
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
          label="Show More"
        />
      )}
    </Page>
  );
}
