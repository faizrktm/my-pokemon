import { CSSObject } from "@emotion/serialize";
import { StyledProps } from "../types";

export interface BaseButtonProps {
  type: "submit" | "button" | "reset";
  disabled: boolean;
  onClick: (e: React.SyntheticEvent) => void;
  sx: CSSObject & StyledProps;
}

export interface PlainButtonProps extends BaseButtonProps {
  children?: React.ReactNode;
}

export interface ButtonProps extends BaseButtonProps {
  label?: string;
  loading: boolean;
  variant: "primary" | "secondary";
}
