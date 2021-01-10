import { useQuery } from "@apollo/client";
import { useParams, useLocation } from "react-router-dom";

import { GET_POKEMON } from "../query";
import { Box, Page, Text } from "../components";

function Label({ title, bg = "interactive-1", color = "text-4" }) {
  return (
    <Box
      sx={{
        mr: 500,
        mb: 500,
        p: 300,
        backgroundColor: bg,
        borderRadius: "8px",
      }}
    >
      <Text sx={{ color }}>{title}</Text>
    </Box>
  );
}

export default function Detail() {
  let { id } = useParams();
  const { state } = useLocation();
  const { data } = useQuery(GET_POKEMON, {
    variables: {
      name: id,
    },
  });
  console.log(data);
  return (
    <Page title={id}>
      <Box sx={{ flex: 1 }}>
        <Box sx={{ flexDirection: "row", flexWrap: "wrap" }}>
          {data?.pokemon?.types?.map(({ type }) => (
            <Label bg="ui-4" title={type.name} key={type.name} />
          ))}
        </Box>
        <Box sx={{ alignItems: "center", justifyContent: "center", zIndex: 1 }}>
          <img
            src={state.image}
            alt={id}
            style={{ height: "250px", width: "250px" }}
          />
        </Box>
        <Box
          sx={{
            borderRadius: "32px 32px 0px 0px",
            backgroundColor: "ui-1",
            pb: 500,
            pl: 500,
            pr: 500,
            pt: 700,
            marginTop: "-4.5rem",
            marginRight: "-1rem",
            marginLeft: "-1rem",
            marginBottom: "-2rem",
            flex: 1,
          }}
        >
          <Box sx={{ mb: 300 }}>
            <Text variant="label">Moves</Text>
          </Box>
          <Box sx={{ flexDirection: "row", flexWrap: "wrap" }}>
            {data?.pokemon?.moves?.map(({ move }) => (
              <Label title={move.name} key={move.name} />
            ))}
          </Box>
        </Box>
      </Box>
    </Page>
  );
}
