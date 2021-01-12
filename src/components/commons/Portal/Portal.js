import { useEffect, useMemo } from "react";
import ReactDOM from "react-dom";

const supportsPortal = typeof ReactDOM.createPortal === "function";

export default function Portal({ children }) {
  const container = useMemo(() => {
    if (typeof window !== "undefined") {
      const elem = document.createElement("div");
      elem.setAttribute("pokemon-portal", "");
      return elem;
    }
    return null;
  }, []);

  useEffect(() => {
    document.body.appendChild(container);
    return () => document.body.removeChild(container);
  }, [container]);

  if (supportsPortal && container) {
    return ReactDOM.createPortal(children, container);
  }

  return null;
}
