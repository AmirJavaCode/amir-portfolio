import { projects, type Collection, ferrari } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";
import { MediaGallery } from "./MediaGallery";
export const collections = {
  lab: {
    title: "UCSD Lab Work",
    description:
      "Photolithography process development with NETS and undergraduate laboratory work in device fabrication, surface chemistry and characterization.",
  },
  hardware: {
    title: "Hardware Projects",
    description:
      "Student engineering work spanning CAD, subsystem design and the practical decisions that connect a model to a prototype.",
  },
};
export function CollectionPage({ collection }: { collection: Collection }) {
  const data = collections[collection];
  return (
    <div className="wrap collection-page">
      <header className="page-heading">
        <p className="kicker">Project index</p>
        <h1>{data.title}</h1>
        <p className="lede">{data.description}</p>
      </header>
      <div className="work-grid">
        {projects
          .filter((p) => p.collection === collection)
          .map((p) => (
            <ProjectCard project={p} key={p.slug} />
          ))}
      </div>
      {collection === "hardware" && (
        <section className="prior-work">
          <p className="kicker">Additional experience</p>
          <h2>Ferrari Work Experience Program</h2>
          <p className="byline">
            Aerodynamics Lead <span>·</span> June–August 2023
          </p>
          <p>
            In a four-person team designing an electric sports car, I considered
            drag, lift and downforce alongside vehicle dynamics and power
            requirements. We presented our design decisions to industry mentors.
          </p>
          <MediaGallery assets={ferrari.media} />
        </section>
      )}
    </div>
  );
}
