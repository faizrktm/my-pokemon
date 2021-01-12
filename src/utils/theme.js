import { css } from "@emotion/react";

/**
 *
 * @param {string} bp
 * breakpoint that works for min-width only following
 * mobile-first concept.
 */
export function breakpoint(bp) {
  return (style) => {
    return (props) => {
      const { breakpoint } = props.theme;
      return css`
        ${breakpoint[bp]} {
          ${style[0]}
        }
      `;
    };
  };
}

export function spacing(space) {
  return (props) => {
    return props.theme.spacing[space];
  };
}

export function shadow(shade) {
  return (props) => {
    return props.theme.shadow[shade];
  };
}

export function color(shade) {
  return (props) => {
    return props.theme.color[shade];
  };
}
