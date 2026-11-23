import { Layers3, MapPin } from "lucide-react";
import Wafer from "@/components/Wafer";
import { ResumeLink, Socials } from "@/components/Chrome";
import { ProjectCard } from "@/components/ProjectCard";
import { PublicationCard } from "@/components/Publication";
import { Skills } from "@/components/Skills";
import WorkFilter from "@/components/WorkFilter";
import { projects } from "@/content/projects";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Amir Kania | NanoEngineering Portfolio",
  "Undergraduate work in semiconductor fabrication, photolithography, nanomaterials and hardware engineering at UC San Diego.",
  "/",
);
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-inner">
          <div className="hero-copy">
            <p className="hero-eyebrow">
              <span />
              UC San Diego <b>/</b> NanoEngineering <b>/</b> Class of 2029
            </p>
            <h1>
              Amir Kania
              <span className="hero-period" aria-hidden="true">
                .
              </span>
            </h1>
            <p className="specialties">
              Semiconductor Fabrication <span>·</span> Nanomaterials{" "}
              <span>·</span> Hardware Engineering
            </p>
            <p className="intro">
              I’m a second-year NanoEngineering student at UC San Diego
              exploring how lithography, materials and process design shape the
              devices we rely on.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#work">
                <Layers3 size={17} />
                Explore my work
              </a>
              <ResumeLink className="button secondary" />
            </div>
            <div className="hero-social">
              <Socials />
              <span className="place">
                <MapPin size={15} />
                San Diego, CA
              </span>
            </div>
          </div>
          <Wafer />
        </div>
      </section>
      <WorkFilter
        counts={{
          all: projects.length,
          lab: projects.filter((p) => p.collection === "lab").length,
          hardware: projects.filter((p) => p.collection === "hardware").length,
        }}
      >
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </WorkFilter>
      <section className="section ruled">
        <div className="wrap">
          <p className="kicker">Research</p>
          <h2>Selected publication</h2>
          <PublicationCard />
        </div>
      </section>
      <section className="section ruled">
        <div className="wrap">
          <p className="kicker">Technical practice</p>
          <h2>Skills & methods</h2>
          <Skills />
        </div>
      </section>
      <section className="section ruled">
        <div className="wrap about">
          <div>
            <p className="kicker">About</p>
            <h2>Why fabrication?</h2>
          </div>
          <div>
            <p>
              What draws me to semiconductors is the distance between a process
              step and the device it makes possible. How a resist film coats,
              where light reaches a sample and how charge moves across an
              interface all matter to the finished device.
            </p>
            <p>
              At UC San Diego, I’m building the laboratory and design skills to
              study those connections. I want to understand the manufacturing
              behind computing, communications, scientific instruments and
              automation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
