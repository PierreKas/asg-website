import { org } from "../constants/asg";

const Footer = () => (
  <footer className="bg-blue text-blue-ink py-8 px-4">
    <div className="max-w-[68rem] mx-auto flex gap-6 sm:gap-12 flex-wrap justify-between items-start">
      <div>
        <b className="font-display text-[1.05rem] block mb-1">
          {org.name} · {org.kind}
        </b>
        <p className="text-[0.9rem] max-w-[34rem]">
          {org.fullName}. {org.foundedNote}
        </p>
      </div>
      <p className="text-[0.9rem]">
        {org.address[0]}, {org.address[2]}, RDC.
        <br />
        <a href="#accueil" className="text-blue-ink underline">
          Retour en haut
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
