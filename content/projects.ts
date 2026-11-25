import { figures } from "./figures";

export type Collection = "lab" | "hardware";
export type Status =
  | "Completed involvement"
  | "Completed coursework"
  | "Coursework"
  | "In development";
export type ProjectImage = {
  kind: "image";
  src: string;
  fullSrc?: string;
  label?: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};
export type Asset =
  | ProjectImage
  | { kind: "document"; src: string; title: string; description: string };
export type Step = { title: string; text: string };
export type EvidenceItem = Step & {
  metrics?: [string, string][];
  note?: string;
  figures?: ProjectImage[];
  paired?: boolean;
  workflow?: Step[];
};
export type Project = {
  slug: string;
  collection: Collection;
  title: string;
  fullTitle: string;
  category: string;
  summary: string;
  status: Status;
  tags: string[];
  context: string;
  date?: string;
  role: string;
  illustration: string;
  illustrationAlt: string;
  illustrationCaption: string;
  objective: string;
  background: string;
  contributions: string[];
  methodTitle: string;
  methodDiagram?: "lithography" | "device-stack";
  steps: Step[];
  currentStep?: number;
  evidenceTitle: string;
  evidence: EvidenceItem[];
  limitations: string;
  takeaway: string;
  cover?: ProjectImage;
  thumbnail?: ProjectImage;
  assets: Asset[];
};

