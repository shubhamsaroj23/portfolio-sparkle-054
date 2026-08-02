import { useEffect, useState } from "react";
import { Download, Github, Linkedin, Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { navLinks, profile } from "@/lib/portfolio-data";

export function Header() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-soft" : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5"
      >
        <a href="#top" className="flex items-center gap-2" aria-label="Home">
          <span className="grid size-9 place-items-center rounded-xl bg-[image:var(--gradient-brand)] font-semibold text-primary-foreground">
            {profile.initials}
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:block">
            {profile.name}
          </span>
        </a>

        <ul className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
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
          <Button
            variant="ghost"
            size="icon"
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </Button>
          <Button asChild size="sm" className="ml-1 hidden sm:inline-flex">
            <a href={profile.resume} download>
              <Download className="size-4" />
              Resume
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="xl:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </nav>

      {open ? (
        <div className="glass border-t border-border xl:hidden">
          <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-1 px-5 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
