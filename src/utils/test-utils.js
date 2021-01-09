import React, { useMemo } from "react";
import { render } from "@testing-library/react";
import { BrowserRouter, Switch } from "react-router-dom";
import { MockedProvider } from "@apollo/client/testing";

const TestWrapper = ({ children }) => {
  const mocks = useMemo(() => {
    try {
      const {
        props: { apolloMockForTestOnly },
      } = React.Children.only(children);
      return apolloMockForTestOnly || [];
    } catch (error) {
      return [];
    }
  }, []);
  return (
    <MockedProvider mocks={mocks} addTypename={false}>
      <BrowserRouter>
        <Switch>{children}</Switch>
      </BrowserRouter>
    </MockedProvider>
  );
};

const customRender = (ui, options) => {
  return render(ui, { wrapper: TestWrapper, ...options });
};

export * from "@testing-library/react";
export { customRender as render };
