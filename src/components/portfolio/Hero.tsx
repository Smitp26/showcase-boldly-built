import { useEffect, useState } from "react";
import { ArrowDown, Mail, Sparkles } from "lucide-react";

const roles = [
  "Full Stack Developer",
  "Azure Enthusiast",
  "SPFx Specialist",
  ".NET Engineer",
];

export function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % roles.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-24 pb-20 grain overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-[var(--electric)] opacity-30 blur-3xl animate-blob" />
        <div
          className="absolute top-1/2 -right-40 w-[560px] h-[560px] rounded-full bg-[var(--magenta)] opacity-25 blur-3xl animate-blob"
          style={{ animationDelay: "-6s" }}
        />
        <div
          className="absolute bottom-0 left-1/3 w-[420px] h-[420px] rounded-full bg-[var(--violet)] opacity-25 blur-3xl animate-blob"
          style={{ animationDelay: "-12s" }}
        />
        {/* grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl w-full px-6 lg:px-10 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/50 backdrop-blur text-xs text-muted-foreground mb-8">
            <Sparkles size={14} className="text-[var(--amber)]" />
            Available for new opportunities
          </div>

          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-8xl leading-[0.95] tracking-tight">
            Hi, I'm <span className="text-gradient">Smit</span>.<br />
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Building scalable enterprise applications with{" "}
            <span className="text-foreground font-medium">React</span>,{" "}
            <span className="text-foreground font-medium">.NET</span>, and{" "}
            <span className="text-foreground font-medium">Azure</span> — RESTful
            APIs, workflow automation, and cloud-based solutions for teams that
            ship.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-brand text-white font-semibold shadow-glow hover:scale-[1.03] transition-transform"
            >
              View My Work
              <ArrowDown
                size={18}
                className="group-hover:translate-y-0.5 transition-transform"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border bg-card/40 backdrop-blur hover:bg-card transition font-semibold"
            >
              <Mail size={18} />
              Get In Touch
            </a>
          </div>
        </div>

        {/* Side stat card */}
        <div className="lg:col-span-4 hidden lg:block">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-brand rounded-3xl blur-2xl opacity-40" />
            <div className="relative rounded-3xl border border-border bg-card/60 backdrop-blur-xl p-7 shadow-card">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Currently
              </div>
              <div className="mt-3 font-display text-2xl font-semibold leading-snug">
                Software Developer @{" "}
                <span className="text-gradient">Binary Republik</span>
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                Ahmedabad, India
              </div>

              <div className="mt-6 grid grid-cols-3 gap-2 text-center">
                {[
                  { n: "70%", l: "Faster ops" },
                  { n: "40%", l: "Less errors" },
                  { n: "100%", l: "Automated" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="rounded-xl bg-background/60 border border-border p-3"
                  >
                    <div className="text-gradient-warm font-display font-bold text-xl">
                      {s.n}
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
