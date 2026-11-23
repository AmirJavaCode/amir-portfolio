import Image from "next/image";
export default function Wafer() {
  return (
    <figure
      className="wafer-view"
      aria-label="Concept rendering of a patterned silicon wafer"
    >
      <div className="instrument-grid" aria-hidden="true" />
      <div className="wafer-guide" aria-hidden="true" />
      <Image
        className="wafer"
        src="/art/silicon-wafer.webp"
        alt="Oblique view of an illustrated silicon wafer, with an iridescent grid of patterned dies."
        width={1200}
        height={768}
        sizes="(max-width: 760px) 95vw, 48vw"
        preload
      />
      <svg
        className="leaders"
        viewBox="0 0 560 360"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <g fill="none" stroke="currentColor" strokeWidth=".8">
          <path d="M77 47h69l47 58" />
          <circle cx="193" cy="105" r="2.5" />
          <path d="M477 274h-52l-34-36" />
          <circle cx="391" cy="238" r="2.5" />
        </g>
      </svg>
      <span className="wafer-label wafer-label-a" aria-hidden="true">
        Die array
      </span>
      <span className="wafer-label wafer-label-b" aria-hidden="true">
        Si substrate
      </span>
      <figcaption>
        <span className="figure-line" />
        Patterned silicon wafer <span className="divider-mark">/</span>{" "}
        Illustration
      </figcaption>
    </figure>
  );
}
