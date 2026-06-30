import { GraduationCap, Award } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Charotar University of Science and Technology, Gujarat",
    year: "May 2024",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Natubhai V. Patel College of Pure and Applied Sciences, Gujarat",
    year: "March 2022",
  },
];

const certs = ["AWS Cloud Quest: Cloud Practitioner", "MongoDB Basics (M001)"];

export function About() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="relative py-28 px-6 lg:px-10">
      <div ref={ref} className="reveal mx-auto max-w-7xl">
        <SectionLabel n="01" label="About" />

        <div className="mt-10 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight">
              Engineering the
              <br />
              <span className="text-gradient">Microsoft ecosystem</span> end to
              end.
            </h2>
            <div className="mt-8 space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a Full Stack Developer based in{" "}
                <span className="text-foreground">Ahmedabad, India</span>,
                specializing in designing, developing, and maintaining
                enterprise web applications using React, C#, .NET Web API,
                SharePoint Framework (SPFx), and Microsoft Azure.
              </p>
              <p>
                I build RESTful APIs, reusable frontend components, workflow
                automation with Azure Logic Apps and Power Platform, and
                cloud-based integrations — with a relentless focus on{" "}
                <span className="text-foreground">scalable, secure, and maintainable</span>{" "}
                applications.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-border bg-card/60 backdrop-blur p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg bg-gradient-brand text-white">
                  <GraduationCap size={18} />
                </div>
                <h3 className="font-display font-semibold text-lg">Education</h3>
              </div>
              <ul className="space-y-5">
                {education.map((e) => (
                  <li key={e.degree} className="border-l-2 border-[var(--violet)] pl-4">
                    <div className="font-semibold text-foreground">{e.degree}</div>
                    <div className="text-sm text-muted-foreground">{e.school}</div>
                    <div className="text-xs text-[var(--teal)] mt-1 font-medium">
                      {e.year}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card/60 backdrop-blur p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg bg-gradient-warm text-background">
                  <Award size={18} />
                </div>
                <h3 className="font-display font-semibold text-lg">
                  Certifications
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {certs.map((c) => (
                  <span
                    key={c}
                    className="px-3 py-1.5 rounded-full text-xs font-medium border border-border bg-background/50 hover:border-[var(--magenta)] transition"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-display text-sm font-bold text-gradient">{n}</span>
      <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
        {label}
      </span>
      <span className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
    </div>
  );
}
