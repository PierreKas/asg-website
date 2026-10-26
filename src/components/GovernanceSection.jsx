import Eyebrow from "./Eyebrow";
import { governance } from "../constants/asg";

const GovernanceSection = () => (
  <section id="gouvernance" className="bg-surface py-16 sm:py-20">
    <div className="max-w-[68rem] mx-auto px-4">
      <Eyebrow>{governance.eyebrow}</Eyebrow>
      <h2 className="font-display font-semibold text-[clamp(1.7rem,3.6vw,2.4rem)] text-blue text-balance">
        {governance.title}
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
        {governance.organs.map((o) => (
          <div key={o.title} className="bg-bg border border-line rounded-[10px] p-5 min-w-0">
            <h3 className="text-blue font-display font-semibold mb-2">{o.title}</h3>
            <p className="text-[0.95rem] text-muted">{o.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-11">
        <h3 className="text-[1.4rem] text-blue font-display font-semibold mb-4">
          {governance.teamTitle}
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {governance.team.map((p) => (
            <div key={p.name} className="bg-bg border border-line rounded-[10px] px-[1.1rem] py-4 min-w-0">
              <b className="font-display text-[1rem] block leading-[1.25] [overflow-wrap:anywhere]">
                {p.name}
              </b>
              <span className="text-[0.88rem] text-green font-semibold">{p.role}</span>
              {p.profession && (
                <i className="block not-italic text-[0.82rem] text-muted mt-0.5">
                  {p.profession}
                </i>
              )}
            </div>
          ))}
        </div>
        <p className="text-[0.85rem] text-muted mt-4">{governance.fine}</p>
      </div>
    </div>
  </section>
);

export default GovernanceSection;
