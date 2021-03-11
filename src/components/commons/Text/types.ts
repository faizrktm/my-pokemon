import { CSSObject } from "@emotion/react";

import { ThemeProps } from "../../../constants/theme";
import { StyledProps } from "../types";

export interface TextProps {
  variant: keyof ThemeProps["fontVariant"];
  children: React.ReactNode;
  sx: Omit<CSSObject, "Color"> & StyledProps;
  as?: keyof JSX.IntrinsicElements;
}
