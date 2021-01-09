import styled from "@emotion/styled";

import { spacing } from "../../utils/theme";
import { PokeCard } from "../commons/PokeCard";

export default function List({ data }) {
  return (
    <Container>
      {data?.pokemons?.results?.map(({ id, image, name }) => (
        <PokeCard key={id} image={image} name={name} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: ${spacing(500)};
`;
