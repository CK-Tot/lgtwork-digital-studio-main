import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal, SectionTitle } from "@/components/site/Reveal";
import { services } from "@/lib/agency-data";
import { ArrowUpRight, Code2, Layers, Palette, Search, ShieldCheck, ShoppingBag, Sparkles, Wand2, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — LGTWork Studio" },
      { name: "description", content: "Brand, design, web and product engineering services for ambitious teams." },
      { property: "og:title", content: "Services — LGTWork" },
      { property: "og:description", content: "From brand to ship — our services cover the full stack of digital craft." },
    ],
  }),
  component: ServicesPage,
});

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  Palette, Code2, Layers, ShoppingBag, Sparkles, Wand2, Search, ShieldCheck,
};

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="container-page">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Services</span>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
            From brand to ship — <span className="text-gradient">end to end</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            We offer a focused set of services that work together. Pick one, or hire us to take a project from a blank page to launch.
          </p>
        </Reveal>
      </section>

      <section className="container-page mt-20">
        <div className="grid gap-6">
          {services.map((s, i) => {
            const Icon = icons[s.icon] ?? Sparkles;
            return (
              <Reveal key={s.slug} delay={i * 0.03}>
                <article className="grid gap-6 rounded-3xl border border-border bg-[color:var(--surface)]/40 p-8 md:grid-cols-12 md:p-10">
                  <div className="md:col-span-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[image:var(--gradient-brand)]/20 ring-1 ring-inset ring-white/10">
                      <Icon className="h-6 w-6 text-[color:var(--electric)]" />
                    </div>
                    <h2 className="mt-5 text-2xl font-semibold md:text-3xl">{s.title}</h2>
                    <p className="mt-3 text-sm text-muted-foreground">{s.description}</p>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="text-xs uppercase tracking-wider text-muted-foreground">Includes</h3>
                    <ul className="mt-4 space-y-2 text-sm">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--electric)]"/>{f}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="text-xs uppercase tracking-wider text-muted-foreground">Process</h3>
                    <p className="mt-4 text-sm text-muted-foreground">{s.process}</p>
                    <Link to="/contact" className="mt-6 inline-flex items-center gap-1 text-sm text-[color:var(--electric)] hover:opacity-80">
                      Start a project <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="container-page mt-32">
        <div className="rounded-3xl border border-border bg-[color:var(--surface)]/60 p-10 text-center md:p-16">
          <SectionTitle align="center" eyebrow="Engagement" title="Two ways to work with us." description="Fixed-scope sprints for clear deliverables, or embedded retainers when you need ongoing partnership." />
          <div className="mt-10 grid gap-6 text-left md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-black/20 p-6">
              <h3 className="text-lg font-semibold">Sprints</h3>
              <p className="mt-2 text-sm text-muted-foreground">A 4–10 week engagement with clear scope, weekly demos, and a fixed budget.</p>
            </div>
            <div className="rounded-2xl border border-border bg-black/20 p-6">
              <h3 className="text-lg font-semibold">Retainer</h3>
              <p className="mt-2 text-sm text-muted-foreground">An embedded team that ships alongside you, monthly cadence, predictable cost.</p>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
