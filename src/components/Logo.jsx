import logo from "../assets/logo.png";
import { org } from "../constants/asg";

/**
 * The source logo file has a white background baked in, so it always sits
 * inside a white "chip" - keeps it legible on both the light and dark blue
 * header/footer.
 */
const Logo = ({ showTagline = true, className = "" }) => (
  <a
    href="#accueil"
    aria-label={`${org.name}, accueil`}
    className={`flex items-center gap-2.5 shrink-0 min-w-0 ${className}`}
  >
    <span className="bg-white rounded-lg p-0.5 shrink-0 flex">
      <img src={logo} alt={`Logo ${org.name}`} className="w-11 h-11 object-contain" />
    </span>
    <span className="min-w-0">
      <span className="font-display font-semibold text-[1.05rem] leading-tight block truncate">
        {org.name}
      </span>
      {showTagline && (
        <span className="block text-[0.72rem] text-muted leading-tight truncate">
          {org.fullName}
        </span>
      )}
    </span>
  </a>
);

export default Logo;
