import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { breakpoint, spacing } from "../../utils/theme";
import { PokeCard } from "../commons/PokeCard";

export default function List({ data }) {
  return (
    <Container>
      {data?.pokemons?.results?.map(({ id, image, name }) => (
        <Link
          key={id}
          to={{
            pathname: `/${name}`,
            state: { image },
          }}
        >
          <PokeCard image={image} name={name} />
        </Link>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: ${spacing(500)};

  ${breakpoint("tablet")`
    grid-template-columns: repeat(2, auto);
  `}
`;
