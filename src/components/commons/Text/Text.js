/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { spacing } from "../../../utils/theme";

export default function Text({ variant, children, sx, ...rest }) {
  const { fontVariant, breakpoint, color: colors, ...theme } = useTheme();
  const {
    m,
    mt,
    mb,
    mr,
    ml,
    color = "text-1",
    textTransform,
    weight = 400,
    ...restOfSx
  } = sx;
  return (
    <TextComponent
      css={{
        ...fontVariant[variant].mobile,
        [breakpoint.tablet]: {
          ...fontVariant[variant].tablet,
        },
        color: colors[color],
        fontWeight: weight,
        textTransform,
        margin: spacing(m)({ theme }),
        marginTop: spacing(mt)({ theme }),
        marginBottom: spacing(mb)({ theme }),
        marginLeft: spacing(ml)({ theme }),
        marginRight: spacing(mr)({ theme }),
        ...restOfSx,
      }}
      {...rest}
    >
      {children}
    </TextComponent>
  );
}

Text.defaultProps = {
  variant: "default",
  sx: {},
};

const TextComponent = styled.span``;
