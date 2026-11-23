import Image from "next/image";
import { FileText } from "lucide-react";
import type { Asset } from "@/content/projects";
export function MediaGallery({ assets }: { assets: Asset[] }) {
  if (!assets.length) return null;
  return (
    <div className="gallery">
      {assets.map((a) =>
        a.kind === "image" ? (
          <figure key={a.src}>
            <a href={a.src} aria-label={`Open full-size image: ${a.alt}`}>
              <Image
                src={a.src}
                alt={a.alt}
                width={a.width}
                height={a.height}
                sizes="(max-width: 760px) 92vw, 660px"
              />
            </a>
            <figcaption>{a.caption}</figcaption>
          </figure>
        ) : (
          <div className="doc-card" key={a.src}>
            <a href={a.src}>
              <FileText size={18} />
              {a.title}
            </a>
            <p>{a.description}</p>
          </div>
        ),
      )}
    </div>
  );
}
