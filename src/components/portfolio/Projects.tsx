import { ArrowUpRight, Brain, GitMerge, Server, Workflow } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { SectionLabel } from "./About";

const projects = [
  {
    icon: Brain,
    title: "AI-Powered Recruitment Platform",
    blurb:
      "AI-driven resume analysis and intelligent email campaign features integrated into recruitment workflows, improving candidate engagement and recruiter efficiency.",
    tags: ["React", "C#", ".NET Web API", "AI/LLM", "SQL Server"],
    accent: "var(--magenta)",
  },
  {
    icon: Workflow,
    title: "Recruitment Workflow Automation",
    blurb:
      "Azure Logic Apps-based automation eliminating manual recruitment processes — cutting operational overhead by 70%+.",
    tags: ["Azure Logic Apps", "Power Automate", "SharePoint"],
    accent: "var(--electric)",
  },
  {
    icon: GitMerge,
    title: "CI/CD Pipeline Engineering",
    blurb:
      "Automated Azure DevOps pipelines for Logic App deployments across Dev/QA/Prod — eliminating manual ARM template edits and cutting deployment errors by 40%.",
    tags: ["Azure DevOps", "ARM Templates", "YAML Pipelines"],
    accent: "var(--teal)",
  },
  {
    icon: Server,
    title: "MCP Server for AI-Assisted Workflows",
    blurb:
      "Secure Model Context Protocol server exposing recruitment data via authenticated APIs to support AI-assisted tooling and agents.",
    tags: ["C#", ".NET Web API", "MCP", "Entra ID"],
    accent: "var(--violet)",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionLabel n="04" label="Selected Work" />
        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight max-w-2xl">
            Projects that moved
            <br />
            <span className="text-gradient-warm">real-world numbers.</span>
          </h2>
          <p className="text-muted-foreground max-w-md">
            Highlights drawn from production work at Binary Republik —
            automation, AI, and enterprise integrations.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const ref = useReveal<HTMLDivElement>();
  const Icon = project.icon;
  return (
    <article
      ref={ref}
      className="reveal group relative rounded-3xl border border-border bg-card/60 backdrop-blur p-7 lg:p-8 overflow-hidden hover:border-foreground/30 transition"
    >
      <div
        className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${project.accent}, transparent 60%)`,
          mask: "linear-gradient(#000, #000) content-box, linear-gradient(#000, #000)",
          WebkitMask:
            "linear-gradient(#000, #000) content-box, linear-gradient(#000, #000)",
          padding: "1px",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      <div className="flex items-start justify-between gap-4">
        <div
          className="p-3 rounded-2xl text-white"
          style={{
            background: `linear-gradient(135deg, ${project.accent}, var(--violet))`,
          }}
        >
          <Icon size={22} />
        </div>
        <ArrowUpRight
          size={22}
          className="text-muted-foreground group-hover:text-foreground group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
        />
      </div>

      <h3 className="mt-6 font-display text-2xl font-bold leading-snug">
        {project.title}
      </h3>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        {project.blurb}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span
            key={t}
            className="px-2.5 py-1 rounded-md text-[11px] font-mono border border-border bg-background/60"
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}
