import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal, SectionTitle } from "@/components/site/Reveal";
import { positions } from "@/lib/agency-data";
import { ArrowUpRight, Coffee, Globe2, GraduationCap, Heart, Plane, Sparkles } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — LGTWork Studio" },
      { name: "description", content: "Join a small, senior team building the next generation of the web." },
      { property: "og:title", content: "Careers at LGTWork" },
      { property: "og:description", content: "We're hiring designers, engineers and strategists." },
    ],
  }),
  component: CareersPage,
});

function CareersPage() {
  const benefits = [
    { icon: Globe2, title: "Remote-first", text: "Work from anywhere within ±5 GMT of our hubs." },
    { icon: Plane, title: "Annual studio retreat", text: "We meet in person twice a year — somewhere beautiful." },
    { icon: GraduationCap, title: "Learning budget", text: "$2,500 / year for books, courses, and conferences." },
    { icon: Heart, title: "Health & wellness", text: "Top-tier health, dental and vision wherever you live." },
    { icon: Coffee, title: "Real time off", text: "Unlimited PTO with a 4-week minimum we actually enforce." },
    { icon: Sparkles, title: "Senior-only team", text: "Work with kind, opinionated practitioners. No politics." },
  ];

  return (
    <SiteLayout>
      <section className="container-page">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Careers</span>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
            Build the next generation of the web with us.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            We're a small, senior team that takes craft seriously. If that sounds like you, we'd love to hear from you.
          </p>
        </Reveal>
      </section>

      <section className="container-page mt-24">
        <SectionTitle eyebrow="Culture" title="A team built on trust." description="We hire experienced practitioners and trust them to do the best work of their careers. No layers, no busywork, no politics." />
      </section>

      <section className="container-page mt-12">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.04}>
              <div className="h-full rounded-2xl border border-border bg-[color:var(--surface)]/40 p-6">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[image:var(--gradient-brand)]/20 ring-1 ring-inset ring-white/10">
                  <b.icon className="h-5 w-5 text-[color:var(--electric)]"/>
                </span>
                <h3 className="mt-4 text-base font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page mt-32">
        <SectionTitle eyebrow="Open roles" title="Currently hiring." />
        <div className="mt-12 divide-y divide-border rounded-2xl border border-border bg-[color:var(--surface)]/40">
          {positions.map((p) => (
            <div key={p.title} className="flex flex-col items-start justify-between gap-4 p-6 md:flex-row md:items-center">
              <div>
                <p className="text-xs text-[color:var(--electric)]">{p.department}</p>
                <h3 className="mt-1 text-xl font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.location} · {p.type}</p>
              </div>
              <Link to="/contact" className="btn-ghost">Apply <ArrowUpRight className="h-4 w-4"/></Link>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page mt-32">
        <div className="grid gap-6 md:grid-cols-3">
          {["https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=800&q=80"].map((src, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="overflow-hidden rounded-2xl border border-border">
                <img src={src} alt="Studio life" className="aspect-[4/5] w-full object-cover grayscale transition-all duration-700 hover:grayscale-0 hover:scale-105" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
