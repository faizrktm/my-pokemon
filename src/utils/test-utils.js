import React, { Suspense, useMemo } from "react";
import { render } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createMemoryHistory } from "history";

import theme from "../constants/theme";
import { PokemonProvider } from "../components/MyPokemon";

const TestWrapper = ({ children }) => {
  const { mocks, cache, addTypename } = useMemo(() => {
    try {
      const {
        props: { apolloMockForTestOnly, cache },
      } = React.Children.only(children);
      return {
        mocks: apolloMockForTestOnly || [],
        cache: cache,
        addTypename: !!cache,
      };
    } catch (error) {
      return [];
    }
  }, []);

  return (
    <PokemonProvider>
      <MockedProvider mocks={mocks} addTypename={addTypename} cache={cache}>
        <ThemeProvider theme={theme}>
          <Suspense fallback={<div>Fallback</div>}>{children}</Suspense>
        </ThemeProvider>
      </MockedProvider>
    </PokemonProvider>
  );
};

const customRender = (ui, { path = "/", route = "/" } = {}, options) => {
  window.history.pushState({}, "Test page", route);
  const { props } = React.Children.only(ui);

  return render(
    <BrowserRouter {...props}>
      <Switch>
        <Route path={path} children={ui} />
      </Switch>
    </BrowserRouter>,
    { wrapper: TestWrapper, ...options }
  );
};

export * from "@testing-library/react";
export { customRender as render };