export const projects: Project[] = [
  {
    slug: "chrono-lithos",
    collection: "lab",
    title: "Chrono Lithos",
    fullTitle:
      "Chrono Lithos: A Photolithography Platform for Rapid-Prototyping Microfabrication",
    category: "Photolithography process development",
    summary:
      "Developing a benchtop process for patterning photoresist with a student-built UV exposure platform.",
    status: "Completed involvement",
    tags: ["Photolithography", "AZ1518", "Spin coating"],
    context: "UCSD NanoEngineering & Technology Society (NETS)",
    date: "October 2025 – June 2026",
    role: "Process Engineer",
    cover: figures.poster,
    thumbnail: figures.chronoThumb,
    illustration: "/art/chrono-lithos.svg",
    illustrationAlt:
      "Exploded schematic of a patterned photomask above a resist-coated substrate.",
    illustrationCaption:
      "Concept illustration of the mask and substrate stack.",
    objective:
      "Chrono Lithos is a NETS team project exploring how a benchtop spin coater, UV exposure unit and bake station could make early patterning trials more accessible outside a conventional cleanroom.",
    background:
      "Photolithography transfers a mask pattern into a light-sensitive film. With positive photoresist such as AZ1518, exposed regions become more soluble in developer. The quality of the final features depends on the film, the optics and how closely the mask sits against the sample.",
    contributions: [
      "I helped develop the AZ1518 workflow and evaluated spin coating over 1,000–4,000 rpm, considering ramp rate, coating time, resist volume and bake conditions.",
      "I worked on substrate preparation and soft baking and supported the team’s UV exposure workflow.",
      "My role also included CAD, procurement, 3D printing, equipment assembly and draft process documentation.",
    ],
    methodTitle: "Photolithography sequence",
    methodDiagram: "lithography",
    steps: [
      {
        title: "Substrate preparation",
        text: "Prepare a clean substrate so the resist can wet and adhere to the surface. Particles can disrupt both coating and mask contact.",
      },
      {
        title: "Spin coating",
        text: "Spread AZ1518 into a film. Spin speed, acceleration, time and dispensed volume were variables in the team’s process work.",
      },
      {
        title: "Soft bake",
        text: "Heat the coated substrate to remove residual solvent and prepare the film for exposure.",
      },
      {
        title: "Mask alignment & UV exposure",
        text: "Position the mask against the coated substrate and expose the pattern. A gap allows light to spread into nominally masked regions.",
      },
      {
        title: "Development",
        text: "Develop the exposed film to reveal the pattern. Exposure and development times jointly affect how the resist clears.",
      },
      {
        title: "Inspection",
        text: "Compare the visible pattern with the intended mask geometry. Look for coating variation, particles and loss of feature definition.",
      },
    ],
    evidenceTitle: "Project documentation",
    evidence: [
      {
        title: "Team poster",
        text: "The design panel pairs a CAD enclosure with photographs of the assembled UV exposure box. The application panel shows mask layouts and patterned samples from the NETS team. The poster identifies process optimization and optical characterization as future work.",
      },
      {
        title: "Scope of involvement",
        text: "My period of process-development work concluded in June 2026. The platform’s resolution, yield and operational maturity would require separate validation.",
      },
    ],
    limitations:
      "The project documented UV scattering, imperfect mask contact, contamination and exposure/development timing as challenges. Variation between runs made repeatability a central consideration.",
    takeaway:
      "A patterning trial is easier to interpret when the coating, bake, mask contact and exposure conditions can be traced back to the same sample.",
    assets: [],
  },
  {
    slug: "graphene-photodetector",
    collection: "lab",
    title: "Hybrid Graphene–PbS Photodetector",
    fullTitle: "Hybrid Graphene–PbS Quantum Dot Photodetector",
    category: "Device fabrication & characterization",
    summary:
      "Comparing bare graphene with a quantum-dot-sensitized channel under dark and illuminated conditions.",
    status: "Completed coursework",
    tags: ["Graphene transfer", "PbS quantum dots", "I–V analysis"],
    context: "UCSD NANO 4 laboratory coursework",
    date: "September–December 2025",
    cover: figures.after,
    thumbnail: figures.afterThumb,
    role: "Student, device fabrication laboratory",
    illustration: "/art/graphene-photodetector.svg",
    illustrationAlt:
      "Illustration of PbS quantum dots above a hexagonal graphene sheet.",
    illustrationCaption:
      "Concept illustration of PbS quantum dots on a graphene channel. Features are enlarged for clarity.",
    objective:
      "Investigate how spin-coated PbS quantum dots change the electrical and light-dependent behavior of a graphene channel.",
    background:
      "Graphene provides a conducting path between contacts. PbS quantum dots absorb light and can change the carrier population in the adjacent graphene through charge transfer and photogating. Measuring current as voltage changes provides a way to compare device conditions.",
    contributions: [
      "I fabricated graphene–PbS devices using PMMA-assisted transfer, inspected the same region before and after cleaning, and spin coated the quantum-dot layer.",
      "I checked the VirtualBench setup with a known resistor and a multimeter. I then used I–V slopes and device geometry to calculate resistance, resistivity and conductivity, and compared the hybrid device under dark and illuminated conditions.",
    ],
    methodTitle: "From copper foil to device measurement",
    methodDiagram: "device-stack",
    steps: [
      {
        title: "CVD graphene",
        text: "The starting material was graphene grown by chemical vapor deposition on copper foil.",
      },
      {
        title: "Transfer & clean",
        text: "A PMMA support film helped transfer graphene onto Si/SiO₂. Solvent cleaning followed transfer.",
      },
      {
        title: "Inspect & measure",
        text: "Optical microscopy was used to inspect the surface. I–V measurements used contacts separated by 100, 200 and 500 µm.",
      },
      {
        title: "Sensitize the channel",
        text: "PbS quantum dots were deposited by spin coating to form a light-absorbing layer adjacent to graphene.",
      },
      {
        title: "Compare illumination",
        text: "A separate illumination source allowed current to be compared in the dark and under illumination. The bare-graphene and hybrid device measurements used a fixed bias of 500 mV.",
      },
    ],
    evidenceTitle: "Microscopy & measured results",
    evidence: [
      {
        title: "Graphene transfer and cleaning",
        text: "We inspected the marked device region twice. The first view records the surface with the PMMA support in place. The second inspection shows the graphene and gold contacts after solvent cleaning.",
        figures: [figures.before, figures.after],
        paired: true,
      },
      {
        title: "Device before sensitization",
        text: "The contact pads allow measurements across different lengths of the graphene channel. This photograph records the device before the quantum-dot layer was added.",
        figures: [figures.chip],
      },
      {
        title: "Electrical characterization",
        text: "For each contact pair, we swept the voltage from −500 to +500 mV in 100 mV steps. The slope gives conductance. Figure 4 shows the 500 µm pair.",
        figures: [figures.iv],
      },
      {
        title: "Hybrid device under illumination",
        text: "At fixed bias, illumination increased the current through the graphene–PbS device. The course report describes a smaller light response for bare graphene.",
        metrics: [
          ["Contact separations investigated", "100, 200 & 500 µm"],
          ["Photodetection bias", "500 mV"],
          ["Illuminated current", "≈0.60 mA"],
          ["Dark current", "≈0.50 mA"],
          ["Increase over dark current", "≈20%"],
        ],
        note: "The currents are approximate readings from Figure 5 of Amir’s NANO 4 report. The relative change uses the dark reading as its baseline, (0.60 − 0.50) / 0.50 ≈ 20%.",
        figures: [figures.lightDark],
      },
    ],
    limitations:
      "Contact resistance, transfer residue and spatial variation in the quantum-dot film can complicate comparisons. A quantitative responsivity estimate would also require calibrated incident optical power and controlled illumination.",
    takeaway:
      "Pairing surface inspection with electrical measurements helps distinguish a material-level explanation from a change in contact quality or processing history.",
    assets: [
      {
        kind: "document",
        src: "/assets/graphene-photodetector/nano-4-lab-report.pdf",
        title: "Read the NANO 4 laboratory report (PDF)",
        description:
          "Amir Kania’s course report includes the original five figures, measurement conditions and discussion.",
      },
    ],
  },
  {
    slug: "nano20l",
    collection: "lab",
    title: "Nanomaterials Synthesis",
    fullTitle: "Nanomaterials Synthesis & Characterization",
    category: "Surface chemistry & nanoscale materials",
    summary:
      "Measuring silver colloids by dynamic light scattering and tracing an oleic acid monolayer at the air–water interface, alongside coursework on gold nanoparticles and nanowires.",
    status: "Coursework",
    tags: ["SAMs", "Nanoparticles", "Nanowires"],
    context: "UCSD NANO 20L laboratory coursework",
    date: "2026",
    role: "Student, nanomaterials laboratory",
    cover: figures.silver,
    thumbnail: figures.silverThumb,
    illustration: "/art/nano20l.svg",
    illustrationAlt:
      "Conceptual illustration of a cluster of faceted nanoparticles.",
    illustrationCaption:
      "Illustrative particle geometry. Experimental particle sizes and shapes require characterization data.",
    objective:
      "Explore how chemistry and growth conditions influence surfaces, particles and one-dimensional semiconductor structures across four undergraduate experiments.",
    background:
      "Changing the surface chemistry of a substrate can alter how it interacts with liquids and molecules. In nanoscale growth, the balance between nucleation and subsequent growth helps determine the structures that form.",
    contributions: [
      "I synthesized silver nanoparticles by reducing silver ions in solution with polyvinylpyrrolidone (PVP) as the capping agent. I used centrifugation and solvent exchange to prepare material for optical and DLS characterization.",
      "I formed an oleic acid monolayer at an air–water interface and used an annotated overhead image to relate its visible boundary to a physical area.",
    ],
    methodTitle: "Experiments",
    steps: [
      {
        title: "Oleic acid self-assembled monolayers",
        text: "Oleic acid spreads across the air–water interface, with the polar head groups interacting with water and the hydrocarbon tails oriented toward air. An oil film and lycopodium powder made the spreading boundary visible.",
      },
      {
        title: "Gold nanoparticles",
        text: "The gold synthesis exercise connects the formation of metal nuclei with particle growth. Optical absorption can be used to investigate the resulting dispersion.",
      },
      {
        title: "Silver nanoparticles",
        text: "In the modified Turkevich synthesis used in NANO 20L, silver ions were reduced in the presence of PVP. UV–Vis spectroscopy probed the optical response associated with localized surface plasmon resonance. DLS measured the dispersion, and dark-field microscopy showed scattering in a drop-cast deposit.",
      },
      {
        title: "Semiconducting nanowires",
        text: "Preferential growth along one direction produces elongated semiconductor structures. Microscope images can be used to examine morphology and growth variation.",
      },
    ],
    evidenceTitle: "Experimental observations",
    evidence: [
      {
        title: "Dark-field inspection of silver nanoparticles",
        text: "After solvent exchange, a drop of the silver dispersion was deposited for microscopy. Bright scattering features vary across the field. They show the distribution of optically scattering material. Individual particle diameters cannot be read from this view.",
        figures: [figures.silver],
      },
      {
        title: "Silver colloid · DLS size record",
        text: "For the ethanol-exchanged Ag sample, the Zetasizer reported a cumulants Z-average and a separate number-weighted distribution. These describe different aspects of the dispersion.",
        metrics: [
          ["Z-average hydrodynamic diameter", "115.3 nm"],
          ["Number-weighted peak", "79.30 nm"],
          ["Distribution standard deviation", "21.14 nm"],
          ["Polydispersity index", "0.259"],
          ["Measurement temperature", "25.0 °C"],
          ["Instrument-reported quality", "Good"],
        ],
        note: "Transcribed from the size record for “Ag NP (ethanol) 1” in Figure 2. The standard deviation belongs to the number-weighted peak.",
        figures: [figures.dlsSize],
      },
      {
        title: "Silver colloid · DLS signal monitoring",
        text: "The monitor plots photon count rate against time. Its separate distribution summary includes a larger-size population. Aggregation or another source of large scattering species could contribute to that signal.",
        metrics: [
          ["Photon count rate", "205.4 kcps"],
          ["Z-average hydrodynamic diameter", "110.4 nm"],
          ["Polydispersity index", "0.321"],
        ],
        note: "Transcribed from the acquisition screen in Figure 3. Its relationship to the Figure 2 acquisition is undocumented, so each set of readings is reported separately.",
        figures: [figures.dlsSignal],
      },
      {
        title: "Oleic acid monolayer · image analysis",
        text: "A known quantity of oleic acid spread into a thin film at the air–water interface. The displaced powder and oil outlined its footprint, allowing the photograph to connect a macroscopic measurement to molecular dimensions.",
        figures: [figures.monolayer],
        workflow: [
          {
            title: "Molecular self-assembly",
            text: "The amphiphilic molecules spread over water as the carrier solvent evaporated.",
          },
          {
            title: "Visualize the boundary",
            text: "Trace the displaced oil and lycopodium powder. The yellow outline marks the estimated film perimeter.",
          },
          {
            title: "Calibrate the image",
            text: "Divide the annotated 14 cm watch-glass diameter by its length in pixels to obtain centimetres per pixel.",
          },
          {
            title: "Calculate surface area",
            text: "Multiply the number of enclosed pixels by the square of the calibration factor to obtain film area in cm².",
          },
          {
            title: "Estimate molecular dimensions",
            text: "Divide the deposited oleic acid volume by the film area to estimate monolayer thickness. With a molecular packing model, this can inform an estimate of Avogadro’s number.",
          },
        ],
      },
    ],
    limitations:
      "DLS measures hydrodynamic size in suspension and is sensitive to large scatterers. The dark-field deposit samples a different physical state. In the monolayer analysis, uncertainty in the boundary, camera angle, delivered volume and single-layer assumption affects any estimate of molecular dimensions.",
    takeaway:
      "A size estimate depends on what the instrument measures. Keeping the DLS weighting, sample state and image calibration with each observation makes the results interpretable.",
    assets: [],
  },
  {
    slug: "pyraasypis-uav",
    collection: "hardware",
    title: "PyraAsypis Wildfire UAV",
    fullTitle: "PyraAsypis — Wildfire Response UAV",
    category: "Hardware integration & prototyping",
    summary:
      "Developing the hardware architecture for a student-led wildfire perimeter monitoring and water-delivery concept.",
    status: "In development",
    tags: ["CAD", "Systems integration", "Prototyping"],
    context: "Student-led aerospace systems initiative",
    role: "Process & Hardware Systems Engineer",
    date: "July 2025 – present",
    illustration: "/art/pyraasypis-uav.svg",
    illustrationAlt:
      "Concept block diagram connecting the proposed sensors, airframe, water delivery and pilot display.",
    illustrationCaption:
      "Conceptual relationships between planned subsystems. This diagram describes the design scope.",
    objective:
      "Explore an aerial platform for wildfire perimeter monitoring and controlled water deployment. The current work concerns airframe design, equipment selection and preliminary analysis.",
    background:
      "Airframe geometry, payload, sensing equipment and water delivery all place demands on mass, power and available volume. A pilot display also needs a defined interface with the equipment it represents.",
    contributions: [
      "I contribute to process and hardware systems engineering within the student team. Current team work includes CAD architecture, component procurement and water-release and operating-range calculations.",
    ],
    methodTitle: "Engineering development timeline",
    currentStep: 2,
    steps: [
      {
        title: "Concept",
        text: "Define the monitoring and controlled water-deployment use case.",
      },
      {
        title: "Requirements",
        text: "Translate the concept into hardware, payload, sensing and pilot-interface needs.",
      },
      {
        title: "CAD & calculations",
        text: "Current stage. Airframe and hardware architecture are in CAD development. Equipment is being procured, water-release calculations are being finalized and operating-range estimates are in progress.",
      },
      {
        title: "Component integration",
        text: "Upcoming work will address interfaces between procured equipment, the airframe and pilot display.",
      },
      {
        title: "Prototype fabrication",
        text: "A future phase will translate the design into hardware and record design revisions.",
      },
      {
        title: "Testing",
        text: "Future prototype tests will be needed to assess integration, operating range and water delivery.",
      },
    ],
    evidenceTitle: "Current design work",
    evidence: [
      {
        title: "Assemblies & equipment",
        text: "CAD assemblies and component architecture are in development. Sensor integration and fabrication remain upcoming.",
      },
      {
        title: "Analysis & pilot display",
        text: "Water-delivery calculations, range and endurance analysis, and pilot HUD development are active workstreams. Numerical specifications await supporting analysis and tests.",
      },
    ],
    limitations:
      "The project is in the design and procurement phase. Flight performance, release behavior and operating range have yet to be validated.",
    takeaway:
      "Documenting a proposed interface or calculation gives the team a specific assumption to check during future integration and testing.",
    assets: [],
  },
];

export const projectPath = (project: Project) =>
  `/${project.collection}/${project.slug}/`;
export const ferrari: { media: Asset[] } = { media: [figures.mesh] };
