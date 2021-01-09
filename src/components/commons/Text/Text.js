/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from "@emotion/react";
import styled from "@emotion/styled";

export default function Text({
  color,
  textTransform,
  weight,
  variant,
  children,
}) {
  const theme = useTheme();
  return (
    <TextComponent
      css={{
        ...theme.fontVariant[variant].mobile,
        [theme.breakpoint.tablet]: {
          ...theme.fontVariant[variant].tablet,
        },
        color: theme.color[color],
        fontWeight: weight,
        textTransform,
      }}
    >
      {children}
    </TextComponent>
  );
}

Text.defaultProps = {
  weight: 400,
  variant: "default",
  color: "text-1",
};

const TextComponent = styled.span`
  font-family: Rubik, sans-serif;
`;
