// import { org } from "../constants/asg";

// const Footer = () => (
//   <footer className="bg-blue text-blue-ink py-8 px-4">
//     <div className="max-w-[68rem] mx-auto flex gap-6 sm:gap-12 flex-wrap justify-between items-start">
//       <div>
//         <b className="font-display text-[1.05rem] block mb-1">
//           {org.name} · {org.kind}
//         </b>
//         <p className="text-[0.9rem] max-w-[34rem]">
//           {org.fullName}. {org.foundedNote}
//         </p>
//       </div>
//       <p className="text-[0.9rem]">
//         {org.address[0]}, {org.address[2]}, RDC.
//         <br />
//         <a href="#accueil" className="text-blue-ink underline">
//           Retour en haut
//         </a>
//       </p>
//     </div>
//   </footer>
// );

// export default Footer;

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, MapPin, Mail } from "lucide-react";
import Logo from "./Logo";
import { org } from "../constants/asg";

/* Floating back-to-top: round button with a scroll-progress ring. */
const RADIUS = 22;
const CIRC = 2 * Math.PI * RADIUS;

const BackToTop = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const visible = progress > 0.08;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Retour en haut de la page"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, scale: 0.6, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 16 }}
          transition={{ type: "spring", stiffness: 320, damping: 24 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.92 }}
          className="group fixed z-40 right-[max(1rem,env(safe-area-inset-right))] bottom-[max(1.25rem,env(safe-area-inset-bottom))] h-14 w-14 rounded-full bg-blue text-blue-ink shadow-[0_10px_30px_-8px_rgba(7,74,141,0.55)] grid place-items-center"
        >
          <svg
            className="absolute inset-0 -rotate-90"
            viewBox="0 0 56 56"
            aria-hidden="true"
          >
            <circle
              cx="28"
              cy="28"
              r={RADIUS}
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.2"
              strokeWidth="3"
            />
            <circle
              cx="28"
              cy="28"
              r={RADIUS}
              fill="none"
              stroke="var(--green)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={CIRC}
              strokeDashoffset={CIRC * (1 - progress)}
            />
          </svg>
          <ArrowUp
            className="relative h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5"
            strokeWidth={2.5}
            aria-hidden="true"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const bottomLinks = [
  { label: "Mission", href: "#mission" },
  { label: "Gouvernance", href: "#gouvernance" },
  { label: "Documents officiels", href: "#documents" },
];

const Footer = () => (
  <>
    <footer className="bg-surface text-fg rounded-t-[2rem] mt-8">
      <div className="max-w-[68rem] mx-auto px-4 pt-12 pb-8">
        <div className="grid gap-10 text-center sm:grid-cols-3 sm:text-left">
          {/* Contact */}
          <div className="min-w-0 flex flex-col items-center sm:items-start gap-3">
            <h4 className="font-display text-sm font-semibold">
              Contactez-nous
            </h4>
            {org.email ? (
              <a
                href={`mailto:${org.email}`}
                className="inline-flex items-center gap-2 text-sm text-muted hover:text-blue transition-colors break-all"
              >
                <Mail
                  className="h-4 w-4 shrink-0 text-green"
                  aria-hidden="true"
                />
                {org.email}
              </a>
            ) : (
              <p className="inline-flex items-start gap-2 text-sm text-muted">
                <MapPin
                  className="h-4 w-4 mt-0.5 shrink-0 text-green"
                  aria-hidden="true"
                />
                Lubumbashi, Haut-Katanga, RDC
              </p>
            )}
          </div>

          {/* Join */}
          <div className="flex flex-col items-center gap-3">
            <h4 className="font-display text-sm font-semibold">
              Rejoignez l'Alliance
            </h4>
            <a
              href="#adhesion"
              className="inline-block rounded-xl bg-green px-5 py-2.5 font-display text-sm font-semibold text-white shadow-sm hover:brightness-110 transition-[filter]"
            >
              Devenir membre
            </a>
          </div>

          {/* Brand */}
          <div className="flex flex-col items-center sm:items-end gap-2">
            <Logo />
            <p className="text-xs text-muted">
              © {new Date().getFullYear()} {org.name}. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="max-w-[68rem] mx-auto px-4 py-5 flex flex-col items-center gap-3 text-xs text-muted sm:flex-row sm:justify-between">
          <p className="text-center sm:text-left">
            {org.address[0]}, {org.address[2]}, RDC
          </p>
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-1">
            {bottomLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-blue transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>

    <BackToTop />
  </>
);

export default Footer;
