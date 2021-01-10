/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from "@emotion/react";

export default function Text({
  color,
  textTransform,
  weight,
  variant,
  children,
  ...rest
}) {
  const { fontVariant, breakpoint, color: colors } = useTheme();
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
      }}
      {...rest}
    >
      {children}
    </span>
  );
}

Text.defaultProps = {
  weight: 400,
  variant: "default",
  color: "text-1",
};
