import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const supportsPortal = typeof ReactDOM.createPortal === "function";

export default function Portal({ children }) {
  const [container] = useState(() => {
    if (typeof window !== "undefined") {
      const elem = document.createElement("div");
      elem.setAttribute("pokemon-portal", "");
      return elem;
    }
    return null;
  });

  useEffect(() => {
    document.body.appendChild(container);
    return () => document.body.removeChild(container);
  }, []);

  if (supportsPortal && container) {
    return ReactDOM.createPortal(children, container);
  }

  return null;
}
