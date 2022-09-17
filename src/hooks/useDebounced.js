import { useEffect } from "react";

export const useDebounced = (effect, delay, deps) => {
  useEffect(() => {
    const handler = setTimeout(() => effect(), delay);
    return () => clearTimeout(handler);
  }, [...(deps || []), delay]);
};
