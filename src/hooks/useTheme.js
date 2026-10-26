import { useEffect, useState } from "react";

const STORAGE_KEY = "asg-theme";

const getStored = () => {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
};

/**
 * Follows prefers-color-scheme until the visitor explicitly picks a theme
 * (mirrors the original HTML prototype's inline script exactly) - the
 * explicit choice is then persisted and applied via [data-theme] on <html>.
 */
export function useTheme() {
  const [explicit, setExplicit] = useState(getStored);

  useEffect(() => {
    const root = document.documentElement;
    if (explicit === "light" || explicit === "dark") {
      root.setAttribute("data-theme", explicit);
    } else {
      root.removeAttribute("data-theme");
    }
  }, [explicit]);

  const toggle = () => {
    const prefersDark =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    const currentlyDark = explicit ? explicit === "dark" : prefersDark;
    const next = currentlyDark ? "light" : "dark";
    setExplicit(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // stockage indisponible - le choix ne survivra pas au rechargement
    }
  };

  return { theme: explicit, toggle };
}
