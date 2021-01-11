import * as React from "react";
import { keyframes } from "@emotion/react";

import { Box, Image, PlainButton, Portal } from "../commons";
import PokeBall from "../../assets/pokeball.svg";
import PokeModal from "./PokeModal";

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;

export default function PokeCatch({ name, image }) {
  const [result, setResult] = React.useState(null);

  const handleGatcha = () => {
    setResult(Math.random() < 0.5);
  };

  return (
    <Portal>
      {result !== null && (
        <PokeModal
          result={result}
          handleClose={() => setResult(null)}
          pokemon={{ name, image }}
        />
      )}
      {result === null && (
        <Box
          sx={{
            position: "fixed",
            bottom: "1rem",
            left: "calc(50vw - 30px)",
          }}
        >
          <PlainButton
            sx={{
              animation: `${bounce} 1.5s ease-in-out infinite`,
              transformOrigin: "center bottom",
            }}
            onClick={handleGatcha}
          >
            <Image
              src={PokeBall}
              alt="Pokeball Button"
              sx={{
                width: "60px",
                height: "60px",
              }}
            />
          </PlainButton>
        </Box>
      )}
    </Portal>
  );
}