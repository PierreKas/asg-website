import Eyebrow from "./Eyebrow";
import { documents } from "../constants/asg";

const DocumentsSection = () => (
  <section id="documents" className="bg-surface py-16 sm:py-20">
    <div className="max-w-[68rem] mx-auto px-4">
      <Eyebrow>{documents.eyebrow}</Eyebrow>
      <h2 className="font-display font-semibold text-[clamp(1.7rem,3.6vw,2.4rem)] text-blue text-balance">
        {documents.title}
      </h2>

      <ul className="list-none m-0 p-0 mt-8 grid">
        {documents.timeline.map((d) => (
          <li
            key={d.date}
            className="grid grid-cols-1 sm:grid-cols-[9.5rem_1fr] gap-x-5 gap-y-1 py-4 border-b border-line"
          >
            <time dateTime={d.date} className="font-display font-semibold text-blue [font-variant-numeric:tabular-nums]">
              {d.label}
            </time>
            <div>
              <b className="font-display block mb-0.5">{d.title}</b>
              <span className="text-muted text-[0.95rem]">{d.text}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default DocumentsSection;
