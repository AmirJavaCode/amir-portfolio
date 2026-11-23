import { Layers3, Microscope, Box, ChartNoAxesCombined } from "lucide-react";
import { skills } from "@/content/profile";
const icons = [Layers3, Microscope, Box, ChartNoAxesCombined];
export function Skills() {
  return (
    <div className="skills-grid">
      {skills.map((s, i) => {
        const Icon = icons[i];
        return (
          <div key={s.name}>
            <Icon size={21} />
            <h3>{s.name}</h3>
            <p>{s.items}</p>
          </div>
        );
      })}
    </div>
  );
}
