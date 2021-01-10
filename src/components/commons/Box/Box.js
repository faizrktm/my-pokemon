/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from "@emotion/react";
import { shadow, spacing, color } from "../../../utils/theme";

export default function Box({ children, sx, ...rest }) {
  const {
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
    display = "flex",
    flexDirection = "column",
    boxShadow,
    backgroundColor,
    ...restOfSx
  } = sx;
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
        ...restOfSx,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

Box.defaultProps = {
  sx: {},
};
