import React, { useMemo } from "react";
import { render } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { ThemeProvider } from "@emotion/react";

import theme from "../constants/theme";

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
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </MockedProvider>
  );
};

const customRender = (ui, options) => {
  return render(ui, { wrapper: TestWrapper, ...options });
};

export * from "@testing-library/react";
export { customRender as render };
