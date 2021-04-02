import * as React from "react";
import { useQuery } from "@apollo/client";
import { NetworkStatus } from "@apollo/client";

import { GET_POKEMONS, PokemonData, PokemonVars } from "../query";
import { Button, Page, Text, Box, PokeCardLoader } from "../components";

const List = React.lazy(
  () =>
    import(/* webpackChunkName: "poke-list" */ "../components/pokemons/List")
);

export default function App() {
  const { data, fetchMore, error, networkStatus } = useQuery<
    PokemonData,
    PokemonVars
  >(GET_POKEMONS, {
    notifyOnNetworkStatusChange: true,
    variables: {
      offset: 0,
      limit: 10,
    },
  });

  const { pokemons } = data || {};
  const { results, nextOffset } = pokemons || {};
  const hasMore = (nextOffset || -1) > 0;

  const loadingFirstTime = networkStatus === NetworkStatus.loading;
  const loadingFetchMore = networkStatus === NetworkStatus.fetchMore;

  const fetchNext = () => {
    try {
      fetchMore({
        variables: {
          offset: nextOffset,
          limit: 10,
        },
      });
    } catch (_) {}
  };

  return (
    <Page title="Pokedex">
      {!loadingFirstTime && results?.length && <List data={results} />}
      {(loadingFirstTime || loadingFetchMore) && (
        <PokeCardLoader length={loadingFirstTime ? 4 : 2} />
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
      {hasMore && !loadingFirstTime && !loadingFetchMore && (
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
