/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { shimmer } from "./styles";

export default function BlockLoader() {
  return <Loader css={shimmer} />;
}

const Loader = styled.div`
  display: block;
  min-height: 100px;
  border-radius: 8px;
`;
