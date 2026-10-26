import Eyebrow from "./Eyebrow";
import OneHealthDiagram from "./OneHealthDiagram";
import { about } from "../constants/asg";

const AboutSection = () => (
  <section id="apropos" className="bg-surface py-16 sm:py-20">
    <div className="max-w-[68rem] mx-auto px-4">
      <Eyebrow>{about.eyebrow}</Eyebrow>
      <h2 className="font-display font-semibold text-[clamp(1.7rem,3.6vw,2.4rem)] text-blue text-balance">
        {about.title}
      </h2>
      <div className="grid md:grid-cols-2 gap-10 items-center mt-7">
        <div className="space-y-4">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <OneHealthDiagram />
      </div>
    </div>
  </section>
);

export default AboutSection;
