import { useHistory } from "react-router-dom";

import { Box, Button, Text } from "../commons";

export default function PokeAddSuccess({ handleClose }) {
  let history = useHistory();
  const gotoPokebag = () => {
    history.push("/pokebag");
  };
  return (
    <>
      <Text variant="heading">
        Your Pokemon is safe and sound in your pokebag.
      </Text>
      <Box sx={{ mt: 500, flexDirection: "row" }}>
        <Button
          label="Close"
          onClick={handleClose}
          sx={{ flex: 1 }}
          variant="secondary"
        />
        <Box sx={{ width: "1rem" }} />
        <Button label="See PokeBag" onClick={gotoPokebag} sx={{ flex: 1 }} />
      </Box>
    </>
  );
}
