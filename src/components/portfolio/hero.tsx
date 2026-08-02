import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile, stats } from "@/lib/portfolio-data";
import { DataFlowArt } from "./data-flow-art";

function Counter({
  value,
  suffix,
  decimals,
}: {
  value: number;
  suffix: string;
  decimals: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setDisplay(value * (1 - Math.pow(1 - p, 3)));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref} className="text-3xl font-semibold tracking-tight sm:text-4xl">
      {display.toFixed(decimals)}
      <span className="text-gradient">{suffix}</span>
    </span>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />
        <div className="absolute inset-0 bg-[image:var(--gradient-halo)]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 font-mono text-xs text-muted-foreground"
          >
            <span className="size-1.5 rounded-full bg-brand-glow" />
            Available for data engineering roles
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 text-4xl font-semibold tracking-tight text-balance sm:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="text-gradient mt-3 font-mono text-base sm:text-lg"
          >
            {profile.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-5 max-w-xl text-muted-foreground"
          >
            {profile.headline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button asChild size="lg">
              <a href={profile.resume} download>
                <Download className="size-4" />
                Download Resume
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#projects">
                View Projects
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a href="#contact">
                <Mail className="size-4" />
                Contact Me
              </a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="glass rounded-3xl p-4 shadow-lift"
        >
          <DataFlowArt />
        </motion.div>
      </div>

      <div className="mx-auto mt-16 grid w-full max-w-6xl grid-cols-2 gap-4 px-5 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="card-surface p-5 text-center">
            <Counter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
            <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
