export type Collection = "lab" | "hardware";
export type Status =
  | "Completed involvement"
  | "Completed coursework"
  | "Coursework"
  | "In development";
export type Asset =
  | {
      kind: "image";
      src: string;
      alt: string;
      caption: string;
      width: number;
      height: number;
    }
  | { kind: "document"; src: string; title: string; description: string };
export type Step = { title: string; text: string };
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
  evidence: Step[];
  limitations: string;
  takeaway: string;
  cover?: Extract<Asset, { kind: "image" }>;
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
    role: "Process Fabrication Engineer",
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
        text: "The project poster documents the equipment, CAD models, mask designs and sample patterns. These are team artifacts from the benchtop platform.",
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
    date: "Fall 2025",
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
      "In NANO 4, I worked through PMMA-assisted graphene transfer, surface inspection and electrical measurements.",
      "I used measurements at different contact separations to examine resistance, resistivity and conductivity and compared the response before and after sensitization.",
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
        text: "Dark and illuminated I–V behavior was compared for bare graphene and the sensitized device.",
      },
    ],
    evidenceTitle: "Dark and illuminated measurements",
    evidence: [
      {
        title: "Bare graphene",
        text: "The unsensitized channel provided the reference for comparing dark and illuminated electrical behavior.",
      },
      {
        title: "Graphene with PbS",
        text: "The course report describes a stronger illuminated electrical response after PbS quantum-dot sensitization. This observation is qualitative.",
      },
    ],
    limitations:
      "Contact resistance, transfer residue and spatial variation in the quantum-dot film can complicate comparisons. A quantitative responsivity estimate would also require calibrated incident optical power and controlled illumination.",
    takeaway:
      "Pairing surface inspection with electrical measurements helps distinguish a material-level explanation from a change in contact quality or processing history.",
    assets: [],
  },
  {
    slug: "nano20l",
    collection: "lab",
    title: "Nanomaterials Synthesis",
    fullTitle: "Nanomaterials Synthesis & Characterization",
    category: "Surface chemistry & nanoscale materials",
    summary:
      "Course experiments in surface functionalization, metallic nanoparticles and semiconducting nanowires.",
    status: "Coursework",
    tags: ["SAMs", "Nanoparticles", "Nanowires"],
    context: "UCSD NANO 20L laboratory coursework",
    date: "2026",
    role: "Student, nanomaterials laboratory",
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
      "My NANO 20L laboratory work included self-assembled monolayers, synthesis of gold and silver nanoparticles, and semiconducting nanowires.",
    ],
    methodTitle: "Experiments",
    steps: [
      {
        title: "Surface functionalization / SAMs",
        text: "Molecules with a suitable surface-binding group can assemble into a monolayer. Their exposed terminal groups influence surface properties such as wettability.",
      },
      {
        title: "Gold nanoparticles",
        text: "The gold synthesis exercise connects the formation of metal nuclei with particle growth. Optical absorption can be used to investigate the resulting dispersion.",
      },
      {
        title: "Silver nanoparticles",
        text: "Silver nanoparticle synthesis provides another system for examining nucleation and growth. The optical response can depend on shape, size and aggregation.",
      },
      {
        title: "Semiconducting nanowires",
        text: "Preferential growth along one direction produces elongated semiconductor structures. Microscope images can be used to examine morphology and growth variation.",
      },
    ],
    evidenceTitle: "Reading characterization data",
    evidence: [
      {
        title: "Optical spectroscopy",
        text: "A UV–Vis spectrum measures wavelength-dependent absorbance. For metallic nanoparticles, its shape and peak position can help interpret changes in the dispersion.",
      },
      {
        title: "Sizing and morphology",
        text: "DLS probes hydrodynamic size in suspension. Microscopy addresses a different question by showing the morphology of the imaged sample.",
      },
    ],
    limitations:
      "Sample-specific spectra, size distributions and microscopy are needed to discuss outcomes from an individual synthesis. The experiment descriptions give the scientific purpose of each exercise.",
    takeaway:
      "Each characterization method answers a different question. Interpreting a sample requires matching the observation to the property the method actually measures.",
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
export const ferrari: { media: Asset[] } = { media: [] };
