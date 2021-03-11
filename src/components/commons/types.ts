import { ThemeProps } from "../../constants/theme";

export type StyledProps = {
  m?: Partial<keyof ThemeProps["spacing"]>;
  mt?: Partial<keyof ThemeProps["spacing"]>;
  mb?: Partial<keyof ThemeProps["spacing"]>;
  mr?: Partial<keyof ThemeProps["spacing"]>;
  ml?: Partial<keyof ThemeProps["spacing"]>;
  color?: keyof ThemeProps["color"];
};
