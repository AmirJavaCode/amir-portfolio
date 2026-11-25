import type { EvidenceItem } from "@/content/projects";
import { MediaGallery } from "./MediaGallery";
export function Evidence({ items }: { items: EvidenceItem[] }) {
  const detailed = items.some(
    (item) => item.metrics || item.workflow || item.figures,
  );
  return (
    <div className={detailed ? "study-evidence" : "evidence-grid"}>
      {items.map((item) => (
        <div className={detailed ? "study-record" : undefined} key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          {item.metrics && (
            <dl className="measured-values">
              {item.metrics.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          )}
          {item.note && <p className="source-note">{item.note}</p>}
          {item.figures && (
            <MediaGallery assets={item.figures} paired={item.paired} />
          )}
          {item.workflow && (
            <ol
              className="monolayer-workflow"
              aria-label="Monolayer analysis sequence"
            >
              {item.workflow.map((step, i) => (
                <li key={step.title}>
                  <span aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          )}
        </div>
      ))}
    </div>
  );
}
