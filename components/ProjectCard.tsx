import Image from "next/image";
import Link from "next/link";
import { projectPath, type Project, type Status } from "@/content/projects";
export function ProjectStatus({ status }: { status: Status }) {
  return (
    <span
      className={`status ${status === "In development" ? "ongoing" : status === "Coursework" ? "coursework" : ""}`}
    >
      <span aria-hidden="true" />
      {status}
    </span>
  );
}
export function ProjectCard({ project: p }: { project: Project }) {
  const photo = p.thumbnail ?? p.cover;
  return (
    <article className="project-card" data-collection={p.collection}>
      <div className="card-media">
        <Image
          src={photo?.src || p.illustration}
          alt={photo?.alt || p.illustrationAlt}
          fill
          sizes="(max-width: 700px) 95vw, 48vw"
        />
        <span className="media-note">
          {p.cover ? "Project image" : "Concept illustration"}
        </span>
      </div>
      <div className="card-copy">
        <div className="card-meta">
          <span>
            {p.collection === "lab" ? "UCSD lab work" : "Hardware project"}
          </span>
          <ProjectStatus status={p.status} />
        </div>
        <h3>
          <Link href={projectPath(p)}>{p.title}</Link>
        </h3>
        <p className="card-category">{p.category}</p>
        <p className="card-desc">{p.summary}</p>
        <ul className="tags" aria-label="Techniques">
          {p.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
