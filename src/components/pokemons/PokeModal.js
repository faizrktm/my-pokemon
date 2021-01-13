import { lazy, Suspense, useState } from "react";
import styled from "@emotion/styled";

import { Box, Button, Text } from "../commons";

const PokeAddForm = lazy(() => import("./PokeAddForm"));
const PokeAddSuccess = lazy(() => import("./PokeAddSuccess"));

export default function PokeModal({ result, handleClose, pokemon }) {
  const [status, setStatus] = useState(null);

  const message = result ? "Gotcha!" : "Sorry, lady luck not in your side!";

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
        <Suspense fallback={<div>Loading...</div>}>
          {status === "success" ? (
            <PokeAddSuccess handleClose={handleClose} />
          ) : (
            <>
              <Text variant="heading">{message}</Text>
              {result && (
                <PokeAddForm
                  pokemon={pokemon}
                  onSuccess={() => setStatus("success")}
                />
              )}
              {!result ? (
                <Button label="Close" onClick={handleClose} sx={{ mt: 500 }} />
              ) : null}
            </>
          )}
        </Suspense>
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
