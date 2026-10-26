import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { navItems } from "../constants/asg";

const NavBar = () => (
  <header className="sticky top-0 z-20 bg-bg border-b border-line">
    <div className="max-w-[68rem] mx-auto px-4 flex items-center gap-5 flex-wrap py-2.5">
      <Logo />

      <nav
        aria-label="Navigation principale"
        className="flex items-center gap-1 flex-wrap ml-auto max-[900px]:ml-0 max-[900px]:w-full"
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="font-display font-medium text-[0.92rem] text-fg px-2.5 py-1.5 rounded-md hover:bg-surface transition-colors"
          >
            {item.label}
          </a>
        ))}
        <a
          href="#adhesion"
          className="font-display font-medium text-[0.92rem] bg-blue text-blue-ink px-2.5 py-1.5 rounded-md hover:brightness-110 transition-[filter]"
        >
          Adhérer
        </a>
        <ThemeToggle />
      </nav>
    </div>
  </header>
);

export default NavBar;
