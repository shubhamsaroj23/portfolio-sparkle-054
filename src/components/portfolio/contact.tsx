import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal, Section, SectionHeading } from "./primitives";
import { profile } from "@/lib/portfolio-data";

const channels = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Linkedin, label: "LinkedIn", value: "/in/shubham-saroj", href: profile.linkedin },
  { icon: Github, label: "GitHub", value: "@shubham-saroj", href: profile.github },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email client…");
  };

  return (
    <Section id="contact" className="bg-secondary/40">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something"
        description="Open to data engineering roles, collaborations, and technical conversations."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="grid gap-4">
            {channels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer noopener"
                className="card-surface flex items-center gap-4 p-5"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground">
                  <channel.icon className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-xs tracking-widest text-muted-foreground uppercase">
                    {channel.label}
                  </span>
                  <span className="block truncate">{channel.value}</span>
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} className="card-surface grid gap-4 p-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@company.com"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project or role…"
              />
            </div>
            <Button type="submit" size="lg" className="justify-self-start">
              <Send className="size-4" />
              Send Message
            </Button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-5 text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p>Built with ❤️ using React + Tailwind CSS</p>
        <div className="flex gap-1">
          <Button asChild variant="ghost" size="icon" aria-label="GitHub profile">
            <a href={profile.github} target="_blank" rel="noreferrer noopener">
              <Github className="size-4" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon" aria-label="LinkedIn profile">
            <a href={profile.linkedin} target="_blank" rel="noreferrer noopener">
              <Linkedin className="size-4" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon" aria-label="Email">
            <a href={`mailto:${profile.email}`}>
              <Mail className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
