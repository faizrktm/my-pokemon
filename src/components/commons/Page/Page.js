import styled from "@emotion/styled";

import { Box } from "../Box";
import { Text } from "../Text";

const Page = ({ children, title }) => {
  return (
    <Main>
      {title ? (
        <Box data-testid="title" sx={{ mb: 500 }}>
          <Text as="h1" variant="heading">
            {title}
          </Text>
        </Box>
      ) : null}
      {children}
    </Main>
  );
};

export default Page;

const Main = styled.main`
  position: relative;
  min-height: 100vh;
  margin: 0px auto;
  padding: 16px 16px 32px;
  max-width: 480px;
  background-color: ${(props) => props.theme.color.background};
  width: 100%;
  display: flex;
  flex-direction: column;
`;
