import styled from "@emotion/styled";

import { Card } from "../Card";
import { Text } from "../Text";

export default function PokeCard({ image, name }) {
  return (
    <Card sx={{ backgroundColor: "ui-1" }}>
      <Image src={image} alt={name} />
      <Text variant="label" sx={{ textTransform: "capitalize" }}>
        {name}
      </Text>
    </Card>
  );
}

const Image = styled.img`
  width: 100px;
  height: 100px;
  position: absolute;
  bottom: 0;
  right: 0;
`;
