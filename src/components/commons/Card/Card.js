/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from "@emotion/react";
import styled from "@emotion/styled";

import { shadow } from "../../../utils/theme";

export default function Card({ children, sx }) {
  const { backgroundColor, ...restOfSx } = sx;
  const theme = useTheme();
  return (
    <StyledCard
      css={{
        backgroundColor: theme.color[backgroundColor],
        ...restOfSx,
      }}
    >
      {children}
    </StyledCard>
  );
}

Card.defaultProps = {
  sx: {},
};

const StyledCard = styled.div`
  position: relative;
  box-shadow: ${shadow(200)};
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  min-height: 130px;
`;
