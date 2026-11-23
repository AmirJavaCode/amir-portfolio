import Link from "next/link";
import { BookOpen, LibraryBig } from "lucide-react";
import { publications } from "@/content/profile";
type Publication = (typeof publications)[number];
export function PublicationCard({
  full = false,
  publication: p = publications[0],
}: {
  full?: boolean;
  publication?: Publication;
}) {
  return (
    <article className="publication-card">
      <div className="journal-mark">
        <BookOpen size={30} />
        <span>{p.journal}</span>
        <small>
          Vol. {p.issue.split("(")[0]} · {p.year}
        </small>
      </div>
      <div className="pub-copy">
        <p className="kicker">
          {p.authorship} <span>/</span> {p.reviewStatus}
        </p>
        <h3>{full ? p.title : <Link href="/publications/">{p.title}</Link>}</h3>
        <p>
          {p.authors} <em>{p.journal}</em>, {p.issue} ({p.year}).
        </p>
        <div className="text-links">
          <a href={p.doi}>
            <BookOpen size={15} /> Publisher DOI
          </a>
          <a href={p.pubmed}>
            <LibraryBig size={15} /> PubMed
          </a>
        </div>
      </div>
    </article>
  );
}
