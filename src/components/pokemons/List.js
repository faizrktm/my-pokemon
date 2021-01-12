import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { breakpoint, spacing } from "../../utils/theme";
import { PokeCard } from "../commons/PokeCard";
import { useMutatePokemon, REMOVE } from "../MyPokemon";

export default function List({ data, isPokeBag }) {
  const [remove] = useMutatePokemon(REMOVE);
  const handleDelete = (name) => {
    remove(name).catch((_) => {});
  };

  return (
    <Container>
      {isPokeBag
        ? Object?.keys(data)?.map((item, id) => (
            <Link
              key={id}
              to={{
                pathname: `/${data[item].name}`,
                state: { image: data[item].image },
              }}
            >
              <PokeCard
                image={data[item].image}
                subname={data[item].name}
                name={item}
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
