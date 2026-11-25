import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { type Project } from "@/content/projects";
import { ProjectStatus } from "./ProjectCard";
import DeviceStack from "./DeviceStack";
import Process from "./Process";
import { Evidence } from "./Evidence";
import { MediaGallery } from "./MediaGallery";
export function Breadcrumb({
  href,
  title,
  current,
}: {
  href: string;
  title: string;
  current: string;
}) {
  return (
    <nav className="crumb" aria-label="Breadcrumb">
      <Link href={href}>{title}</Link>
      <ChevronRight size={13} />
      <span aria-current="page">{current}</span>
    </nav>
  );
}
export function ProjectDetail({ project: p }: { project: Project }) {
  const label = p.collection === "lab" ? "UCSD Lab Work" : "Hardware Projects";
  const headings = [
    ["objective", "Objective & background"],
    ["contribution", "My contribution"],
    ["method", p.methodTitle],
    ["evidence", p.evidenceTitle],
    ["limitations", "Limitations & takeaway"],
  ];
  return (
    <div className="wrap case-page">
      <Breadcrumb href={`/${p.collection}/`} title={label} current={p.title} />
      <header className="case-heading">
        <p className="kicker">{p.category}</p>
        <h1>{p.fullTitle}</h1>
        <p className="lede">{p.summary}</p>
      </header>
      <dl className="metadata-grid">
        {[
          [
            p.collection === "lab" ? "Organization / course" : "Project",
            p.context,
          ],
          ["Role", p.role],
          ...(p.date ? [["Period", p.date]] : []),
        ].map(([k, v]) => (
          <div key={k}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
        <div>
          <dt>Status</dt>
          <dd>
            <ProjectStatus status={p.status} />
          </dd>
        </div>
      </dl>
      {p.cover ? (
        <MediaGallery assets={[p.cover]} hero />
      ) : (
        <figure className="case-figure">
          <Image
            src={p.illustration}
            alt={p.illustrationAlt}
            width={800}
            height={320}
            sizes="(max-width: 1100px) 95vw, 1100px"
            preload
          />
          <figcaption>{p.illustrationCaption}</figcaption>
        </figure>
      )}
      <div className="case-layout">
        <aside>
          <p className="kicker">In this study</p>
          <nav aria-label="Case study sections">
            {headings.map(([id, t]) => (
              <a key={id} href={`#${id}`}>
                {t}
              </a>
            ))}
          </nav>
        </aside>
        <div className="case-body">
          <section id="objective">
            <h2>Objective & background</h2>
            <p>{p.objective}</p>
            <p>{p.background}</p>
          </section>
          <section id="contribution">
            <h2>My contribution</h2>
            <ul>
              {p.contributions.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </section>
          <section id="method">
            <h2>{p.methodTitle}</h2>
            <Process
              id={p.slug}
              steps={p.steps}
              current={p.currentStep}
              illustrated={p.methodDiagram === "lithography"}
            />
            {p.methodDiagram === "device-stack" && <DeviceStack />}
          </section>
          <section id="evidence">
            <h2>{p.evidenceTitle}</h2>
            <Evidence items={p.evidence} />
            <MediaGallery assets={p.assets} />
          </section>
          <section id="limitations">
            <h2>Limitations & takeaway</h2>
            <p>{p.limitations}</p>
            <blockquote>{p.takeaway}</blockquote>
          </section>
          <Link className="button secondary" href={`/${p.collection}/`}>
            Back to {label}
          </Link>
        </div>
      </div>
    </div>
  );
}
