import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Pokemon } from "../../query";

import { breakpoint, spacing } from "../../utils/theme";
import { PokeCard } from "../commons/PokeCard";
import { useMutatePokemon, REMOVE } from "../MyPokemon";

interface ListProps {
  data: Pokemon[] | undefined;
  isPokeBag?: boolean;
}

export default function List({ data, isPokeBag }: ListProps) {
  const [remove] = useMutatePokemon(REMOVE);

  const handleDelete = (name: string) => {
    remove(name).catch(() => {});
  };

  return (
    <Container data-testid="pokemon-list">
      {isPokeBag
        ? data?.map(({ id, image, name, nickname }) => (
            <Link
              key={id}
              to={{
                pathname: `/${name}`,
                state: { image: image },
              }}
            >
              <PokeCard
                image={image}
                subname={name}
                name={nickname || ""}
                onClickDelete={handleDelete}
              />
            </Link>
          ))
        : data?.map(({ id, image, name }) => (
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
    grid-template-columns: repeat(2, minmax(0, 1fr));
  `}
`;