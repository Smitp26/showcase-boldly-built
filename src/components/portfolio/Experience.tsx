import { Briefcase } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { SectionLabel } from "./About";

const jobs = [
  {
    company: "Binary Republik",
    role: "Software Developer",
    location: "Ahmedabad, India",
    period: "Aug 2024 — Present",
    accent: "var(--magenta)",
    bullets: [
      "Designed and developed enterprise web applications using React, SPFx, C#, and .NET Web API for business process automation and collaboration.",
      "Built reusable SPFx components and integrated RESTful APIs and Graph APIs for modern, responsive applications on SharePoint Online.",
      "Built and maintained backend services using C#, .NET Web API, and SQL Server powering recruitment workflows, interview scheduling, candidate management, and reporting.",
      "Orchestrated Azure Logic Apps workflows, eliminating manual processes and streamlining recruitment operations by over 70%.",
      "Engineered automated Azure DevOps CI/CD pipelines for Logic App deployments, eliminating 100% of manual ARM template edits and reducing deployment lifecycle errors by 40% across Dev, QA, and Prod.",
      "Implemented AI-powered resume analysis and intelligent email campaign features, improving recruitment efficiency and candidate engagement.",
      "Developed a secure Model Context Protocol (MCP) server to expose recruitment data through authenticated APIs for AI-assisted workflows.",
      "Collaborated cross-functionally in an agile environment across debugging, testing, code reviews, deployment, and production issue resolution.",
    ],
    stats: [
      { n: "70%+", l: "Recruitment ops streamlined" },
      { n: "100%", l: "Manual ARM edits eliminated" },
      { n: "40%", l: "Deployment errors reduced" },
    ],
  },
  {
    company: "Rishabh Software",
    role: "Trainee",
    location: "Vadodara, India",
    period: "Jan 2024 — Jun 2024",
    accent: "var(--teal)",
    bullets: [
      "Gained hands-on training in software development practices and enterprise application workflows.",
    ],
    stats: [],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionLabel n="02" label="Experience" />
        <h2 className="mt-8 font-display text-4xl sm:text-5xl font-bold leading-tight max-w-3xl">
          Shipping{" "}
          <span className="text-gradient-warm">measurable impact</span> in
          production.
        </h2>

        <div className="mt-16 relative">
          <div className="absolute left-3 lg:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--electric)] via-[var(--magenta)] to-transparent" />

          <div className="space-y-14">
            {jobs.map((j, i) => (
              <JobCard key={j.company} job={j} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function JobCard({ job, index }: { job: (typeof jobs)[number]; index: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal pl-12 lg:pl-16 relative">
      <span
        className="absolute left-0 lg:left-1 top-2 w-7 h-7 rounded-full flex items-center justify-center shadow-glow"
        style={{
          background: `linear-gradient(135deg, ${job.accent}, var(--violet))`,
        }}
      >
        <Briefcase size={14} className="text-white" />
      </span>

      <div className="rounded-2xl border border-border bg-card/60 backdrop-blur p-7 hover:border-[color-mix(in_oklab,var(--magenta)_60%,transparent)] transition group">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <div>
            <h3 className="font-display text-2xl font-bold">
              {job.role}{" "}
              <span className="text-muted-foreground font-medium">@</span>{" "}
              <span style={{ color: job.accent }}>{job.company}</span>
            </h3>
            <div className="text-sm text-muted-foreground mt-1">
              {job.location}
            </div>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full border border-border bg-background/50">
            {job.period}
          </span>
        </div>

        <ul className="mt-6 space-y-3">
          {job.bullets.map((b, k) => (
            <li
              key={k}
              className="flex gap-3 text-muted-foreground leading-relaxed"
            >
              <span
                className="mt-2 flex-none w-1.5 h-1.5 rounded-full"
                style={{ background: job.accent }}
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {job.stats.length > 0 && (
          <div className="mt-7 grid sm:grid-cols-3 gap-3">
            {job.stats.map((s) => (
              <div
                key={s.l}
                className="rounded-xl p-4 border border-border bg-background/60"
              >
                <div className="font-display font-bold text-3xl text-gradient">
                  {s.n}
                </div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
