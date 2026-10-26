// import Logo from "./Logo";
// import ThemeToggle from "./ThemeToggle";
// import { navItems } from "../constants/asg";

// const NavBar = () => (
//   <header className="sticky top-0 z-20 bg-bg border-b border-line">
//     <div className="max-w-[68rem] mx-auto px-4 flex items-center gap-5 flex-wrap py-2.5">
//       <Logo />

//       <nav
//         aria-label="Navigation principale"
//         className="flex items-center gap-1 flex-wrap ml-auto max-[900px]:ml-0 max-[900px]:w-full"
//       >
//         {navItems.map((item) => (
//           <a
//             key={item.href}
//             href={item.href}
//             className="font-display font-medium text-[0.92rem] text-fg px-2.5 py-1.5 rounded-md hover:bg-surface transition-colors"
//           >
//             {item.label}
//           </a>
//         ))}
//         <a
//           href="#adhesion"
//           className="font-display font-medium text-[0.92rem] bg-blue text-blue-ink px-2.5 py-1.5 rounded-md hover:brightness-110 transition-[filter]"
//         >
//           Adhérer
//         </a>
//         <ThemeToggle />
//       </nav>
//     </div>
//   </header>
// );

// export default NavBar;

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import Logo from "./Logo";
import { navItems } from "../constants/asg";

const NAV_OFFSET = 80;

/* Theme: writes data-theme on <html>, which is what the ASG color tokens read. */
const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem("asg-theme");
      if (saved === "dark" || saved === "light") return saved;
    } catch (e) {}
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const choose = useCallback((next) => {
    setTheme(next);
    try {
      localStorage.setItem("asg-theme", next);
    } catch (e) {}
  }, []);

  return [theme, choose];
};

const ThemeSwitch = ({ theme, onChoose }) => (
  <div className="bg-surface rounded-xl p-1 shadow-inner flex">
    <button
      type="button"
      onClick={() => onChoose("light")}
      aria-label="Thème clair"
      aria-pressed={theme === "light"}
      className={`p-2 rounded-lg transition-all duration-300 ${
        theme === "light"
          ? "bg-bg shadow-md text-yellow-500"
          : "text-muted hover:text-yellow-500"
      }`}
    >
      <Sun className="w-5 h-5" />
    </button>
    <button
      type="button"
      onClick={() => onChoose("dark")}
      aria-label="Thème sombre"
      aria-pressed={theme === "dark"}
      className={`p-2 rounded-lg transition-all duration-300 ${
        theme === "dark"
          ? "bg-surface-2 shadow-md text-blue"
          : "text-muted hover:text-blue"
      }`}
    >
      <Moon className="w-5 h-5" />
    </button>
  </div>
);

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, chooseTheme] = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock page scroll and close on Escape while the drawer is open. */
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const goTo = (e, href) => {
    e.preventDefault();
    if (href === "#accueil" || href === "#hero" || href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.querySelector(href);
      if (el) {
        const top =
          el.getBoundingClientRect().top + window.pageYOffset - NAV_OFFSET;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <nav
        aria-label="Navigation principale"
        className={`py-3 transition-all duration-300 border-b backdrop-blur-lg ${
          scrolled
            ? "bg-[color-mix(in_srgb,var(--bg)_95%,transparent)] shadow-lg border-line"
            : "bg-[color-mix(in_srgb,var(--bg)_80%,transparent)] border-transparent"
        }`}
      >
        <div className="max-w-[68rem] mx-auto px-4 flex items-center justify-between gap-6">
          <a
            href="#accueil"
            onClick={(e) => goTo(e, "#accueil")}
            className="flex items-center shrink-0"
            aria-label="ASG, accueil"
          >
            <Logo />
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => goTo(e, item.href)}
                  className="group relative font-display font-medium text-[0.95rem] text-fg hover:text-blue transition-colors duration-300 py-2 px-1"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-green to-blue group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#adhesion"
              onClick={(e) => goTo(e, "#adhesion")}
              className="font-display font-semibold text-[0.92rem] bg-blue text-blue-ink px-4 py-2 rounded-lg hover:brightness-110 transition-[filter]"
            >
              Adhérer
            </a>
            <ThemeSwitch theme={theme} onChoose={chooseTheme} />
          </div>

          {/* Mobile trigger */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            className="lg:hidden p-2 rounded-lg text-fg hover:bg-surface transition-colors duration-200"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {createPortal(
        <AnimatePresence>
          {open && (
            <div className="lg:hidden" data-theme={theme}>
              <motion.div
                key="overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={() => setOpen(false)}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              />
              <motion.aside
                key="drawer"
                role="dialog"
                aria-modal="true"
                aria-label="Menu"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
                className="fixed right-0 top-0 h-full w-80 max-w-[85vw] bg-bg text-fg shadow-2xl z-50 flex flex-col p-6"
              >
                <div className="flex items-center justify-between mb-8">
                  <Logo />
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Fermer le menu"
                    className="p-2 rounded-lg hover:bg-surface transition-colors duration-200"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <ul className="space-y-1 overflow-y-auto">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={(e) => goTo(e, item.href)}
                        className="block py-3 px-4 rounded-lg font-display font-medium hover:bg-surface hover:text-blue transition-colors duration-200"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6 border-t border-line">
                  <a
                    href="#adhesion"
                    onClick={(e) => goTo(e, "#adhesion")}
                    className="block text-center font-display font-semibold bg-blue text-blue-ink px-4 py-3 rounded-lg hover:brightness-110 transition-[filter] mb-5"
                  >
                    Adhérer
                  </a>
                  <p className="text-sm text-muted mb-3">Thème</p>
                  <div className="bg-surface rounded-xl p-1">
                    <button
                      type="button"
                      onClick={() => chooseTheme("light")}
                      aria-pressed={theme === "light"}
                      className={`w-full p-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                        theme === "light"
                          ? "bg-bg shadow-md text-yellow-500"
                          : "text-muted hover:text-yellow-500"
                      }`}
                    >
                      <Sun className="w-5 h-5" />
                      <span>Clair</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => chooseTheme("dark")}
                      aria-pressed={theme === "dark"}
                      className={`w-full p-3 rounded-lg flex items-center justify-center gap-2 mt-1 transition-all duration-300 ${
                        theme === "dark"
                          ? "bg-surface-2 shadow-md text-blue"
                          : "text-muted hover:text-blue"
                      }`}
                    >
                      <Moon className="w-5 h-5" />
                      <span>Sombre</span>
                    </button>
                  </div>
                </div>
              </motion.aside>
            </div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </header>
  );
};

export default NavBar;
