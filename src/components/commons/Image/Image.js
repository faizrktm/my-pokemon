/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";

export default function Image({ src, alt, sx }) {
  return <img src={src} alt={alt} css={{ ...sx }} />;
}

Image.defaultProps = {
  sx: {},
};
