/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from "@emotion/react";
import styled from "@emotion/styled";

import { shadow } from "../../../utils/theme";

export default function Card({ children, backgroundColor }) {
  const theme = useTheme();
  return (
    <StyledCard
      css={{
        backgroundColor: theme.color[backgroundColor],
      }}
    >
      {children}
    </StyledCard>
  );
}

Card.defaultProps = {
  color: "ui-1",
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
