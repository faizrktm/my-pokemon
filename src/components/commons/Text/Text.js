/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from "@emotion/react";

export default function Text({ variant, children, sx, ...rest }) {
  const { fontVariant, breakpoint, color: colors } = useTheme();
  const { color = "text-1", textTransform, weight = 400, ...restOfSx } = sx;
  return (
    <span
      css={{
        ...fontVariant[variant].mobile,
        [breakpoint.tablet]: {
          ...fontVariant[variant].tablet,
        },
        color: colors[color],
        fontWeight: weight,
        textTransform,
        fontFamily: "Rubik, sans-serif",
        ...restOfSx,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}

Text.defaultProps = {
  variant: "default",
  sx: {},
};
