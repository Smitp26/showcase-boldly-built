import { Code2, Database, Cloud, Layers, Boxes } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { SectionLabel } from "./About";

const groups = [
  {
    icon: Code2,
    title: "Languages",
    accent: "var(--electric)",
    items: ["C#", "TypeScript", "JavaScript"],
  },
  {
    icon: Layers,
    title: "Frameworks & Libraries",
    accent: "var(--magenta)",
    items: ["React", "SharePoint Framework (SPFx)", ".NET Web API"],
  },
  {
    icon: Database,
    title: "Databases",
    accent: "var(--teal)",
    items: ["SQL Server", "MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    icon: Boxes,
    title: "Microsoft Stack",
    accent: "var(--violet)",
    items: [
      "SharePoint Online",
      "Power Apps",
      "Power Automate",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    accent: "var(--amber)",
    items: [
      "Microsoft Azure",
      "Azure App Service",
      "Azure Logic Apps",
      "Azure DevOps",
      "Microsoft Entra ID",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionLabel n="03" label="Skills" />
        <h2 className="mt-8 font-display text-4xl sm:text-5xl font-bold leading-tight max-w-3xl">
          A toolkit built for the{" "}
          <span className="text-gradient">Microsoft & cloud</span> ecosystem.
        </h2>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g) => (
            <SkillCard key={g.title} group={g} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ group }: { group: (typeof groups)[number] }) {
  const ref = useReveal<HTMLDivElement>();
  const Icon = group.icon;
  return (
    <div
      ref={ref}
      className="reveal relative rounded-2xl border border-border bg-card/60 backdrop-blur p-6 overflow-hidden group hover:-translate-y-1 transition-all duration-300"
    >
      <div
        className="absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-30 blur-3xl group-hover:opacity-60 transition"
        style={{ background: group.accent }}
      />
      <div className="relative">
        <div
          className="inline-flex p-3 rounded-xl text-white"
          style={{
            background: `linear-gradient(135deg, ${group.accent}, var(--violet))`,
          }}
        >
          <Icon size={20} />
        </div>
        <h3 className="mt-5 font-display font-semibold text-xl">{group.title}</h3>

        <div className="mt-4 flex flex-wrap gap-2">
          {group.items.map((s) => (
            <span
              key={s}
              className="px-3 py-1.5 rounded-full text-xs font-medium border border-border bg-background/60 hover:border-foreground/40 transition"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
