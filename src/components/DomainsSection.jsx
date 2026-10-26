import Eyebrow from "./Eyebrow";
import { domains } from "../constants/asg";

const DomainsSection = () => (
  <section id="domaines" className="bg-surface py-16 sm:py-20">
    <div className="max-w-[68rem] mx-auto px-4">
      <Eyebrow>{domains.eyebrow}</Eyebrow>
      <h2 className="font-display font-semibold text-[clamp(1.7rem,3.6vw,2.4rem)] text-blue text-balance">
        {domains.title}
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
        {domains.items.map((d) => (
          <article key={d.tag} className="bg-bg border border-line rounded-[10px] p-6 min-w-0">
            <div className="font-display text-[0.78rem] tracking-[0.12em] uppercase font-semibold text-green">
              {d.tag}
            </div>
            <h3 className="text-blue font-display font-semibold text-[1.4rem] mt-1 mb-3.5">
              {d.title}
            </h3>
            <ul className="m-0 p-0 list-none grid gap-2.5">
              {d.items.map((item) => (
                <li key={item} className="relative pl-[1.1rem] text-[0.95rem]">
                  <span className="absolute left-0 top-[0.62em] w-[0.45rem] h-[0.45rem] bg-blue rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default DomainsSection;
