import Eyebrow from "./Eyebrow";
import { resources } from "../constants/asg";

const ResourcesSection = () => (
  <section id="ressources" className="py-16 sm:py-20">
    <div className="max-w-[68rem] mx-auto px-4">
      <Eyebrow>{resources.eyebrow}</Eyebrow>
      <h2 className="font-display font-semibold text-[clamp(1.7rem,3.6vw,2.4rem)] text-blue text-balance">
        {resources.title}
      </h2>
      <p className="text-[1.12rem] text-muted max-w-[44rem] mt-4">{resources.lead}</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {resources.items.map((r) => (
          <div key={r.title} className="border-t-[3px] border-blue pt-3 font-display font-medium text-[1.08rem]">
            {r.title}
            <small className="block font-body text-[0.88rem] text-muted font-normal mt-0.5">
              {r.text}
            </small>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ResourcesSection;
