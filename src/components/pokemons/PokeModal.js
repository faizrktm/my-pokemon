import { useState } from "react";
import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";

import { Box, Button, Text, TextInput } from "../commons";
import { useMutatePokemon, CREATE } from "../MyPokemon";

export default function PokeModal({ result, handleClose, pokemon }) {
  const [name, setName] = useState("");
  const [status, setStatus] = useState(null);
  const [create, { loading, error }] = useMutatePokemon(CREATE);
  let history = useHistory();

  const onSubmit = async () => {
    try {
      await create(name, pokemon);
      setStatus("success");
    } catch (_) {}
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const gotoPokebag = () => {
    history.push("/pokebag");
  };

  return (
    <Container>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,
          borderRadius: "32px 32px 0px 0px",
          backgroundColor: "ui-1",
          maxHeight: "80%",
          p: 500,
          pt: 700,
          pb: 600,
        }}
      >
        {status === "success" ? (
          <>
            <Text variant="heading">
              Your Pokemon is safe and sound in your pokebag.
            </Text>
            <Box sx={{ mt: 500, flexDirection: "row" }}>
              <Button
                loading={loading}
                label="Close"
                onClick={handleClose}
                sx={{ flex: 1 }}
                variant="secondary"
              />
              <Box sx={{ width: "1rem" }} />
              <Button
                loading={loading}
                label="See PokeBag"
                onClick={gotoPokebag}
                sx={{ flex: 1 }}
              />
            </Box>
          </>
        ) : (
          <>
            <Text variant="heading">
              {result ? "Gotcha!" : "Sorry, lady luck not in your side!"}
            </Text>
            {result && (
              <Box sx={{ mt: 500 }}>
                <Text sx={{ mb: 300 }}>
                  Now enter your {pokemon.name} nickname
                </Text>
                <TextInput name="name" onChange={handleChange} />
                {error && (
                  <Text sx={{ mt: 300, color: "text-error" }}>{error}</Text>
                )}
              </Box>
            )}
            {!result ? (
              <Button label="Close" onClick={handleClose} sx={{ mt: 500 }} />
            ) : (
              <Button
                loading={loading}
                label="Submit"
                onClick={onSubmit}
                sx={{ mt: 500 }}
              />
            )}
          </>
        )}
      </Box>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0px auto;
  max-width: 480px;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  z-index: 1;
`;
