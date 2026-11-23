"use client";
import { useState } from "react";
import { ProcessSketch } from "./ProcessSketch";
import { Minus, Plus } from "lucide-react";
import type { Step } from "@/content/projects";
export default function Process({
  steps,
  illustrated = false,
  current,
  id,
}: {
  steps: Step[];
  illustrated?: boolean;
  current?: number;
  id: string;
}) {
  const [selected, setSelected] = useState<number | null>(current ?? 0);
  return (
    <ol className="process">
      {steps.map((step, i) => {
        const active = selected === i;
        return (
          <li key={step.title} className={active ? "expanded" : ""}>
            <h3>
              <button
                type="button"
                aria-expanded={active}
                aria-controls={`${id}-detail-${i}`}
                onClick={() => setSelected(active ? null : i)}
              >
                <span className="step-no">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{step.title}</span>
                {current === i && <span className="stage-label">Current</span>}
                {active ? <Minus size={16} /> : <Plus size={16} />}
              </button>
            </h3>
            <div id={`${id}-detail-${i}`} hidden={!active}>
              {illustrated && <ProcessSketch index={i} />}
              <p>{step.text}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
