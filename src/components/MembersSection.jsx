import Eyebrow from "./Eyebrow";
import { members } from "../constants/asg";

const MembersSection = () => (
  <section id="membres" className="py-16 sm:py-20">
    <div className="max-w-[68rem] mx-auto px-4">
      <Eyebrow>{members.eyebrow}</Eyebrow>
      <h2 className="font-display font-semibold text-[clamp(1.7rem,3.6vw,2.4rem)] text-blue text-balance">
        {members.title}
      </h2>
      <p className="text-[1.12rem] text-muted max-w-[44rem] mt-4">{members.lead}</p>

      <div className="grid sm:grid-cols-2 gap-5 mt-8">
        {members.categories.map((c) => (
          <div key={c.title} className="border-l-4 border-green py-0.5 pl-5">
            <h3 className="text-blue font-display font-semibold mb-1.5">{c.title}</h3>
            <p className="text-muted text-[0.97rem]">{c.text}</p>
          </div>
        ))}
      </div>

      <ol className="mt-10 p-0 list-none grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {members.steps.map((step, i) => (
          <li key={step.title} className="bg-surface rounded-[10px] p-5 text-[0.95rem] min-w-0">
            <span className="grid place-items-center w-8 h-8 rounded-full bg-blue text-blue-ink font-display font-semibold mb-3">
              {i + 1}
            </span>
            <b className="block font-display text-[1.05rem] mb-0.5">{step.title}</b>
            {step.text}
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default MembersSection;
