/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from "@emotion/react";
import { shadow, spacing, color } from "../../../utils/theme";

export default function Box({
  children,
  m,
  mt,
  mb,
  ml,
  mr,
  p,
  pt,
  pb,
  pl,
  pr,
  display,
  flexDirection,
  sx,
  boxShadow,
  backgroundColor,
  ...rest
}) {
  const theme = useTheme();
  return (
    <div
      css={{
        margin: spacing(m)({ theme }),
        marginTop: spacing(mt)({ theme }),
        marginBottom: spacing(mb)({ theme }),
        marginLeft: spacing(ml)({ theme }),
        marginRight: spacing(mr)({ theme }),
        padding: spacing(p)({ theme }),
        paddingTop: spacing(pt)({ theme }),
        paddingBottom: spacing(pb)({ theme }),
        paddingLeft: spacing(pl)({ theme }),
        paddingRight: spacing(pr)({ theme }),
        display: display,
        flexDirection: flexDirection,
        boxShadow: shadow(boxShadow)({ theme }),
        backgroundColor: color(backgroundColor),
        ...sx,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

Box.defaultProps = {
  m: null,
  mt: null,
  mb: null,
  mr: null,
  ml: null,
  p: null,
  pt: null,
  pb: null,
  pr: null,
  pl: null,
  boxShadow: null,
  backgroundColor: null,
  display: "flex",
  flexDirection: "column",
  sx: {},
};
