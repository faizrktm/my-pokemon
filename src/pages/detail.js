import * as React from "react";
import { useQuery } from "@apollo/client";
import { useParams, useLocation } from "react-router-dom";

import { GET_POKEMON } from "../query";
import { Badge, Box, Image, Page } from "../components";
import Detail from "../components/pokemons/Detail";

const PokeCatch = React.lazy(() => import("../components/pokemons/PokeCatch"));

export default function DetailPage() {
  let { id } = useParams();
  const { state } = useLocation();
  const { data } = useQuery(GET_POKEMON, {
    variables: {
      name: id,
    },
  });
  return (
    <Page title={id}>
      <Box sx={{ flex: 1 }}>
        <Box sx={{ flexDirection: "row", flexWrap: "wrap" }}>
          {data?.pokemon?.types?.map(({ type }) => (
            <Badge bg="ui-4" title={type.name} key={type.name} />
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
        {!!data?.pokemon && <PokeCatch name={id} image={state?.image} />}
      </Box>
    </Page>
  );
}
