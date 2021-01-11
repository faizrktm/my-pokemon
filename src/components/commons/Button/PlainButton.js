/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from "@emotion/react";
import { spacing } from "../../../utils/theme";

export default function Button({
  children,
  type,
  disabled,
  onClick,
  sx,
  ...rest
}) {
  const theme = useTheme();

  const { m, mt, mb, mr, ml, ...restOfSx } = sx;

  return (
    <button
      type={type}
      onClick={disabled ? null : onClick}
      css={{
        padding: "0px",
        border: "none",
        cursor: "pointer",
        background: "transparent",
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
    </button>
  );
}

Button.defaultProps = {
  disabled: false,
  onClick: () => {},
  sx: {},
  type: "button",
};
