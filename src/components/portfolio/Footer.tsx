import { Github, Linkedin, Mail } from "lucide-react";

// TODO: replace placeholder URLs
const LINKEDIN_URL = "https://www.linkedin.com/in/your-linkedin";
const GITHUB_URL = "https://github.com/yourusername";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-10 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">
          <span className="font-display font-semibold text-foreground">
            Smit Parmar
          </span>{" "}
          © {year} · Designed & built with React
        </div>
        <div className="flex items-center gap-3">
          <a
            href={GITHUB_URL}
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full border border-border hover:border-foreground/40 hover:text-foreground text-muted-foreground transition"
          >
            <Github size={16} />
          </a>
          <a
            href={LINKEDIN_URL}
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full border border-border hover:border-foreground/40 hover:text-foreground text-muted-foreground transition"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:smit.parmar999@gmail.com"
            aria-label="Email"
            className="p-2 rounded-full border border-border hover:border-foreground/40 hover:text-foreground text-muted-foreground transition"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
