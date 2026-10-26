import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggle } = useTheme();
  const isDark =
    theme === "dark" ||
    (!theme &&
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-color-scheme: dark)").matches);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Changer de thème"
      className="inline-flex items-center gap-1.5 text-[0.85rem] font-display border border-line bg-bg text-fg px-2.5 py-1.5 rounded-md hover:bg-surface transition-colors"
    >
      {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
      Thème
    </button>
  );
};

export default ThemeToggle;
