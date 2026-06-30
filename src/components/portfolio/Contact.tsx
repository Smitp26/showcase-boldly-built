import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { SectionLabel } from "./About";

const LINKEDIN_URL = "https://www.linkedin.com/in/smit-parmar7";
const GITHUB_URL = "https://github.com/Smitp26";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "smit.parmar999@gmail.com",
    href: "mailto:smit.parmar999@gmail.com",
    accent: "var(--magenta)",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 90547 17141",
    href: "tel:+919054717141",
    accent: "var(--electric)",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with me",
    href: LINKEDIN_URL,
    accent: "var(--violet)",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "View my code",
    href: GITHUB_URL,
    accent: "var(--teal)",
  },
];

export function Contact() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="contact" className="relative py-28 px-6 lg:px-10">
      <div ref={ref} className="reveal mx-auto max-w-7xl">
        <SectionLabel n="05" label="Contact" />

        <div className="mt-10 relative rounded-3xl overflow-hidden border border-border bg-card/40 backdrop-blur p-8 md:p-14 grain">
          <div className="absolute -top-32 -right-20 w-[420px] h-[420px] rounded-full bg-[var(--magenta)] opacity-30 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 w-[420px] h-[420px] rounded-full bg-[var(--electric)] opacity-30 blur-3xl" />

          <div className="relative">
            <h2 className="font-display text-4xl sm:text-6xl font-bold leading-[1.05] max-w-3xl">
              Let's build
              <br />
              <span className="text-gradient">something great</span>
              <br />
              together.
            </h2>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Open to full-time roles, freelance, and interesting collaborations
              across the React + .NET + Azure stack.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {channels.map((c) => (
                <ContactCard key={c.label} {...c} />
              ))}
            </div>

            <div className="mt-10 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={16} className="text-[var(--teal)]" />
              Based in Ahmedabad, Gujarat, India
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  accent,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
  accent: string;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      aria-label={label}
      className="group flex items-center gap-4 rounded-2xl border border-border bg-background/60 backdrop-blur p-5 hover:border-foreground/30 hover:-translate-y-0.5 transition"
    >
      <span
        className="p-3 rounded-xl text-white shadow-glow"
        style={{
          background: `linear-gradient(135deg, ${accent}, var(--violet))`,
        }}
      >
        <Icon size={20} />
      </span>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-widest text-muted-foreground">
          {label}
        </div>
        <div className="font-medium truncate group-hover:text-gradient">
          {value}
        </div>
      </div>
    </a>
  );
}
