import * as React from "react";
import { useQuery } from "@apollo/client";
import { useParams, useLocation } from "react-router-dom";

import { GET_POKEMON, PokemonDetail, PokemonVars } from "../query";
import { Badge, Box, Image, Page, Text } from "../components";
import Detail from "../components/pokemons/Detail";

const PokeCatch = React.lazy(
  () =>
    import(
      /* webpackChunkName: "poke-catch" */ "../components/pokemons/PokeCatch"
    )
);

type RouterParams = {
  id: string;
};

type LocationState = {
  image?: string;
};

export default function DetailPage() {
  let { id } = useParams<RouterParams>();
  const { state } = useLocation<LocationState>();
  const { data, error } = useQuery<PokemonDetail, PokemonVars>(GET_POKEMON, {
    variables: {
      name: id,
    },
  });

  return (
    <Page title={id}>
      <Box sx={{ flex: 1 }}>
        {!!error && (
          <Text sx={{ color: "text-error", textAlign: "center" }}>
            {error.message}
          </Text>
        )}
        <Box
          sx={{ flexDirection: "row", flexWrap: "wrap" }}
          data-testid="type-badges"
        >
          {data?.pokemon?.types?.map(({ type }) => (
            <Badge bg="ui-5" title={type.name} key={type.name} />
          ))}
        </Box>
        <Box sx={{ alignItems: "center", justifyContent: "center", zIndex: 1 }}>
          {state?.image && (
            <Image
              src={state?.image}
              alt={id}
              sx={{ height: "250px", width: "250px", marginBottom: "-4.5rem" }}
            />
          )}
        </Box>
        <Detail moves={data?.pokemon?.moves} />
        <React.Suspense fallback={null}>
          {!!data?.pokemon && <PokeCatch name={id} image={state?.image} />}
        </React.Suspense>
      </Box>
    </Page>
  );
}
