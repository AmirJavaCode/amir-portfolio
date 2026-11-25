# Portfolio media and scientific records

The public site uses curated derivatives under `public/assets/`. Figures retain their original colors, markings and instrument readouts. Crops remove peripheral screen or bench area. Where a crop is used for a scientific figure, its expanded view opens a web copy of the full camera frame. The original PDFs and six-image ZIP were reviewed in the workspace outside the repository.

## NANO 20L

| User source | Public files under `public/assets/nano20l/` | Use |
| --- | --- | --- |
| IMG_4260.jpeg | `silver-dark-field.webp`, `silver-dark-field-full.webp`, `silver-dark-field-card.webp` | Figure 1, main silver image and project thumbnail. Qualitative dark-field scattering after solvent exchange and drop casting. |
| IMG_4284.jpeg | `silver-dls-size.webp`, `silver-dls-size-full.webp` | Figure 2, Ag NP (ethanol) 1 instrument record. Z-average 115.3 nm, number-weighted peak 79.30 nm, distribution SD 21.14 nm, PDI 0.259, temperature 25.0 °C and instrument quality “Good.” |
| IMG_4265.jpeg | `silver-dls-count-rate.webp`, `silver-dls-count-rate-full.webp` | Figure 3, photon count rate against time and adjacent acquisition summary. Count rate 205.4 kcps, Z-average 110.4 nm and PDI 0.321. A larger scattering population is visible. |
| IMG_4550.jpeg | `oleic-acid-monolayer.webp` | Figure 4, primary SAM image with original blue diameter annotation and yellow boundary. The measured reference in the image is 14 cm. The handout’s nominal watch-glass size is 15 cm. |
| Experiment 1 Lab Procedure.pdf | Workspace source only | Background for modified Turkevich Ag synthesis, PVP capping, solvent exchange, UV–Vis, DLS and optical microscopy. |
| Experiment 2 Lab Procedures.pdf | Workspace source only | Background for the air–water experiment and five-step visualization from self-assembly to molecular dimensions. |

The two DLS screens are separate displayed measurements. Their relationship as replicates is unknown. The standard deviation belongs to the number-weighted peak in the size record. The count-rate trace records photons over time. The dark-field photograph has no added scale bar. The SAM analysis presents the method without a calculated value for Avogadro’s number.

## NANO 4

All five figures were extracted from the image objects in **Amir Kania - NANO-4 Lab Report.pdf**. The report supplies the same five images requested under the NANO4-Website-Images archive name. The reviewed student report is available at `public/assets/graphene-photodetector/nano-4-lab-report.pdf`.

| Source | Public filename in the same folder | Use |
| --- | --- | --- |
| Report figure 1, without PMMA | `graphene-after-pmma-removal.webp` | Project cover and after-cleaning comparison. A smaller card image and full camera frame are supplied. |
| Report figure 2, with PMMA | `graphene-with-pmma.webp` | Before-cleaning comparison, displayed first to follow the process chronology. A full frame is supplied. |
| Report figure 3, pre spin-coating | `graphene-chip-pre-spin-coating.webp` | Device on Si/SiO₂ before PbS deposition, with a full frame available. |
| Report figure 4 | `graphene-iv-500um.png` | Original 500 µm graphene I–V chart. The plotted title identifies the material and spacing. The chart is presented with original axes, data and fit. |
| Report figure 5 | `graphene-qd-light-dark.png` | Original hybrid-device light/dark comparison. Approximate readings at 500 mV are 0.60 mA illuminated and 0.50 mA dark. Their relative difference is approximately 20% of the dark current. |

The course report also gives the 100, 200 and 500 µm contact separations. Raw measurement files and calibrated incident optical power were not supplied. The device cross-section and process timeline remain labeled teaching diagrams.

## Engineering projects and résumé

| Source | Public destination | Use |
| --- | --- | --- |
| IMG_1901.jpg | `public/assets/chrono-lithos/team-poster.webp`, `exposure-box-poster-detail.webp` | Complete NETS team poster and an equipment-panel crop for project cards. The poster includes Amir in its author list. |
| 1746059562364.jpg | `public/assets/ferrari/vehicle-cad-mesh.webp` | Original vehicle surface mesh in the Ferrari team experience section. |
| Resume V2 - Amir Kania.pdf | `public/assets/resume/amir-kania.pdf` | Reviewed one-page public copy with the personal phone number removed from the page content. Résumé actions link to this copy. The workspace retains the supplied original. |

## Supporting material still available to add

Gold nanoparticle and semiconducting nanowire photos or sample-specific data, raw silver UV–Vis spectra, monolayer calculation sheets, and UAV CAD or testing records can be added when available. The silver images are confined to the silver experiment. The UAV remains in CAD and pre-integration development. A higher-resolution poster PDF could improve reading at large magnifications.

## Editing and illustrations

Figure labels, source paths, captions, alt text and pixel dimensions are in `content/figures.ts`. The arrays in `content/projects.ts` associate the figures and reported values with their experiments. Full-frame links are optional. The existing artwork in `public/art/` includes the homepage wafer, original illustrative covers, UAV concept diagram and social preview. The lithography process sketches and device cross-section live in `components/`.
