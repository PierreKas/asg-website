import Eyebrow from "./Eyebrow";
import { mission } from "../constants/asg";

const MissionSection = () => (
  <section id="mission" className="py-16 sm:py-20">
    <div className="max-w-[68rem] mx-auto px-4">
      <Eyebrow>{mission.eyebrow}</Eyebrow>
      <h2 className="font-display font-semibold text-[clamp(1.7rem,3.6vw,2.4rem)] text-blue text-balance">
        {mission.title}
      </h2>

      <div className="grid sm:grid-cols-2 gap-5 mt-8">
        <div className="p-6 rounded-[10px] bg-surface">
          <h3 className="text-blue font-display font-semibold text-[1.3rem] mb-2.5">Mission</h3>
          <p>{mission.mission}</p>
        </div>
        <div className="p-6 rounded-[10px] bg-blue text-blue-ink">
          <h3 className="font-display font-semibold text-[1.3rem] mb-2.5">Vision</h3>
          <p>{mission.vision}</p>
        </div>
      </div>

      <ul className="mt-10 grid sm:grid-cols-2 gap-x-10 list-none p-0">
        {mission.objectives.map((obj) => (
          <li key={obj} className="relative py-3.5 pl-7 border-b border-line">
            <span className="absolute left-0 top-5 w-3.5 h-3.5 bg-green rounded-[0_70%_0_70%]" />
            {obj}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default MissionSection;
