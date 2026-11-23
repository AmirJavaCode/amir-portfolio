import Link from "next/link";
import { FileDown, Mail } from "lucide-react";
import { profile, certifications } from "@/content/profile";
import { projects, projectPath } from "@/content/projects";
import { Skills } from "@/components/Skills";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Résumé",
  "Education, selected engineering experience and technical skills of Amir Kania, a UC San Diego NanoEngineering student.",
  "/resume/",
);
export default function Resume() {
  return (
    <div className="wrap resume-page">
      <header className="page-heading">
        <p className="kicker">Résumé</p>
        <h1>Amir Kania</h1>
        <p className="lede">
          {profile.degree} · {profile.university}
          <br />
          Expected {profile.graduation} · {profile.location}
        </p>
        <div className="text-links">
          <a href={`mailto:${profile.email}`}>
            <Mail size={16} />
            {profile.email}
          </a>
        </div>
        {profile.resumePdf ? (
          <a className="button secondary" href={profile.resumePdf}>
            <FileDown size={16} />
            Open résumé PDF
          </a>
        ) : (
          <p className="pdf-note">
            The updated PDF is pending. A summary of my experience is available
            below.
          </p>
        )}
      </header>
      <section>
        <h2>Engineering experience</h2>
        <div className="resume-list">
          {projects.map((p) => (
            <article key={p.slug}>
              <div>
                <p className="kicker">{p.context}</p>
                <h3>
                  <Link href={projectPath(p)}>{p.fullTitle}</Link>
                </h3>
                <p>
                  {p.role} · {p.status}
                </p>
              </div>
              {p.date && <span>{p.date}</span>}
            </article>
          ))}
          <article>
            <div>
              <p className="kicker">Ferrari Work Experience Program</p>
              <h3>
                <Link href="/hardware/">Electric sports car design</Link>
              </h3>
              <p>Aerodynamics Lead</p>
            </div>
            <span>June–August 2023</span>
          </article>
        </div>
      </section>
      <section>
        <h2>Technical skills</h2>
        <Skills />
        <ul className="certifications">
          {certifications.map((c) => (
            <li key={c.name}>
              {c.name}
              <span>{c.status}</span>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Research</h2>
        <p>
          First author of a peer-reviewed meta-analysis of human PET imaging
          literature in <em>Synapse</em> (2025).
        </p>
        <Link className="inline-link" href="/publications/">
          View full publication
        </Link>
      </section>
    </div>
  );
}
