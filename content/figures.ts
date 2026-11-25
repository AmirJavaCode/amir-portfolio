import type { ProjectImage } from "./projects";

export const figures = {
  silver: {
    kind: "image",
    src: "/assets/nano20l/silver-dark-field.webp",
    fullSrc: "/assets/nano20l/silver-dark-field-full.webp",
    width: 1400,
    height: 1051,
    label: "Figure 1 · Dark-field microscopy",
    alt: "Orange and gold scattering features across the drop-cast silver nanoparticle sample under dark-field illumination.",
    caption:
      "Bright features show how the deposited silver sample scatters light after solvent exchange. This image supports a qualitative comparison of scattering across the field.",
  },
  dlsSize: {
    kind: "image",
    src: "/assets/nano20l/silver-dls-size.webp",
    fullSrc: "/assets/nano20l/silver-dls-size-full.webp",
    width: 1400,
    height: 920,
    label: "Figure 2 · DLS size record",
    alt: "Zetasizer record for Ag NP (ethanol) 1, including the Z-average, polydispersity and number-weighted peak.",
    caption:
      "The instrument’s size record reports a Z-average of 115.3 nm and a peak at 79.30 nm in the number-weighted distribution.",
  },
  dlsSignal: {
    kind: "image",
    src: "/assets/nano20l/silver-dls-count-rate.webp",
    fullSrc: "/assets/nano20l/silver-dls-count-rate-full.webp",
    width: 1400,
    height: 1144,
    label: "Figure 3 · DLS count-rate monitor",
    alt: "Count rate in kilocounts per second versus time, beside the instrument’s cumulants and distribution results.",
    caption:
      "The trace shows detected photon counts over time. The adjacent summary gives the size estimates from this displayed acquisition.",
  },
  monolayer: {
    kind: "image",
    src: "/assets/nano20l/oleic-acid-monolayer.webp",
    width: 1536,
    height: 2048,
    label: "Figure 4 · Monolayer boundary",
    alt: "Overhead watch-glass image with a blue 14 cm diameter annotation and a yellow outline around the oleic acid film.",
    caption:
      "The blue annotation calibrates distance across the watch glass. The yellow outline follows the approximate boundary displaced in the oil film and lycopodium powder.",
  },
  poster: {
    kind: "image",
    src: "/assets/chrono-lithos/team-poster.webp",
    width: 1170,
    height: 869,
    label: "Figure 1 · NETS team poster",
    alt: "Chrono Lithos team poster showing the benchtop exposure box, CAD, photomasks, sample patterns and workflow.",
    caption:
      "The Chrono Lithos team documented the UV exposure enclosure from CAD through assembly, alongside mask designs and sample patterns. Amir is credited among the poster authors.",
  },
  chronoThumb: {
    kind: "image",
    src: "/assets/chrono-lithos/exposure-box-poster-detail.webp",
    width: 341,
    height: 260,
    label: "Poster detail",
    alt: "Exposure-box CAD model, flat panels and assembled benchtop enclosure from the Chrono Lithos team poster.",
    caption: "Exposure-box design and assembly from the NETS team poster.",
  },
  mesh: {
    kind: "image",
    src: "/assets/ferrari/vehicle-cad-mesh.webp",
    width: 919,
    height: 675,
    label: "Figure 1 · Team vehicle model",
    alt: "Three-quarter view of a red electric sports car CAD model with a triangular surface mesh.",
    caption:
      "Vehicle surface mesh from the four-person Ferrari Work Experience Program design project. The mesh shows the modeled body geometry used in the team’s aerodynamic design discussions.",
  },
  after: {
    kind: "image",
    src: "/assets/graphene-photodetector/graphene-after-pmma-removal.webp",
    fullSrc:
      "/assets/graphene-photodetector/graphene-after-pmma-removal-full.webp",
    width: 1400,
    height: 890,
    label: "Report figure 1 · After PMMA removal",
    alt: "Microscope image after PMMA removal, showing a blue-purple device region with a 100 marking and gold contacts.",
    caption:
      "Optical inspection of transferred graphene on Si/SiO₂ after removal of the PMMA support. The patterned gold contacts help locate the same region in both inspections.",
  },
  before: {
    kind: "image",
    src: "/assets/graphene-photodetector/graphene-with-pmma.webp",
    fullSrc: "/assets/graphene-photodetector/graphene-with-pmma-full.webp",
    width: 1400,
    height: 882,
    label: "Report figure 2 · Before PMMA removal",
    alt: "Microscope image with the PMMA support present, showing an irregular surface over the marked device region.",
    caption:
      "Before cleaning, the microscope view records surface variation across the transferred film. The 100 marking provides a landmark for the comparison.",
  },
  chip: {
    kind: "image",
    src: "/assets/graphene-photodetector/graphene-chip-pre-spin-coating.webp",
    fullSrc:
      "/assets/graphene-photodetector/graphene-chip-pre-spin-coating-full.webp",
    width: 875,
    height: 860,
    label: "Report figure 3 · Before spin coating",
    alt: "Graphene device chip with three pairs of patterned gold contact pads on a laboratory wipe.",
    caption:
      "The graphene device on Si/SiO₂ immediately before spin coating the PbS quantum-dot layer.",
  },
  iv: {
    kind: "image",
    src: "/assets/graphene-photodetector/graphene-iv-500um.png",
    width: 600,
    height: 371,
    label: "Report figure 4 · Graphene I–V",
    alt: "Current versus applied voltage over a 500 µm contact separation, approximately linear between −500 and +500 mV.",
    caption:
      "The plotted graphene current varies approximately linearly with bias across the 500 µm contact separation, consistent with ohmic behavior over the measured range.",
  },
  lightDark: {
    kind: "image",
    src: "/assets/graphene-photodetector/graphene-qd-light-dark.png",
    width: 600,
    height: 371,
    label: "Report figure 5 · Light and dark current",
    alt: "Two bars for graphene–PbS at approximately 0.60 mA with light and 0.50 mA without light.",
    caption:
      "At 500 mV bias, the plotted hybrid-device current is approximately 0.60 mA under illumination and 0.50 mA in the dark.",
  },
  silverThumb: {
    kind: "image",
    src: "/assets/nano20l/silver-dark-field-card.webp",
    width: 720,
    height: 288,
    alt: "Dark-field detail of scattering from the deposited silver nanoparticle sample.",
    caption: "Detail from the original laboratory photograph.",
  },
  afterThumb: {
    kind: "image",
    src: "/assets/graphene-photodetector/graphene-after-pmma-removal-card.webp",
    width: 720,
    height: 288,
    alt: "Marked device region and gold contacts after PMMA removal.",
    caption: "Detail from the original laboratory photograph.",
  },
} satisfies Record<string, ProjectImage>;
