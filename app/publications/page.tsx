import { PublicationCard } from "@/components/Publication";
import { publications } from "@/content/profile";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Publications",
  "First-author meta-analysis in Synapse and research experience in quantitative synthesis, PET imaging literature and scientific writing.",
  "/publications/",
);
export default function Publications() {
  return (
    <div className="wrap publications-page">
      <header className="page-heading">
        <p className="kicker">Research & writing</p>
        <h1>Publications</h1>
        <p className="lede">
          Peer-reviewed research in neuroscience and the quantitative methods
          behind it.
        </p>
      </header>
      {publications.map((p) => (
        <PublicationCard key={p.doi} full publication={p} />
      ))}
      <div className="reading-grid">
        <section>
          <h2>Research question</h2>
          <p>
            How does alcohol consumption affect dopamine release in the human
            striatum? The paper brings together human PET imaging studies that
            used [11C]-raclopride to investigate that question in healthy
            participants.
          </p>
        </section>
        <section>
          <h2>Method</h2>
          <p>
            [11C]-raclopride is a PET radiotracer that competes with endogenous
            dopamine for receptor binding. The meta-analysis compares reported
            changes in binding across studies to investigate alcohol-associated
            dopamine release.
          </p>
        </section>
        <section>
          <h2>Reported finding</h2>
          <p>
            Oral alcohol administration was associated with reduced
            [11C]-raclopride binding potential in the ventral striatum,
            consistent with increased dopamine release. Findings in the caudate
            and putamen were more variable.
          </p>
        </section>
        <section>
          <h2>Research experience</h2>
          <p>
            As first author, I gained experience in quantitative literature
            synthesis, comparison of experimental studies, statistical
            interpretation, scientific writing and peer review. I bring the same
            attention to methods and evidence to my engineering work.
          </p>
        </section>
      </div>
    </div>
  );
}
