/** Venn diagram: Humain / Animal / Environnement overlapping into "Santé globale". */
const OneHealthDiagram = () => (
  <svg
    className="w-full max-w-[25rem] justify-self-center"
    viewBox="0 0 400 380"
    role="img"
    aria-label="Schéma One Health : l'être humain, l'animal et l'environnement se recoupent autour d'une santé globale"
  >
    <circle cx="200" cy="130" r="95" fill="var(--c-blue)" fillOpacity=".85" />
    <circle cx="130" cy="250" r="95" fill="var(--c-green)" fillOpacity=".85" />
    <circle cx="270" cy="250" r="95" fill="var(--c-fg)" fillOpacity=".55" />
    <text
      x="200"
      y="88"
      textAnchor="middle"
      fontSize="22"
      fill="var(--c-blue-ink)"
      fontFamily="Outfit, sans-serif"
      fontWeight="600"
    >
      Humain
    </text>
    <text
      x="95"
      y="290"
      textAnchor="middle"
      fontSize="22"
      fill="#07203a"
      fontFamily="Outfit, sans-serif"
      fontWeight="600"
    >
      Animal
    </text>
    <text
      x="305"
      y="290"
      textAnchor="middle"
      fontSize="19"
      fill="var(--c-bg)"
      fontFamily="Outfit, sans-serif"
      fontWeight="600"
    >
      Environnement
    </text>
    <text
      x="200"
      y="215"
      textAnchor="middle"
      fontSize="17"
      fill="var(--c-bg)"
      fontFamily="Outfit, sans-serif"
      fontWeight="600"
    >
      Santé
    </text>
    <text
      x="200"
      y="236"
      textAnchor="middle"
      fontSize="17"
      fill="var(--c-bg)"
      fontFamily="Outfit, sans-serif"
      fontWeight="600"
    >
      globale
    </text>
  </svg>
);

export default OneHealthDiagram;
