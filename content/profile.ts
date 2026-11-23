export const profile = {
  name: "Amir Kania",
  email: "akania@ucsd.edu",
  github: "https://github.com/AmirJavaCode",
  linkedin: "https://www.linkedin.com/in/amir-kania-2003b4232",
  university: "University of California, San Diego",
  degree: "B.S. NanoEngineering",
  graduation: "June 2029",
  location: "San Diego, California",
  // Set this only after reviewing the public PDF and removing any private contact details.
  resumePdf: null as string | null,
};

export const skills = [
  {
    name: "Nanofabrication & processing",
    items:
      "Photolithography, photoresist processing, spin coating, UV exposure, substrate cleaning, hot-plate baking, graphene transfer.",
  },
  {
    name: "Materials & characterization",
    items:
      "Optical microscopy, electrical I–V measurements, resistance and conductivity analysis, experimental data interpretation.",
  },
  {
    name: "Mechanical design & hardware",
    items:
      "SOLIDWORKS, 3D printing, mechanical design, component integration, fabrication planning.",
  },
  {
    name: "Computing & analysis",
    items: "Python, MATLAB, Excel, technical documentation.",
  },
];

export const certifications = [
  { name: "Certified SOLIDWORKS Associate (CSWA)", status: "In progress" },
  { name: "Certified SOLIDWORKS Professional (CSWP)", status: "Planned" },
];

export const publications = [
  {
    title:
      "Measuring Alcohol-Induced Striatal Dopamine Release in Healthy Humans With [11C]-Raclopride: A Meta-Analysis.",
    authors: "Kania, A., Porco, N., & Caravaggio, F.",
    authorship: "First author",
    reviewStatus: "Peer reviewed",
    journal: "Synapse",
    year: "2025",
    issue: "79(1), e70007",
    doi: "https://doi.org/10.1002/syn.70007",
    pubmed: "https://pubmed.ncbi.nlm.nih.gov/39729041/",
  },
];
