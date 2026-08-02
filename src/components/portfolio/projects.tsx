import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, Section, SectionHeading } from "./primitives";
import { projects } from "@/lib/portfolio-data";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Work"
        title="Projects"
        description="Selected data engineering builds — pipelines, warehouses, and cloud automation."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 3) * 0.08}>
            <article className="card-surface group h-full overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  width={1200}
                  height={750}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end bg-[linear-gradient(to_top,oklch(0.16_0.03_260/0.92),transparent_65%)] p-4 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                  <p className="text-sm text-[oklch(0.97_0_0)]">{project.detail}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border bg-secondary px-2 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex gap-2">
                  <Button asChild size="sm" variant="outline">
                    <a href={project.github} target="_blank" rel="noreferrer noopener">
                      <Github className="size-4" />
                      GitHub
                    </a>
                  </Button>
                  {project.demo ? (
                    <Button asChild size="sm">
                      <a href={project.demo} target="_blank" rel="noreferrer noopener">
                        <ExternalLink className="size-4" />
                        Live Demo
                      </a>
                    </Button>
                  ) : null}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
