"use client";
import { useState, type ReactNode } from "react";
import { LayoutGrid, Microscope, Box } from "lucide-react";
const options = [
  { id: "all", label: "All work", icon: LayoutGrid },
  { id: "lab", label: "Lab work", icon: Microscope },
  { id: "hardware", label: "Hardware", icon: Box },
];
export default function WorkFilter({
  children,
  counts,
}: {
  children: ReactNode;
  counts: Record<string, number>;
}) {
  const [filter, setFilter] = useState("all");
  return (
    <section id="work" className="section work-section">
      <div className="wrap">
        <div className="section-top">
          <div>
            <p className="kicker">Project index</p>
            <h2>Featured work</h2>
          </div>
          <div
            className="filter-bar"
            role="group"
            aria-label="Filter featured work"
          >
            {options.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                aria-pressed={filter === id}
                onClick={() => setFilter(id)}
              >
                <Icon size={14} />
                {label}
              </button>
            ))}
          </div>
        </div>
        <p className="sr-only" role="status">
          {counts[filter]} projects shown
        </p>
        <div className="work-grid" data-filter={filter}>
          {children}
        </div>
      </div>
    </section>
  );
}
