/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme, css } from "@emotion/react";
import { color, spacing } from "../../../utils/theme";

export default function Button({
  loading,
  label,
  disabled,
  onClick,
  sx,
  ...rest
}) {
  const theme = useTheme();

  const { m, mt, mb, mr, ml, ...restOfSx } = sx;

  return (
    <button
      onClick={disabled || loading ? null : onClick}
      css={{
        margin: spacing(m)({ theme }),
        marginTop: spacing(mt)({ theme }),
        marginBottom: spacing(mb)({ theme }),
        marginLeft: spacing(ml)({ theme }),
        marginRight: spacing(mr)({ theme }),
        fontFamily: "Rubik, sans-serif",
        padding: spacing(500)({ theme }),
        backgroundColor: color("interactive-1")({ theme }),
        color: color("text-4")({ theme }),
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        "&:hover": css({
          backgroundColor: color("interactive-1-hover")({ theme }),
        }),
        "&:active": css({
          backgroundColor: color("interactive-1-active")({ theme }),
        }),
        ...restOfSx,
      }}
      {...rest}
    >
      {label}
    </button>
  );
}

Button.defaultProps = {
  disabled: false,
  onClick: () => {},
  sx: {},
};
