import { Award, Briefcase, GraduationCap, Sparkles, Trophy } from "lucide-react";
import { Reveal, Section, SectionHeading } from "./primitives";
import {
  about,
  certifications,
  education,
  experience,
  recognitions,
  skillGroups,
} from "@/lib/portfolio-data";

export function About() {
  return (
    <Section id="about">
      <SectionHeading eyebrow="About" title="About Me" />
      <div className="mx-auto mt-10 grid max-w-4xl gap-5">
        {about.map((paragraph, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <p className="text-lg leading-relaxed text-muted-foreground">{paragraph}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" className="bg-secondary/40">
      <SectionHeading eyebrow="Career" title="Experience" />
      <div className="mx-auto mt-12 max-w-3xl">
        {experience.map((job) => (
          <Reveal key={job.company}>
            <div className="relative border-l border-border pl-8">
              <span className="absolute top-1.5 -left-[9px] grid size-4 place-items-center rounded-full bg-[image:var(--gradient-brand)]">
                <span className="size-1.5 rounded-full bg-background" />
              </span>
              <div className="card-surface p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold">{job.company}</h3>
                    <p className="text-gradient font-mono text-sm">{job.title}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">
                    <Briefcase className="size-3.5" />
                    {job.duration}
                  </span>
                </div>
                <ul className="mt-5 grid gap-2.5">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education">
      <SectionHeading eyebrow="Academics" title="Education" />
      <Reveal className="mx-auto mt-10 max-w-3xl">
        <div className="card-surface flex flex-wrap items-center gap-6 p-7">
          <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-[image:var(--gradient-brand)] text-primary-foreground">
            <GraduationCap className="size-7" />
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-semibold">{education.degree}</h3>
            <p className="text-muted-foreground">{education.college}</p>
            <p className="text-sm text-muted-foreground">{education.university}</p>
          </div>
          <div className="rounded-xl border border-border bg-secondary px-4 py-3 text-center">
            <p className="font-mono text-xs text-muted-foreground">CGPA</p>
            <p className="text-2xl font-semibold">{education.cgpa}</p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" className="bg-secondary/40">
      <SectionHeading
        eyebrow="Toolkit"
        title="Skills"
        description="The stack I use to design, build, and operate production data platforms."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.06}>
            <div className="card-surface h-full p-6">
              <h3 className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-border bg-secondary px-3 py-1.5 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand hover:text-brand"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeading eyebrow="Credentials" title="Certifications" />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {certifications.map((cert, i) => (
          <Reveal key={cert.title} delay={i * 0.08}>
            <div className="card-surface h-full p-6">
              <span className="grid size-11 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground">
                <Award className="size-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{cert.title}</h3>
              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              <span className="mt-4 inline-block rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">
                {cert.status}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Recognitions() {
  return (
    <Section id="recognitions" className="bg-secondary/40">
      <SectionHeading eyebrow="Impact" title="Recognitions" />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {recognitions.map((item, i) => (
          <Reveal key={item} delay={i * 0.08}>
            <div className="card-surface h-full p-6">
              <span className="grid size-11 place-items-center rounded-xl border border-border bg-secondary text-brand">
                {i === 0 ? (
                  <Trophy className="size-5" />
                ) : i === 1 ? (
                  <Sparkles className="size-5" />
                ) : (
                  <Award className="size-5" />
                )}
              </span>
              <p className="mt-4 leading-relaxed text-muted-foreground">{item}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
