import { useMediaQuery } from "./use-media-query";

export const useReducedMotion = (): boolean => {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
};
