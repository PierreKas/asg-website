import React, { useRef, useState } from "react";
import Eyebrow from "./Eyebrow";
import { org, joinCategories } from "../constants/asg";

const EMAIL_RE = /^\S+@\S+\.\S+$/;

/**
 * Deliberately has no backend yet (matches the original prototype): it
 * builds a plain-text recap of the request and lets the visitor copy it to
 * send manually to the ASG office - see the note under the "Copier la
 * demande" button.
 */
const ContactSection = () => {
  const [form, setForm] = useState({
    nom: "",
    profession: "",
    email: "",
    tel: "",
    cat: joinCategories[0],
    msg: "",
    ok: false,
  });
  const [error, setError] = useState("");
  const [recap, setRecap] = useState("");
  const [copied, setCopied] = useState("");
  const recapRef = useRef(null);

  const set = (field) => (e) =>
    setForm((f) => ({
      ...f,
      [field]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.nom.trim() || !form.profession.trim() || !form.email.trim()) {
      setError("Renseignez votre nom, votre profession et votre courriel.");
      return;
    }
    if (!EMAIL_RE.test(form.email.trim())) {
      setError("Le courriel semble incomplet. Vérifiez-le.");
      return;
    }
    if (!form.ok) {
      setError("Cochez la case pour accepter les conditions statutaires.");
      return;
    }
    setError("");
    setCopied("");
    const text = [
      "Demande d'adhésion à l'ASG",
      `Nom : ${form.nom.trim()}`,
      `Profession : ${form.profession.trim()}`,
      `Courriel : ${form.email.trim()}`,
      `Téléphone : ${form.tel.trim() || "non renseigné"}`,
      `Catégorie : ${form.cat}`,
      `Motivation : ${form.msg.trim() || "non renseignée"}`,
    ].join("\n");
    setRecap(text);
  };

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(recap);
      setCopied("Copié.");
    } catch {
      const range = document.createRange();
      range.selectNodeContents(recapRef.current);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      setCopied("Sélectionné : copiez avec Ctrl+C.");
    }
  };

  return (
    <section id="adhesion" className="py-16 sm:py-20">
      <div className="max-w-[68rem] mx-auto px-4">
        <Eyebrow>Adhésion et contact</Eyebrow>
        <h2 className="font-display font-semibold text-[clamp(1.7rem,3.6vw,2.4rem)] text-blue text-balance">
          Rejoignez l&apos;Alliance
        </h2>

        <div className="grid md:grid-cols-2 gap-10 mt-8">
          <div className="min-w-0">
            <form onSubmit={onSubmit} noValidate className="grid gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <label htmlFor="nom" className="font-display font-medium text-[0.92rem] grid gap-1.5">
                  Nom et prénom
                  <input
                    id="nom"
                    autoComplete="name"
                    required
                    value={form.nom}
                    onChange={set("nom")}
                    className="font-sans text-fg bg-bg border-[1.5px] border-line rounded-lg px-3 py-2.5 w-full outline-none focus:border-blue"
                  />
                </label>
                <label
                  htmlFor="profession"
                  className="font-display font-medium text-[0.92rem] grid gap-1.5"
                >
                  Profession
                  <input
                    id="profession"
                    placeholder="Médecin, agronome, vétérinaire…"
                    required
                    value={form.profession}
                    onChange={set("profession")}
                    className="font-sans text-fg bg-bg border-[1.5px] border-line rounded-lg px-3 py-2.5 w-full outline-none focus:border-blue"
                  />
                </label>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <label htmlFor="email" className="font-display font-medium text-[0.92rem] grid gap-1.5">
                  Courriel
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={set("email")}
                    className="font-sans text-fg bg-bg border-[1.5px] border-line rounded-lg px-3 py-2.5 w-full outline-none focus:border-blue"
                  />
                </label>
                <label htmlFor="tel" className="font-display font-medium text-[0.92rem] grid gap-1.5">
                  Téléphone
                  <input
                    id="tel"
                    type="tel"
                    autoComplete="tel"
                    value={form.tel}
                    onChange={set("tel")}
                    className="font-sans text-fg bg-bg border-[1.5px] border-line rounded-lg px-3 py-2.5 w-full outline-none focus:border-blue"
                  />
                </label>
              </div>

              <label htmlFor="cat" className="font-display font-medium text-[0.92rem] grid gap-1.5">
                Catégorie souhaitée
                <select
                  id="cat"
                  value={form.cat}
                  onChange={set("cat")}
                  className="font-sans text-fg bg-bg border-[1.5px] border-line rounded-lg px-3 py-2.5 w-full outline-none focus:border-blue"
                >
                  {joinCategories.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </label>

              <label htmlFor="msg" className="font-display font-medium text-[0.92rem] grid gap-1.5">
                Votre motivation
                <textarea
                  id="msg"
                  rows={4}
                  value={form.msg}
                  onChange={set("msg")}
                  className="font-sans text-fg bg-bg border-[1.5px] border-line rounded-lg px-3 py-2.5 w-full outline-none focus:border-blue resize-y"
                />
              </label>

              <label className="flex gap-2.5 items-start font-normal text-sm">
                <input
                  type="checkbox"
                  checked={form.ok}
                  onChange={set("ok")}
                  className="w-auto mt-1"
                />
                J&apos;ai lu les statuts et j&apos;accepte les conditions statutaires.
              </label>

              {error && (
                <div role="alert" className="text-[#b3261e] text-[0.85rem]">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="justify-self-start font-display font-semibold px-5 py-3 rounded-lg border-2 border-blue bg-blue text-blue-ink hover:brightness-110 transition-[filter]"
              >
                Préparer ma demande
              </button>
            </form>

            {recap && (
              <div aria-live="polite" className="bg-green-soft rounded-[10px] p-5 mt-4">
                <b className="font-display">Demande prête</b>
                <pre
                  ref={recapRef}
                  className="whitespace-pre-wrap font-sans text-[0.93rem] my-2.5 [overflow-wrap:anywhere]"
                >
                  {recap}
                </pre>
                <button
                  type="button"
                  onClick={onCopy}
                  className="font-display font-semibold bg-blue text-blue-ink border-0 rounded-lg px-4 py-2 cursor-pointer"
                >
                  Copier la demande
                </button>
                {copied && <p className="text-[0.85rem] text-muted mt-2">{copied}</p>}
                <p className="text-[0.85rem] text-muted mt-2">
                  Ce site n&apos;envoie pas encore les demandes automatiquement.
                  Transmettez ce texte au bureau de l&apos;ASG à Lubumbashi.
                </p>
              </div>
            )}
          </div>

          <div id="contact" className="min-w-0">
            <div className="bg-surface rounded-[10px] p-6">
              <dl className="m-0 grid gap-[1.1rem]">
                <div>
                  <dt className="font-display text-[0.78rem] tracking-[0.12em] uppercase text-green font-semibold">
                    Siège social
                  </dt>
                  <dd className="mt-0.5 ml-0">
                    {org.address.map((line, i) => (
                      <React.Fragment key={line}>
                        {i > 0 && <br />}
                        {line}
                      </React.Fragment>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="font-display text-[0.78rem] tracking-[0.12em] uppercase text-green font-semibold">
                    Présence
                  </dt>
                  <dd className="mt-0.5 ml-0">{org.presence}</dd>
                </div>
                <div>
                  <dt className="font-display text-[0.78rem] tracking-[0.12em] uppercase text-green font-semibold">
                    Devise
                  </dt>
                  <dd className="mt-0.5 ml-0">{org.motto}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
