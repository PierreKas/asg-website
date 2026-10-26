import logo from "../assets/logo.png";
import { hero } from "../constants/asg";

const HeroSection = () => (
  <section id="accueil" className="relative overflow-hidden py-16 sm:py-20">
    <div className="max-w-[68rem] mx-auto px-4">
      <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
        <div>
          {/* <div className="font-display text-[0.78rem] tracking-[0.14em] uppercase text-green font-semibold mb-2.5">
            {hero.eyebrow}
          </div> */}
          <h1 className="font-display font-bold text-[clamp(2.3rem,5.6vw,4.2rem)] leading-[1.12] text-blue text-balance">
            {hero.titleStart}
            <em className="not-italic text-green">{hero.titleEmphasis}</em>
          </h1>
          <p className="mt-5 text-[1.12rem] text-muted max-w-[44rem]">
            {hero.lead}
          </p>
          <div className="flex gap-3 flex-wrap mt-7">
            <a
              href={hero.primaryCta.href}
              className="font-display font-semibold px-5 py-3 rounded-lg border-2 border-blue bg-blue text-blue-ink hover:brightness-110 transition-[filter]"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="font-display font-semibold px-5 py-3 rounded-lg border-2 border-blue text-blue bg-transparent hover:brightness-110 transition-[filter]"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>

        <div
          className="relative aspect-square max-w-[25rem] w-full justify-self-center"
          aria-hidden="true"
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{
              border: "clamp(10px, 2.2vw, 18px) solid var(--c-blue)",
              borderRightColor: "transparent",
              transform: "rotate(-35deg)",
            }}
          />
          <div
            className="absolute inset-[7%] rounded-full"
            style={{
              border: "clamp(4px, .9vw, 8px) solid var(--c-green)",
              borderLeftColor: "transparent",
              borderBottomColor: "transparent",
              transform: "rotate(15deg)",
            }}
          />
          <div className="absolute inset-[16%] bg-white rounded-full grid place-items-center overflow-hidden">
            <img src={logo} alt="" className="w-[150%] max-w-none -mt-[6%]" />
          </div>
        </div>
      </div>

      <div className="mt-10 sm:mt-16 grid sm:grid-cols-3 border-t-2 border-blue">
        {hero.steps.map((step) => (
          <div key={step.label} className="pt-4 pr-4">
            <span className="font-display text-[0.78rem] tracking-[0.12em] uppercase text-green font-semibold">
              {step.label}
            </span>
            <p className="font-display text-[clamp(1.05rem,2.2vw,1.5rem)] font-medium mt-0.5">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
