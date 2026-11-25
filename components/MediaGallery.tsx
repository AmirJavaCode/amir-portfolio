"use client";

import Image from "next/image";
import { flushSync } from "react-dom";
import { useId, useRef, useState, type MouseEvent } from "react";
import { Expand, FileText, X } from "lucide-react";
import type { Asset, ProjectImage } from "@/content/projects";

export function MediaGallery({
  assets,
  paired = false,
  hero = false,
}: {
  assets: Asset[];
  paired?: boolean;
  hero?: boolean;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<ProjectImage | null>(null);
  const captionId = useId();
  function expand(event: MouseEvent<HTMLAnchorElement>, asset: ProjectImage) {
    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      !dialog.current?.showModal
    )
      return;
    event.preventDefault();
    // Commit the caption and close button before the native dialog moves focus.
    flushSync(() => setSelected(asset));
    dialog.current.showModal();
  }
  if (!assets.length) return null;
  return (
    <div
      className={`gallery ${paired ? "gallery-pair" : ""} ${hero ? "gallery-hero" : ""}`}
    >
      {assets.map((a) =>
        a.kind === "document" ? (
          <div className="doc-card" key={a.src}>
            <a href={a.src}>
              <FileText size={17} />
              {a.title}
            </a>
            <p>{a.description}</p>
          </div>
        ) : (
          <figure key={a.src} className="experiment-figure">
            <a
              className="figure-image"
              href={a.fullSrc || a.src}
              onClick={(event) => expand(event, a)}
              aria-haspopup="dialog"
              aria-label={`Expand ${a.label ?? a.alt}`}
            >
              <Image
                src={a.src}
                alt={a.alt}
                width={a.width}
                height={a.height}
                preload={hero}
                sizes={
                  hero
                    ? "(max-width: 1100px) 95vw, 1100px"
                    : paired
                      ? "(max-width: 620px) 90vw, 370px"
                      : "(max-width: 760px) 92vw, 720px"
                }
              />
              <span className="expand-icon" aria-hidden="true">
                <Expand size={16} />
              </span>
            </a>
            <figcaption>
              {a.label && <strong>{a.label}</strong>}
              {a.caption}
            </figcaption>
          </figure>
        ),
      )}
      <dialog
        ref={dialog}
        className="image-dialog"
        aria-labelledby={captionId}
        onClose={(event) => {
          // A queued close event can arrive after the next figure has opened.
          if (!event.currentTarget.open) setSelected(null);
        }}
        onClick={(event) => {
          if (event.target === dialog.current) dialog.current?.close();
        }}
      >
        {selected && (
          <div className="dialog-body">
            <div className="dialog-heading">
              <h2 id={captionId}>{selected.label || "Project image"}</h2>
              <button
                aria-label="Close expanded figure"
                onClick={() => dialog.current?.close()}
              >
                <X size={20} />
              </button>
            </div>
            <div className="dialog-image">
              <Image
                src={selected.fullSrc || selected.src}
                alt={selected.alt}
                fill
                sizes="95vw"
              />
            </div>
            <p>{selected.caption}</p>
            <a href={selected.fullSrc || selected.src}>
              Open image at full resolution
            </a>
          </div>
        )}
      </dialog>
    </div>
  );
}
