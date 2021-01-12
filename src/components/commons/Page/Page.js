import styled from "@emotion/styled";
import { Link, useRouteMatch } from "react-router-dom";

import { Box } from "../Box";
import { Text } from "../Text";

const Page = ({ children, title }) => {
  let match = useRouteMatch("/pokebag");

  return (
    <Main>
      <Box
        sx={{ flexDirection: "row", justifyContent: "space-between", mb: 500 }}
      >
        <Link to="/">
          <Text>Home</Text>
        </Link>
        {!match && (
          <Link to="/pokebag">
            <Text>Pokebag</Text>
          </Link>
        )}
      </Box>
      {title ? (
        <Box data-testid="title" sx={{ mb: 500 }}>
          <Text as="h1" variant="heading" sx={{ textTransform: "capitalize" }}>
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
